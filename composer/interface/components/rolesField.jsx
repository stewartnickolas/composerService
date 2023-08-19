import React from 'react'
import { inject } from 'mobx-react';
import Validator from '../../data/validator.js'
import TextField from '@material-ui/core/TextField'

/**
 * Handles functionality common to role fields.  I.e. sanitizing input
 */
@inject("studyStore")
export default class RolesField extends React.Component{

    handleChangeCanDo(e){
        if(this.props.studyStore.readonlyMode){
          this.props.onChange(this.props.name, value);
          return;
        }
        let value = e.target.value;
        value = value.toUpperCase();
        value = value.replace(/\W/g, '');//remove all non-alpha numeric characters
        let error = Validator.validRoles([], "The property " + name, value);
        if(error !== 'OK'){
          alert(error);
          return;
        } else {
          this.props.onChange(this.props.name, value);
        }
      }

    render(){
        const {label, name, value, fullWidth} = this.props;
        return(
            <span>
                <TextField 
                    label={label}
                    name={name}
                    value={value}
                    fullWidth={fullWidth}
                    onChange={(e) => this.handleChangeCanDo(e)}
                    />
            </span>
        );
    }
}