import React from "react";
import Button from "@material-ui/core/Button";
import { observer, inject } from "mobx-react";
import { DialogType } from "../../dialogs/dialogTypes.js";
import Actions from "../../data/actions.js";
import { action } from "mobx";
import EditCheckCardDndContainer from "./editCheckCardDndContainer.jsx";
import { withStyles } from "@material-ui/core/styles";
import ChevronUpIcon from "../../images/ChevronUpIcon.jsx";
import ChevronDownIcon from "../../images/ChevronDownIcon.jsx";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Info from "../info.jsx";
import PasteableEditCheckWrapper from "../components/PasteableEditCheckWrapper.jsx";

const styles = (theme) => ({
  headerContainer: {
    display: "flex",
    alignItems: "center",
  },
  header: {
    color: "#666",
  },
  editCheck: {
    marginBottom: theme.spacing.unit * 2,
  },
  collapseButton: {
    marginLeft: "auto",
  },
});

@inject("studyStore", "formStore")
@observer
class EditChecks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollapsed: false,
      autoPrioritization: false,
    };
    this.handleMoveEditCheck = this.handleMoveEditCheck.bind(this);
    this.handleCollapseAll = this.handleCollapseAll.bind(this);
    this.handleChangeAutoPrioritization = this.handleChangeAutoPrioritization.bind(
      this
    );
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleCheckboxChange = (name) => (event) => {
    this.setState({
      [name]: event.target.checked,
    });
  };

  @action handleMoveEditCheck(dragIndex, hoverIndex) {
    let editChecks = [...this.props.formStore.formData[this.props.type]];
    let draggingEditCheck = editChecks[dragIndex];
    draggingEditCheck.isDragging = true;

    /** Move dragging edit check from drag index to hovered index. */
    editChecks.splice(dragIndex, 1);
    editChecks.splice(hoverIndex, 0, draggingEditCheck);

    if (this.props.type === "calculations" && this.state.autoPrioritization) {
      /** Update calculation priorites based on new list order. */

      for (let i = 0; i < editChecks.length; i++) {
        /** Priorities are positive integers. */

        editChecks[i].attributes = {
          ...editChecks[i].attributes,
          priority: i + 1,
        };
      }
    }

    this.props.formStore.formData[this.props.type] = editChecks;
  }

  handleCollapseAll() {
    this.setState({ allCollapsed: !this.state.allCollapsed });
  }

  handleChangeAutoPrioritization(event) {
    this.setState({ autoPrioritization: event.target.checked });
  }

  render() {
    const { classes, type } = this.props;
    const { autoPrioritization } = this.state;

    let editChecks = [];
    if (this.props.type === "constraints") {
      editChecks = this.props.formStore.formData.constraints;
    } else {
      editChecks = this.props.formStore.formData.calculations;
    }
    const addLabel =
      this.props.type === "constraints" ? "Constraint" : "Calculation";

    const dialogType =
      this.props.type === "constraints"
        ? DialogType.ADD_OR_EDIT_CONSTRAINT
        : DialogType.ADD_OR_EDIT_CALCULATION;

    return (
      <div>
        <PasteableEditCheckWrapper>
          <div className={classes.headerContainer}>
            <h1 className={classes.header}>{addLabel}s</h1>
            <IconButton
              className={classes.collapseButton}
              onClick={this.handleCollapseAll}
            >
              {this.state.allCollapsed ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </IconButton>
          </div>
          {type === "calculations" && (
            <div>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    onChange={this.handleChangeAutoPrioritization}
                    checked={autoPrioritization}
                  />
                }
                label={
                  <div>
                    Auto-prioritization{" "}
                    <Info>
                      calculation priorities will auto-update to the order in
                      which they appear in the list
                    </Info>
                  </div>
                }
              />
            </div>
          )}
          {!this.props.studyStore.readonlyMode && (
            <div style={{ textAlign: "center" }}>
              <Button
                color="primary"
                onClick={() => Actions.openDialog(dialogType)}
              >
                Add {addLabel}
              </Button>
            </div>
          )}
          {editChecks.map((item, index) => (
            <div
              className={classes.editCheck}
              key={"editCheckCard_" + item.id + index}
            >
              <EditCheckCardDndContainer
                parentId="editCheckCardContainer"
                moveHandler={this.handleMoveEditCheck}
                index={index}
                editCheck={item}
                canDrag={!this.props.studyStore.readonlyMode}
                allCollapsed={this.state.allCollapsed}
              />
            </div>
          ))}
        </PasteableEditCheckWrapper>
      </div>
    );
  }
}

export default withStyles(styles)(EditChecks);
