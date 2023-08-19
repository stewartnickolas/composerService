import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import { observer, inject } from "mobx-react";
import Actions from "../data/actions.js";
import Validator from "../data/validator.js";
import Info from "../interface/info.jsx";
import Label from "../interface/components/label.jsx";
import FieldFinder from "../interface/components/fieldFinder.jsx";
import RolesField from "../interface/components/rolesField.jsx";
import {
  conditionallyIncludeInitialState,
  getConditionallyIncludeDataFromObject,
  ConditionallyIncludeSection,
} from "./shared/conditionallyInclude.jsx";
import { Resizable } from "re-resizable";
import Typography from "@material-ui/core/Typography";
import ResizeDialogTitle from '../interface/ResizeDialogTitle.jsx';
import FieldOptionsList from "../interface/components/FieldOptionsList.jsx";
import AppDisplayFormGroup from '../interface/components/AppDisplayFormGroup.jsx';
import {getStudyAttribute} from "../data/studyStore.js";
import {InputAdornment} from "@material-ui/core";
import DialogContentBasicTabScriptlet from "../interface/components/DialogContentBasicTabScriptlet.jsx";

export const LABEL_CONTENT_SOURCE = {
  TEXT: "text",
  FIELD: "field",
  IMAGE: "image",
};

@inject("formStore", "studyStore")
@observer
export default class EditField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: "",
      fieldLabel: "",
      fieldType: "",
      fieldPlaceholder: "",
      fieldOptions: [],
      fieldOptionsClass: "",
      fieldHasInitialValue: false,
      fieldInitialValue: "",
      optionsFromOwnerField: "",
      labelClass: "",
      labelColor: "",
      readOnly: false,
      requireChangeReason: true,
      changesState: true,
      showChanges: true,
      cDash: "",
      blindedTo: "",
      canEdit: "",
      fieldSize: "",
      usingDimensions: "",
      absoluteOrRelativeSize: "",
      usingWidth: false,
      fieldWidth: "",
      fieldHeight: "",
      maxLength: "",
      usingVisibility: false,
      usingLearn: false,
      suppressFromExport: false,
      addInfoIcon: false,
      addInfoIconText: "",
      usingOptionsFromUserRole: false,
      showBackground: false,
      controlDisplayField: "",
      controlDisplayShowHide: "",
      controlDisplayType: "",
      comboFileName: "",
      imgSrc: this.props.imgSrc,
      imgFile: null,
      imgHeight: this.props.imgHeight,
      imgWidth: this.props.imgHeight,
      //@todo: At some point transition every field property into an attribute map,
      //rather than continuing to perpetuate this absurdly bloated and inflexible data structure
      attributes: {
        fieldLabelContentSource: "text",
        fieldLabelContentField: "",
      },

      errorMap: {},
      startFieldName: this.props.fieldName,
      useAsDictionary: !!this.props.comboFileName,
      useOptionsFromOwner: !!this.props.optionsFromOwnerField,
      fileUploadStatus: "",
    };
    Object.assign(this.state, {
      currentTab: "basic",
      ...conditionallyIncludeInitialState,
      ...this.props,
      attributes: Object.assign({}, this.props.attributes),
    });

    Object.assign(this.state, {
      imgHeight: this.props.imgHeight > 0 ? this.props.imgHeight : 200,
      imgWidth: this.props.imgWidth > 0 ? this.props.imgWidth : 200,
    });

    // backwards compatibility for fields created before attribute creation
    if (null == this.props.requireChangeReason) {
      Object.assign(this.state, {
        requireChangeReason: true,
      });
    }

    // backwards compatibility for fields created before attribute creation
    if (null == this.props.changesState) {
      Object.assign(this.state, {
        changesState: true,
      });
    }

    // backwards compatibility for fields created before attribute creation
    if (null == this.props.showChanges) {
      Object.assign(this.state, {
        showChanges: true,
      });
    }

    this.handleBlankOrNot = this.handleBlankOrNot.bind(this);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
    this.updateOption = this.updateOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.moveOption = this.moveOption.bind(this);
    this.handleImportDictionary = this.handleImportDictionary.bind(this);
    this.handleChangeUseAsDictionary = this.handleChangeUseAsDictionary.bind(
      this
    );
    this.handleChangeUseOptionsFromOwner = this.handleChangeUseOptionsFromOwner.bind(
      this
    );
    this.handleChangeCanDo = this.handleChangeCanDo.bind(this);
    this.handleDBNameChange = this.handleDBNameChange.bind(this);
    this.validateCopyFieldName = this.validateCopyFieldName.bind(this);
    this.handleChangeAttributeEvent = this.handleChangeAttributeEvent.bind(this);
    this.handleChangeAttributeEventChecked = this.handleChangeAttributeEventChecked.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleImgResize = this.handleImgResize.bind(this);    
  }

  addOption() {
    if (this.props.studyStore.readonlyMode) return;
    this.setState({
      fieldOptions: [...this.state.fieldOptions, { label: "", value: "" }],
    });
  }

  updateOption(index, newOption) {
    if (this.props.studyStore.readonlyMode) return;
    //Object.assign(this.state.fieldOptions[index], newOption);
    let optsCpy = this.state.fieldOptions.slice();
    let prevOpt = optsCpy[index];
    optsCpy[index] = newOption;
    this.setState({
      fieldOptions: optsCpy,
    });
    if (prevOpt.value == this.state.fieldInitialValue) {
      this.setState({
        fieldInitialValue: newOption.value,
      });
    }
  }

  removeOption(index) {
    if (this.props.studyStore.readonlyMode) return;
    let optsCpy = this.state.fieldOptions.slice();
    let prevOpt = optsCpy[index];
    optsCpy.splice(index, 1);
    this.setState({
      fieldOptions: optsCpy,
    });
    if (prevOpt.value == this.state.fieldInitialValue) {
      this.setState({
        fieldHasInitialValue: false,
        fieldInitialValue: '',
      });
    }
  }

  /**
   * Moves an option from 'prevIndex' to 'newIndex' in the
   * fieldOptions array. Used to implement drag-n-drop.
   * See FieldOptionsList.jsx & FieldOptionRow.jsx for more
   * @param {*} prevIndex index where option currently resides
   * @param {*} newIndex index where option is moving to
   */
  moveOption(prevIndex, newIndex) {        
    const optionsCpy = this.state.fieldOptions.slice(); // Make deep copy of fieldOptions
    const optionToMove = optionsCpy[prevIndex];
    optionsCpy.splice(prevIndex, 1);
    optionsCpy.splice(newIndex, 0, optionToMove); 
    this.setState({
      fieldOptions: optionsCpy
    });
  }

  handleBlankOrNot(val) {
    if (this.props.studyStore.readonlyMode) return;
    this.setState({
      controlDisplayValue: val,
    });
  }

  handleFieldsChange(name, values) {
    if (this.props.studyStore.readonlyMode) return;

    let concatenated = EditField.concatenateFieldsChangeValues(values);
    console.log("Changed field selection: " + concatenated);
    this.setState({
      [name]: concatenated,
    });
  }

  handleFieldsAttributeChange = (attName, values) => {
    if (this.props.studyStore.readonlyMode) return;

    this.handleChangeAttribute(
      attName,
      EditField.concatenateFieldsChangeValues(values)
    );
  };

  static concatenateFieldsChangeValues(values) {
    let valuesWithoutCategories = [];
    for (let value of values) {
      value = value.replace(/\/(.*)\//, "/");
      valuesWithoutCategories.push(value);
    }
    return valuesWithoutCategories.join();
  }

  handleChange = (name) => (event) => {
    this.handleValueChange(name)(event.target.value);
  };

  handleValueChange = (name) => (value) => {
    if (this.props.studyStore.readonlyMode) return;
    this.setState({
      [name]: value,
    });
  };

  handleDBNameChange = (name) => (event) => {
    const clean = Validator.cleanForDBName(event.target.value);
    this.handleValueChange(name)(clean);
  }

  handleChangeCanDo(name, value) {
    if (this.props.studyStore.readonlyMode) return;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (name) => (event) => {
    this.handleValueChange(name)(event.target.checked);
  };

  handleChangeAttribute(name, value) {
    if (this.props.studyStore.readonlyMode) return;
    let attrs = this.state.attributes;
    attrs[name] = value;
    this.setState({
      attributes: attrs,
    });
  }

  handleChangeAttributeEvent = (name) => (event) => {
    this.handleChangeAttribute(name, event.target.value);
  };

  handleChangeAttributeEventChecked = (name) => (event) => {
    this.handleChangeAttribute(name, event.target.checked);
  };

  handleChangeUseAsDictionary(e) {
    if (this.props.studyStore.readonlyMode) return;
    let use = e.target.checked;
    this.setState({
      useAsDictionary: use,
    });
    if (!use) {
      this.setState({
        comboFileName: undefined,
      });
    }
  }

  handleImportDictionary(e) {
    if (this.props.studyStore.readonlyMode) return;
    let file = e.target.files[0];
    this.setState(
      {
        fileUploadStatus: "Uploading...",
        comboFileName: file.name,
      },
      Actions.importDictionaryFile(file, (result) => {
        this.setState({
          fileUploadStatus: result,
        });
      })
    );
  }

  handleChangeUseOptionsFromOwner(e) {
    if (this.props.studyStore.readonlyMode) return;
    let use = e.target.checked;
    this.setState({
      useOptionsFromOwner: use,
      usingOptionsFromUserRole: false,
      optionsUserRoles: "",
    });
    if (!use) {
      this.setState({
        optionsFromOwnerField: "",
      });
    }
  }

  handleChangeFieldHasInitialValueOption(e) {
    if (this.props.studyStore.readonlyMode) return;
    let fieldInitialValue = "";
    if (e.target.checked) {
      fieldInitialValue = this.state.fieldOptions[0].value;
    }
    this.setState({
      fieldHasInitialValue: e.target.checked,
      fieldInitialValue
    });
  }

  handleChangeUsingOptionsFromUserRole(e) {
    if (this.props.studyStore.readonlyMode) return;
    const checked = e.target.checked;
    this.setState({
      usingOptionsFromUserRole: checked,
      useOptionsFromOwner: false,
      optionsFromOwnerField: "",
    });
  }

  handleChangeUsingVisibility = (e) => {
    if (this.props.studyStore.readonlyMode) return;
    const usingVisibility = e.target.checked;
    this.setState({
      usingVisibility
    });
    if (!usingVisibility) {
      this.setState({
        controlDisplayField: "",
        controlDisplayValue: "",
        controlDisplayShowHide: "",
        controlDisplayType: "",
      });
    }
  }

  handleChangeConditionallyIncludeChecked = (e) => {
    if (this.props.studyStore.readonlyMode) return;
    const checked = e.target.checked;
    this.setState({
      conditionallyIncludeChecked: checked,
    });
    if (!checked) {
      this.setState(conditionallyIncludeInitialState);
    }
  };

  handleChangeNumeric = (name) => (e) => {
    this.handleValueChange(name)(e.target.value.replace(/\D/g, ''));
  };

  handleChangeUsingWidth = (e) => {
    if (this.props.studyStore.readonlyMode) return;
    this.handleCheckboxChange("usingWidth")(e);
    this.handleValueChange("fieldWidth")("");
    this.handleValueChange("fieldSize")("");
  };

  validateFieldName(errorMap) {
    let validation = 'OK';
    if (this.state.fieldType !== "label") {
      validation = Validator.notEmpty(errorMap, "The field name", this.state.fieldName, "fieldName");
      if (validation == 'OK') {
        let type = this.state.fieldType === "radio" ? "radioName" : "fieldName";
        validation = Validator.isUnique(errorMap, type, "The field name", this.state.fieldName, this.props.id, this.props.studyStore.currentForm);
      }
    }
    return validation;
  }

  validate() {
    let errorMapBasic = {};
    let errorMapAdvanced = {};
    this.validateFieldName(errorMapBasic);
    if (this.state.fieldType === "vas") {
      Validator.isInteger(errorMapBasic, "Low Value", this.state.attributes.lowValue, "lowValue");
      Validator.isInteger(errorMapBasic, "High Value", this.state.attributes.highValue, "highValue");
      Validator.notEmpty(errorMapBasic, "Low Message", this.state.attributes.lowMessage, "lowMessage");
      Validator.notEmpty(errorMapBasic, "High Message", this.state.attributes.highMessage, "highMessage");
    }
    if (this.showOptions()) {
      this.state.fieldOptions.map((opt, i) => {
        Validator.isUnique(errorMapAdvanced, "fieldOptionsValue", "The option value", opt.value, i, this.state.fieldOptions);
      });
    }
    if (this.state.usingVisibility) {
      Validator.notEmpty(errorMapAdvanced, "The controlled by field", this.state.controlDisplayField, "controlDisplayField");
      Validator.notEmpty(errorMapAdvanced, "The controlled by field value", this.state.controlDisplayValue, "controlDisplayValue");
      Validator.notEmpty(errorMapAdvanced, "The controlled field visibility", this.state.controlDisplayShowHide, "controlDisplayShowHide");
    }
    if (this.state.conditionallyIncludeChecked) {
      Validator.notEmpty(errorMapAdvanced, "The conditional field", this.state.conditionallyIncludeFieldPath, "conditionallyIncludeFieldPath");
      Validator.notEmpty(errorMapAdvanced, "The conditional field value", this.state.conditionallyIncludeValue, "conditionallyIncludeValue");
    }
    if (this.state.usingOptionsFromUserRole) {
      Validator.notEmpty(errorMapAdvanced, "The user roles", this.state.optionsUserRoles, "optionsUserRoles");
    }
    if (this.state.useOptionsFromOwner) {
      Validator.notEmpty(errorMapAdvanced, "The form fields", this.state.optionsFromOwnerField, "optionsFromOwnerField");
    }
    let currentTab = Validator.getNewTab(this.state.currentTab, errorMapBasic, errorMapAdvanced);
    let errorMap = {...errorMapBasic, ...errorMapAdvanced};
    this.setState({
      currentTab,
      errorMap
    });
    let passed = Object.keys(errorMap).length === 0;
    return passed;
  }

  _getCleanedData() {
    const field = {
      _type: this.state._type,
      id: this.state.id,
      fieldName: this.state.fieldName,
      fieldLabel: this.state.fieldLabel,
      fieldType: this.state.fieldType,
      labelClass: this.state.labelClass,
      labelColor: this.state.labelColor,
      readOnly: this.state.readOnly,
      requireChangeReason: this.state.requireChangeReason,
      changesState: this.state.changesState,
      showChanges: this.state.showChanges,
      onChangeSubmit: this.state.onChangeSubmit,
      onClickSubmit: this.state.onClickSubmit,
      cDash: this.state.cDash,
      value: this.state.value,
      fieldSize: this.state.fieldSize,
      usingDimensions:
        this.state.fieldWidth !== undefined ||
        this.state.fieldHeight !== undefined,
      absoluteOrRelativeSize: this.state.absoluteOrRelativeSize,
      usingWidth: this.state.usingWidth,
      fieldWidth: this.state.fieldWidth,
      fieldHeight: this.state.fieldHeight,
      maxLength: this.state.maxLength,
      usingVisibility: this.state.usingVisibility,
      usingLearn: this.state.usingLearn,
      suppressFromExport: this.state.suppressFromExport,
      addInfoIcon: this.state.addInfoIcon,
      addInfoIconText: this.state.addInfoIconText,
      usingOptionsFromUserRole: this.state.usingOptionsFromUserRole,
      optionsUserRoles: this.state.optionsUserRoles,
      showBackground: this.state.showBackground,
      controlDisplayField: this.state.controlDisplayField,
      controlDisplayValue: this.state.controlDisplayValue,
      controlDisplayShowHide: this.state.controlDisplayShowHide,
      controlDisplayType: this.state.controlDisplayType,
      fieldOptions: this.state.fieldOptions,
      fieldOptionsClass: this.state.fieldOptionsClass,
      fieldHasInitialValue: this.state.fieldHasInitialValue,
      fieldInitialValue: this.state.fieldInitialValue,
      optionsFromOwnerField: this.state.optionsFromOwnerField,
      fieldPlaceholder: this.state.fieldPlaceholder,
      comboFileName: this.state.comboFileName,
      blindedTo: this.state.blindedTo,
      canEdit: this.state.canEdit,
      attributes: this.state.attributes,
      imgSrc: this.state.imgSrc,
      imgWidth: this.state.imgWidth,
      imgHeight: this.state.imgHeight,
      blankFields: this.state.blankFields,
      ...getConditionallyIncludeDataFromObject(this.state),
    };

    if (!!field.fieldOptions) {
      field.fieldOptions.map((o) => {
        o.label = o.label.trim();
        o.value = o.value.trim();
      });
    }

    return field;
  }

  handleOkBtn() {
    if (this.validate()) {
      if (this.state.imgFile) {
        /** Upload image using multipart/form-data content. */
        let fd = new FormData();
        fd.append("file", this.state.imgFile);
        fd.append("formRefId", this.props.studyStore.currentForm.id);

        const csrfToken = !document.querySelector('meta[name="_csrf"]')
          ? ""
          : document
              .querySelector('meta[name="_csrf"]')
              .getAttribute("content");

        fetch("/vision/composer/uploadFieldImage", {
          method: "POST",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { "X-CSRF-TOKEN": csrfToken, tabId: sessionStorage.tabId },
          body: fd,
        })
          .then((response) => response.json())
          .then((json) => {
            /** Update imgSrc with server resource url. */
            this.setState({ imgSrc: json.response });
          })
          .then(() => {
            let field = this._getCleanedData();
            Actions.updateField(field);
          })
          .catch((error) => {
            console.log("API Error: " + error);
          });
      } else {
        let field = this._getCleanedData();
        Actions.updateField(field);
      }
    }
  }

  validateCopyFieldName(errorMap) {
    let validation = 'OK';
    validation = Validator.notEmpty(errorMap, "The field name", this.state.copyFieldName, "copyFieldName");
    if (validation == 'OK') {
      validation = Validator.validDBName(errorMap, "The field name", this.state.copyFieldName, "copyFieldName");
    }
    if (validation == 'OK') {
      validation = Validator.isUnique(errorMap, "copyFieldName", "The field name", this.state.copyFieldName, this.props.id, this.props.studyStore.currentForm);
    }
    return validation;
  }

  handleMakeCopy() {
    if (this.props.studyStore.readonlyMode) return;
    let errorMap = {};
    this.validateCopyFieldName(errorMap);
    this.setState({
      errorMap,
    });
    let passed = Object.keys(errorMap).length === 0;
    if (passed) {
      Actions.copyField(
        this.props.parentId,
        this._getCleanedData(),
        this.state.copyFieldName,
        this.state.copyFieldLabel
      );
    }
  }

  handleChangeImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        imgFile: event.target.files[0],
        fieldLabel: event.target.files[0].name,
      });

      /** Translate file to url for preview. */
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ imgSrc: reader.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleImgResize(e, direction, ref) {
    this.setState({
      imgWidth: parseInt(ref.style["width"], 10),
      imgHeight: parseInt(ref.style["height"], 10),
    });
  }

  showOptions() {
    return this.state.fieldType === "radio" ||
        (this.state.fieldType === "select" &&
            !this.state.useOptionsFromOwner &&
            !this.state.usingOptionsFromUserRole) ||
        (!this.state.comboFileName && this.state.fieldType === "combo");
  }

  render() {
    const btns = [
      <Button key="dialogBtnOk" onClick={() => this.handleOkBtn()}>
        Ok
      </Button>,
      <Button key="dialogBtnCancel" onClick={() => Actions.closeDialog()}>
        Cancel
      </Button>,
    ];

    const fieldData = this.props;

    let switches = {};
    switches.showPlaceholder =
      this.state.fieldType === "text" ||
      this.state.fieldType === "textarea" ||
      this.state.fieldType === "numeric" ||
      this.state.fieldType === "integer";
    switches.showOptions = this.showOptions();
    switches.showOptionLayout = this.state.fieldType === "radio";
    switches.showInitialValueRadio = this.state.fieldType === "radio" && this.state.fieldOptions.length > 0;
    switches.showInitialValueCheckBox = this.state.fieldType === "checkbox";
    switches.showInitialValueHidden = this.state.fieldType === "hidden";
    switches.showSize =
      this.state.fieldType === "text" ||
      this.state.fieldType === "numeric" ||
      this.state.fieldType === "integer" ||
      this.state.fieldType === "combo";
    switches.showReadonly =
      this.state.fieldType !== "label" &&
      this.state.fieldType !== "hidden" &&
      this.state.fieldType !== "scriptlet";
    switches.showTabIndex =
      switches.showReadonly && this.state.fieldType !== "vas";
    switches.showValue = this.state.fieldType === "checkbox";
    switches.showAppDisplay =
      this.state.fieldType !== "hidden" && this.state.fieldType !== "scriptlet";
    switches.showLabelOpts =
      this.state.fieldType !== "hidden" && this.state.fieldType !== "scriptlet";
    switches.showConditionallyInclude =
      this.state.fieldType !== "hidden" && this.state.fieldType !== "scriptlet";
    switches.showCdash =
      this.state.fieldType !== "label" && this.state.fieldType !== "scriptlet";
    switches.showBlindedTo =
      this.state.fieldType !== "label" && this.state.fieldType !== "scriptlet";
    switches.showCopyField =
      this.state.fieldType !== "label" && this.state.fieldType !== "scriptlet";
    /** Determines whether or not the field type dropdown and field name text box are shown.  */
    switches.showFieldOpts = this.state.fieldType !== "label" && this.state.fieldType !== "scriptlet";
    /** Determines whether or not the 'Advanced' tab is shown or not. */
    switches.showAdvanced = this.state.fieldType !== "scriptlet";

    let allowRequireChangeReason = switches.showReadonly
        && this.props.studyStore.studyData.requireChangeReason
        && this.state.showChanges;

    // Ensure the content source is a valid value, default to 'text'
    if (
      this.state.attributes.fieldLabelContentSource !==
        LABEL_CONTENT_SOURCE.TEXT &&
      this.state.attributes.fieldLabelContentSource !==
        LABEL_CONTENT_SOURCE.FIELD &&
      this.state.attributes.fieldLabelContentSource !==
        LABEL_CONTENT_SOURCE.IMAGE
    ) {
      this.state.attributes.fieldLabelContentSource = LABEL_CONTENT_SOURCE.TEXT;
    }

    let hasErrorFieldName = "fieldName" in this.state.errorMap && (this.validateFieldName(this.state.errorMap) != 'OK');
    let hasErrorCopyFieldName = "copyFieldName" in this.state.errorMap && (this.validateCopyFieldName(this.state.errorMap) != 'OK');
    let hasErrorLowValue = "lowValue" in this.state.errorMap && (Validator.isInteger(this.state.errorMap, "Low Value", this.state.attributes.lowValue, "lowValue") != 'OK');
    let hasErrorLowMessage = "lowMessage" in this.state.errorMap && (Validator.notEmpty(this.state.errorMap, "Low Message", this.state.attributes.lowMessage, "lowMessage") != 'OK');
    let hasErrorHighValue = "highValue" in this.state.errorMap && (Validator.isInteger(this.state.errorMap, "High Value", this.state.attributes.highValue, "highValue") != 'OK');
    let hasErrorHighMessage = "highMessage" in this.state.errorMap && (Validator.notEmpty(this.state.errorMap, "High Message", this.state.attributes.highMessage, "highMessage") != 'OK');
    let hasErrorOptionsUserRoles = "optionsUserRoles" in this.state.errorMap && (Validator.notEmpty(this.state.errorMap, "The roles", this.state.optionsUserRoles, "optionsUserRoles") != 'OK');


    /** 
     * Refers to the css that will be applied to the <DialogContent> component. 
     * 
     * @todo: this component really needs to be refactored into a readable format.
     * There is simply too much logic and code encapsulated into this file. At the
     * very least, the various <Dialog>, <DialogContent>, and <TextField>s should be
     * extracted into their own components
     */
    let dialogContentStyle = {};
    let dialogTitle = `Field Properties: ${this.props.fieldName || ''}`;
    if (this.state.fieldType === "scriptlet") {
      dialogContentStyle = {
        /** 
         * We remove the extra spacing for the scriptlet tool, since it only has one
         * attribute that can be edited.
         */
        paddingBottom: 0,
      };
      dialogTitle = "Custom Code";
    }

    return (
      <div>
        |
        <Dialog
          open={this.props.formStore.showDialog}
          onClose={() => Actions.closeDialog()}
          PaperComponent={this.props.paperComponent}
          fullScreen={this.props.fullScreen}
        >
          <ResizeDialogTitle
            title={dialogTitle}
            titleId="form-dialog-title"
            fullScreen={this.props.fullScreen}
            handleResize={this.props.handleResize}
          />
          <DialogContent style={dialogContentStyle}>
            {switches.showAdvanced && (
              <AppBar position="static" elevation={0}>
                <Tabs
                  centered
                  value={this.state.currentTab}
                  onChange={(e, val) => this.setState({ currentTab: val })}
                >
                  <Tab value="basic" label="Basic" />
                  <Tab value="advanced" label="Advanced" />
                </Tabs>
              </AppBar>
            )}
            {/*{Object.keys(this.state.errorMap).map((error, index) => (
              <div key={"error_" + index} className="errorMsg">
                {this.state.errorMap[error]}
              </div>
            ))}*/}
            {this.state.currentTab === "basic" &&
              this.state.fieldType === "scriptlet" && (
                <DialogContentBasicTabScriptlet
                  value={this.state.value}
                  handleChange={this.handleChange("value")}
                />
              )}
            {this.state.currentTab === "basic" && this.state.fieldType !== "scriptlet" && (
              <div key="basicTab" style={{ padding: "30px" }}>
                {fieldData.fieldType === "label" && (
                  <EditLabel
                    key="editLableOpts"
                    labelColor={this.state.labelColor}
                    fieldLabel={this.state.fieldLabel}
                    fieldLabelContentField={
                      this.state.attributes.fieldLabelContentField
                    }
                    fieldLabelContentSource={
                      this.state.attributes.fieldLabelContentSource
                    }
                    handleChange={this.handleChange}
                    handleChangeAttributeEvent={this.handleChangeAttributeEvent}
                    handleFieldsAttributeChange={
                      this.handleFieldsAttributeChange
                    }
                    handleChangeImage={this.handleChangeImage}
                    imgSrc={this.state.imgSrc}
                    imgHeight={this.state.imgHeight}
                    imgWidth={this.state.imgWidth}
                    handleImgResize={this.handleImgResize}
                    index={this.state.index}
                  />
                )}
                {switches.showFieldOpts && (
                  <div>
                      <div>
                        <FormControl>
                          <InputLabel style={{ whiteSpace: "nowrap" }}>
                            Field Type
                          </InputLabel>
                          <Select
                            value={this.state.fieldType}
                            onChange={this.handleChange("fieldType")}
                            autoWidth={true}
                          >
                            <MenuItem value="label">Label</MenuItem>
                            <MenuItem value="text">Text</MenuItem>
                            <MenuItem value="textarea">Text Area</MenuItem>
                            <MenuItem value="select">Select</MenuItem>
                            <MenuItem value="combo">Combo</MenuItem>
                            <MenuItem value="radio">Radio</MenuItem>
                            <MenuItem value="checkbox">Checkbox</MenuItem>
                            <MenuItem value="date">Date</MenuItem>
                            <MenuItem value="set.today">Today</MenuItem>
                            <MenuItem value="time">Time</MenuItem>
                            <MenuItem value="set.now">Now</MenuItem>
                            <MenuItem value="integer">Integer</MenuItem>
                            <MenuItem value="numeric">Numeric</MenuItem>
                            <MenuItem value="hidden">Hidden</MenuItem>
                            <MenuItem value="file">File</MenuItem>
                            <MenuItem value="vas">VAS</MenuItem>
                            <MenuItem value="scriptlet">Scriptlet</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    {switches.showLabelOpts && (
                      <div class="textField">
                        <TextField
                          label="Label"
                          fullWidth
                          value={this.state.fieldLabel}
                          onChange={this.handleChange("fieldLabel")}
                        />
                      </div>
                    )}
                      <div class="fieldWithInfo">
                        <div className="textField">
                          <TextField
                            label="Field Name"
                            fullWidth
                            pattern="^[a-z0-9_]{1,30}$"
                            value={this.state.fieldName}
                            onChange={this.handleDBNameChange("fieldName")}
                            className={hasErrorFieldName ? "error_field" : undefined}
                          />
                        </div>
                        <div>
                          <Info>
                            Field names may only contain letters, numbers,
                            underscores, and must be lower case. They may be up to
                            30 characters long and must not contain spaces.
                          </Info>
                        </div>
                        {hasErrorFieldName && <div className="errorMsg">{this.state.errorMap.fieldName}</div>}
                      </div>
                    {switches.showLabelOpts && (
                      <FormControl component="fieldset">
                      <FormLabel component="legend">Label Alignment</FormLabel>
                      <RadioGroup
                        name="align"
                        value={this.state.labelClass}
                        style={{ display: "flex", flexDirection: "row" }}
                        onChange={this.handleChange("labelClass")}
                      >
                        <FormControlLabel
                          value="labelLeft"
                          control={<Radio />}
                          label="Left"
                        />
                        <FormControlLabel
                          value="labelTop"
                          control={<Radio />}
                          label="Top"
                        />
                        <FormControlLabel
                          value="labelRight"
                          control={<Radio />}
                          label="Right"
                        />
                        <FormControlLabel
                          value="labelHidden"
                          control={<Radio />}
                          label={
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div style={{ marginRight: 5 }}>Hidden</div>
                              <Info>
                                <Label>
                                  A hidden label is hidden on the form but is shown in the Field Spec and export's metadata
                                </Label>
                              </Info>
                            </div>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                    )}
                  </div>
                )}

                {this.state.fieldType === "combo" && (
                  <div className="fieldGroup">
                    <div style={{ fontSize: "1.2em" }}>
                      <Checkbox
                        checked={this.state.usingLearn}
                        onChange={this.handleCheckboxChange("usingLearn")}
                      />
                      <Label>Add options from field entries</Label>
                      <Info>
                        <Label>
                          Builds the list of options based on user's entries.
                          This can be used with or without a preset list of
                          options below.
                        </Label>
                      </Info>
                    </div>
                  </div>
                )}

                {switches.showOptionLayout && (
                  <div key="showOptsLayout">
                    <div>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Option Layout</FormLabel>
                        <RadioGroup
                          name="align"
                          value={this.state.fieldOptionsClass}
                          style={{ display: "flex", flexDirection: "row" }}
                          onChange={this.handleChange("fieldOptionsClass")}
                        >
                          <FormControlLabel
                            value="radiosVertical"
                            control={<Radio />}
                            label="Vertical"
                          />
                          <FormControlLabel
                            value="radiosHorizontal"
                            control={<Radio />}
                            label="Horizontal"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                )}

                {switches.showOptions && (
                  <div key="showOptions">
                    <FieldOptionsList
                      errors={this.state.errorMap}
                      fieldOptions={this.state.fieldOptions}
                      updateOption={this.updateOption}
                      removeOption={this.removeOption}
                      fieldType={this.state.fieldType}
                      handleMove={this.moveOption}
                    />
                    <Button onClick={() => this.addOption()}>Add Option</Button>
                  </div>
                )}
                {(switches.showInitialValueRadio) && <div>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Initial Value
                      <Switch
                          checked={this.state.fieldHasInitialValue}
                          onChange={(e) => this.handleChangeFieldHasInitialValueOption(e)}
                      />
                      {this.state.fieldHasInitialValue &&
                      <Select
                          value={this.state.fieldInitialValue}
                          onChange={this.handleChange("fieldInitialValue")}
                          autoWidth={true}
                      >
                        {this.state.fieldOptions.map((opt) =>
                            <MenuItem key={opt.value} value={opt.value}>{opt.value}</MenuItem>
                        )}
                      </Select>
                      }
                      <Info>
                        Initializing a radio field sets an initial value for the field, as defined by the user.
                      </Info>
                    </FormLabel>
                  </FormControl>
                </div>}
                {switches.showInitialValueCheckBox && <div>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Initialize to Checked
                      <Switch
                          checked={this.state.fieldHasInitialValue}
                          onChange={this.handleCheckboxChange("fieldHasInitialValue")}
                      />
                      <Info>
                        Initializing a checkbox field sets an initial value for the field, as defined by the user.
                      </Info>
                    </FormLabel>
                  </FormControl>
                </div>}
                {switches.showInitialValueHidden && <div className="fieldWithInfo">
                  <div className="textField">
                    <TextField
                        label="Initial Value"
                        fullWidth
                        value={this.state.value}
                        onChange={this.handleChange("value")}
                    />
                  </div>
                  <div>
                    <Info>
                      Initializing a hidden field sets an initial value for the field, as defined by the user.
                    </Info>
                  </div>
                </div>}
                {!!this.state.comboFileName && (
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "10px",
                    }}
                  >
                    <b>
                      This field is being used as a dictionary. The options may
                      be changed by uploading a new file under the advanced
                      settings.
                    </b>
                  </div>
                )}
                {this.state.fieldType === "vas" && (
                  <div>
                    <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                      <TextField
                        label="Low Value"
                        value={this.state.attributes.lowValue}
                        onChange={this.handleChangeAttributeEvent("lowValue")}
                        className={hasErrorLowValue ? "error_field" : undefined}
                      />
                      <TextField
                        label="Low Message"
                        fullWidth
                        value={this.state.attributes.lowMessage}
                        onChange={this.handleChangeAttributeEvent("lowMessage")}
                        className={hasErrorLowMessage ? "error_field" : undefined}
                      />
                    </div>
                    <div style={{ display: "flex", flexFlow: "row nowrap"}}>
                      {hasErrorLowValue && <div className="errorMsg">{this.state.errorMap.lowValue}</div>}
                      {hasErrorLowMessage && <div className="errorMsg" style={{marginRight: 0, marginLeft: 'auto'}}>{this.state.errorMap.lowMessage}</div>}
                    </div>
                    <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                      <TextField
                        label="High Value"
                        value={this.state.attributes.highValue}
                        onChange={this.handleChangeAttributeEvent("highValue",)}
                        className={hasErrorHighValue ? "error_field" : undefined}
                      />
                      <TextField
                        label="High Message"
                        fullWidth
                        value={this.state.attributes.highMessage}
                        onChange={this.handleChangeAttributeEvent("highMessage",)}
                        className={hasErrorHighMessage ? "error_field" : undefined}
                      />
                    </div>
                    <div style={{ display: "flex", flexFlow: "row nowrap"}}>
                      {hasErrorHighValue && <div className="errorMsg">{this.state.errorMap.highValue}</div>}
                      {hasErrorHighMessage && <div className="errorMsg" style={{marginRight: 0, marginLeft: 'auto'}}>{this.state.errorMap.highMessage}</div>}
                    </div>
                    <div>
                      <TextField
                        label="Decimals"
                        value={this.state.attributes.decimals}
                        type="number"
                        onChange={this.handleChangeAttributeEvent("decimals")}
                        InputProps={{
                          endAdornment: (
                            <Info>
                              The decimal precision of the mark value. Defaults
                              to 1 (i.e., the tenth's place).
                            </Info>
                          ),
                        }}
                      />
                    </div>               
                  </div>
                )}
              </div>
            )}
            {this.state.currentTab === "advanced" && (
              <div key="advancedTab">
                {switches.showReadonly && (
                  <div>
                    <Checkbox
                      id="changeReadOnly"
                      checked={this.state.readOnly}
                      onChange={this.handleCheckboxChange("readOnly")}
                    />
                    <Label>Read-only</Label>
                    <Info>If checked, this field will not be editable. (Often used for calculated fields).</Info>
                  </div>
                )}
                {switches.showReadonly && (
                    <div>
                      <Checkbox
                          id="onChangeSubmit"
                          checked={this.state.onChangeSubmit}
                          onChange={this.handleCheckboxChange("onChangeSubmit")}
                      />
                      <Label>Auto save upon data entry </Label>
                      <Info>If checked, once the field is edited the form will automatically save (data saved and edit checks run).</Info>
                    </div>
                )}
                {switches.showReadonly && (<div>
                  <Checkbox
                      id="showChanges"
                      checked={this.state.showChanges}
                      onChange={this.handleCheckboxChange("showChanges")}
                  />
                  <Label>Show changes</Label>
                  <Info>Deselect this box if changes to a field should not show.</Info>
                </div>
                )}
                {allowRequireChangeReason && (
                  <div>
                    <Checkbox
                      id="requireChangeReason"
                      checked={this.state.requireChangeReason}
                      onChange={this.handleCheckboxChange("requireChangeReason")}
                    />
                    <Label>Require change reason</Label>
                    <Info>By default all changes made to fields require a change reason. Deselect the box if this field should not require a change reason.</Info>
                  </div>
                )}
                {switches.showReadonly && (
                <div>
                  <Checkbox
                      id="changesState"
                      checked={this.state.changesState}
                      onChange={this.handleCheckboxChange("changesState")}
                  />
                  <Label>Editing field changes form state</Label>
                  <Info>By default editing fields will change the form state (e.g., if a form is in a "Reviewed" form state and a user edits a field it will revert the form back to an "In-Work" form state). This should only be used if the form state should not be affected by the editing of this field.</Info>
                </div>
                )}
                {switches.showPlaceholder && (
                  <div class="fieldWithInfo">
                    <div class="textField">
                      <TextField
                        label="Placeholder"
                        fullWidth
                        value={this.state.fieldPlaceholder}
                        onChange={this.handleChange("fieldPlaceholder")}
                      />
                    </div>
                    <div>
                      <Info>
                        Add text for guidance as to what the user should enter
                        (e.g., xx.x).
                      </Info>
                    </div>
                  </div>
                )}
                {(this.state.fieldType === "textarea"|| this.state.fieldType === "select") && (
                    <div className="textField">
                      <TextField
                          label="Width (px)"
                          fullWidth
                          value={this.state.fieldWidth}
                          onChange={this.handleChangeNumeric("fieldWidth")}
                      />
                    </div>
                )}
                {this.state.fieldType === "textarea" && (
                    <div className="textField">
                      <TextField
                          label="Height (px)"
                          fullWidth
                          value={this.state.fieldHeight}
                          onChange={this.handleChangeNumeric("fieldHeight")}
                      />
                    </div>
                )}
                {switches.showSize &&
                <div className="fieldWithInfo">
                <div className="textField">
                  <TextField
                      label={this.state.fieldWidth !== "" || this.state.usingWidth ? "Width (px)" : "Size"}
                      fullWidth
                      value={this.state.fieldWidth !== "" || this.state.usingWidth ? this.state.fieldWidth : this.state.fieldSize}
                      onChange={this.handleChangeNumeric(this.state.fieldWidth !== "" || this.state.usingWidth ? "fieldWidth" : "fieldSize")}
                      InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                              <FormControlLabel
                                  label="Pixels"
                                  control={
                                    <Switch
                                        checked={this.state.fieldWidth !== "" || this.state.usingWidth} // for backwards compatibility also checking fieldWidth
                                        onChange={this.handleChangeUsingWidth}
                                    />
                                  }
                              />
                            </InputAdornment>
                        ),
                      }}
                  />
                </div>
                  <Info>Set the field's display size to a desired number of characters. Turn on pixels to instead measure width using number of pixels.</Info>
                </div>
                }
                {switches.showSize && (
                  <div className="fieldWithInfo">
                  <div className="textField">
                    <TextField
                        label="Max Length"
                        fullWidth
                        value={this.state.maxLength}
                        size="3"
                        onChange={this.handleChangeNumeric("maxLength")}
                    />
                  </div>
                    <Info>Limit the number of characters allowed in input.</Info>
                  </div>
                )}
                {switches.showReadonly && (
                    <div className="fieldWithInfo">
                    <div class="textField">
                    <RolesField
                      label="Editable by Roles"
                      fullWidth
                      name="canEdit"
                      value={this.state.canEdit}
                      onChange={this.handleChangeCanDo}
                    />
                  </div>
                      <div>
                        <Info>
                          <Label>
                            Enter role codes if edit privileges differ field to field. If left blank, the canEdit on Form Permissions (Project level) will dictate which roles can edit the field.
                          </Label>
                        </Info>
                      </div>
                    </div>
                )}
                {switches.showBlindedTo && (
                    <div className="fieldWithInfo">
                    <div class="textField">
                    <RolesField
                      label="Masked to Roles"
                      fullWidth
                      name="blindedTo"
                      value={this.state.blindedTo}
                      onChange={this.handleChangeCanDo}
                    />
                  </div>
                      <div>
                        <Info>
                          <Label>
                            This field will be masked to the role codes entered.
                          </Label>
                        </Info>
                      </div>
                    </div>
                )}
                {switches.showCdash && (
                  <div class="fieldWithInfo">
                    <div className="textField">
                      <TextField
                        label="CDASH"
                        fullWidth
                        value={this.state.cDash}
                        onChange={this.handleChange("cDash")}
                      />
                    </div>
                    <div>
                      <Info>
                        <Label>
                          Define a short database (or CDASH) name here. Typical
                          format is 8 characters (all upper case).
                        </Label>
                      </Info>
                    </div>
                  </div>
                )}
                {switches.showTabIndex && (
                  <div class="textField">
                    <TextField
                      label="Tab Index"
                      fullWidth
                      value={this.state.attributes.tabIndex}
                      onChange={this.handleChangeAttributeEvent("tabIndex")}
                    />
                  </div>
                )}
                {this.state.fieldType === "file" && (
                    <div className="fieldWithInfo">
                      <div className="textField">
                        <TextField
                            label="Acceptable File Types"
                            fullWidth
                            value={this.state.attributes.fileType}
                            onChange={this.handleChangeAttributeEvent("fileType")}
                        />
                      </div>
                      <div>
                        <Info>
                          A comma-separated list of one or more file types, or unique file type specifiers, describing which file types to allow for uploading.
                          For example, ".csv,.txt" will allow for csv and txt file types. ".pdf" will allow for only pdf file types. To allow any file type to be uploaded, please leave "Acceptable File Types" blank.
                        </Info>
                      </div>
                    </div>
                )}
                {switches.showValue && this.state.fieldType !== 'scriptlet' && (
                  <div className="fieldWithInfo">
                    <div className="textField">
                      <TextField
                        label="Value"
                        fullWidth
                        value={this.state.value}
                        onChange={this.handleChange("value")}
                      />
                    </div>
                    <div>
                      <Info>
                        By default, checking the checkbox sets the field's value to "on". User defined value will be used when provided.
                      </Info>
                    </div>
                  </div>
                )}
                {switches.showAppDisplay && (
                  <AppDisplayFormGroup
                    errors={this.state.errorMap}
                    usingVisibility={this.state.usingVisibility}
                    handleChangeUsingVisibility={this.handleChangeUsingVisibility}
                    controlDisplayField={this.state.controlDisplayField}
                    handleChangeControlDisplayField={this.handleFieldsChange}
                    controlDisplayValue={this.state.controlDisplayValue}
                    handleChangeControlDisplayValue={this.handleValueChange("controlDisplayValue")}
                    controlDisplayShowHide={this.state.controlDisplayShowHide}
                    handleChangeControlDisplayShowHide={this.handleChange("controlDisplayShowHide")}
                    controlDisplayType={this.state.controlDisplayType}
                    handleChangeControlDisplayType={this.handleValueChange("controlDisplayType")}
                    blankFields={this.state.blankFields}
                    handleChangeBlankFields={this.handleCheckboxChange("blankFields")}
                    componentType="Field"
                    componentDescriptor={"field (" + this.state.fieldName + ")"}
                    fieldNamesToExclude={[this.state.fieldName]}
                  />
                )}
                {switches.showConditionallyInclude && (
                  <ConditionallyIncludeSection
                    errors={this.state.errorMap}
                    handleChange={this.handleChange}
                    handleValueChange={this.handleValueChange}
                    handleChangeConditionallyIncludeChecked={
                      this.handleChangeConditionallyIncludeChecked
                    }
                    currentView={this.props.studyStore.currentView.id}
                    conditionallyIncludeChecked={
                      this.state.conditionallyIncludeChecked
                    }
                    conditionallyIncludeType={
                      this.state.conditionallyIncludeType
                    }
                    conditionallyIncludeFieldPath={ this.state.conditionallyIncludeFieldPath }
                    conditionallyIncludeValue={ this.state.conditionallyIncludeValue }
                    fieldNamesToExclude={[this.state.fieldName]}
                  />
                )}
                {this.state.fieldType === "combo" && (
                  <ComboAdvanced
                    useAsDictionary={this.state.useAsDictionary}
                    handleChangeUseAsDictionary={
                      this.handleChangeUseAsDictionary
                    }
                    handleImportDictionary={this.handleImportDictionary}
                    fileUploadStatus={this.state.fileUploadStatus}
                    comboFileName={this.state.comboFileName}
                  />
                )}
                {this.state.fieldType === "select" && (
                  <div className="fieldGroup">
                    <div style={{ fontSize: "1.2em" }}>
                      <Checkbox
                        checked={this.state.usingOptionsFromUserRole}
                        onChange={(e) =>
                          this.handleChangeUsingOptionsFromUserRole(e)
                        }
                      />
                      Options from User Roles
                      <Info>
                        This option allows you to populate user's names based on
                        the role codes defined (e.g., ICM).
                      </Info>
                    </div>
                    {this.state.usingOptionsFromUserRole && (
                      <div>
                        <div className={`textField ${hasErrorOptionsUserRoles ? "error_field" : ""}`}>
                          <TextField
                              label="Roles"
                              fullWidth
                              value={this.state.optionsUserRoles}
                              onChange={this.handleChange("optionsUserRoles")}
                          />
                        </div>
                        {hasErrorOptionsUserRoles && <div className="errorMsg">{this.state.errorMap.optionsUserRoles}</div>}
                      </div>
                    )}
                  </div>
                )}
                {this.state.fieldType === "select" && (
                  <OptionsFromOwner
                    errors={this.state.errorMap}
                    useOptionsFromOwner={this.state.useOptionsFromOwner}
                    optionsFromOwnerField={this.state.optionsFromOwnerField}
                    handleChangeUseOptionsFromOwner={
                      this.handleChangeUseOptionsFromOwner
                    }
                    handleFieldsChange={this.handleFieldsChange}
                  />
                )}
                {this.state.fieldType === "file" && (
                  <fieldset>
                    <legend style={{ fontSize: "1.2em" }}>
                      <Label>Display Uploaded Image</Label>
                      <Checkbox
                        checked={this.state.attributes.showImage}
                        onChange={this.handleChangeAttributeEventChecked("showImage")}
                      />
                      <Info>
                        <Label>
                          If this option is selected, the uploaded image will
                          display above the file field.
                        </Label>
                      </Info>
                    </legend>
                    <TextField
                      label="Image Width"
                      value={this.state.attributes.showImageWidth}
                      onChange={this.handleChangeAttributeEvent("showImageWidth")}
                    />
                  </fieldset>
                )}
                {(
                    <div className="fieldGroup">
                      <div style={{ fontSize: "1.2em" }}>
                        <Checkbox
                            checked={this.state.suppressFromExport}
                            onChange={this.handleCheckboxChange("suppressFromExport")}
                        />
                        <Label>Suppress from export</Label>
                        <Info>
                          <Label>
                            Suppress from export
                          </Label>
                        </Info>
                      </div>
                    </div>
                )}

                {this.state.fieldType === "label" && (
                    <div className="fieldGroup">
                      <div style={{ fontSize: "1.2em" }}>
                        <Checkbox
                            checked={this.state.addInfoIcon}
                            onChange={this.handleCheckboxChange("addInfoIcon")}
                        />
                        <Label>Add Info Icon</Label>
                        <Info>
                          <Label>
                            Add info icon to this field
                          </Label>
                        </Info>
                      </div>
                      {this.state.addInfoIcon && (

                          <div className="textField">
                            <TextField
                                label="Text"
                                fullWidth
                                value={this.state.addInfoIconText}
                                size="3"
                                onChange={this.handleChange("addInfoIconText")}
                            />
                          </div>

                      )}
                    </div>
                )}

                {this.state.fieldType === "label" && (
                  <div className="fieldGroup">
                    <FieldFinder
                      label="Associate Field"
                      info="Associates this label with the selected field.
                            This does not change the presentation of the form at all.
                            Only relevant for exports."
                      name="fieldForLabel"
                      value={this.state.attributes.fieldForLabel}
                      onChange={(_, selections) => {
                        this.handleChangeAttribute(
                          "fieldForLabel",
                          selections.length > 0 ? selections[0] : ""
                        );
                      }}
                      suppressExternal={true}
                      skipCategory={true}
                      includeFieldIndex={true}
                      limit={1}
                    />
                  </div>
                )}
                {switches.showCopyField && (
                  <fieldset>
                    <legend style={{ fontSize: "1.2em" }}>
                      <Label>Copy Field</Label>
                      <Info>
                        <Label>
                          To make a duplicate of this field, enter a new label
                          and field name below, and then click 'copy'.
                        </Label>
                      </Info>
                    </legend>
                    <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                      <TextField
                        label="Label"
                        value={this.state.copyFieldLabel}
                        onChange={this.handleChange("copyFieldLabel")}
                      />
                      <TextField
                        label="Field Name"
                        value={this.state.copyFieldName}
                        onChange={this.handleDBNameChange("copyFieldName")}
                        className={hasErrorCopyFieldName ? "error_field" : undefined}
                      />
                      {hasErrorCopyFieldName && <div className="errorMsg">{this.state.errorMap.copyFieldName}</div>}
                    </div>
                    <Button
                      variant="raised"
                      color="primary"
                      onClick={() => {
                        this.handleMakeCopy();
                      }}
                    >
                      Make Copy
                    </Button>
                  </fieldset>
                )}
              </div>
            )}
          </DialogContent>
          <DialogActions>{btns}</DialogActions>
        </Dialog>
      </div>
    );
  }
}

function EditLabel(props) {
  let fieldLabelAndInput = null;
  switch (props.fieldLabelContentSource) {
    case LABEL_CONTENT_SOURCE.TEXT:
      fieldLabelAndInput = (
        <div>
          <InputLabel>
            <Label>Text</Label>
          </InputLabel>
          <br />
          <textarea
            key="fieldLabelTextarea"
            value={props.fieldLabel}
            style={{ width: "10rem", height: "3rem", marginTop: "1rem" }}
            onChange={props.handleChange("fieldLabel")}
          />
        </div>
      );
      break;
    case LABEL_CONTENT_SOURCE.FIELD:
      fieldLabelAndInput = (
        <div>
          <FieldFinder
            label="Field"
            name="fieldLabelContentField"
            value={props.fieldLabelContentField}
            onChange={props.handleFieldsAttributeChange}
            limit={1}
            skipCategory={false}
          />
        </div>
      );
      break;
    case LABEL_CONTENT_SOURCE.IMAGE:
      fieldLabelAndInput = (
        <div>
          {props.imgSrc != null && (
            <div>
              <div>
                <Typography gutterBottom align="center" variant="caption">
                  *drag edge to resize
                </Typography>
              </div>
              <div
                style={{
                  marginBottom: 24,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Resizable
                  size={{ width: props.imgWidth, height: props.imgHeight }}
                  onResize={props.handleImgResize}
                >
                  <img
                    src={props.imgSrc}
                    style={{
                      display: "block",
                      height: props.imgHeight,
                      width: props.imgWidth,
                    }}
                  />
                </Resizable>
              </div>
            </div>
          )}
          <input
            accept="image/*"
            style={{ display: "none" }}
            id={`image-content-input-${props.index}`}
            multiple
            type="file"
            onChange={props.handleChangeImage}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <label htmlFor={`image-content-input-${props.index}`}>
              <Button variant="outlined" color="primary" component="span">
                Upload
              </Button>
            </label>
          </div>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="fieldGroup" style={{ padding: "1.6rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <InputLabel>
            <Label>Content Source</Label>
          </InputLabel>
          <div style={{ marginLeft: "0.6rem" }}>
            <Info>
              <b>Content Source</b>
              <br />
              <i>Text</i> - the label will display the entered text as-is
              <br />
              <i>Field</i> - the label will display the value of the entered
              field
              <br />
              <i>Image</i> - the uploaded image will display as a static image
            </Info>
          </div>
        </div>
        <RadioGroup
          name="fieldLabelContentSource"
          value={props.fieldLabelContentSource}
          onChange={props.handleChangeAttributeEvent("fieldLabelContentSource")}
          style={{ marginBottom: "1rem" }}
          row
        >
          <FormControlLabel
            control={<Radio />}
            label={"Text"}
            style={{ margin: 0, padding: 0 }}
            value={LABEL_CONTENT_SOURCE.TEXT}
          />
          <FormControlLabel
            control={<Radio />}
            label={"Field"}
            style={{ margin: 0, padding: 0 }}
            value={LABEL_CONTENT_SOURCE.FIELD}
          />
          <FormControlLabel
            control={<Radio />}
            label={"Image"}
            style={{ margin: 0, padding: 0 }}
            value={LABEL_CONTENT_SOURCE.IMAGE}
          />
        </RadioGroup>

        {fieldLabelAndInput}
      </div>

      <div
        className="fieldGroup"
        style={{ marginTop: "1rem", padding: "1.6rem" }}
      >
        <InputLabel>
          <Label>Color</Label>:
        </InputLabel>
        <input
          style={{ marginLeft: "0.6rem" }}
          type="color"
          name="changeLabelColor"
          id="changeLabelColor"
          onChange={props.handleChange("labelColor")}
          value={props.labelColor}
        />
        <div style={{ display: "inline-block", marginLeft: "0.6rem" }}>
          {props.labelColor}
        </div>
      </div>
    </div>
  );
}

const ComboAdvanced = (props) => {
  return (
    <div className="fieldGroup">
      <div style={{ fontSize: "1.2em" }}>
        <Checkbox
          checked={props.useAsDictionary}
          onChange={(e) => props.handleChangeUseAsDictionary(e)}
        />
        Use as dictionary
        <Info>
          A dictionary file must have a ".txt" extension and should contain
          options in a list format (i.e., one option per line). Please note the
          first row in the .txt file will not be a selectable option.
        </Info>
      </div>

      {props.useAsDictionary && (
        <div>
          {props.comboFileName && (
            <div
              style={{
                padding: "10px",
                fontSize: "1.2em",
                fontWeight: "bold",
                display: "block",
                textAlign: "center",
              }}
            >
              Linked to {props.comboFileName}
            </div>
          )}
          Select a dictionary file to upload{" "}
          <input
            type="file"
            onChange={(e) => props.handleImportDictionary(e)}
          />
          <div
            style={{
              display: "block",
              paddingTop: "6px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            {props.fileUploadStatus}
          </div>
        </div>
      )}
    </div>
  );
};

const OptionsFromOwner = (props) => {
  let hasErrorOptionsFromOwnerField = "optionsFromOwnerField" in props.errors && (Validator.notEmpty(props.errors, "The form fields", props.optionsFromOwnerField, "optionsFromOwnerField") != 'OK');
  return (
    <div className="fieldGroup">
      <div style={{ fontSize: "1.2em" }}>
        <Checkbox
          checked={props.useOptionsFromOwner}
          onChange={(e) => props.handleChangeUseOptionsFromOwner(e)}
        />
        Options from Forms
        <Info>
          This option allows you to populate a select field with values from
          other form fields in a repeating table (e.g., list of ae_names).
        </Info>
      </div>

      {props.useOptionsFromOwner && (
        <div>
          <div className={hasErrorOptionsFromOwnerField ? "error_field" : undefined}>
            <FieldFinder
                label="Field"
                name="optionsFromOwnerField"
                value={props.optionsFromOwnerField}
                onChange={props.handleFieldsChange}
                forceExternal={true}
                skipCategory={true}
                includeFieldIndex={false}
                limit={1}
            />
          </div>
          {hasErrorOptionsFromOwnerField && <div className="errorMsg">{props.errors.optionsFromOwnerField}</div>}
        </div>
      )}
    </div>
  );
};
