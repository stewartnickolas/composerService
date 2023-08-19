import React from 'react'
import {inject, observer} from 'mobx-react'
import Field from './field.jsx'
import Module from './module.jsx'
import {DropTarget} from 'react-dnd'
import{DND_Type} from '../interface/dndTypes.js'
import Generator from '../data/generator.js';
import {DialogType} from '../dialogs/dialogTypes.js'
import Actions from '../data/actions.js'
import PasteableFieldWrapper from '../interface/components/PasteableFieldWrapper.jsx'
import {findDOMNode} from "react-dom";

@inject('formStore')
@observer
class TableCell extends React.Component{

    constructor(props){
      super(props);
      this.state = {components : props.components};
      this.moveField = this.moveField.bind(this);
    }

    calcStyle(props){
            let style = {};
            if(props.layoutOrientation === 'horizontal'){
                style.whiteSpace = 'nowrap';
            }
            style.textAlign = props.align;
            //style.display = 'table';
            return style;
        }


      moveField(dragIndex, hoverIndex) {
        let components = this.state.components.slice();
        let dragField = components[dragIndex];
        dragField.isDragging = true;
        components.splice(dragIndex, 1);
        components.splice(hoverIndex, 0, dragField);

        //update the state
        this.setState({
          components
        })
      }

      componentWillReceiveProps(nextProps) {
        //Force update of field state list from props when components are moved between cells
        if (nextProps.components.length !== this.state.components.length) {
          this.setState({ components: nextProps.components });
        }
      }

    render(){
        const {formStore, id, layoutOrientation, connectDropTarget, isOver, ...moreProps} = this.props;
        const parentData = this.props.formStore.findNode('tableCell', this.props.id);
        const components = this.state.components.map((component, index) => {
              if(component._type === 'field'){
                return(
                      <Field key={component.id + index}
                        layoutOrientation={layoutOrientation}
                        index={index}
                        parentId={this.props.id}
                        parentData={parentData}
                        formStore={formStore}
                        moveHandler={this.moveField}
                        {...component} >
                      </Field>
                );
              } else if (component._type === 'module'){
                return (
                  <Module key={component.id + index} 
                        index={index}
                        layoutOrientation={layoutOrientation} 
                        parentId={this.props.id}
                        parentData={parentData}
                        moveHandler={this.moveField}
                        {...component}/>
                );
              }
          });

        const showBorders = this.props.showBorders ? "showCells" : "showCellsDashed";

        return connectDropTarget(
          <td className={"tableCell " + showBorders} style={this.calcStyle(this.props)} >
            <PasteableFieldWrapper cellId={this.props.id}>
              <div style={{display: 'inline'}}>
                <div style={{display: 'table-row'}}>
                  {components}
                  <div className="editTableCell" onClick={() => Actions.openDialog(DialogType.EDIT_CELL, this.props)}></div>
                </div>
              </div>
            </PasteableFieldWrapper>
          </td>
        );
    }
};


const fieldDropTarget = {
  drop(props, monitor) {
    const droppedItem = monitor.getItem();
    console.log("Drop Type: " + droppedItem.dragType);
    switch(droppedItem.dragType){
      case DND_Type.FIELD:
      case DND_Type.MODULE:
       if(monitor.getItem().parentData.id !== props.id){
         let field = monitor.getItem();
         Actions.moveField(props.id, field.parentData.id, field.id);
       } else {
         console.log("sorting field: new index:" + monitor.getItem().index, " id:" + monitor.getItem().id);
         Actions.sortField(props.id, monitor.getItem().id, monitor.getItem().index);
       }
       break;
      case DND_Type.TOOL:
        if(droppedItem.toolType === DND_Type.MODULE){
          Actions.openDialog(DialogType.MODULE, {cellId: props.id});
        } else {
          Generator.makeField(props.id, droppedItem.toolType);
        }
        break;
    }
  },
  hover(props, monitor, component) {
    if (monitor.getItem().dragType == DND_Type.COLUMN) {
      const dragIndex = monitor.getItem().columnIndex;
      const hoverIndex = props.columnIndex;

      if (dragIndex == hoverIndex || monitor.getItem().tableId != props.tableId) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
      // Get horizontal middle
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the left
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging rightwards, only move when the cursor is after 50%
      // When dragging leftwards, only move when the cursor is before 50%
      // Dragging rightwards
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }
      // Dragging leftwards
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      // Move item in parent's component state.
      Actions.moveColumn(props.tableId, dragIndex, hoverIndex)
      monitor.getItem().columnIndex = hoverIndex;
    }
  },
};

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true })
  };
}

export default DropTarget([DND_Type.TOOL, DND_Type.MODULE, DND_Type.FIELD, DND_Type.COLUMN], fieldDropTarget, dropCollect)(TableCell);
