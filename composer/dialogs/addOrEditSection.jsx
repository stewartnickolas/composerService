import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {observer, inject} from 'mobx-react'
import Actions from '../data/actions.js'
import Validator from '../data/validator'
import Info from '../interface/info.jsx'
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Label from "../interface/components/label.jsx"
import RolesField from '../interface/components/rolesField.jsx'
import {
  conditionallyIncludeInitialState,
  getConditionallyIncludeDataFromObject,
  ConditionallyIncludeSection
} from "./shared/conditionallyInclude.jsx"
import ResizeDialogTitle from '../interface/ResizeDialogTitle.jsx';
import AppDisplayFormGroup from '../interface/components/AppDisplayFormGroup.jsx';

@inject('studyStore', 'formStore')
@observer
export default class AddOrEditSection extends React.Component{

  constructor(props){
      super(props);
      // init state variables passed down in props
      if(!this.props.id){
        // Default values if section is newly created
        this.state = {
          sectionName: '',
          sectionLabel: '',
          indexed: false,
          controlDisplayValue: '',
          controlDisplayField: '',
          controlDisplayShowHide: '',
          controlDisplayType: '',
          canEdit: '',
          usingVisibility: false,
          addInfoIcon: false,
          addInfoIconText: '',
          obfuscated: false,
          blankFields: true,
          ...conditionallyIncludeInitialState
        }
      } else {
        this.state = {
          ...props,
          controlDisplayField:
            (!!props.controlDisplayField ? props.controlDisplayField : ''),
          controlDisplayType:
            (!!props.controlDisplayType ? props.controlDisplayType : ''),
          usingVisibility:
            (props.controlDisplayField !== null
              && props.controlDisplayField !== undefined
              && props.controlDisplayField.length > 0),
          canEdit: props.canEdit,
          // Added new property 'blankFields' to gui. Existing studies will not have initialized its
          // value so we default to blankFields=true unless value has explicitly been saved as false
          blankFields: props.blankFields !== false ? true : false,
          ...getConditionallyIncludeDataFromObject(props)
        };
      }

      // init short lived state variables
      this.state = {
        currentTab: 'basic',
        errorMap: {},
        ...this.state
      }
      this.handleOkBtn = this.handleOkBtn.bind(this);
      this.handleChangeObfuscated = this.handleChangeObfuscated.bind(this);
      this.handleAddInfoIcon = this.handleAddInfoIcon.bind(this);
      this.handleAddInfoIconText = this.handleAddInfoIconText.bind(this);
  }

  handleNameChange = (name) => {
    if(this.props.studyStore.readonlyMode) return;
    if(!this.props.id) {
      let dbName = Validator.cleanForDBSectionName(name);
      this.setState({sectionLabel: name, sectionName: dbName})
    } else {
      this.setState({sectionLabel: name})
    }

  }

  handleChangeRoles = (name, value) => {
    if (this.props.studyStore.readonlyMode) return;
    this.setState({
      [name]: value,
    });
  }

  handleDbNameChange = (value) => {
    if(this.props.studyStore.readonlyMode) return;
   this.setState({sectionName: value});
  }

  validate = () => {
    let errorMapBasic = {};
    let errorMapAdvanced = {};
    this.validateSectionLabel(errorMapBasic, this.state.sectionLabel);
    this.validateSectionName(errorMapBasic, this.state.sectionName, this.props.id);
    if (this.state.usingVisibility) {
      Validator.notEmpty(errorMapAdvanced, "The controlled by field", this.state.controlDisplayField, "controlDisplayField");
      Validator.notEmpty(errorMapAdvanced, "The controlled by field value", this.state.controlDisplayValue, "controlDisplayValue");
      Validator.notEmpty(errorMapAdvanced, "The controlled field visibility", this.state.controlDisplayShowHide, "controlDisplayShowHide");
    }
    if (this.state.conditionallyIncludeChecked) {
      Validator.notEmpty(errorMapAdvanced, "The conditional field", this.state.conditionallyIncludeFieldPath, "conditionallyIncludeFieldPath");
      Validator.notEmpty(errorMapAdvanced, "The conditional field value", this.state.conditionallyIncludeValue, "conditionallyIncludeValue");
    }
    let currentTab = Validator.getNewTab(this.state.currentTab, errorMapBasic, errorMapAdvanced);
    let errorMap = {...errorMapBasic, ...errorMapAdvanced};
    this.setState({
      currentTab,
      errorMap
    });
    let passed = Object.keys(errorMap).length == 0;
    return passed;
  }

  validateSectionLabel(errorMap, sectionLabel) {
    let validation = Validator.notEmpty(errorMap, "The Title field", sectionLabel, "sectionLabel");
    if (validation == 'OK') {
      validation = Validator.validXML(errorMap, 'The title', sectionLabel, "sectionLabel");
    }
    return validation;
  }

  validateSectionName(errorMap, sectionName, id) {
    let validation = Validator.notEmpty(errorMap, "The DB Name field", sectionName, "sectionName");
    if (validation == 'OK') {
      validation = Validator.validDBSectionName(errorMap, "The section database name", sectionName, "sectionName");
    }
    if (validation == 'OK') {
      validation = Validator.isUnique(errorMap, 'sectionName', 'The DB name', sectionName, id);
    }
    return validation;
  }

    handleOkBtn = () => {
      if(this.validate()){
        let section = {
          id: this.props.id,
          sectionName: this.state.sectionName,
          sectionLabel: this.state.sectionLabel,
          indexed: this.state.indexed,
          fixedIndex: this.state.fixedIndex,
          reversedIndex: this.state.reversedIndex,
          controlDisplayValue: this.state.controlDisplayValue,
          controlDisplayField: this.state.controlDisplayField,
          controlDisplayShowHide: this.state.controlDisplayShowHide,
          controlDisplayType: this.state.controlDisplayType,
          canEdit: this.state.canEdit,
          addInfoIcon: this.state.addInfoIcon,
          addInfoIconText: this.state.addInfoIconText,
          obfuscated: this.state.obfuscated,
          blankFields: this.state.blankFields,
          ...getConditionallyIncludeDataFromObject(this.state)
        }
        Actions.addOrEditSection(section);
      }
    }

    handleChange = name => event => {
      this.handleValueChange(name)(event.target.value)
    };

    handleValueChange = name => value => {
      if(this.props.studyStore.readonlyMode) return;
      this.setState({
        [name]: value,
      });
    }

    handleCheckboxChange = name => event => {
      if(this.props.studyStore.readonlyMode) return;
      this.setState({
        [name]: event.target.checked
      });
    };

    handleIndexed = (e) => {
      if(this.props.studyStore.readonlyMode) return;
      this.setState({
        indexed: e.target.value !== 'normal',
      });
  };

  handleChangeUsingVisibility = (e) => {
    if(this.props.studyStore.readonlyMode) return;
    const checked = e.target.checked;
    this.setState({
      usingVisibility: checked
    });
    if(!checked){
      this.setState({
        controlDisplayField: '',
        controlDisplayValue: '',
        controlDisplayShowHide: '',
        controlDisplayType: ''
      });
    }
  }

  handleChangeConditionallyIncludeChecked = (e) => {
    if(this.props.studyStore.readonlyMode) return;
    const checked = e.target.checked;
    this.setState({
      conditionallyIncludeChecked: checked
    });
    if(!checked){
      this.setState(conditionallyIncludeInitialState);
    }
  }

  handleFieldsChange = (name, values) => {
    if(this.props.studyStore.readonlyMode) return;
    let concatenated = values.join();
    console.log("TRACE setting section state")
    this.setState({
      [name] : concatenated
    });
  }

  handleBlankOrNot = (val) => {
    if(this.props.studyStore.readonlyMode) return;
    this.setState({
      controlDisplayValue: val
    })
  }

  handleChangeObfuscated(e) {
    this.setState({ obfuscated: e.target.checked });
  }

  handleAddInfoIcon(e) {
    this.setState({ addInfoIcon: e.target.checked });
  }
  handleAddInfoIconText(e) {
    this.setState({ addInfoIconText: e.target.value });
  }
  render() {
    return (
      <div>
        <Dialog open={this.props.formStore.showDialog} onClose={() => Actions.closeDialog()}  PaperComponent={this.props.paperComponent} fullScreen={this.props.fullScreen}>
          <ResizeDialogTitle
            title="Section Properties"
            titleId="form-dialog-title"
            fullScreen={this.props.fullScreen}
            handleResize={this.props.handleResize}
          />
          <DialogContent>
            <AppBar position="static">
              <Tabs value={this.state.currentTab}
                    onChange={(e, val) => this.setState({ currentTab: val })}>
                <Tab value="basic" label="Basic" />
                <Tab value="advanced" label="Advanced" />
              </Tabs>
            </AppBar>
            {this.state.currentTab === 'basic'
              ? <BasicContent sectionLabel={this.state.sectionLabel}
                              sectionName={this.state.sectionName}
                              indexed={this.state.indexed}
                              fixedIndex={this.state.fixedIndex}
                              reversedIndex={this.state.reversedIndex}
                              handleChange={this.handleChange}
                              handleNameChange={this.handleNameChange}
                              handleDbNameChange={this.handleDbNameChange}
                              handleCheckboxChange={this.handleCheckboxChange}
                              handleIndexed={this.handleIndexed}
                              errors={this.state.errorMap}
                              validateSectionLabel={this.validateSectionLabel}
                              validateSectionName={this.validateSectionName}
                              />
              : <this.AdvancedContent usingVisibility={this.state.usingVisibility}
                                      handleChange={this.handleChange}
                                      handleValueChange={this.handleValueChange}
                                      handleChangeUsingVisibility={this.handleChangeUsingVisibility}
                                      fieldNames={this.props.formStore.getAllNamesOfType('field')}
                                      controlDisplayField={this.state.controlDisplayField}
                                      controlDisplayValue={this.state.controlDisplayValue}
                                      controlDisplayShowHide={this.state.controlDisplayShowHide}
                                      controlDisplayType={this.state.controlDisplayType}
                                      handleFieldsChange={this.handleFieldsChange}
                                      handleBlankOrNot={this.handleBlankOrNot}
                                      handleChangeRoles={this.handleChangeRoles}
                                      handleChangeObfuscated={this.handleChangeObfuscated}
                                      handleCheckboxChange={this.handleCheckboxChange}
                                      obfuscated={this.state.obfuscated}
                                      canEdit={this.state.canEdit}
                                      handleAddInfoIcon={this.handleAddInfoIcon}
                                      handleAddInfoIconText={this.handleAddInfoIconText}
                                      addInfoIcon={this.state.addInfoIcon}
                                      addInfoIconText={this.state.addInfoIconText}
                                      blankFields={this.state.blankFields}
                                      errors={this.state.errorMap}
                                      />
            }
          </DialogContent>
          <DialogActions >
            <Button onClick={this.handleOkBtn}>Ok</Button>
            <Button onClick={() => Actions.closeDialog()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  AdvancedContent = (props) => {
    return (
      <React.Fragment>
        <FormControl fullWidth margin="dense">
          <FormControlLabel
            control={
              <Checkbox
                checked={props.obfuscated}
                onChange={props.handleChangeObfuscated}
              />
            }
            label={
              <div>
                Encrypt field values in this Section
                <Info>
                  Adds an extra layer of security by encrypting your stored data
                </Info>
              </div>
            }
            labelPlacement="end"
          />
        </FormControl>
        <div className="textField">
          <RolesField label="Editable by Roles" fullWidth name="canEdit" value={props.canEdit}
                      onChange={props.handleChangeRoles}/>
        </div>
        <fieldset>
          <legend style={{ fontSize: '1.2em' }}>
            <Checkbox checked={props.addInfoIcon}
                      onChange={(e) => props.handleAddInfoIcon(e)} />
            <Label>Add Info Icon</Label>
            <Info>
              <Label>
                Add info icon to this field
              </Label>
            </Info>
          </legend>
          {props.addInfoIcon &&
          <TextField label="Text"
                     value={props.addInfoIconText}
                     onChange={(e) => props.handleAddInfoIconText(e)} />
          }

        </fieldset>
        <AppDisplayFormGroup
          errors={props.errors}
          usingVisibility={props.usingVisibility}
          handleChangeUsingVisibility={props.handleChangeUsingVisibility}
          controlDisplayField={props.controlDisplayField}
          handleChangeControlDisplayField={props.handleFieldsChange}
          controlDisplayValue={props.controlDisplayValue}
          handleChangeControlDisplayValue={props.handleValueChange("controlDisplayValue")}
          controlDisplayShowHide={props.controlDisplayShowHide}
          handleChangeControlDisplayType={props.handleValueChange("controlDisplayType")}
          controlDisplayType={props.controlDisplayType}
          handleChangeControlDisplayShowHide={props.handleChange("controlDisplayShowHide")}
          blankFields={props.blankFields}
          handleChangeBlankFields={props.handleCheckboxChange("blankFields")}
          componentType="Section"
        />
        <ConditionallyIncludeSection
          errors={props.errors}
          handleChange={this.handleChange}
          handleValueChange={this.handleValueChange}
          handleChangeConditionallyIncludeChecked={this.handleChangeConditionallyIncludeChecked}
          currentView={this.props.studyStore.currentView.id}
          conditionallyIncludeChecked={this.state.conditionallyIncludeChecked}
          conditionallyIncludeType={this.state.conditionallyIncludeType}
          conditionallyIncludeFieldPath={this.state.conditionallyIncludeFieldPath}
          conditionallyIncludeValue={this.state.conditionallyIncludeValue}/>
      </React.Fragment>
    )
  }
}

function BasicContent(props) {
  const isRepeatingVal = props.indexed ? "repeating" : "normal";
  let hasErrorSectionLabel = "sectionLabel" in props.errors && (props.validateSectionLabel(props.errors, props.sectionLabel) != 'OK');
  let hasErrorSectionName = "sectionName" in props.errors && (props.validateSectionName(props.errors, props.sectionName) != 'OK');

  return (
    <React.Fragment>
      <TextField label="Title"
                 value={props.sectionLabel}
                 onChange={(e) => props.handleNameChange(e.target.value)} required
                 className={hasErrorSectionLabel ? "error_field" : undefined}/>
      <TextField label="DB Name"
                 value={props.sectionName}
                 onChange={(e) => props.handleDbNameChange(e.target.value)} required
                 className={hasErrorSectionName ? "error_field" : undefined}/>
      <span style={{display: 'flex'}}>
        {hasErrorSectionLabel && <span className="errorMsg">{props.errors.sectionLabel}</span>}
        {hasErrorSectionName && <span className="errorMsg" style={{marginRight: 0, marginLeft: 'auto'}}>{props.errors.sectionName}</span>}
      </span>
      <br/>
      <FormControl component="fieldset" >
        <FormLabel component="legend">
          Section Table Type
          <Info>
            A repeating section will duplicate its contents once the user has entered data in any of its fields.
            Only a single table should be used in a repeating section.  A normal section allows multiple tables.
          </Info>
        </FormLabel>
        <RadioGroup value={isRepeatingVal} onChange={(e) => props.handleIndexed(e)}>
          <FormControlLabel value="normal" control={<Radio/>} label="Normal" />
          <FormControlLabel value="repeating"  control={<Radio/>} label="Repeating" />
        </RadioGroup>
        {props.indexed &&
        <div>
          <div class="fieldWithInfo">
            <TextField label="Fixed Index"
                       value={props.fixedIndex}
                       onChange={props.handleChange('fixedIndex')}
                       style={{width: '100px'}}/>
            <Info>
              Normally, a repeating section will create new rows as needed based on user input.
              Setting a fixed index here will mean that the section will have a fixed number of rows to begin with, and no more can be added.
            </Info>
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox checked={props.reversedIndex}
                          onChange={props.handleCheckboxChange('reversedIndex')}/>
              }
              label="Reverse Index"/>
            <Info>
              Setting this reverses the normal top-to-bottom layout of
              a repeating section, instead showing the fields bottom-to-top.
            </Info>
          </div>
        </div>
        }
      </FormControl>
    </React.Fragment>
  )
}

