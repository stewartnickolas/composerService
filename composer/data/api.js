import Actions from './actions.js'

function isCyclic (obj) {
  var seenObjects = [];

  function detect (obj) {
    console.log('looking for cycles')
    if (obj && typeof obj === 'object') {
      if (seenObjects.indexOf(obj) !== -1) {
        return true;
      }
      seenObjects.push(obj);
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && detect(obj[key])) {
          console.log(obj, 'cycle at ' + key);
          return true;
        }
      }
    }
    return false;
  }

  return detect(obj);
}


export default class API {

    static loadStudy(studyStore, formStore, studyId, bSkipFormRefresh, callback, fromWs){
      if(!bSkipFormRefresh){
        formStore.formIsLoading = true;
      }
      let onSuccess = function(data){
         if(!bSkipFormRefresh) {
           console.log("successful fetch of study data, refreshing");
           studyStore.restoreFromJson(JSON.stringify(data));
           console.log("STUDY STORE ID: " + studyStore.studyData.id);
           console.log("Actions Study Store: " + Actions.studyStore.studyData.id);
           let view = document.querySelector("#composerBuildModeSelection") ? document.querySelector("#composerBuildModeSelection").innerHTML : 'patient';
           const lastView = sessionStorage.getItem("edit_mode_last_view" + studyId);
           const lastGroup = sessionStorage.getItem("edit_mode_last_group" + studyId);
           const lastForm = sessionStorage.getItem("edit_mode_last_form" + studyId);
           console.log("last study location: " + lastView + " " + lastGroup + " " + lastForm);
           if (lastView && lastView === view && lastGroup && lastForm) {
             Actions.navigateToView(lastView, lastGroup, lastForm);
           } else {
             Actions.navigateToView(view);
           }

        } else {
          console.log("successful fetch of study data, refreshing -- skipping form");
          studyStore.refresh(JSON.stringify(data));
        }
        if(callback) callback();
      }
      let fromWsData = fromWs ? {fromWs: 'true'} : {};
      API.doGet('loadStudy/' + studyId, fromWsData, onSuccess);
    }

    static loadForm(studyStore, formStore, formRef, callback, bHideLoading, fromWs){
      const formId = formRef.refId;
      if(formId === 'placeholder'){
        formStore.formIsLoading = false;
        return;
      };
      formStore.formIsLoading = true;
      if(bHideLoading){
        formStore.formIsLoading = false;
      }
      let currentFormName = null;
      if(studyStore.currentGroup && formRef.name) {
        currentFormName = studyStore.currentGroup.name + ".form.name." + formRef.name;
      }
      let fromWsData = fromWs ? {fromWs: 'true', formName: currentFormName} : {formName: currentFormName};
      API.doGet('loadForm/' + formId, fromWsData, 
        (data) => {
          formStore.restoreFromJson(JSON.stringify(data));
          console.log("restored form from json" + formId);
          formStore.formIsLoading = false;
          if(callback) callback();
        }, () => {
          formStore.formIsLoading = false;
        });
    }

    /** Load the Publish history of this form */
    static loadHistory(studyStore, formStore, revision){
      API.doGet("formHistory", 
        {snapshotId: revision.snapshotId}, 
        (data) => {
        studyStore.currentForm.viewingHistory = revision;
        formStore.restoreFromJson(JSON.stringify(data));
        console.log("loaded form history");
        formStore.refreshId = Math.random();//force a refresh
      });
    }

    static revertFormToRevision(studyStore, formStore, revision){
      API.doPost("revertFormToRevision/" + studyStore.studyData.id + "/" 
                  + studyStore.currentForm.id + "/"
                  + "?snapshotId=" + revision, 
        {}, 
        (data) => {
        studyStore.currentForm.viewingHistory = false;
        studyStore.currentForm.formStatus = "in-work"
        formStore.restoreFromJson(JSON.stringify(data));
        formStore.refreshId = Math.random();//force a refresh
      });
    }

    /** Get a list of predefined forms available for this study */
    static getPredefinedForms(view, callback){
      API.doGet("predefinedForms", {view: view}, callback);
    }

    /** Load TLD info for Calculation and Constraint error checking */
    static loadTLD(tldStore){
      API.doGet("tldInfo", {} , (data) => {
        tldStore.restoreFromJson(JSON.stringify(data));
      });
    }

    /** Load translations for use with Labels */
    static loadI18n(i18nStore){
      $.ajax({
        url: ("/vision/composer/translations"),
        type: "GET",
        headers: {"X-CSRF-TOKEN": $('meta[name="_csrf"]').attr('content')},
        success: function(data){
          i18nStore.restoreFromJson(JSON.stringify(data));
        },
        error: function(){
          alert("Unable to load translation data.");
        }
      })
    }

    static addForm(formData, path, templateId, firstInstance, callback){
      let toSend = {};
      toSend.data = formData;
      toSend.path = path;
      toSend.templateId = templateId;
      toSend.firstInstance = firstInstance;
      toSend.tabId = sessionStorage.tabId;
      console.log(JSON.stringify(toSend));
      API.doPost("addForm", toSend, callback);
    }

    /**
     * Import a form from a standard JSON file
     */
    static importFormFromJSON(file, path, formType, callback){
      let fileData = new FormData();//Built-in JS object for file uploads
      fileData.append('file', file);
      fileData.append('path', path);
      fileData.append('formType', formType);
      console.log("Importing form type: " + formType);
      $.ajax({
        url: "/vision/composer/import",
        type: "POST",
        contentType: false,
        headers: {"X-CSRF-TOKEN": $('meta[name="_csrf"]').attr('content'),
                  "tabId" : sessionStorage.tabId},
        data: fileData,
        processData: false,
        success: function (data) {
          if(callback) callback(data);
        },
        error: function (xhr, status, error) {
          if(xhr.status === 401){
            $("#headerForm").submit();//Kick back to logon page -- session is invalid
          }
          console.log("error requesting ajax: " + xhr.status + ":" + error);
        }
      });
    }

    /** Download a form in JSON format */
    static exportFormAsJSON(formId){
      API.doGet("export", {formId})
    }

    /** Handle user uploaded dictionary files to support an advanced setting for combo fields */
    static importDictionaryFile(file, formData, callback){
      let fileData = new FormData();//Built-in JS object for file uploads
      fileData.append('file', file);
      let formDataStr = JSON.stringify(formData, function( key, value) {
        if( key == 'parent') { return '';}
        else {return value;}
      });
      fileData.append('form', new Blob([formDataStr], {
        type: "application/json"
      }));
      $.ajax({
        url: "/vision/composer/importComboDictionary",
        type: "POST",
        contentType: false,
        headers: {"X-CSRF-TOKEN": $('meta[name="_csrf"]').attr('content'),
                  "tabId" : sessionStorage.tabId},
        data: fileData,
        processData: false,
        success: function (data) {
          if(callback) callback("Upload complete.");
        },
        error: function (xhr, status, error) {
          if(callback) callback("Upload failed.");
        }
      });
    }

    static addGroup(groupData, path, callback){
      let toSend = {};
      toSend.data = groupData;
      toSend.path = path;
      toSend.tabId = sessionStorage.tabId;
      API.doPost("addGroup", toSend, callback);
      console.log(JSON.stringify(toSend));
    }


    static saveForm(formData, formRefId, callback){
      console.log("called save form");
      //console.log("Cyclic: " +isCyclic(formData));
      API.doPost("saveForm?formRefId=" + formRefId, formData, callback);
    }

    static saveStudy(studyData, callback){
      console.log("called save study");
      API.doPost("saveStudy", studyData, callback);
    }

    /**
     * Update the form state and refresh -- saves a snapshot of the current form state
     * on the server
     */
    static changeFormState(state, studyData, formData, formRef){
      let data = {
        state,
        studyData,
        formData,
        refId: formRef.id
      }
      console.log('changing form state for refId ' + data.refId);
      API.doPost("changeFormState", data, () => {
        Actions.refreshView({type: 'self', addedFormId: formRef.id});
      });
    }

    /**
     * Get a list of all fields for a given view.
     * Useful for cross-form edit checks, but expensive. Use with caution.
     * @param {*} studyId 
     * @param {*} viewId 
     * @param {bool} skipCategory -- should the category name be included in the results
     * @param {*} callback 
     */
    static getFieldListForView(studyId, viewId, skipCategory, includeFieldIndex, callback){
      console.log("getting list of fields for view " + viewId);
      let params = {
        studyId,
        viewId,
        skipCategory: skipCategory === undefined ? false : skipCategory,
        includeFieldIndex: includeFieldIndex === undefined ? true : includeFieldIndex
      }
      API.doGet("listFields", params, callback)
    }

  /**
   * Get a list of all fields for a given form.
   */
  static getFieldListForForm(studyId, viewId, formRefId, callback){
    console.log("getting list of fields for view '" + viewId + "' and form '" + formRefId + "'");
    let params = {
      studyId,
      viewId,
      formRefId
    }
    API.doGet("listFieldsForForm", params, callback)
  }

  /**
   * Get form data without loading as current form
     * @param {*} formId 
     * @param {*} callback 
     */
    static getFormDataDoc(formId, callback){
      console.log("called API: " + formId);
      this.doGet("loadForm/" + formId, {}, callback);
    }

    /**
     * Get a list of available modules for this study
     * @param {*} successCallback 
     */
    static getAvailableModules(successCallback){
      this.doGet("availableModules", "", successCallback);
    }

    static getFormLibraryOptions(successCallback){
      this.doGet("formLibraryOptions", "", successCallback);
    }

    /**
     * Generic method for handling simple GET requests
     * @param {*} endPoint 
     * @param {*} params 
     * @param {*} callback 
     */
    static doGet(endPoint, params, successCallback, failCallback){
      const csrfToken = !document.querySelector('meta[name="_csrf"]') ? '' : document.querySelector('meta[name="_csrf"]').getAttribute('content'); 
      fetch("/vision/composer/" + endPoint + "?" + new URLSearchParams(params),
        {
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {"X-CSRF-TOKEN": csrfToken,
                    "tabId" : sessionStorage.tabId}
        })
      .then(response => {
          if(!response.ok || response.status === 302 || response.status === 403){
            console.log("API ERROR: " + response.status);
            API.logout();
            return;
          }
          return response.json();
        })
      .then(json => {
          if(!params.fromWs){//if the request was initiated from a ws update, do not refresh the timeout value
            _lastFetchTime = Date.now();
          }
          if(successCallback){
            successCallback(json)
          }
        })
      .catch(error => {
        if(error)
        console.log("API Error: " + error)
        if(failCallback){
          failCallback();
        }
      });
    }

    /**
     * Generic method for handling simple POST requests
     * @param {} endPoint 
     * @param {*} data 
     * @param {*} callback 
     */
    static doPost(endPoint, data, successCallback, failCallback){
        const body = JSON.stringify(data, function( key, value) {
          if( key == 'parent') { return '';}
          else {return value;}
        });
        const csrfToken = !document.querySelector('meta[name="_csrf"]') ? '' : document.querySelector('meta[name="_csrf"]').getAttribute('content');
        fetch('/vision/composer/' + endPoint,
          {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {"X-CSRF-TOKEN": csrfToken,
                      "Content-Type": "application/json; charset=utf-8",
                      "tabId" : sessionStorage.tabId},
            body: body
          })
        .then(response => {
            if(!response.ok || response.status === 302 || response.status === 403){
              console.log("API ERROR: " + response.status);
              API.logout();
              return;
            }
            return response.json()
          })
        .then((json) => {
            _lastFetchTime = Date.now();
             if(successCallback){
              successCallback(json);
            }
          })
        .catch(error => {
          console.log("API Error: " + error)
          if(failCallback){
            failCallback();
          }
        });
    }

    static logout(){
      console.log("Trying to log out...");
      window.location.href ="/vision/?sessionTimeout=true";
    }

    /**
     * Hydrates the 'authStore' with data about the currently authenticated
     * user. This api is handled by UserController.java and responds with
     * a subset of data from the User.java object that represents the currently
     * authenticated user
     *
     * @param {*} authStore the mobx store that contains data about the currently
     * authenticated user (e.g., the user that is logged into Vision currently). See
     * authStore.js for more information
     */
    static loadAuth(authStore) {
      API.doGet("user", {}, (user) => {
        authStore.setUser(user);
      });
    }
}
