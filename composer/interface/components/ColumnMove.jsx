import {DragSource} from "react-dnd";
import React from "react";
import {DND_Type} from "../dndTypes";
import {getEmptyImage} from "react-dnd-html5-backend";

class ColumnMove extends React.Component {
  constructor(props) {
    super(props);

    // DND source: https://github.com/nikhilbaradwaj/ReactMultiDnD
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    });
  }

  render() {
    const {
      connectDragSource,
    } = this.props;

  return connectDragSource(
      <td>
        <div className="moveColumn" title="Click and Drag to Move Column">
          {String.fromCharCode(9701)}
        </div>
      </td>
    )
  }
}

const dragHandlers = {
  beginDrag(props) {
    return { id: props.id, columnIndex: props.columnIndex, tableId: props.tableId, dragType: DND_Type.COLUMN };
  },
};

function dragConnector(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

export default DragSource(
    DND_Type.COLUMN,
    dragHandlers,
    dragConnector
)(ColumnMove);