import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import Info from '../info.jsx'
import {observer, inject} from 'mobx-react'
import Actions from '../../data/actions.js'
import Validator from '../../data/validator.js'


@inject('studyStore', 'formStore')
@observer
export default class FormProps extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formLabel: props.studyStore.currentForm.label,
      formName: props.studyStore.currentForm.name
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStoreNameChange = this.handleStoreNameChange.bind(this);
  }


      handleNameChange(name){
        this.setState({
          formLabel: name,
        });
      }

      handleDbNameChange(name){
        let dbName = name.trim().toLowerCase().replace(/\s/g, ".");
        this.setState({
          formName: dbName
        });
      }

      handleStoreNameChange(){
        Actions.editFormName(this.state.formName, this.state.formLabel);
      }

      handleChangeFormType(e){
        let type = e.target.value;
        if(type === 'shared'){
          if(!confirm("Are you sure you want to change the form type from 'normal' to 'shared'?  This action not be undone.")){
            return;
          }
        }
        Actions.changeFormType(e.target.value)
      }

      handleChangeCanDo(name, e){
        let value = e.target.value;
        value = value.toUpperCase();
        value = value.replace(/\W/g, '');//remove all non-alpha numeric characters
        let error = Validator.validRoles([], "The property " + name, value);
        if(error !== 'OK'){
          alert(error);
          return;
        } else {
          Actions.editFormProps({
            [name]: value
          });
        }
      }

      handleCheckboxChange(name, e){
          Actions.editFormProps({
            [name]: e.target.checked
          });
      };

  render(){

    const {currentForm} = this.props.studyStore;
    const {formData} = this.props.formStore;

    return(
      <div>
        <h1 style={{marginTop: '0px', color: '#666'}}>Form Properties</h1>
        <br/>
        <div class="fieldWithInfo">
          <TextField label="Form Title" value={this.state.formLabel} onChange={(e, val) => this.handleNameChange(e.target.value)} onBlur={this.handleStoreNameChange}/>
          <Info>The form name as it will appear to the user</Info>
        </div>
        <div class="fieldWithInfo">
          <TextField label="DB Name" value={this.state.formName} onChange={(e, val) => this.handleDbNameChange(e.target.value)} onBlur={this.handleStoreNameChange}/>
          <Info>The form name as it will be stored in the database.  This should be all lower case, and must not contain spaces.</Info>
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
          {currentForm.formType !== 'normal' &&
              <h3>{currentForm.formType}</h3>
          }
        </FormControl>
        <br/>
        <FormControlLabel style={{margin: '10px 0px 10px 0px'}} control={<Checkbox checked={formData.onDemand} onChange={(e) => this.handleCheckboxChange('onDemand', e) }/>} label="On-Demand" />
        <Info>On-Demand forms allow a user to create as many copies of a form as needed.</Info>
        <h2>Role Permissions<Info>Select which roles have the following permissions.  Roles are based on letter codes.</Info></h2>
        <div>Can View<TextField value={formData.canView} onChange={(e) => this.handleChangeCanDo('canView', e)}/></div>
        <div>Can Edit<TextField value={formData.canEdit} onChange={(e) => this.handleChangeCanDo('canEdit', e)}/></div>
        <div>Can Sign<TextField value={formData.canSign} onChange={(e) => this.handleChangeCanDo('canSign', e)}/></div>
        <div>Can Review<TextField value={formData.canReview} onChange={(e) => this.handleChangeCanDo('canReview', e)}/></div>
        <div>Can Finalize<TextField value={formData.canFinalize} onChange={(e) => this.handleChangeCanDo('canFinalize', e)}/></div>
        <div>Can Query<TextField value={formData.canQuery} onChange={(e) => this.handleChangeCanDo('canQuery', e)}/></div>
        <div>Can Lock<TextField value={formData.canLock} onChange={(e) => this.handleChangeCanDo('canLock', e)}/></div>
        <div><FormControlLabel control={<Checkbox checked={formData.displayState} onChange={(e) => this.handleCheckboxChange('displayState', e) }/>} label="Display State" /></div>
        <div><FormControlLabel control={<Checkbox checked={formData.enableQueries} onChange={(e) => this.handleCheckboxChange('enableQueries', e) }/>} label="Enable Queries" /></div>
        <div><FormControlLabel control={<Checkbox checked={formData.displayChanges} onChange={(e) => this.handleCheckboxChange('displayChanges', e) }/>} label="Display Changes" /></div>
        <p/>
      </div>
    );
  }

}
