import {findDOMNode} from "react-dom";
import React from "react";
import {DropTarget} from "react-dnd";
import Actions from "../../data/actions";
import {DND_Type} from "../dndTypes";

class ColumnHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      header,
      connectDropTarget,
    } = this.props;

    return connectDropTarget(
        <td className="heading_medium center">
          {header}
        </td>
    )
  }
}

const dropHandlers = {
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

function dropConnector(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

export default DropTarget(
    DND_Type.COLUMN,
    dropHandlers,
    dropConnector
)(ColumnHeader);