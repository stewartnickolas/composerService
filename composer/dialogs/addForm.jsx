import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import TextField from '@material-ui/core/TextField';
import { inject, observer } from 'mobx-react';
import React from 'react';
import Actions from '../data/actions.js';
import API from '../data/api.js';
import { FormDataDoc } from '../data/formStore.js';
import Validator from '../data/validator.js';
import Label from '../interface/components/label.jsx';
import Info from '../interface/info.jsx';
import FormHelperText from '@material-ui/core/FormHelperText';
import ResizeDialogTitle from '../interface/ResizeDialogTitle.jsx';


export const validateFormLabel = (errorMap, label) => {
  return Validator.notEmpty(errorMap, "The form label", label, "formLabel");
}

export const validateFormName = (errorMap, name, id, group) => {
  let validation = Validator.notEmpty(errorMap, "The form name", name, "formName");
  if (validation == 'OK') {
    validation = Validator.validDBFormName(errorMap, 'The form database name', name, "formName");
    if (validation == 'OK') {
      validation = Validator.isUnique(errorMap, 'formName', 'The form database name', name, id, group);
    }
  }
  return validation;
}

@inject('studyStore')
@observer
export default class AddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      formLabel: '',
      formName: '',
      formType: 'normal',
      canEdit: '',
      canView: '',
      startFromTemplate: 'false',
      templateId: '',
      errorMap: {},
      predefinedForms: {},
      formLibraryOptions: {},
      formLibraryStudySelection: '',
      importing: false,
      ...props
    };
    const {currentView, studyData} = this.props.studyStore;
    const defaultCanEdit = currentView.id === "site" ? studyData.prefs.defaultSiteCanDos['canEdit'] : studyData.prefs.defaultPatientCanDos['canEdit'];
    const defaultCanView = currentView.id === "site" ? studyData.prefs.defaultSiteCanDos['canView'] : studyData.prefs.defaultPatientCanDos['canView'];
    
    this.state.canEdit = defaultCanEdit;
    this.state.canView = defaultCanView;

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.getTemplates = this.getTemplates.bind(this);
    this.handleAddform = this.handleAddForm.bind(this);
    this.validateStep = this.validateStep.bind(this);
    this.handleChangeCanDo = this.handleChangeCanDo.bind(this);
  }

  handleChangeCanDo(name, value){
    this.setState({
      [name]: value
    })
  }

  handleAddForm() {
    if(!this.validateStep(this.state.activeStep)){
      return;
    }
    let formData = new FormDataDoc();
    let form = {
      formLabel: this.state.formLabel,
      formType: this.state.formType,
      formName: this.state.formName,
      canEdit: this.state.canEdit,
      canView: this.state.canView,
      onDemand: this.state.onDemand
    }
    Object.assign(formData, form);
    let templateId = this.state.startFromTemplate !== 'false' || this.state.formType === 'provided' || this.state.firstInstance === 'false' ? this.state.templateId : '';
    console.log('template id: ' + templateId);
    Actions.addForm(formData, templateId, this.state.firstInstance === 'true');
  }

  handleImportForm(e){
    const file = e.target.files[0];
    Actions.importFormFromJSON(file, this.state.formType);
  }

  handleNameChange(name) {
    let dbName = Validator.cleanForDBFormName(name);
    this.setState({ formLabel: name, formName: dbName })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value.trim(),
    });
  };

  handleChangeType(e){
    this.setState({
      formType: e.target.value,
      startFromTemplate: 'false',
      templateId: '',
      firstInstance: undefined
    })
  }

  handleCheckboxChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  handleNext() {
    if(this.validateStep(this.state.activeStep)){
      this.setState({
        activeStep: (this.state.activeStep + 1)
      })
    }
  }

  handlePrevious() {
      this.setState({
        activeStep: (this.state.activeStep - 1),
        errorMap: {},
      })
  }

  handleSelectTemplate(form) {
    this.setState({
      templateId: form.refId
    })
    let alreadyInGroup = false;
    for(let formRef of this.props.studyStore.currentGroup.formRefs){
      if(formRef.refId === form.refId) 
        alreadyInGroup = true;
    }
    if(this.state.formType === 'shared' && !alreadyInGroup){
      this.setState({
        formLabel: form.label,
        formName: form.name
      });
    }
    console.log("template: " + this.state.templateId);
  }

  validateTemplate(errorMap) {
    if (this.state.startFromTemplate !== 'false' || this.state.formType === 'provided'
          || (this.state.formType === 'shared' && this.state.firstInstance === 'false')) {
      return Validator.notEmpty(errorMap, 'When starting from a template, using a provided form, or working from an existing shared form, a form selection', this.state.templateId, "template");
    }
    return 'OK';
  }

  validateSharedForm(errorMap) {
    if (this.state.formType === 'shared') {
      return Validator.notEmpty(errorMap, "The first instance option ", this.state.firstInstance, "firstInstance");
    }
    return 'OK';
  }

  validateStep(stepNumber){
    let errorMap = {};
    switch(stepNumber){
      case 0:
        
        break;
      case 1:
        this.validateTemplate(errorMap);
        this.validateSharedForm(errorMap);
        break;
      case 2:
        validateFormName(errorMap, this.state.formName, this.props.id, this.props.studyStore.currentGroup,);
        validateFormLabel(errorMap, this.state.formLabel);
        break;
    }
    this.setState({
      errorMap,
    })
    let passed = Object.keys(errorMap).length == 0;
    return passed;
  }

  getTemplates() {
    let groups = this.props.studyStore.currentView.groups;
    let forms = [];
    let foundForms = new Set();
    if (this.state.formType !== 'provided') {
      for (let group of groups) {
        for (let form of group.formRefs) {
          if(form.formType !== 'provided'){
            if (form.formType !== 'shared' && this.state.startFromTemplate === 'true' && this.state.firstInstance !== 'false') {
              console.log('adding an unshared form to the list');
              forms.push(form);
            } else if (form.formType === 'shared') {
              if(!foundForms.has(form.refId)){//only add the first instance to the list, since the rest are the same
                foundForms.add(form.refId);
                forms.push(form);
              }
            }
          }
        }
      }
    } else {
      forms = this.state.predefinedForms;
    }
    console.log('found forms ' + forms.length);
    return forms;
  }



  /**
   * Load predefined form options
   */
  componentDidMount() {
    API.getPredefinedForms(this.props.studyStore.currentView.id, (data) => {
      this.setState({
        predefinedForms: data
      })
    });
    API.getFormLibraryOptions((data) => {
      this.setState({
        formLibraryOptions: data
      });
    });
  }

  render() {
    let hasErrorTemplate = "template" in this.state.errorMap && this.validateTemplate(this.state.errorMap) != 'OK';
    let hasErrorFirstInstance = "firstInstance" in this.state.errorMap && this.validateSharedForm(this.state.errorMap) != 'OK';
    let hasErrorFormLabel = "formLabel" in this.state.errorMap && validateFormLabel(this.state.errorMap, this.state.formLabel) != 'OK';
    let hasErrorFormName = "formName" in this.state.errorMap && validateFormName(this.state.errorMap, this.state.formName, this.props.id, this.props.studyStore.currentGroup) != 'OK';
    const showFinish = this.state.activeStep === 2;
    const showLocalShared = this.state.formType === 'shared' && this.state.firstInstance === 'false';
    const showLocal = this.state.formType === 'provided' || showLocalShared;
    const Templates = () => {
      let errorStyle= hasErrorTemplate ? {border: '4px solid red'} : {};
      return (
          <div>
          <div className="formLibraryFolders" style={errorStyle}>
          {showLocal &&
          <div>
            {this.getTemplates().length === 0 &&
            <div>No existing '{this.state.formType}' forms were found.</div>
            }
            {this.getTemplates().map((template, index) =>
                <FormLibraryItem key={"template_" + index} {...template} />
            )}
          </div>
          }
          {!showLocal &&
          <div>
            {this.state.formLibraryOptions.map((study) =>
                <div>
                  <div className="formLibraryStudy" onClick={() => {
                    if(this.state.formLibraryStudySelection === study.name){
                      this.setState({
                        formLibraryStudySelection: undefined
                      });
                    } else {
                      this.setState({
                        formLibraryStudySelection: study.name
                      });
                    }
                  }}>
                    {study.value}
                  </div>
                  {this.state.formLibraryStudySelection === study.name &&
                  study.children.map((form, index) =>
                      <FormLibraryItem key={"template_" + index} refId={form.name} label={form.value} />
                  )}
                </div>
            )}
          </div>
          }
          </div>
          {hasErrorTemplate && <div className="errorMsg">{this.state.errorMap.template}</div>}
          </div>
      );
    };

    const FormLibraryItem = ((props) =>
      <div>
        <div className={"formLibraryItem" + (props.refId === this.state.templateId ? ' formLibraryItemSelected' : '')} id={props.refId} onClick={() => this.handleSelectTemplate(props)}>{props.label}</div>
      </div>
    );

    const Step2Normal = ((props) =>
      <div style={{ textAlign: 'center'}}>
        <h3>Start from Template?</h3>
        <RadioGroup name="formType" value={this.state.startFromTemplate} onChange={this.handleChange('startFromTemplate')} style={{ display: 'block' }}>
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" style={{marginLeft: '0px'}}/>
        </RadioGroup>

        {this.state.startFromTemplate !== 'false' &&
          <Templates />
        }
      </div>
    );

    const Step2Shared = (() =>
      <div style={{ textAlign: 'center' }}>
        Shared forms are forms that will be used in multiple locations throughout the study.
        <span className="red_text"> Each time one instance of a shared form is changed, all instances are <b>automatically</b> updated to match. </span>
        Is this the first instance of this form?
            <RadioGroup name="firstInstance" value={this.state.firstInstance} onChange={this.handleChange('firstInstance')} style={{ display: 'block' }}>
              {hasErrorFirstInstance && <div style={{ display: 'inline-block', position:'relative', width:'25px', height:'25px', top:'11px', left:'30px', borderRadius:'50%', border: "2px solid red", backgroundColor: "#FDD8D6",}}/>}
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              {hasErrorFirstInstance && <div style={{ display: 'inline-block', position:'relative', width:'25px', height:'25px', top:'11px', left:'44px', borderRadius:'50%', border: "2px solid red", backgroundColor: "#FDD8D6",}}/>}
              <FormControlLabel value="false" control={<Radio />} label="No" style={{marginLeft: '0px'}} />
        </RadioGroup>
        {hasErrorFirstInstance && <div className="errorMsg">{this.state.errorMap.firstInstance}</div>}
        {this.state.firstInstance === 'true' &&
          <div>
            <Label>Would you like to start from a template?</Label>
            <RadioGroup name="formType" value={this.state.startFromTemplate} onChange={this.handleChange('startFromTemplate')} style={{ display: 'block' }}>
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" style={{marginLeft: '0px'}}/>
            </RadioGroup>
          </div>
        }
        {(this.state.firstInstance === 'false' || this.state.startFromTemplate === 'true') &&
          <Templates />
        }
      </div>
    );

    const Step2Provided = (() =>
      <div>
        No changes can be made to provided forms. They are default forms designed to fit common needs that are provided 'as-is'.
        Select a Provided form:
          <Templates />
      </div>
    );

    const Step2Imported = (() => 
      <div>
        Select a file to upload <input type="file" onChange={(e) => this.handleImportForm(e)}/>
      </div>
    )
    return (
      <div key="aDivKey">
        <Dialog key="dialogKey" open={true} onClose={() => Actions.closeDialog()} PaperComponent={this.props.paperComponent} fullScreen={this.props.fullScreen} >
          <ResizeDialogTitle
            title="Create Form"
            titleId="form-dialog-title"
            fullScreen={this.props.fullScreen}
            handleResize={this.props.handleResize}
          />
          <DialogContent key="dialogContentKey">
            <Stepper activeStep={this.state.activeStep}>
              <Step>
                <StepLabel>Select a Type</StepLabel>
              </Step>
              <Step>
                <StepLabel>Choose a Template</StepLabel>
              </Step>
              <Step>
                <StepLabel>Name the Form</StepLabel>
              </Step>
            </Stepper>
            {this.state.activeStep === 0 &&
              <div style={{textAlign: 'center'}}>
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
                  <RadioGroup name="formType" value={this.state.formType} onChange={(e) => this.handleChangeType(e)} style={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                    <FormControlLabel value="shared" control={<Radio />} label="Shared" />
                    <FormControlLabel value="provided" control={<Radio />} label="Provided" />
                  </RadioGroup>
                </FormControl>
                <br />
                <FormControlLabel
                  style={{ margin: "10px 0px 10px 0px" }}
                  value="true"
                  control={
                    <Checkbox
                      onChange={this.handleCheckboxChange("onDemand")}
                    />
                  }
                  label="On-Demand"
                  disabled={this.props.studyStore.currentGroup.onDemand}
                />
                <Info>On-Demand forms allow a user to create as many copies of a form as needed.</Info>
                {this.props.studyStore.currentGroup.onDemand && (
                  <FormHelperText color="error" margin="dense">
                    NOTE: On-demand forms are not allowed in on-demand groups,
                    so this option will be disabled until you uncheck
                    'On-demand' for this group
                  </FormHelperText>
                )}
                <p />
              </div>
            }
            {(this.state.activeStep === 1 && this.state.importing && this.state.formType !== 'provided') &&
                <Step2Imported />
            }
            {(this.state.activeStep === 1 && (!this.state.importing || this.state.formType === 'provided')) &&
              <div>
                {this.state.formType === 'normal' &&
                  <Step2Normal />
                }
                {this.state.formType === 'shared' &&
                  <Step2Shared />
                }
                {this.state.formType === 'provided' &&
                  <Step2Provided />
                }
              </div>
            }
            {this.state.activeStep === 2 &&
              <div>
              <div  class="fieldWithInfo">
                <TextField label="Name" value={this.state.formLabel} onChange={(e, val) => this.handleNameChange(e.target.value)} className={hasErrorFormLabel ? "error_field" : undefined}/>
                <Info>The form name as it will appear to the user.</Info>
                <TextField label="DB Name" value={this.state.formName} onChange={this.handleChange('formName')} className={hasErrorFormName ? "error_field" : undefined}/>
                <Info>The form name as it will be stored in the database.  This should be all lower case, and must not contain spaces.</Info>
              </div>
              <div style={hasErrorFormName ? {marginBottom:'54px'} : {}}>
                {hasErrorFormLabel && <span className="errorMsg" style={{display:'inline', position:'absolute'}}>{this.state.errorMap.formLabel}</span>}
                {hasErrorFormName && <span className="errorMsg" style={{display:'inline', position:'absolute', left:'275px',}}>{this.state.errorMap.formName}</span>}
              </div>
              </div>
            }
          </DialogContent>
          <DialogActions>
            { (_showAdvanced && this.state.activeStep === 0) &&
              <div>
                <Button 
                  variant="raised" 
                  value="imported" 
                  color="primary" 
                  style={{marginRight: '180px'}}
                  onClick={() => {this.setState({importing: true, activeStep: 1})}}>
                    Import from File
                </Button>
              </div>
            }
            {this.state.activeStep > 0 &&
              <Button variant="raised" onClick={this.handlePrevious}>Prev</Button>
            }
            {!showFinish &&
              <Button variant="raised" color="primary" onClick={this.handleNext}>Next</Button>
            }
            {showFinish &&
              <Button variant="raised" color="primary" onClick={() => this.handleAddForm()}>Finish</Button>
            }
            <Button onClick={() => Actions.closeDialog()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
