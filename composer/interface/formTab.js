import React from 'react';
import {DragSource, DropTarget} from 'react-dnd'
import DragUtils from '../interface/dragUtils.js'
import {DND_Type} from '../interface/dndTypes.js'
import Actions from '../data/actions.js'
import {observer, inject} from 'mobx-react'
import FormOverview from './components/formOverview.jsx';
import {EditorType} from "./propertiesEditor/editorTypes"
import PasteableSectionWrapper from '../interface/components/PasteableSectionWrapper.jsx'
import CopyableFormWrapper from './components/CopyableFormWrapper.jsx';

@inject('studyStore', 'formStore')
@observer
class FormTab extends React.Component{
    render(){
        const {connectDragSource, connectDropTarget, isDragging, id} = this.props;
        const isDraggingStyle = isDragging ? {opacity: 0} : {opacity: 1};
        const isForCurrentForm = id === this.props.studyStore.currentForm.id
        const selectedClass = isForCurrentForm ? ' composerFormTabSelected' : '';
        let stateColor = "#AAF";
        if(this.props.formStatus === 'published'){
          stateColor = "#F90";
        } else if (this.props.formStatus === 'live'){
          stateColor = "#5F5";
        }
        return connectDragSource(connectDropTarget(
          <td style={{padding: '0px'}}>
            <PasteableSectionWrapper>
              <CopyableFormWrapper formRef={this.props.form}>
                <div className={"composerFormTab" + selectedClass} style={isDraggingStyle}>
                  <div className="formTabHandle" style={{left: '0px'}}></div>
                  <div className="formTabBtn noselect"
                      style={{paddingRight: isForCurrentForm ? '10px' : '20px'}}
                      onClick={() => Actions.navigateToForm(id)}>
                    {this.props.label}

                    {isForCurrentForm &&
                      <div className="editField"
                          style={{marginLeft: '0.2rem'}}
                          onClick={() => Actions.togglePropertiesEditor(EditorType.FORM_DETAILS)}/>}
                  </div>
                  <FormOverview formRef={this.props.form}/>
                </div>
              </CopyableFormWrapper>
            </PasteableSectionWrapper>
          </td>
        ));
    }
};


/*
 * Begin drag and drop
 */
 const dragHandlers = {
  beginDrag(props){
     return {
       dragType: DND_Type.FORM,
       id: props.id,
       parentData: props.parentData,
       index: props.index ,
       formStatus: props.formStatus
     };
   },
   canDrag(props) {
     if(props.formStatus === 'published' || props.formStatus === 'live'){
       alert("This form is currently in READ-ONLY mode. Click Modify to make changes.");
       return false;
     }

     return true;
   },
   isDragging(props, monitor) {
     return props.id === monitor.getItem().id;
   },
   endDrag(props, monitor, component) {
     if (!monitor.didDrop()) {
       return;
     }
     const item = monitor.getItem();
     const dropResult = monitor.getDropResult();
   }
 };

 const dropHandlers = {
   hover(props, monitor, component){
     return (DragUtils.handleMove(props.parentData, props, monitor, component));
   },
 }

 function dropConnector(connect, monitor){
   return{
     connectDropTarget: connect.dropTarget(),
     isOver: monitor.isOver(),
     isOverCurrent: monitor.isOver({shallow: true})
   };
 }

 function dragConnector(connect, monitor) {
   return {
     connectDragSource: connect.dragSource(),
     isDragging: monitor.isDragging()
   };
 }

 /** Wrap the form in both a drag source and a drop target to allow for sorting */
 const dragWrapped = DragSource(DND_Type.FORM, dragHandlers, dragConnector)(FormTab);
 export default DropTarget(DND_Type.FORM, dropHandlers, dropConnector)(dragWrapped);
