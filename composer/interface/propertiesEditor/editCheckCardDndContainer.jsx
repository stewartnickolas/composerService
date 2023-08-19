import React from "react";
import { observer, inject } from "mobx-react";
import { DragSource, DropTarget } from "react-dnd";
import { DND_Type } from "../dndTypes.js";
import { withStyles } from "@material-ui/core/styles";
import EditCheckCard from "./editCheckCard.jsx";
import Actions from "../../data/actions.js";

const styles = () => ({
  grabby: {
    "&:hover": {
      cursor: "grab",
    },
  },
});

@inject("formStore")
@observer
class EditCheckCardDndContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      classes,
      editCheck,
      index,
      canDrag,
      allCollapsed
    } = this.props;

    return (
      <div className={canDrag ? classes.grabby : null}>
        {connectDragSource(
          connectDropTarget(
            <div>
              <EditCheckCard
                index={index}
                editCheck={editCheck}
                allCollapsed={allCollapsed}
              />
            </div>
          )
        )}
      </div>
    );
  }
}

const dragHandlers = {
  canDrag(props, monitor) {
    return props.canDrag
  },
  beginDrag(props) {
    const item = {
      dragType: DND_Type.FIELD,
      id: props.editCheck.id,
      parentId: props.parentId,
      index: props.index,
    };
    return item;
  },
  isDragging(props, monitor) {
    return props.editCheck.id === monitor.getItem().id;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
  },
};

const dropHandlers = {
  hover(props, monitor, component) {
    if (props.parentId !== monitor.getItem().parentId) {
      /** Dragging outside of parent container not allowed. */
      return;
    }

    const hoverIndex = props.index;
    const dragIndex = monitor.getItem().index;

    if (dragIndex === hoverIndex) {
      /** Dragging on self, do nothing. */
      return;
    }

    props.moveHandler(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
  drop(props, monitor, component) {
    try {
      /** Auto saves the order and priorities of edit checks. */
      Actions.saveForm();
    } catch(e) {
      console.error('(editCheckCardDndContainer.jsx - 93) Error handling drop: ', e);
    }
    return;
  }
};

function dropConnector(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  };
}

function dragConnector(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

/** Wrap the edit check in both a drag source and a drop target to allow for sorting. */
export default withStyles(styles)(
  DropTarget(
    DND_Type.EDITCHECK,
    dropHandlers,
    dropConnector
  )(
    DragSource(
      DND_Type.EDITCHECK,
      dragHandlers,
      dragConnector
    )(EditCheckCardDndContainer)
  )
);
