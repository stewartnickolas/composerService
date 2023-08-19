import React from "react";
import Actions from "../../data/actions.js";
import { observer, inject } from "mobx-react";
import { DialogType } from "../../dialogs/dialogTypes";
import { action } from "mobx";
import PasteShortcutListener from "./PasteShortcutListener.jsx";
import InfoSnackbar from "./InfoSnackbar.jsx";

@inject("studyStore", "formStore", "clipboardStore")
@observer
class PasteableSectionWrapper extends React.Component {
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
    if (!content || content._type !== "section") {
      return;
    }

    /**
     * Create copy of section but with unique section id.
     * Actions.addOrEditSection() is not used here because it opens up the edit table
     * dialog which is not desirable in this instance.
     */
    const newSection = this.props.formStore.deepCopy(content);

    /** Adds copied section to store. */
    this.props.formStore.formData.sections.push(newSection);

    /**
     * The addOrEditSection dialog only allows new sections to have
     * blank values. Since we are copying a filled out section
     * the dialog will assume we are making an edit operation. But in order
     * to edit a section it must have been added first, so we save the form
     * here to satisfy this requirement.
     */
    Actions.saveForm();

    let pastingToSameForm =
      this.props.clipboardStore.parentFormId ===
      this.props.formStore.formData.id;

    /**
     * Section names must be unique on the same form.
     * So if pasting section to same form, prompt user to update it
     * by opening the edit section dialog.
     */
    if (pastingToSameForm) {
      Actions.openDialog(DialogType.ADD_OR_EDIT_SECTION, newSection);
    }
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
          message={"Pasted section!"}
        />
      </PasteShortcutListener>
    );
  }
}

export default PasteableSectionWrapper;
