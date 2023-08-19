import React from 'react'
import {DropTarget} from 'react-dnd'
import {DND_Type} from './dndTypes.js'
import {inject} from 'mobx-react'
import Actions from '../data/actions.js'

@inject('formStore')
class Trash extends React.Component{

  render(){
    const {connectDropTarget, isOverCurrent} = this.props;
    const hoverCss = isOverCurrent ? 'trash-hover' : 'trash-empty';
    return connectDropTarget(
      <div id="trash" title="Delete" className={hoverCss}></div>
    );
  }
};


//**********************************
// Begin Drag and Drop boilerplate
//**********************************

const dropHandlers = {
  drop(props, monitor) {
    let id = monitor.getItem().id;
    let type = monitor.getItem().dragType;
    Actions.trash(type, id);
  },
}

function dropConnector(connect, monitor){
  return{
    connectDropTarget: connect.dropTarget(),
    isOverCurrent: monitor.isOver({shallow: true})
  };
}

/**
  The trash accepts nearly every DND type except tools
*/
export default DropTarget([DND_Type.FORM, DND_Type.GROUP, DND_Type.SECTION, DND_Type.ROW, DND_Type.FIELD, DND_Type.MODULE], dropHandlers, dropConnector)(Trash);
