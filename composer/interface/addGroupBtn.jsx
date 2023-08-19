import React from 'react';
import Actions from '../data/actions.js'
import {DialogType} from '../dialogs/dialogTypes.js'

class GroupAddTab extends React.Component{
    render(){
        return (
            <div className="addGroupTab" onClick={() => Actions.openDialog(DialogType.ADD_OR_EDIT_GROUP, {addOrEdit : 'add'})}>+</div>
        );
    }
};
export default GroupAddTab;