import React from "react";
import Actions from "../../data/actions.js";
import { observer, inject } from "mobx-react";
import { DialogType } from "../../dialogs/dialogTypes";
import { action } from "mobx";
import PasteShortcutListener from "./PasteShortcutListener.jsx";
import InfoSnackbar from "./InfoSnackbar.jsx";

@inject("studyStore", "formStore", "clipboardStore")
@observer
class PasteableFieldWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  @action
  handlePaste = () => {
    if (this.props.studyStore.readonlyMode) {
      return;
    }

    const content = this.props.clipboardStore.content;
    if (!content || content._type !== "field") {
      return;
    }

    const newField = this.props.formStore.deepCopy(content);

    const cellId = this.props.cellId;
    const cell = this.props.formStore.findNode("tableCell", cellId);
    cell.components.push(newField);

    Actions.openDialog(DialogType.EDIT_FIELD, newField);
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
          message={"Pasted field!"}
        />
      </PasteShortcutListener>
    );
  }
}

export default PasteableFieldWrapper;
