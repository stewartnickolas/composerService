import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Info from '../info.jsx'
import {observer, inject} from 'mobx-react'
import Actions from '../../data/actions.js'


@inject('studyStore')
@observer
export default class GroupProps extends React.Component{

  constructor(props){
    super(props);
    const {currentGroup} = props.studyStore;
    this.state = {
      ...currentGroup
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStoreNameChange = this.handleStoreNameChange.bind(this);
  }


      handleNameChange(name){
        let dbName = name.toLowerCase().replace(/\s/g, ".");
        this.setState({
          label: name,
          name: dbName
        });
      }

      handleStoreNameChange(){
        Actions.editGroupName(this.state.name, this.state.label);
      }

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

      handleCheckboxChange(name, event){
        Actions.editGroupProps({
            [name]:event.target.checked
        });
      };

  render(){

    const {currentGroup} = this.props.studyStore;

    return(
      <div>
        <h1 style={{marginTop: '0px', color: '#666'}}>Group Properties</h1>
        <br/>
        <TextField label="Group Title" value={this.state.label} onChange={(e, val) => this.handleNameChange(e.target.value)} onBlur={this.handleStoreNameChange}/>
        <Info>The group name as it will appear to the user</Info>
        <TextField label="DB Name" value={this.state.name} onChange={this.handleChange('name')} onBlur={this.handleStoreNameChange}/>
        <Info>The group name as it will be stored in the database.  This should be all lower case, and must not contain spaces.</Info>
        <p/>
        <FormControlLabel style={{margin: '10px 0px 10px 0px'}} control={<Checkbox checked={currentGroup.onDemand} onChange={(e) => this.handleCheckboxChange('onDemand', e) }/>} label="On-Demand" />
        <Info>On-Demand groups allow a user to create as many copies of a group as needed.</Info>
        <p/>
      </div>
    );
  }

}
