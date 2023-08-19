import React from 'react';
import Table from './table.jsx'
import {observer} from 'mobx-react'
import {DragSource, DropTarget} from 'react-dnd'
import {DND_Type} from '../interface/dndTypes.js'
import DragUtils from '../interface/dragUtils.js'
import Actions from '../data/actions.js'
import {DialogType} from '../dialogs/dialogTypes.js'

@observer
class Row extends React.Component{


    render(){
        const tables = this.props.children.map((table) =>
                <Table key={table.id}
                  name={table.name} sectionId={this.props.parentData.id} section={this.props.parentData} {...table}>
                  {table.tableRows}
                </Table>
            );

        const {connectDragSource, connectDropTarget} = this.props;
        const tableAlign = this.props.children[0].width !== '100%' ? this.props.children[0].alignment : "";
        return connectDragSource(connectDropTarget(
                <div className={"rowEdit " + tableAlign} >
                  {tables}
                </div>
              ));
    }
};
//**********************************
// Begin Drag and Drop boilerplate
//**********************************
const dragHandlers = {
  beginDrag(props){
    const item = { dragType: DND_Type.ROW, id: props.id, parentData: props.parentData, index: props.index };
    //console.log("Parent: " + props.parentData.id);
    return item;
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
  /*drop(props, monitor) {
    console.log("dropped on table: " + monitor.getItem().index + " props.index:" + props.index);
    if(props.index !== monitor.getItem().index){
      Actions.sortElement('section', props.parentId, monitor.getItem().index, props.index);
    }
  },*/
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

/** Wrap the table in both a drag source and a drop target to allow for sorting */
const dragWrapped = DragSource(DND_Type.ROW, dragHandlers, dragConnector)(Row);
export default DropTarget(DND_Type.ROW, dropHandlers, dropConnector)(dragWrapped);
