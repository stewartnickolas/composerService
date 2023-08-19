import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import {observer, inject} from 'mobx-react'
import API from '../data/api.js';
import Label from '../interface/components/label.jsx'
import Info from '../interface/info.jsx'
import Actions from '../data/actions.js'
import { TextField, Select, Button, MenuItem, Checkbox, FormControlLabel} from '@material-ui/core';

@observer
@inject("formStore")
export default class AddModule extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          availableModules: [],
          selectedModule: {
            name: ''
          },
          fields: {},
          ...props
        }
        if(!!props.replacementMap){
          this.state.fields = props.replacementMap;
        }
        this.handleChangeModule = this.handleChangeModule.bind(this);
    }

    componentWillMount(){
      API.getAvailableModules((data) => {
        this.setState({
          availableModules: data
        });
        for(let module of data){
          if(module.name === this.state.name){
            this.setState({
              selectedModule: module
            })
            break;
          }
        }
      })
    }
    
    handleChangeModule(e){
      console.log("Selected module: " + e.target.value);
      this.setState({
        selectedModule: e.target.value
      });
    }

    handleChangeField(e, fieldName, fieldType){
      let fieldValue = e.target.value;
      if(fieldType === 'checkbox'){
        fieldValue = e.target.checked ? "true" : "false";
      }
      const fields = Object.assign({}, this.state.fields);
      fields[fieldName] = fieldValue;
      this.setState({
        fields
      });
    }

    addOrEditModule(){
      if (!this.state.selectedModule.name) {        
        /** 
         * User has not selected a module.
         * In order to prevent empty modules from appearing in the generated jsp, we simply
         * close the dialog without adding it to the store.
         */
        Actions.closeDialog();
      } else {
        let module = {
          id: this.state.id,
          name: this.state.selectedModule.name,
          label: this.state.selectedModule.label,
          replacementMap: this.state.fields
        }
        Actions.addOrEditModule(this.props.cellId, module);
      }
    }

    render() {
        return (
          <div style={{color: '#F00'}}>
            <Dialog open={this.props.formStore.showDialog} onClose={() => Actions.closeDialog()} PaperComponent={this.props.paperComponent}  >
              <DialogTitle id="form-dialog-title">Module</DialogTitle>
              <DialogContent>
                <span>
                <Select value={this.state.selectedModule} onChange={(e) => this.handleChangeModule(e)}>
                  {
                    this.state.availableModules.map((module, idx) => 
                      <MenuItem key={module.name + idx} value={module}><Label>{module.label}</Label></MenuItem>
                    )
                  }
                </Select>
                {!!this.state.selectedModule.description &&
                  <Info>{this.state.selectedModule.description}</Info>
                }
                </span>
                {!!this.state.selectedModule.fields && this.state.selectedModule.fields.length > 0 &&
                  <div>
                    <h2>Settings</h2>
                    {this.state.selectedModule.fields.map((field, idx) => 
                      <div key={field.name + idx}>
                        <Label>{field.label}</Label>: 
                        {field.fieldType === 'text' &&
                          <TextField name={field.name} value={this.state.fields[field.name]} onChange={(e) => this.handleChangeField(e, field.name, field.fieldType)} />
                        }
                        {field.fieldType === 'checkbox' &&
                          <Checkbox value={field.name} checked={this.state.fields[field.name] === 'true'} onChange={(e) => this.handleChangeField(e, field.name, field.fieldType)} />
                        }
                        {field.fieldType === 'select' &&
                          <Select value={this.state.fields[field.name]} onChange={(e) => this.handleChangeField(e, field.name, field.fieldType)}>
                            {
                              field.fieldOptions.map((option, idx) => 
                                <MenuItem key={option.name + idx} value={option.name}><Label>{option.label}</Label></MenuItem>
                              )
                            }
                          </Select>  
                        }
                        <Info>{field.description}</Info>
                      </div>
                    )}
                  </div>
                }
              </DialogContent>
              <DialogActions >
                <Button onClick={() => this.addOrEditModule()}>Ok</Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
}
