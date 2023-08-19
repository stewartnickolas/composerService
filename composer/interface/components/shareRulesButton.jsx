import React from 'react'
import {inject} from 'mobx-react'
import {DialogType} from '../../dialogs/dialogTypes.js'
import Actions from '../../data/actions.js'

@inject('studyStore')
export default class ShareRulesButton extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const show = this.props.studyStore.currentForm.formType === 'shared';
        return(
            <span>
                {show &&
                    <span className="shareRulesBtn" onClick={() => Actions.openDialog(DialogType.SHARING_EDITOR, {element: this.props.element})}>
                    </span>
                }
            </span>
        );
    }
}