import React from "react";
import Actions from "../../data/actions.js";
import { observer, inject } from "mobx-react";
import { action } from "mobx";
import PasteShortcutListener from "./PasteShortcutListener.jsx";
import InfoSnackbar from "./InfoSnackbar.jsx";
import { RowData } from "../../data/formStore.js";

@inject("studyStore", "formStore", "clipboardStore")
@observer
class PasteableTableWrapper extends React.Component {
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
    if (!content || content._type !== "table") {
      return;
    }

    const newRow = new RowData();
    newRow.id = this.props.formStore.getUniqueId("row", "row_");

    /**
     * Create copy of table but with unique table id.
     * Actions.addTable() is not used here because it creates an uninitialized
     * new table (one without cells and fields). Instead of using the Actions.addTable()
     * and Actions.addField() utilities (which both call Actions.saveForm()), we create
     * an entire copy of the table in one pass and then make a single efficient call to
     * save the form.
     */
    const newTable = this.props.formStore.deepCopy(content);
    newRow.tables.push(newTable);

    /** Adds copied data to mobx store. */
    const section = this.props.formStore.findNode(
      "section",
      this.props.sectionId
    );
    section.rows.push(newRow);

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
          message={"Pasted table!"}
        />
      </PasteShortcutListener>
    );
  }
}

export default PasteableTableWrapper;
