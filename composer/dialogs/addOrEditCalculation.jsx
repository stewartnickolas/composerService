import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { observer, inject } from 'mobx-react'
import Actions from '../data/actions.js'
import Validator from '../data/validator.js'
import Info from '../interface/info.jsx'
import TriggerRow, {triggersWithoutValue} from './triggerRow.jsx'
import Label from '../interface/components/label.jsx'
import FieldFinder from '../interface/components/fieldFinder.jsx'
import ResizeDialogTitle from '../interface/ResizeDialogTitle.jsx';
import { DialogType } from "./dialogTypes";
import Switch from "@material-ui/core/Switch";

@inject('studyStore', 'formStore', 'tldStore')
@observer
export default class AddOrEditCalculation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editCheckType: '',
      attributes: {},
      triggers: [],
      allTriggersRequired: true,
      errorMap: {},
      ...this.props
    };

    this.handleAddTrigger = this.handleAddTrigger.bind(this);
    this.handleRemoveTrigger = this.handleRemoveTrigger.bind(this);
    this.handleChangeTrigger = this.handleChangeTrigger.bind(this);
    this.handleTriggerRequirements = this.handleTriggerRequirements.bind(this);
    this.handleOkBtn = this.handleOkBtn.bind(this);
    this.handleAttrChange = this.handleAttrChange.bind(this);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
    this.prevNextEditCheck = this.prevNextEditCheck.bind(this);
  }

  handleAddTrigger() {
    if(this.props.studyStore.readonlyMode) return;
    let trigs = this.state.triggers.slice();
    trigs.push({
      id: 'trigger_' + (this.state.triggers.length + 1),
      triggerType: '',
      fields: '',
      value: ''
    });
    this.setState({
      triggers: trigs
    })
  }

  handleRemoveTrigger(index) {
    if(this.props.studyStore.readonlyMode) return;
    let trigs = this.state.triggers.slice();
    trigs.splice(index, 1);
    this.setState({
      triggers: trigs
    })
  }

  handleChangeTrigger(index, name, val) {
    if(this.props.studyStore.readonlyMode) return;
    let triggers = this.state.triggers.slice();
    let trigger = Object.assign({}, triggers[index]);
    if (name == 'triggerType' && triggersWithoutValue.indexOf(val) >= 0) {
      trigger.value =  ''
    }
    trigger[name] = val;
    triggers[index] = trigger;
    this.setState({
      triggers
    });
  }

  handleTriggerRequirements(event) {
    if(this.props.studyStore.readonlyMode) return;
    this.setState({
      allTriggersRequired: event.target.checked
    });
  }

  validateAndClean() {
    let errorMap = {};
    const tag = this.props.tldStore.tldInfo.calcs[this.state.editCheckType];
    Validator.notEmpty(errorMap, "A calculation type", this.state.editCheckType, "editCheckType");
    if(tag){
      for(let required of tag.requiredAttributes){
        Validator.notEmpty(errorMap, "The attribute " + required.name, this.state.attributes[required.name], "requiredAttributes." + required.name);
      }
    }
    for(let trigger of this.state.triggers){
      Validator.notEmpty(errorMap, "A trigger type", trigger.triggerType, "triggerTypes." + trigger.id);
      Validator.notEmpty(errorMap, "The trigger fields attribute", trigger.fields, "triggerFields." + trigger.id);
      const triggerTag = this.props.tldStore.tldInfo.constraints[trigger.triggerType];
      if(triggerTag){
        for(let required of triggerTag.requiredAttributes){
          if(required.name === "value"){
            Validator.notEmpty(errorMap, "The attribute " + required.name, trigger.value, "triggerValues." + trigger.id);
          }
        }
      }
     }
    //remove any attributes that are empty, as empty tags can cause problems with tag processing in Vision
    for(const [key, value] of Object.entries(this.state.attributes)){
      if(value.length === 0){
        delete this.state.attributes[key];
      }
    }
    this.setState({
      errorMap
    })
    let passed = Object.keys(errorMap).length === 0;
    return passed;
  }

  handleOkBtn() {
    if (this.validateAndClean()) {
      let constraint = {
        id: this.props.id,
        _type: 'calculation',
        editCheckType: this.state.editCheckType,
        attributes: this.state.attributes,
        triggers: this.state.triggers,
        allTriggersRequired: this.state.allTriggersRequired
      }
      Actions.addOrEditCalculation(constraint);
    }
  }

  handleChange = name => event => {
    if(this.props.studyStore.readonlyMode) return;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleTypeChangeEvent = event => {
    if(this.props.studyStore.readonlyMode) return;

    const newType = event.target.value,
          tagDef = this.props
            .tldStore
            .tldInfo
            .calcs[newType];

    // collect new attributes,
    // which are the old attrs with irrelevant attributes removed,
    // where 'irrelevant' = not an attribute for the new calc type
    const newAttrs = {};
    for (let attrName in this.state.attributes) {         // loop over
      console.log("Has own property", this.state.attributes.hasOwnProperty(attrName));
      if (this.state.attributes.hasOwnProperty(attrName)) {
        if (tagDef.requiredAttributes.some(attr => attr.name === attrName)          // is it an attribute
            || tagDef.optionalAttributes.some(attr => attr.name === attrName)) {   // for calc type
          newAttrs[attrName] = this.state.attributes[attrName];
        }
      }

    }

    this.setState({
      editCheckType: newType,
      attributes: newAttrs
    })
  };

  handleAttrChange(attr, value) {
    if(this.props.studyStore.readonlyMode) return;
    let tempAttrs = Object.assign({}, this.state.attributes);
    if(attr.inputType === 'bool'){
      if(value === 'true'){
        tempAttrs[attr.name] = 'true';
      } else {
        delete tempAttrs[attr.name];
      }
    } else {
      tempAttrs[attr.name] = value;
    }
    this.setState({
      attributes: tempAttrs
    });
    //this.forceUpdate();
  }

  handleFieldsChange(name, values) {
    if(this.props.studyStore.readonlyMode) return;
    let concatenated = values.join();
    
    if (name === 'calculatedField' && concatenated.includes("<%=")) {
      /** User is injecting scriptlet into the 'calculatedField' attribute of a calculation. */
      /** In order for the jsp to parse this properly we need to replace single quotes with double quotes. */
      /** Desired output in jsp: <calculate:setValue calulatedField='<%= currentForm.showText("a_field") %>' /> */
      /** See JspBuilder.buildCalculation() & JspBuilder.enquoteAttributeValue() for more details. */
      concatenated = concatenated.replaceAll("'", "\"");
    }

    let tempAttrs = Object.assign({}, this.state.attributes);
    tempAttrs[name] = concatenated;
    this.setState({
      attributes: tempAttrs
    });
  }

  prevNextEditCheck(deltaIndex) {
    if (isNaN(this.props.index) || isNaN(deltaIndex) || deltaIndex == 0) {
      return;
    }
    let editChecks = this.props.formStore.formData.calculations;
    let newIndex = this.props.index + deltaIndex;
    let image = deltaIndex > 0 ? "/vision/interface/themes/default/img/next01_grey.png" : "/vision/interface/themes/default/img/back01_grey.png";
    let editCheck = editChecks.get(newIndex);
    if (editCheck == undefined) return;
    return (
        <NavArrowButton index={newIndex}
                        image={image}
                        dialogToOpen={DialogType.ADD_OR_EDIT_CALCULATION}
                        editCheck={editCheck}/>
    )
  }

  render() {
    const { triggers } = this.state;
    const tag = this.props.tldStore.tldInfo.calcs[this.state.editCheckType];
    console.log(this.state.editCheckType + " : " + this.props.tldStore.tldInfo);
    let hasErrorEditCheckType = "editCheckType" in this.state.errorMap && (Validator.notEmpty(this.state.errorMap, "A calculation type", this.state.editCheckType, "editCheckType") != 'OK');
    return (
      <div>
        <Dialog open={true} onClose={() => Actions.closeDialog()} PaperComponent={this.props.paperComponent} fullScreen={this.props.fullScreen}>
          <ResizeDialogTitle
            title={`Calculation Properties: ${this.props.id || ''}`}
            titleId="form-dialog-title"
            fullScreen={this.props.fullScreen}
            handleResize={this.props.handleResize}
            navBtn={this.prevNextEditCheck}
          />
          <DialogContent>
            <div style={{ minWidth: '500px' }}>
              <div  class="fieldWithInfo">
                <FormControl style={{minWidth: '150px'}} className={hasErrorEditCheckType ? "error_field" : undefined} >
                  <InputLabel>Type</InputLabel>
                  <Select value={this.state.editCheckType} onChange={this.handleTypeChangeEvent} autoWidth={true}>
                    {calcTypes.map((item, i) =>
                      <MenuItem key={'calc_type_' + i} value={item}><Label>{item}</Label></MenuItem>
                    )}
                  </Select>
                </FormControl>
                {tag &&
                  <Info>{tag.description}</Info>
                }
              </div>
              {hasErrorEditCheckType && <div className="errorMsg">{this.state.errorMap.editCheckType}</div>}
              <p />
              {tag &&
                <div>
                  <h2><Label>Required Attributes</Label></h2>
                  <RequiredAttrs formStore={this.props.formStore} selectedAttrs={this.state.attributes} handleAttrChange={this.handleAttrChange} handleFieldsChange={this.handleFieldsChange} tag={tag} errors={this.state.errorMap}/>
                  <h2><Label>Optional Attributes</Label></h2>
                  <OptionalAttrs formStore={this.props.formStore} selectedAttrs={this.state.attributes} handleAttrChange={this.handleAttrChange} handleFieldsChange={this.handleFieldsChange} tag={tag} />
                </div>
              }
              <p />
              <h2>Triggers</h2>
              {(this.state.triggers.length > 1) &&
              <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
              >
                <h4>
                  <Label>Require all conditions to trigger</Label>
                </h4>
                <Info>By default, this calculation will only be triggered if all of the following conditions are met. If turned off, calculation will trigger when one or more conditions is met.</Info>
                <Switch
                    checked={this.state.allTriggersRequired}
                    onChange={this.handleTriggerRequirements}
                    value={true}
                />
              </div>
              }
              {console.log(this.state.triggers.length)}
              {triggers.map((trigger, index) =>
                <TriggerRow key={trigger.id} id={trigger.id} index={index} handleChangeTrigger={this.handleChangeTrigger} handleRemoveTrigger={this.handleRemoveTrigger} {...trigger} errors={this.state.errorMap} />
              )}
              <Button onClick={this.handleAddTrigger}>Add Trigger</Button>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOkBtn}>Ok</Button>
            <Button onClick={() => Actions.closeDialog()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

const RequiredAttrs = (props) => {
  return (
    props.tag.requiredAttributes.map((attr, index) => {
      const selectedVal = !props.selectedAttrs[attr.name] ? '' : props.selectedAttrs[attr.name];
      console.log('selected val: ' + JSON.stringify(props.selectedattrs));
      let hasError = "requiredAttributes." + attr.name in props.errors && (Validator.notEmpty(props.errors, "The attribute " + attr.name, selectedVal, "requiredAttributes." + attr.name) != 'OK');
      return (
        <div key={"attr_" + index}>
          <div className={`fieldWithInfo ${hasError ? "error_field" : ""}`}>
          {attr.inputType === 'options' &&
            <FormControl style={{ minWidth: '140px' }}>
              <InputLabel>{attr.name}</InputLabel>
              <Select value={selectedVal} onChange={(e) => props.handleAttrChange(attr, e.target.value)} autoWidth={true}>
                {attr.inputOptions.map((item, i) =>
                  <MenuItem key={'opt_' + i} value={item}><Label>{item}</Label></MenuItem>
                )}
              </Select>
            </FormControl>
          }
          {attr.inputType === 'field' &&
            <div className="textField">
            {attr.name === 'calculatedField' &&
              <FieldFinder label={attr.name} info={attr.description} name={attr.name} value={selectedVal} onChange={props.handleFieldsChange} limit={1} />
            }
            {attr.name !== 'calculatedField' &&
              <FieldFinder label={attr.name} info={attr.description} name={attr.name} value={selectedVal} onChange={props.handleFieldsChange} skipCategory={true} />
            }
            </div>
          }
          {(attr.inputType !== 'options' && attr.inputType !== 'field') &&
            <div class="textField">
              <TextField fullWidth label={attr.name} value={selectedVal} onChange={(e) => props.handleAttrChange(attr, e.target.value)} />
            </div>
          }
          {attr.inputType !== 'field' &&
            <Info>{attr.description}</Info>
          }
          </div>
          {hasError && <div className="errorMsg">{props.errors["requiredAttributes." + attr.name]}</div>}
        </div>
      );
    })
  );
}

const OptionalAttrs = (props) => {
  return (
    props.tag.optionalAttributes.map((attr, index) => {
      const selectedVal = !props.selectedAttrs[attr.name] ? '' : props.selectedAttrs[attr.name];
      return (
        <div key={"attr_" + index}>
          <div className="fieldWithInfo">
          {attr.inputType === 'options' &&
            <FormControl style={{ minWidth: '140px' }}>
              <InputLabel>{attr.name}</InputLabel>
              <Select value={selectedVal} onChange={(e) => props.handleAttrChange(attr, e.target.value)} autoWidth={true}>
                {attr.inputOptions.map((item, i) =>
                  <MenuItem key={'opt_' + i} value={item}><Label>{item}</Label></MenuItem>
                )}
              </Select>
            </FormControl>
          }
          {attr.inputType === 'string' &&
            <div class="textField">
              <TextField fullWidth label={attr.name} value={selectedVal} onChange={(e) => props.handleAttrChange(attr, e.target.value)} />
            </div>
          }
          {attr.inputType === 'field' &&
          <div className="textField">
            <FieldFinder label={attr.name} name={attr.name} info={attr.description} value={selectedVal} onChange={props.handleFieldsChange} skipCategory={true} />
          </div>
          }
          {attr.inputType === 'numeric' &&
            <div class="textField">
              <TextField fullWidth label={attr.name} type="number" value={selectedVal} onChange={(e) => props.handleAttrChange(attr, e.target.value)} />
            </div>
          }
          {attr.inputType === 'bool' &&
              <FormControlLabel value={attr.name} checked={selectedVal !== undefined && selectedVal === 'true'} control={<Checkbox onChange={(e) => props.handleAttrChange(attr, e.target.checked ? 'true' : 'false')} />} label={attr.name} />
          }
          {attr.inputType !== 'field' &&
          <div>
            <Info>{attr.description}</Info>
          </div>
          }
          </div>
        </div>
      );
    })
  );
}

const calcTypes = [
  'setValue',
  'age',
  'concatenate',
  'concatenateDate',
  'count',
  'countNonBlank',
  'daysBetween',
  'daysFromTo',
  'daysFromToFractional',
  'dayOfWeek',
  'datePlusDays',
  'datePlusHours',
  'datePlusMinutes',
  'datePlusMonths',
  'difference',
  'earliestDate',
  'earliestDateAfter',
  'email',
  'exponential',
  'latestDate',
  'latestDateBefore',
  'linearComb',
  'maximum',
  'mean',
  'minimum',
  'minFromTo',
  'hoursMinFromTo',
  'hrMinToNumber',
  'product',
  'percentChange',
  'quotient',
  'roundUp',
  'setDateTime',
  'sum',
  'setBlank',
  'setLastModifiedBy',
  'setLastModifiedRole',
  'setLastModifiedTime',
  'upperCase',
  '--------ADVANCED CALCULATIONS--------',
  'ageAtInYrsMths',
  'arithmetic',
  'copyPatientFormsToStudy',
  'copySite',
  'custom',
  'fileUploadParser',
  'notify',
  'notifyLater',
  'cancelNotification',
  'countBlankTableElementsWhereFieldEquals',
  'countNonBlankTableElementsWhereFieldEquals',
  'countNonZero',
  'countOwnersWhereFieldIsEqual',
  'generateRandomNumber',
  'hideForm',
  'unhideForm',
  'invokeRemoteEditChecksFor',
  'nextPatientNumber',
  'setFromPatientLookup',
  'setFromFieldLookup',
  'setFromSiteLookup',
  'setFromStudyLookup',
  'setToSiteLookup',
  'setToStudyLookup',
  'setState',
  'setSurvey',
  'setValueRandom',
  'signPdf',
  'subString',
  'sumFieldsWhereOtherFieldEquals',
  'sumTableElementsWhereFieldEquals',
];

function NavArrowButton(props) {
  return (
    <Button onClick={() => {
              Actions.openDialog(props.dialogToOpen, { index:props.index, ...props.editCheck });
            }}
    ><img src={props.image}/></Button>
  );
}
