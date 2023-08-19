import React from 'react'
import {observer, inject} from 'mobx-react'
import {DialogType} from './dialogTypes.js'
import EditField from './editField.jsx'
import EditTableCell from './editTableCell.jsx'
import AddOrEditGroup from './addOrEditGroup.jsx'
import AddForm from './addForm.jsx'
import AddOrEditTable from './addOrEditTable.jsx'
import AddOrEditSection from './addOrEditSection.jsx'
import AddOrEditConstraint from './addOrEditConstraint.jsx'
import AddOrEditCalculation from './addOrEditCalculation.jsx'
import AddModule from './addModule.jsx'
import ErrorDialog from './errorDialog.jsx'
import SharingEditor from './sharingEditor.jsx'
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'} handle={'#form-dialog-title'}>          
      <Paper {...props} />
    </Draggable>
  );
}

@inject('formStore')
@observer
class DialogWrapper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false
    }

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
  }  

  render() {
    const {showDialog, dialogType, dialogContents} = this.props.formStore;
    return (
      <div> 
          {showDialog && this.getDialog(dialogType, {...dialogContents, paperComponent: PaperComponent, fullScreen: this.state.fullScreen, handleResize: this.handleResize })}
      </div>
    );
  }

  getDialog(type, data){
    console.log('opening dialog ' + type);
    switch(type){
        case DialogType.EDIT_FIELD:
            return <EditField {...data}/>;
        case DialogType.EDIT_CELL:
            return <EditTableCell {...data}/>;
        case DialogType.ADD_OR_EDIT_GROUP:
            return <AddOrEditGroup {...data}/>
        case DialogType.ADD_FORM:
            return <AddForm {...data}/>
        case DialogType.ADD_OR_EDIT_TABLE:
            return <AddOrEditTable {...data}/>
        case DialogType.ADD_OR_EDIT_SECTION:
            return <AddOrEditSection {...data}/>
        case DialogType.ADD_OR_EDIT_CONSTRAINT:
            return <AddOrEditConstraint key={data.id} {...data}/>
        case DialogType.ADD_OR_EDIT_CALCULATION:
            return <AddOrEditCalculation key={data.id} {...data}/>
        case DialogType.SHARING_EDITOR:
            return <SharingEditor {...data}/>
        case DialogType.ERROR:
            return <ErrorDialog {...data} />
        case DialogType.MODULE:
            return <AddModule {...data} />
        default:
            console.log('unrecognized dialog type: ' +  type);
    }
  }
};
export default DialogWrapper
