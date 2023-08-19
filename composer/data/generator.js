import Actions from './actions.js'
/**
 * Responsible for 'generating' an initial state for newly created components
 * @type type
 */
class Generator {

  studyStore;
  formStore;

  makeField(cellId, fieldType, fieldData) {
    let newField = false;
    console.log('looking for field ' + cellId);
    if (fieldData === null || fieldData === undefined) {

      fieldData = {};
      fieldData.type = "field";
      fieldData.fieldType = fieldType;
      fieldData.labelColor = "#000000";
      newField = true;
      if (fieldType !== 'label') {
        fieldData.labelClass = "labelTop";
        fieldData.fieldPlaceholder = "";
        fieldData.fieldSize = "";
        fieldData.usingDimensions = "";
        fieldData.fieldWidth = "";
        fieldData.fieldHeight = "";
        fieldData.absoluteOrRelativeSize = "";
        fieldData.usingVisibility = "";
        fieldData.maxLength = "";
        fieldData.cDash = "";

        if (fieldType === "radio" || fieldType === "select" || fieldType === "combo") {//options only apply to certain types
          fieldData.fieldOptionsClass = "radiosVertical";
          fieldData.fieldOptions = [{
            label: "Option 1",
            value: "Option 1"
          }, {
            label: "Option 2",
            value: "Option 2"
          }];
        }
      } else {
        fieldData.fieldLabel = "Label";
      }
    }

    //if a new field was successfully added in the GUI, mirror that in the JSON data structure
    if (newField) {
      Actions.addField(cellId, fieldData);
    }

  }

} export default new Generator();
