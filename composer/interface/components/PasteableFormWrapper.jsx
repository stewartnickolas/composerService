import React from "react";
import Actions from "../../data/actions.js";
import { observer, inject } from "mobx-react";
import { action } from "mobx";
import PasteShortcutListener from "./PasteShortcutListener.jsx";
import InfoSnackbar from "./InfoSnackbar.jsx";
import { FormDataDoc } from "../../data/formStore.js";
import API from "../../data/api.js";
import { EditorType } from "../propertiesEditor/editorTypes.js";

@inject("studyStore", "formStore", "clipboardStore")
@observer
class PasteableFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handlePaste = this.handlePaste.bind(this);
  }

  @action
  handlePaste = () => {
    const content = this.props.clipboardStore.content;
    if (!content || content._type !== "formRef") {
      return;
    }

    /**
     * Represents the path that the new form will be posted to.
     * e.g., study id -> form type (site/patient) -> group id
     */
    const path = this.props.studyStore.getPath(this.props.group);

    // Only applies to shared forms
    const firstInstance = false;

    /**
     * The id of the FormRef that represents the copied form. This
     * id will be used to initialize the new form. See ComposerDBMongo.java
     * for more
     */
    const templateId = content.refId;

    /**
     * Create a mostly blank FormDataDoc object with a unique name and label.
     * We copy over the metadata necessary to create a form according to 
     * addForm.jsx.
     * We give the form a unique name and unique label in order to avoid the
     * possiblity that the user forgets to do so later
     */
    const newForm = new FormDataDoc();
    newForm.formLabel = content.label + " copy";
    newForm.formType = content.formType;
    /**
     * Note that only letters, numbers, and periods can be used
     * in a form name
     */
    newForm.formName = "copy." + content.name;
    newForm.onDemand = content.onDemand;

    API.addForm(newForm, path, templateId, firstInstance, (response) => {
      this.setState({ open: true });

      // Selects new form's form tab
      Actions.refreshView({
        type: "self",
        addedFormId: response.id,
      });

      Actions.closePropertiesEditor();
      Actions.openPropertiesEditor(EditorType.FORM_DETAILS);
    });
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

export default PasteableFormWrapper;
