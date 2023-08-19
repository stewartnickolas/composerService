import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { DragSource, DropTarget } from "react-dnd";
import { findDOMNode } from "react-dom";
import { withStyles, createStyles } from "@material-ui/core/styles";
import DragIndicatorIcon from "../../images/DragIndicatorIcon.jsx";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "../../images/CloseIcon.jsx";

const styles = createStyles((theme) => ({
  container: {
    backgroundColor: "#eaeaea",
    borderRadius: 4,
  },
  textField: {
    backgroundColor: "#fff",
    marginLeft: 0,
    borderRadius: 4,
    marginTop: 0,
    marginBottom: 0,
  },
  item: {
    paddingRight: 10,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  removeIcon: {
    fontSize: 10,
  },
}));

class FieldOptionRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleLabelUpdate = this.handleLabelUpdate.bind(this);
    this.handleValueUpdate = this.handleValueUpdate.bind(this);
  }

  handleLabelUpdate(evt) {
    const val = evt.target.value;
    this.props.updateOption(this.props.index, {
      label: val,
      value: val,
    });
  }

  handleValueUpdate(evt) {
    const val = evt.target.value;
    this.props.updateOption(this.props.index, {
      label: this.props.fieldType === "combo" ? val : this.props.option.label, // combo always sets label to value as well
      value: val,
    });
  }

  render() {
    const {
      index,
      connectDragSource,
      connectDragPreview,
      connectDropTarget,
      classes,
      option,
      fieldType,
      error
    } = this.props;

    let hasError = error === 'OK' ? false : true;

    return connectDragPreview(
      connectDropTarget(
        <div key={"opt_row_idx" + index}>
          <Grid container className={classes.container}>
            <Grid item xs={1} className={classes.button}>
              {connectDragSource(<div>
                <IconButton>
                  <DragIndicatorIcon/>
                </IconButton>
              </div>)}
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                {fieldType !== "combo" && (
                  <Grid item xs={6} className={classes.item}>
                    <div>
                      <TextField
                        className={classes.textField}
                        key={"optLabel_" + index}
                        placeholder="Label"
                        value={option.label}
                        onChange={this.handleLabelUpdate}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  </Grid>
                )}
                <Grid item xs={fieldType !== "combo" ? 6 : 12}>
                  <div>
                    <TextField
                      className={`${classes.textField} ${hasError ? "error_field" : ""}`}
                      key={"optValue_" + index}
                      placeholder="Value"
                      value={option.value}
                      onChange={this.handleValueUpdate}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  {hasError && <div className="errorMsg">{error}</div>}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} className={classes.button}>
              <div>
                <IconButton onClick={() => this.props.removeOption(index)}>
                  <CloseIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
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
    connectDragPreview: connect.dragPreview(),
  };
}

/**
 * Wrap component in both a drag source and a drop target to allow for sorting.
 * See react-dnd for more details
 */
const dragWrapped = DragSource(
  "FieldOptionRow",
  dragHandlers,
  dragConnector
)(FieldOptionRow);

const dropWrapped = DropTarget(
  ["FieldOptionRow"],
  dropHandlers,
  dropConnector
)(dragWrapped);

export default withStyles(styles)(dropWrapped);
