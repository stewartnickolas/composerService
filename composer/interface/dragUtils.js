import {findDOMNode} from 'react-dom'

export default class DragUtils{

  static handleMove(parentData, props, monitor, component){

  if(parentData.id !== monitor.getItem().parentData.id){
    console.log("Hovering over a different parent, skipping sort");
    return;
  }

  let axis = 'y';
  switch(parentData._type){
    case 'tableCell':
      axis = parentData.layoutOrientation === 'horizontal' ? 'x' : 'y';
      break;
    case 'group':
      axis = 'x';
      break;
    case 'view':
      axis = 'y'
      break;
  }

  const hoverIndex = props.index;
  const dragIndex = monitor.getItem().index;

  // Don't replace items with themselves
  if (dragIndex === hoverIndex) {
    return
  }

  // Determine rectangle on screen
  const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
  let hoverMiddle = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  if(axis === 'x'){
    hoverMiddle = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;
  }

  // Determine mouse position
  const clientOffset = monitor.getClientOffset();
  // Get pixels to the top
  const hoverClientY = clientOffset.y - hoverBoundingRect.top;
  const hoverClientX = clientOffset.x - hoverBoundingRect.right;
  const hoverClientPos = axis === 'x' ? hoverClientX : hoverClientY;

    // Dragging right
    if (dragIndex < hoverIndex && hoverClientPos < hoverMiddle) {
      return
    }
    // Dragging left
    if (dragIndex > hoverIndex && hoverClientPos > hoverMiddle) {
      return
    }

  //Handles moving the item within the component state level.
  //So *before* it gets dropped and persisted.  Persistence happens in the drop handler.

  props.moveHandler(dragIndex, hoverIndex);
  monitor.getItem().index = hoverIndex;
}
}
