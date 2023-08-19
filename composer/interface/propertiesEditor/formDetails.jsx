import React from 'react';
import {observer, inject} from 'mobx-react'
import Label from '../components/label.jsx'
import Info from '../info.jsx'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Actions from '../../data/actions.js'
import Validator from '../../data/validator.js'
import { action } from 'mobx'
import { validateFormLabel, validateFormName } from "../../dialogs/addForm.jsx";

@inject('studyStore', 'formStore')
@observer
export default class FormDetails extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      history: 'current',
      publishHistory: [],
      formLabel: props.studyStore.currentForm.label,
      formName: props.studyStore.currentForm.name
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStoreNameChange = this.handleStoreNameChange.bind(this);
    this.handleChangeHistory = this.handleChangeHistory.bind(this);
    this.handleFormLibrary = this.handleFormLibrary.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChangeHistory(snapshotId){
    if(snapshotId === 'current'){
      Actions.navigateToForm(this.props.studyStore.currentForm.id);
      this.props.studyStore.currentForm.viewingHistory = undefined;
    } else {
      let revision = this.props.formStore.formData.publishHistory.filter((revision) => revision.snapshotId === snapshotId)[0];
      Actions.viewFormHistory(revision);
    }
  }

  handleFormLibrary(e){
    this.props.studyStore.currentForm.includeInFormLibrary = e.target.checked;
    Actions.saveStudy();
  }

  handleNameChange(name){
    if(this.props.studyStore.readonlyMode) return;
    this.setState({
      formLabel: name,
    });
  }

  handleDbNameChange(name){
    if(this.props.studyStore.readonlyMode) return;
    let dbName = Validator.cleanForDBFormName(name);
    this.setState({
      formName: dbName
    });
  }

  handleStoreNameChange(){
    if(this.props.studyStore.readonlyMode) return;
    Actions.editFormName(this.state.formName, this.state.formLabel);
  }

  handleChangeFormType(e){
    if(this.props.studyStore.readonlyMode) return;
    let type = e.target.value;
    if(type === 'shared'){
      if(!confirm("Are you sure you want to change the form type from 'normal' to 'shared'?  This action not be undone.")){
        return;
      }
    }
    Actions.changeFormType(e.target.value)
  }

  validate() {
    return validateFormLabel({}, this.state.formLabel) == 'OK' &&
    validateFormName({}, this.state.formName, this.props.studyStore.currentForm.id, this.props.studyStore.currentGroup) == 'OK'
  }

  @action handleCheckboxChange(name, e){
    if(this.props.studyStore.readonlyMode) return;
    Actions.editFormProps({
      [name]: e.target.checked
    });
    if (name === 'onDemand') {
      /** Update the formRef in study store. */
      const currFormRef = this.props.studyStore.currentGroup.formRefs.filter(
        (fr) => fr.id === this.props.studyStore.currentForm.id
      )[0];
      currFormRef.onDemand = e.target.checked;
      Actions.saveStudy();
    }
  };

  render(){
    const {currentForm} = this.props.studyStore;
    const {formData} = this.props.formStore;
    const {viewingHistory} = currentForm;
    const selectedRevision = !viewingHistory ? "current" : viewingHistory.snapshotId;
    const currentFormName = currentForm.name;
    let groups = this.props.studyStore.currentView.groups;

    let sharedGroups = [];
    for (let group of groups) {
      for (let form of group.formRefs) {
          if (currentFormName === form.name){
            sharedGroups.push(group.label);
          }
      }
    }

    const listGroups = sharedGroups.map((sharedGroup) =>  <table>{sharedGroup}</table>);

    let formLabelValidation = validateFormLabel({}, this.state.formLabel)
    let hasErrorFormLabel = formLabelValidation == 'OK' ? false : formLabelValidation
    let formNameValidation = validateFormName({}, this.state.formName, this.props.studyStore.currentForm.id, this.props.studyStore.currentGroup)
    let hasErrorFormName = formNameValidation == 'OK' ? false : formNameValidation;

    return(
      <div>
        <h1 style={{marginTop: '0px', color: '#666'}}>Form Properties</h1>
        {!viewingHistory &&

          <div>
        <div style={{fontWeight: 'bold', fontSize: '2em'}}>
          <div style={{padding: '10px'}}>Status: {currentForm.formStatus}</div>
          { currentForm.formStatus === 'in-work' &&
            <span style={{margin: '10px'}}>
            <Button variant="raised" color="primary" onClick={() => Actions.changeFormState("published")}>Publish</Button>
            </span>
          }
          { currentForm.formStatus !== 'in-work' &&
            <span style={{margin: '10px'}}>
              <Button variant="raised" color="primary" onClick={() => Actions.changeFormState("in-work")}>Modify</Button>
            </span>
          }
          {_showAdvanced &&
            <span style={{margin: '10px'}}>
              <Button variant="raised" color="primary" onClick={() => window.location='/vision/composer/export?formId=' + this.props.studyStore.currentForm.refId}>Export</Button>
            </span>
          }
        </div>
        <div>
          {/*<FormControlLabel control={<Checkbox checked={currentForm.includeInFormLibrary} onChange={(e) => this.handleFormLibrary(e) } />} label="Include in Form Library" />*/}
          </div>
          <div>
            <h3><Label>Properties</Label></h3>
            <div>
              <div class="fieldWithInfo">
                <TextField label="Form Title" value={this.state.formLabel}
                           onChange={(e, val) => this.handleNameChange(e.target.value)}
                           onBlur={this.handleStoreNameChange}
                           className={hasErrorFormLabel ? "error_field" : undefined}/>
                <Info>The form name as it will appear to the user</Info>
              </div>
              {hasErrorFormLabel && <span className="errorMsg">{hasErrorFormLabel}</span>}
            </div>
            <div>
              <div class="fieldWithInfo">
                <TextField label="DB Name" value={this.state.formName}
                           onChange={(e, val) => this.handleDbNameChange(e.target.value)}
                           onBlur={this.handleStoreNameChange}
                           className={hasErrorFormName ? "error_field" : undefined}/>
                <Info>The form name as it will be stored in the database. This should be all lower case, and must not
                  contain spaces.</Info>
              </div>
              {hasErrorFormName && <span className="errorMsg">{hasErrorFormName}</span>}
            </div>
            <p/>
            <FormControl component="fieldset">
              <FormLabel component="legend">Form Type
                <Info>
                  <h3>There are three different types of forms:</h3>
                  <ul>
                    <li>
                      <b>Normal:</b> These forms are meant to be unique within the study, and are created with Composer.  You will have the option of starting with a blank canvas, or working from a template.
                    </li>
                    <li>
                      <b>Shared:</b> Shared forms are forms that are <b><i>not</i></b> unique, but instead are shared in multiple locations.  An example would be a visit form that is re-used for several visits without any changes to the form itself.
                    </li>
                    <li>
                      <b>Provided:</b> These are default forms that have been created by Prelude Dynamics to address common needs.  These forms can not be modified.
                    </li>
                  </ul>
                </Info>
              </FormLabel>
              {/*Note: Only allowing transitions from normal to shared right now.  Once a form has been shared, all instances point to the same db document. */}
              {currentForm.formType === 'normal' &&
                <RadioGroup name="formType" value={currentForm.formType} onChange={(e) => this.handleChangeFormType(e)} style={{display: 'flex', flexDirection: 'row'}}>
                  <FormControlLabel value="normal" control={<Radio/>} label="Normal" />
                  <FormControlLabel value="shared" control={<Radio />} label="Shared" />
                </RadioGroup>
              }
              {currentForm.formType === 'shared' &&
                  <h3 className="red_text"> Each time one instance of a shared form is changed, all instances are automatically updated to match. </h3>
              }
              {currentForm.formType !== 'normal' &&
                  <h3 style={{ 'margin-top': '10px', 'margin-bottom': '2px' }}>{currentForm.formType}</h3>
              }
              {currentForm.formType === 'shared' &&
                <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>{listGroups}</td></tr>
              }
            </FormControl>
            <br/>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.onDemand == true}
                    onChange={(e) => this.handleCheckboxChange("onDemand", e)}
                  />
                }
                label={
                  <div>
                    On-demand{" "}
                    <Info>
                      On-Demand forms allow a user to create as many copies of
                      a form as needed.
                    </Info>
                  </div>
                }
                disabled={this.props.studyStore.currentGroup.onDemand}
              />
              {this.props.studyStore.currentGroup.onDemand && (
                <FormHelperText color="error" margin="dense">
                  NOTE: This form is in an on-demand group. On-demand forms
                  are not allowed in on-demand groups, so this option will be
                  disabled until you uncheck 'On-demand' for this group, or
                  move this form to a different group.
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <h2><Label>Changes</Label></h2>
        <div>
          <Label>Last Modified</Label>: {formData.lastEditedDateTime} <Label>by</Label> {formData.lastEditedBy}
        </div>
        <div>
          <Label>Last Published</Label>: {formData.lastPublishedDateTime} <Label>by</Label> {formData.lastPublishedBy}
        </div>
        <div>
          <h2><Label>Version History</Label>
            <Info>You may view the form at each commit state by clicking the radio next to the state.  This will be a read-only mode unless you choose to revert the form to the selected state.</Info>
          </h2>
        </div>
        <FormControl component="fieldset" >
          <FormLabel component="legend">Commits</FormLabel>
          <RadioGroup name="history" value={selectedRevision} onChange={(e, val) => this.handleChangeHistory(val)}>
          <FormControlLabel value="current" 
                            control={<Radio />} 
                            label="Current" />
              {formData.publishHistory.reverse().map((revision, idx) => 
              <FormControlLabel key={revision.snapshotId} 
                                value={revision.snapshotId} 
                                control={<Radio />} 
                                label={revision.dateTime + " by " + revision.fullName} />
              )}
          </RadioGroup>
        </FormControl>
        </div>
        } 
        { !!viewingHistory &&
          <div>
            <div style={{fontColor: "#C33", padding: '20px'}}>
              Viewing revision {viewingHistory.snapshotId} published on {viewingHistory.dateTime} by {viewingHistory.fullName}
            </div>
            <Button variant="raised" onClick={() => Actions.navigateToForm(currentForm.id)}><Label>Return to Current</Label></Button>
            {!this.props.studyStore.readonlyModeAndViewingHistory &&
            <div>
              <br/>
              <br/>
              <Button variant="raised" onClick={() => Actions.revertFormToRevision(viewingHistory.snapshotId)}>
                <Label>Revert Form to this State</Label>
              </Button>
            </div>
            }
          </div>
        }
      </div>
    );
  }

}
