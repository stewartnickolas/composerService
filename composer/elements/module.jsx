import React from 'react'
import {observer, inject} from 'mobx-react'
import {DialogType} from '../dialogs/dialogTypes.js'
import Actions from '../data/actions.js'
import {DragSource, DropTarget} from 'react-dnd'
import DragUtils from '../interface/dragUtils.js'
import {DND_Type} from '../interface/dndTypes.js'
import {EditorType} from '../interface/propertiesEditor/editorTypes.js'


@inject('formStore')
@observer
class Module extends React.Component{

    render(){

        const {index, connectDragSource, connectDropTarget, isOver, isDragging, id, ...f} = this.props;
        let layout = f.layoutOrientation !== 'horizontal' ? 'fieldWrapper fieldWrapperVertical' : 'fieldWrapper';
        layout = layout + ((f.controlDisplayField && f.controlDisplayField.length > 0) || f.conditionallyIncludeChecked ? " appDisplayBackground" : '');
        const isDraggingStyle = isDragging ? {opacity: 0} : {opacity: 1};
        return(
                <div className={layout} id={f.id} >
                  {connectDragSource(connectDropTarget(
                    <div style={isDraggingStyle}>
                      <div className="modulePlaceholder">{this.props.label}</div>
                      <div className="editField" onClick={() => Actions.openDialog(DialogType.MODULE, this.props)}></div>
                    </div>
                  ))}
                </div>
              );
    }
};

const dragHandlers = {
  beginDrag(props){
    const item = { dragType: DND_Type.MODULE, id: props.id, parentData: props.parentData, index: props.index, removeFieldFromSort: props.removeFieldFromSort };
    return item;
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
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

/** Wrap the module in both a drag source and a drop target to allow for sorting */
const dragWrapped = DragSource(DND_Type.MODULE, dragHandlers, dragConnector)(Module);
export default DropTarget([DND_Type.MODULE, DND_Type.FIELD], dropHandlers, dropConnector)(dragWrapped);
