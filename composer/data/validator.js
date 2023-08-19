/**
 * A class to handle standard client-side input validation
 * 
 * All methods either return an error message or 'OK'
 */
class Validator{

    studyStore;
    formStore;
    
    //Disallow characters that might cause XML problems
    validXML(errors, label, value, errorKey){
        if(/[~`!#%\\"<>]/g.test(value)){
            let error = label + " may not contain any of the following characters: ~`!#%\\\"<>";
            errors[errorKey] = error;
            return error;
        } 
        return 'OK';
    }

    validDBName(errors, label, value){
        if(/[^0-9a-z_]/g.test(value)){
            let error = label + " may only contain lower-case letters, numbers, and underscores.";
            errors.push(error);
        }
        return 'OK';
    }

    cleanForDBName(name){
      let dbName = name.toLowerCase().replace(' ', "_");
      dbName = dbName.replace(/[^0-9a-z_]/g, "");
      return dbName;
    }

  validDBFormName(errors, label, value, errorKey){
    if(/[^0-9a-z\.]/g.test(value) || /\.\./.test(value)){
      let error = label + " may only contain lower-case letters, numbers, and periods.";
      this.addError(errors, error, errorKey);
      return error;
    }
    return 'OK';
  }

  cleanForDBFormName(name){
    let dbName = name.trim().toLowerCase().replace(/\s\s+|\s/g, ".");
    dbName = dbName.replace(/[^0-9a-z\.]/g, "");
    dbName = dbName.replace(/\.\./g, "");
    return dbName;
  }

  validDBSectionName(errors, label, value, errorKey){
    if(/[^0-9a-zA-Z\_]/g.test(value) || /\.\./.test(value)){
      let error = label + " may only contain letters, numbers, and underscores.";
      errors[errorKey] = error;
      return error
    }
    return 'OK';
  }

  cleanForDBSectionName(name){
    let dbName = name.trim().toLowerCase().replace(/\s\s+|\s/g, "_");
    dbName = dbName.replace(/[^0-9a-z\_]/g, "");
    dbName = dbName.replace(/\.\./g, "");
    dbName = dbName.split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join('_');
    return dbName;
  }

    validRoles(errors, label, roles){
        let validRoles = this.studyStore.studyData.getStudyRoleCodes();
        validRoles = validRoles.replace("A", "");
        validRoles = validRoles.replace("@", "");
        let invalidRoles = '';
        for(let i = 0; i < roles.length; i++){
            let role = roles[i];
            if(validRoles.indexOf(role) === -1){
                invalidRoles += role;
            }
        }
        if(invalidRoles.length > 0){
            let error = label + " contains invalid role codes '" + invalidRoles + "'.  Valid role codes for this study are '" + validRoles + "'";
            errors.push(error);
            return error;
        }
        return 'OK';
    }

    notEmpty(errors, label, value, errorKey){
        if(value === undefined || value === null || value.length === 0){
            let error = label + " is required."
            this.addError(errors, error, errorKey);
            return error;
        }
        return 'OK';
    }

    isInteger(errors, fieldName, value, errorKey){
      if(/[^0-9]/g.test(value)){
        let error = fieldName + " must be an integer value.";
        errors[errorKey] = error;;
        return error;
      }
      return 'OK';
    }

    isUnique(errors, type, label, value, id, optionalParent){
        switch(type){
            case "fieldName":
            case "copyFieldName":
            case "radioName":
                const fields = this.formStore.findNodesOfType('field');
                for(let field of fields){
                    if (field.id === id) {
                        /** Do not compare field to itself. */
                        continue;
                    }

                    if(field.fieldName === value
                        && (type != "radioName" || field.fieldType !== 'radio')){ // radio names can be duplicated amongst radios
                        let error = label + " must be unique.  There is already another field on this form named '" + value + "'";
                        this.addError(errors, error, "fieldName");
                        return error;
                    }
                }
                break;
            case "sectionName":
                const sections = this.formStore.findNodesOfType('section');
                for(let section of sections){
                    if(section.sectionName.toLowerCase() === value.toLowerCase() && id !== section.id){
                        let error = label + " must be unique.  There is already another section on this form named '" + value + "'";
                        this.addError(errors, error, type);
                        return error;
                    }
                }
                break;
            case "formName":
                const group = optionalParent;
                for (let form of group.formRefs) {
                    if (form.id === id) {
                      /** Do not compare to self. */
                      continue;
                    }
                    if(form.name === value){
                      let error = label + " must be unique.  There is already another form in this group named '" + value + "'.";
                      this.addError(errors, error, type);
                      return error;
                    }
                }
                break;
            case "groupName":
                const view = this.studyStore.findNode('view', this.studyStore.currentView.id);
                const groups = this.studyStore.findDescendantsOf(view, 'group');
                for(let group of groups){
                    if(group.name === value){
                        let error = label + " must be unique.  There is already group in this study named '" + value + "'";
                        this.addError(errors, error, type);
                        return error;
                    }
                }
                break;
            case "fieldOptionsValue":
                let error = 'OK';
                optionalParent.map((fieldOption, i) => {
                    if(fieldOption.value === value && i !== id){
                        error = label + " must be unique.  There is already another option on this form named '" + value + "'";
                        this.addError(errors, error, type + "." + i);
                    }
                });
                return error;
                break;
            default:
                return 'Unrecognized constraint type ' + type;
        }
        return 'OK';
    }

    addError(errors, error, type) {
        if (Array.isArray(errors)) {
            errors.push(error);
        }
        else {
            errors[type] = error;
        }
    }

    getNewTab(currentTab, errorMapBasic, errorMapAdvanced) {
        let newTab = currentTab;
        let hasErrorBasic = Object.keys(errorMapBasic).length > 0;
        let hasErrorAdvanced = Object.keys(errorMapAdvanced).length > 0;
        if (currentTab === "basic" && !hasErrorBasic && hasErrorAdvanced) newTab = "advanced";
        else if (currentTab === "advanced" && !hasErrorAdvanced && hasErrorBasic) newTab = "basic"
        return newTab;
    }
}

export default new Validator();
