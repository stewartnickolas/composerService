import React from "react";
import Actions from "../../data/actions.js";
import { observer, inject } from "mobx-react";
import { action } from "mobx";
import PasteShortcutListener from "./PasteShortcutListener.jsx";
import InfoSnackbar from "./InfoSnackbar.jsx";

@inject("studyStore", "formStore", "clipboardStore")
@observer
class PasteableEditCheckWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handlePaste = this.handlePaste.bind(this);
  }

  @action
  handlePaste = () => {
    if (this.props.studyStore.readonlyMode) {
      return;
    }

    const content = this.props.clipboardStore.content;
    if (
      !content ||
      (content._type !== "calculation" && content._type !== "constraint")
    ) {
      return;
    }

    const newEditCheck = this.props.formStore.deepCopy(content);

    /** Refers to the type of edit check (e.g., "calculation" or "constraint"). */
    const editCheckType = content._type;

    if (editCheckType === "calculation") {
      this.props.formStore.formData.calculations.push(newEditCheck);
    } else if (editCheckType === "constraint") {
      this.props.formStore.formData.constraints.push(newEditCheck);
    }

    /**
     * Whenever a user adds a calculation through the 'Add Calculation', the form is saved. Since
     * the copy/paste operation is similar to adding a calculation, we save the form here, too
     */
    Actions.saveForm();
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <PasteShortcutListener handlePaste={this.handlePaste}>
        {children}
        <InfoSnackbar
          handleClose={this.handleCloseSnackbar}
          open={open}
          message={"Pasted form!"}
        />
      </PasteShortcutListener>
    );
  }
}

export default PasteableEditCheckWrapper;
