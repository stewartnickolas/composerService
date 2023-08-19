import {observable, computed} from 'mobx'
import Actions from './actions.js'
import Validator from './validator.js'
import Generator from './generator.js'
import StoreUtils from './storeUtils.js'
import {EditorType} from '../interface/propertiesEditor/editorTypes.js'

export default class StudyStore extends StoreUtils{

    @observable studyData;

    @observable currentForm;
    @observable currentGroup;
    @observable currentView;

    //The following are used to force updates of the relevant components.
    //There is probably a better way to handle this... but it works for now
    @observable subMenuKey;
    @observable sideMenuKey;
    @observable formKey;

    @observable showPropertiesEditor;
    @observable showSyncNote;
    @observable syncNote;
    @observable propertiesEditorType;
    @observable propertiesEditorData;
    @observable refreshId;

    @computed get readonlyMode(){
        //read-only if the status is currently 'published', or if viewingHistory is defined
        return _viewOnlyMode || this.currentForm.formStatus === 'published' || this.currentForm.formStatus === 'live' || !!this.currentForm.viewingHistory;
    };
    @computed get readonlyModeAndViewingHistory(){
      return (_viewOnlyMode || this.currentForm.formStatus === 'published' || this.currentForm.formStatus === 'live') && this.currentForm.viewingHistory;
    };

    constructor(){
        super();
        console.log("Called study store constructor");

        this.studyData = new StudyData();

        Actions.studyStore = this;
        Validator.studyStore = this;
        Generator.studyStore = this;

        this._type = "studyStore";
        this.currentForm = new FormRef();
        this.currentGroup = new GroupData();
        this.currentView = new ViewData();
        //this.propertiesEditorType = EditorType.FORM_PROPS;
        this.showPropertiesEditor = false;
    }

    restoreFromJson(obj){
        let sd = JSON.parse(obj, StudyData.reviver);
        this.studyData = sd;
        this.setRoot(sd);
        this.currentView = sd.views[0];
        this.currentGroup = this.currentView.groups[0];
        if(this.currentGroup.formRefs.length > 0){
          this.currentForm = this.currentGroup.formRefs[0];
        } else {
          this.currentForm = new FormRef();
        }
        console.log('studyStore restoreFromJson called.  CurrentForm: ' + this.currentForm.id);
    }

    refresh(obj){
      let curView = this.currentView.id;
      let curGroup = this.currentGroup.id;
      let curForm = this.currentForm.id;
      let sd = JSON.parse(obj, StudyData.reviver);
      this.studyData = sd;
      this.setRoot(sd);
      this.currentView = this.findNode("view", curView);
      this.currentGroup = this.findNode("group", curGroup);
      if(curForm !== 'placeholder'){
        this.currentForm = this.findNode("formRef", curForm);
      }
      this.refreshId = Math.random();
      console.log('studyStore refresh called.  CurrentForm: ' + this.currentForm.id);
    }
}

export class StudyData{
    _type;
    @observable id;
    @observable name;
    @observable views;

    @observable roles;
    @observable studyAttributes;

    @observable prefs;

    //@TODO: store study state -- i.e. 'locked', 'testing', 'live'.  To limit the types of interaction possible
    //i.e. form names / category names / field names should not be able to change when a study is live,
    //and forms should not be allowed to be moved to new groups
    @observable studyState;

    constructor(){
        this._type = "study";
        this.views = [];
        this.roles = [];
        this.studyAttributes = [];
    }

    static revive(obj){
      let newObj = new StudyData();
      Object.assign(newObj, obj);
      newObj.views = obj.views;
      newObj.roles = obj.roles;
      newObj.studyAttributes = obj.studyAttributes;
      return newObj;
    }

    static reviver(k, v){
        if(v instanceof Object){
            if(v._type === 'study'){
                return StudyData.revive(v);
            }
            if(v._type === 'view'){
                return ViewData.revive(v);
            }
            if(v._type === 'group'){
                return GroupData.revive(v);
            }
            if(v._type === 'formRef'){
                return FormRef.revive(v);
            }
            if(v._type === 'role'){
                return Role.revive(v);
            }
            if(v._type === 'studyAttribute'){
                return StudyAttribute.revive(v);
            }
        }
        return v;
    }

    getChildren(){
        return this.views;
    }

    getStudyRoleCodes(){
        let codes = '';
        for(let role of this.roles){
            codes += role.code;
        }
        return codes;
    }
}

export class ViewData{

    _type;
    @observable id;
    @observable groups;

    constructor(){
        this._type = "view";
        this.groups = [];
    }

    getChildren(){
        return this.groups;
    }

    static revive(obj){
      let newObj = new ViewData();
      Object.assign(newObj, obj);
      newObj.groups = obj.groups;
      return newObj;
    }
}

export class GroupData{

    _type;
    @observable id;
    @observable name;
    @observable label;
    @observable onDemand;

    @observable canEdit;
    @observable canView;

    @observable formRefs;

    constructor(){
        this._type = "group";
        this.name = '';
        this.label = '';
        this.onDemand = '';
        this.formRefs = [];
    }

    getChildren(){
        return this.formRefs;
    }

    static revive(obj){
      let newObj = new GroupData();
      Object.assign(newObj, obj);
      newObj.formRefs = obj.formRefs;
      return newObj;
    }
}

export class FormRef{

    _type;
    @observable id;
    @observable name;//duplicated data for easy lookup
    @observable label;//duplicated data for easy lookup
    @observable formType;//single, shared, or provided
    @observable refId;//The id of the FormDataDoc object
    @observable isOriginal;//If this is a shared form, is it the first instance?
    @observable onDemand;
    @observable includeInFormLibrary;

    @observable formStatus;//current state of the form (published, in review, editable)
    @observable viewingHistory;

    constructor(){
        this._type = "formRef";
        this.id = "placeholder";
        this.name= '';
        this.label = '';
        this.formType = 'single';
        this.lastPublished = '';
        this.lastPublishedBy = '';
        this.lastUpdated = '';
        this.lastUpdateBy = ''
        this.formStatus = 'in-work';
        this.includeInFormLibrary = false;
    }

    static revive(obj){
      let newObj = new FormRef();
      Object.assign(newObj, obj);
      return newObj;
    }

    getChildren(){
        return [];//leaf
    }

}

export class Role{
    @observable id;
    @observable code;
    @observable name;
    @observable shortName;
    @observable edits;
    @observable assignToAllSites;
    @observable canViewComposerForms;
    @observable canBuildComposerForms;
    @observable canAddFeedback;
    @observable canAnswerFeedback;
    @observable canApproveFeedback;
    @observable canVerifyFeedback;
    @observable canTranslate;

    _type;

    constructor(){
        this._type = 'role'
    }

    static revive(obj){
        let newObj = new Role();
        Object.assign(newObj, obj);
        return newObj;
    }
}

export class StudyAttribute{
    @observable id;
    @observable name;
    @observable value;

    _type;

    constructor(){
        this._type = 'studyAttribute'
    }

    static revive(obj){
        let newObj = new StudyAttribute();
        Object.assign(newObj, obj);
        return newObj;
    }
}
export const getStudyAttribute = (attributeName, attributes, orDefault) => {
    let attr = attributes.filter(x => x.name == attributeName)[0]
    let val = attr ? attr.value : orDefault
    return val;
}

class FormMetaData{
    @observable state;
    @observable lastUpdated;
    @observable lastUpdatedBy;
    @observable lastPublished;
    @observable lastPublishedBy;

    constructor(){
      this.state = 'building'
      this.lastUpdated = '';
      this.lastUpdatedBy = '';
      this.lastPublished = '';
      this.lastPublishedBy = '';
    }
}
