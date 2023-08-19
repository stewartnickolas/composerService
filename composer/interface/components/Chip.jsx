import React from "react";
import { default as MuiChip } from '@material-ui/core/Chip'
import { findDOMNode } from "react-dom";
import { DragSource, DropTarget } from "react-dnd";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  grabby: {
    "&:hover": {
      cursor: "grab",
    },
  },
});

class Chip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      index,
      name,
      selection,
      handleDelete,
      handleEdit,
      connectDragSource,
      connectDropTarget
    } = this.props;

    return connectDragSource(
        connectDropTarget(
              <div>
                <MuiChip
                    key={"selection_" + selection}
                    label={selection}
                    onDelete={() => handleDelete(index, null)}
                    onDoubleClick={() => handleEdit(selection, index)}
                />
              </div>
        )
    );
  }
}

const dragHandlers = {
  beginDrag(props) {
    return { index: props.index };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
  },
};

const dropHandlers = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex == hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // Determine mouse position
    const clientOffset = monitor.getClientOffset();
    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Move item in parent's component state.
    props.handleMove(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

function dropConnector(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

function dragConnector(connect) {
  return {
    connectDragSource: connect.dragSource(),
  };
}

/**
 * Wrap component in both a drag source and a drop target
 * See react-dnd for more details
 */
export default withStyles(styles)(
    DropTarget(
        ["Chip"],
        dropHandlers,
        dropConnector
    )(
        DragSource(
            "Chip",
            dragHandlers,
            dragConnector
        )(Chip)
    )
);