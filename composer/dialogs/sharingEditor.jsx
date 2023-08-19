import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { observer, inject } from 'mobx-react'
import Actions from '../data/actions.js'
import Info from '../interface/info.jsx'
import Label from '../interface/components/label.jsx'
import Validator from "../data/validator";

@inject('formStore', 'studyStore')
export default class SharingEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shareRules : {type: 'none', instances:[]},
            errorMap: {}
        }
        if(this.props.element.shareRules && this.props.element.shareRules.type){
            this.state.shareRules = this.props.element.shareRules;
        }

        this.changeShareType = this.changeShareType.bind(this);
        this.handleOkBtn = this.handleOkBtn.bind(this);
    }

    updateShareRule(e, formRefId){
      if(this.props.studyStore.readonlyMode) return;
        let add = e.target.checked;
        let instances = new Set(this.state.shareRules.instances);
        if(add){
            console.log("adding share rule " + formRefId);
            instances.add(formRefId);
        } else {
            console.log("removing share rule " + formRefId);
            instances.delete(formRefId);
        }
        let newShareRules = {
            instances: [...instances],
            type: this.state.shareRules.type
        };
        this.setState({
            shareRules: newShareRules
        });
    }

    changeShareType(t){
      if(this.props.studyStore.readonlyMode) return;
        let shareRules = {...this.state.shareRules};
        if (t === 'none') {
          shareRules.instances = [];
        }
        shareRules.type = t;

        this.setState({
          shareRules
        });
    }

    handleCheckboxChange = name => event => {
      if(this.props.studyStore.readonlyMode) return;
        this.setState({
          [name]: event.target.checked
        });
      };

    validateSharingRules(errorMap) {
        let validation = 'OK';
        if (this.state.shareRules.type !== 'none') {
            validation = Validator.notEmpty(errorMap, "The form selection", this.state.shareRules.instances, "formSelections");
        }
        return validation;
    }

    validate = () => {
        let errorMap = {};
        this.validateSharingRules(errorMap);
        this.setState({
            errorMap
        });
        let passed = Object.keys(errorMap).length == 0;
        return passed;
    }

    handleOkBtn(){
        if(this.validate()){
            Actions.updateShareRules(this.props.element._type, this.props.element.id, this.state.shareRules);
            Actions.closeDialog();
        }
    }

    render() {

        const allFormInstances = this.props.studyStore.findCommonSharedForms(this.props.formStore.formData.id);
        let hasErrorFormSelections = "formSelections" in this.state.errorMap && (this.validateSharingRules(this.state.errorMap) != 'OK');

        return (
            <div>
                <Dialog open={this.props.formStore.showDialog} onClose={() => Actions.closeDialog()}  PaperComponent={this.props.paperComponent} >
                    <DialogTitle id="form-dialog-title">
                        <Label>Sharing Rules</Label>
                        <Info><b style={{fontSize: '1.2em'}}>Sharing Rules</b> allow you to fine tune your shared forms.  
                            Occasionally you may find instances where one version of a shared form needs to be slightly different than the other instances. 
                            <ul>
                        
                            <li><b style={{fontSize: '1.1em'}}>Inclusion Rules</b> - allow you to specify which instances of the form this item will appear on.  The item will not apply to unselected instances of the form.</li>
                            <li><b style={{fontSize: '1.1em'}}>Exclusion Rules</b> - allow you to specify which instances of the form this item will <b>not</b> appear on.  The item will be present on all unselected instances of the form.</li>
                            </ul>
                        </Info>
                    </DialogTitle>
                    <DialogContent>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Use Rules</FormLabel>
                            <RadioGroup name="useRules" value={this.state.shareRules.type} onChange={(e, val) => this.changeShareType(val)} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel value="none" control={<Radio />} label="None" />
                                <FormControlLabel value="include" control={<Radio />} label="Inclusion Rules" />
                                <FormControlLabel value="exclude" control={<Radio />} label="Exclusion Rules" />
                            </RadioGroup>
                        </FormControl>
                        {this.state.shareRules.type === 'include' &&
                            <h3>
                                This item will appear on the forms selected below:
                            </h3>
                        }
                        {this.state.shareRules.type === 'exclude' &&
                            <h3>
                                This item will not appear on any of the forms selected:
                            </h3>
                        }
                        {this.state.shareRules.type !== 'none' &&
                            <div>
                                {allFormInstances.map((form) =>
                                    <div key={form.id}>
                                      {hasErrorFormSelections && <div className="error_field" style={{ display: 'inline-block', position:'relative', width:'24px', height:'24px', top:'10px', left:'18px', marginRight:'-24px', borderRadius:'2px' }}>
                                      </div>}
                                      <Checkbox
                                          checked={this.state.shareRules.instances.includes(form.id)}
                                          onChange={(e) => this.updateShareRule(e, form.id)}
                                      />
                                      {form.name}
                                    </div>
                                )}
                              {hasErrorFormSelections && <div className="errorMsg" style={{ marginTop:'15px' }}>{this.state.errorMap.formSelections}</div>}
                            </div>
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
}
