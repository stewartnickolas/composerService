import React from 'react'
import ReactDOM from 'react-dom'
import Section from './section.jsx'
import {observer, inject} from 'mobx-react'
import {DND_Type} from '../interface/dndTypes.js'
import {DialogType} from '../dialogs/dialogTypes.js'
import {DropTarget} from 'react-dnd'
import Button from '@material-ui/core/Button';
import Actions from '../data/actions.js'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

@inject('studyStore', 'formStore')
@observer
class Form extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        sections: this.props.formStore.formData.sections,
        formId: this.props.formStore.formData.id
      }
      this.moveSection = this.moveSection.bind(this);
    }

    moveSection(dragIndex, hoverIndex) {
      let sections = this.state.sections.slice();
      let dragSection = sections[dragIndex];
      dragSection.isDragging = true;
      sections.splice(dragIndex, 1);
      sections.splice(hoverIndex, 0, dragSection);

      this.setState({
        sections
      })
    }

    render(){

        const {connectDropTarget} = this.props;

        return connectDropTarget(
          <span>
            <span key={"form_key_" + this.props.formStore.formData.id + this.props.formStore.formData.sections.length} >{/*OMG  Find a better way to refresh data!*/}
              {this.props.studyStore.currentForm.id === 'placeholder' &&
                <div className="formComponent" style={{textAlign: 'center'}}>
                  <h2>This group has no forms.</h2>
                  <p style={{padding: '20px'}}>You can add a form by clicking the button below, or by dragging forms from another group onto the tab for this group.</p>
                  <Button variant="raised" color="primary" onClick={() => Actions.openDialog(DialogType.ADD_FORM)}>Add a Form</Button>
                </div>
              }
              {this.props.studyStore.currentForm.id !== 'placeholder' &&
                <div className="formComponent">
                  {this.state.sections.map((section, index) =>
                    <Section key={"section_" + this.props.formStore.formData.id + section.id}
                      index={index}
                      parentData={this.props.formStore.formData} //Used for dnd of sections
                      moveHandler={this.moveSection} //used for dnd of sections
                      section={section}
                      {...section}>
                      {section.rows}
                    </Section>
                  )}
                </div>
              }
            </span>
          </span>
            );
            }
            };

            //**********************************
            // Begin Drag and Drop boilerplate
            //**********************************

const dropHandlers = {
  drop(props, monitor) {
    switch(monitor.getItem().dragType){
      case DND_Type.TOOL_SECTION:
        Actions.openDialog(DialogType.ADD_OR_EDIT_SECTION)
      break;
      case DND_Type.SECTION:
        if(props.index !== monitor.getItem().index){
          Actions.sortElement('form', props.id, monitor.getItem().id, monitor.getItem().index);
        }
      break;
    }
  }
}

function dropConnector(connect, monitor){
  return{
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({shallow: true})
  };
}

/** The form only accepts sections as drop types */
export default DropTarget([DND_Type.SECTION, DND_Type.TOOL_SECTION], dropHandlers, dropConnector)(Form);
