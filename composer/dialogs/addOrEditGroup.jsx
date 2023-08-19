import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Actions from '../data/actions.js'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import { observer, inject } from 'mobx-react'
import Validator from '../data/validator.js'
import Info from '../interface/info.jsx'
import ResizeDialogButton from '../interface/ResizeDialogButton.jsx';
import ResizeDialogTitle from '../interface/ResizeDialogTitle.jsx'

@observer
@inject('studyStore')
export default class AddOrEditGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      label: '',
      onDemand: '',
      errorMap: {},
      startName: props.name,
      ...props
    };
    this.handleOkBtn = this.handleOkBtn.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleLabelChange(label) {
    if(this.props.addOrEdit === 'add') {
      let dbName = Validator.cleanForDBFormName(label);
      this.setState({ label: label, name: dbName })
    } else {
      this.setState({label: label})
    }
  }

  handleCheckboxChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  validate() {
    let errorMap = {};
    this.validateGroupName(errorMap);
    this.validateGroupLabel(errorMap);

    this.setState({
      errorMap
    });
    let passed = Object.keys(errorMap).length === 0;
    return passed;
  }

  validateGroupName(errorMap) {
    let validation = Validator.notEmpty(errorMap, "The group name", this.state.name, "groupName");
    if (validation == 'OK') {
      validation = Validator.validDBFormName(errorMap, 'The group database name', this.state.name, "groupName");
    }
    if (validation == 'OK') {
      if(this.state.name !== this.state.startName){
        validation = Validator.isUnique(errorMap, 'groupName', 'The group database name', this.state.name, this.props.id, this.props.studyStore.currentView);
      }
    }
    return validation;
  }

  validateGroupLabel(errorMap) {
    let validation = Validator.notEmpty(errorMap, "The group label", this.state.label, "groupLabel");
    if (validation == 'OK') {
      validation = Validator.validXML(errorMap, 'The group label', this.state.label, "groupLabel");
    }
    return validation;
  }

  handleOkBtn(addOrEdit) {
    if (this.validate()) {
      let group = {
        id: this.props.id,
        name: this.state.name,
        label: this.state.label,
        onDemand: this.state.onDemand,
      };
      if (addOrEdit === 'add') {
        Actions.addGroup(group);
      } else {
        Actions.updateGroup(group);
      }
    }
  }

  render() {    
    let disableOnDemand = false;
    if (this.props.addOrEdit === 'add') {
      // potential for bug
      // How to update props.studyStore.currentGroup to be "current" on add group dialogue?
    }
    else { // Check that forms in current group being edited aren't already on demand
    for (
      let i = 0;
      i < this.props.studyStore.currentGroup.formRefs.length;
      i++
    ) {
      if (this.props.studyStore.currentGroup.formRefs[i].onDemand) {
        disableOnDemand = true;
        break;
      }
    }
    }

    let hasErrorGroupName = "groupName" in this.state.errorMap && (this.validateGroupName(this.state.errorMap) != 'OK');
    let hasErrorGroupLabel = "groupLabel" in this.state.errorMap && (this.validateGroupLabel(this.state.errorMap) != 'OK');

    return (
      <div>
        <Dialog open={true} onClose={() => Actions.closeDialog()}  PaperComponent={this.props.paperComponent} fullScreen={this.props.fullScreen}>
          <ResizeDialogTitle
            title={`Group Properties ${this.props.fieldName || ''}`}
            titleId="form-dialog-title"
            fullScreen={this.props.fullScreen}
            handleResize={this.props.handleResize}
          />
          <DialogContent>
            <div class="red_text">Please note that any changes to group properties will become active upon publishing the study.</div>
            <div class="fieldWithInfo">
              <TextField label="Group Label" value={this.state.label} onChange={(e) => this.handleLabelChange(e.target.value)} className={hasErrorGroupLabel ? "error_field" : undefined}/>
              <Info>This is the name that will display on the group tab.</Info>
            </div>
            {hasErrorGroupLabel && <div className="errorMsg">{this.state.errorMap.groupLabel}</div>}
            <br />
            <div class="fieldWithInfo">
              <TextField label="Group Database Name" value={this.state.name} onChange={this.handleChange('name')} className={hasErrorGroupName ? "error_field" : undefined}/>
              <Info>This is the name that the form group will use in the database.  It will be present in the final XML.</Info>
            </div>
            {hasErrorGroupName && <div className="errorMsg">{this.state.errorMap.groupName}</div>}
            <br />
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.onDemand}
                    onChange={this.handleCheckboxChange("onDemand")}
                  />
                }
                label={
                  <div>
                    On-demand{" "}
                    <Info>
                      On-Demand groups allow a user to create as many copies of a
                      group as needed. Unscheduled visits are a common usage.
                    </Info>
                  </div>
                }
                disabled={disableOnDemand}
              />
              {disableOnDemand && (
                <FormHelperText>
                  A group cannot be On-demand at the same time a form is
                  On-demand. This checkbox will be disabled until all the forms
                  for this group are not On-demand
                </FormHelperText>
              )}
            </FormControl> 
          </DialogContent>
          <DialogActions >
            <Button onClick={() => this.handleOkBtn(this.props.addOrEdit)}>Ok</Button>
            <Button onClick={() => Actions.closeDialog()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
