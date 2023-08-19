import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Label from "./label.jsx";
import FieldFinder from "./fieldFinder.jsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Info from "../info.jsx";
import Switch from "@material-ui/core/Switch";
import { createStyles, withStyles } from "@material-ui/core";
import StyledTextField from "./StyledTextField.jsx";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Validator from "../../data/validator";
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel";

const styles = createStyles((theme) => ({
  container: {
    borderRadius: 10,
    padding: 10,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 6,
    marginBottom: 6,
    border: "2px solid #AAA",
  },
  fieldFinder: {
    marginBottom: theme.spacing.unit * 2,
  },
  errorPresent: {
    border: "2px solid red",
    backgroundColor: "#FDD8D6",
    borderRadius: 10,
  },
  textField: {
    minWidth: 200,
  },
  or: {
    marginTop: theme.spacing.unit * 3,
  },
}));

/**
 * This component is intended to be used in dialogs for components
 * that may be wrapped in an <app:display>. For instance, this
 * component could be used in the addOrEditSection.jsx dialog
 * to control whether or not the section should be conditionally
 * shown/hidden.
 */
class AppDisplayFormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      usingVisibility /** Shows/hides the form group. */,
      handleChangeUsingVisibility,
      controlDisplayField /** The field whose value will be used to show/hide the display. */,
      handleChangeControlDisplayField,
      controlDisplayValue /** The value that will be used to show/hide the display. */,
      handleChangeControlDisplayValue,
      controlDisplayShowHide /** If true, the fields in the display will be visible but not editable. */,
      handleChangeControlDisplayShowHide,
      controlDisplayType /** The comparison type. */,
      handleChangeControlDisplayType,
      blankFields /** If true, the fields in the display will be blanked out. */,
      handleChangeBlankFields,
      componentType /** e.g., table, section, or field. */,
      errors = {},
      fieldNamesToExclude = [],
    } = this.props;

    // componentDescriptor is effectively a readable natural language id,
    // used embedded in dialog text as a highlight to current component,
    // without ambiguity.
    //
    // Initially it was only used to highlight the current component,
    // for the '...show this <component>, otherwise...' portion of the
    // dialog.
    //
    // e.g. for a field, the descriptor would need
    // the associated field name like so [descriptor="field (field_name)"].
    // Including the field name helps distinguish from other field
    // references in the dialog such as the field picker.
    //
    // Defaults to just the component type.
    const componentDescriptor = this.props.componentDescriptor
      ? this.props.componentDescriptor
      : this.props.componentType.toLowerCase()

    const title = `${componentType} Controlled By`;
    const info = `${componentType}s are displayed and editable by default. This property controls whether the 
                   ${componentType.toLowerCase()} is displayed or not, and if displayed if it is editable or not 
                   (i.e., disabled). The value of another field (a specific value, blank, not blank, or inequalities) is used 
                   to control the display.  Hiding a ${componentType.toLowerCase()} means it will not appear until 
                   the criteria is met. Disabling the ${componentType.toLowerCase()} means that the 
                   ${componentType.toLowerCase()} will be displayed, but will not be editable until the criteria is met.`
    let blankFieldsInfo = "";
    switch (componentType) {
      case "Section":
        blankFieldsInfo =
          " If on, the field(s) in the section will be blanked out (cleared) when the criteria above are no " +
          "longer met. If off, the field value will be preserved when the criteria above are no longer met.";
        break;
      case "Table":
        blankFieldsInfo =
          "If on, the field(s) in the table will be blanked out (cleared) when the criteria above are no " +
          "longer met. If off, the field value will be preserved when the criteria above are no longer met.";
        break;
      case "Field":
        blankFieldsInfo =
          "If on, the field will be blanked out (cleared) when the criteria above are no " +
          "longer met. If off, the field value will be preserved when the criteria above are no longer met.";
        break;
      default:
        break;
    }

    let hasErrorControlDisplayField = "controlDisplayField" in errors && (Validator.notEmpty(errors, "The controlled by field", controlDisplayField, "controlDisplayField") != 'OK');
    let hasErrorControlDisplayValue = "controlDisplayValue" in errors && (Validator.notEmpty(errors, "The controlled by field value", controlDisplayValue, "controlDisplayValue") != 'OK');
    let hasErrorControlDisplayShowHide = "controlDisplayShowHide" in errors && (Validator.notEmpty(errors, "The controlled field visibility", controlDisplayShowHide, "controlDisplayShowHide") != 'OK');

    return (
      <div className={classes.container}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={usingVisibility}
                onChange={handleChangeUsingVisibility}
                value="checkedA"
              />
            }
            label={
              <div style={{ fontSize: "1.2em" }}>
                <Label>{title}</Label>
                <Info>
                  <Label>{info}</Label>
                </Info>
              </div>
            }
          />
        </FormGroup>
        <Collapse in={usingVisibility}>
          <div>
            <h4>
              <Label>When field</Label>
            </h4>
            <div className={classes.fieldFinder}>
              <div className={hasErrorControlDisplayField ? classes.errorPresent : undefined}>
                <FieldFinder
                    name="controlDisplayField"
                    value={controlDisplayField}
                    onChange={handleChangeControlDisplayField}
                    suppressExternal={true}
                    skipCategory={true}
                    includeFieldIndex={false}
                    limit={1}
                    fieldNamesToExclude={fieldNamesToExclude}
                />
              </div>
              {hasErrorControlDisplayField && <div className="errorMsg">{errors.controlDisplayField}</div>}
            </div>
            <h4>
              <Label>is</Label>
            </h4>
            <div>
              <ControlDisplayCondition classes={classes}

                                       controlDisplayType={controlDisplayType}
                                       handleChangeControlDisplayType={handleChangeControlDisplayType}

                                       controlDisplayValue={controlDisplayValue}
                                       controlDisplayValueError={errors.controlDisplayValue}
                                       handleChangeControlDisplayValue={handleChangeControlDisplayValue}/>
            </div>
            <h4>
              <Label>show this {componentDescriptor}, otherwise</Label>
            </h4>
            <div>
              <div>
                <RadioGroup className={hasErrorControlDisplayShowHide ? classes.errorPresent : undefined}
                  name="align"
                  value={controlDisplayShowHide}
                  onChange={handleChangeControlDisplayShowHide}
                >
                  <FormControlLabel
                    value="show"
                    style={{ margin: 0 }}
                    control={<Radio />}
                    label="Disable"
                  />
                  <FormControlLabel
                    value="hide"
                    style={{ margin: 0 }}
                    control={<Radio />}
                    label="Hide"
                  />
                </RadioGroup>
                {hasErrorControlDisplayShowHide && <div className="errorMsg">{errors.controlDisplayShowHide}</div>}
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h4>
                  <Label>Blank Fields</Label>
                </h4>
                <Info>{blankFieldsInfo}</Info>
                <Switch
                  checked={blankFields}
                  onChange={handleChangeBlankFields}
                  value={true}
                />
              </div>
            </div>
          </div>

        </Collapse>
      </div>
    );
  }
}


/* ********************************************************************************
 * Condition
 */

// Condition elements

/**
 * NOTE: ConditionType/Value != ControlDisplayType/Value
 *       THIS IS AN IMPORTANT DISTINCTION TO KEEP IN MIND
 *
 * 'Condition' is meant to resolve the esoteric meaning of 'type' and 'value'
 * in controls display [see: esoteric control display logic],
 * as well as to provide a clear data structure that matches the UI elements
 * [see: ui structure].
 *
 *
 * [esoteric control display logic]
 *
 * As an example, consider the condition of the field being 'blank'.
 * In controls display, this corresponds to
 *
 *   control display {
 *     type: ""
 *     value: "'blank'"
 *   }
 *
 * as can be seen, 'blank' is encoded in the value.
 *
 * For 'condition', it is more sensible, where 'blank' is encoded by the type:
 *
 *   condition {
 *     type: "blank",
 *     value: ""
 *   }
 *
 *
 * [ui structure]
 *
 * The UI consists of the field 'type' followed by
 * the field 'value' (if relevant for the type).
 *
 * Thus, the condition structure
 *
 *   condition {
 *     type,
 *     value
 *   }
 *
 * directly matches the inputs observed in the UI.
 *
 * This offers improved clarity over the control display attributes,
 * which do not directly reflect this structure in all cases
 * (see the 'blank' and 'notBlank' conditions in [esoteric control display logic])
 */
function ControlDisplayCondition({ classes,

                                   controlDisplayValue,
                                   controlDisplayValueError,
                                   handleChangeControlDisplayValue,

                                   controlDisplayType,
                                   handleChangeControlDisplayType
                                 }) {

  const condition = conditionFromControlDisplayAttrs(controlDisplayType, controlDisplayValue)

  function handleChangeCondition(newCondition) {
    const { controlDisplayType, controlDisplayValue } = controlDisplayAttrsFromCondition(newCondition)

    handleChangeControlDisplayType(controlDisplayType)
    handleChangeControlDisplayValue(controlDisplayValue)
  }

  function handleChangeConditionType(newType) {
    handleChangeCondition(Object.assign({}, condition, { type: newType }))
  }

  function handleChangeConditionValue(newValue) {
    handleChangeCondition(Object.assign({}, condition, { value: newValue }))
  }

  return (
    <div>
      <ConditionTypeSelect conditionType={condition.type}
                           handleChangeConditionType={handleChangeConditionType}/>
      {conditionTypeHasValue(condition.type) &&
        <ConditionValueField classes={classes}
                             conditionValue={condition.value}
                             conditionValueError={controlDisplayValueError}
                             handleChangeConditionValue={handleChangeConditionValue}/>
      }
    </div>
  )
}

function ConditionTypeSelect({ conditionType,
                               handleChangeConditionType }) {
  return (
    <div style={{
      marginLeft: 5,
      marginBottom: 12,
      fontSize: 10,
      width: '100%'
    }}>
      <Select labelId="compare-select-label"
              value={conditionType}
              onChange={(e) => handleChangeConditionType(e.target.value)}
              displayEmpty>
        <MenuItem value="equals">equal to value</MenuItem>
        <MenuItem value="notEquals">not equal to value</MenuItem>

        <MenuItem value="blank">blank</MenuItem>
        <MenuItem value="notBlank">not blank</MenuItem>

        <MenuItem value="<">less than value</MenuItem>
        <MenuItem value="<=">less than or equal to value</MenuItem>
        <MenuItem value=">">greater than value</MenuItem>
        <MenuItem value=">=">greater than or equal to value</MenuItem>
      </Select>
    </div>
  )
}

function ConditionValueField({ classes,

                               conditionValue,
                               conditionValueError,
                               handleChangeConditionValue }) {
  return wrapError(classes, conditionValueError, (
    <StyledTextField
      className={classes.textField}
      label="Value"
      variant="outlined"
      margin="dense"
      value={conditionValue}
      onChange={e => handleChangeConditionValue(e.target.value)}
      fullWidth/>
  ))
}

// Condition properties

function conditionTypeHasValue(conditionType) {
  return !(conditionType === "blank" || conditionType === "notBlank")
}

// Condition params <=> control display attrs

function conditionFromControlDisplayAttrs(controlDisplayType,
                                          controlDisplayValue) {
  if (controlDisplayValue === "'blank'") {
    return {
      type: "blank",
      value: ""
    }
  } else if (controlDisplayValue === "'notBlank'") {
    return {
      type: "notBlank",
      value: ""
    }
  } else if (controlDisplayType === "" || controlDisplayType === "equals") {
    return {
      type: "equals",
      value: controlDisplayValue
    }
  } else {
    return {
      type: controlDisplayType,
      value: controlDisplayValue
    }
  }
}

function controlDisplayAttrsFromCondition({ type, value }) {
  if (type === "blank") {
    return {
      controlDisplayType: "",
      controlDisplayValue: "'blank'"
    }
  } else if (type === "notBlank") {
    return {
      controlDisplayType: "",
      controlDisplayValue: "'notBlank'"
    }
  } else {
    return {
      controlDisplayType: type,
      controlDisplayValue: value
    }
  }
}


// error wrapper

function wrapError(classes, error, el) {
  if (!error) {
    return el
  } else {
    return (
      <div>
        <div className={classes.errorPresent}>{el}</div>
        <div className="errorMsg">{error}</div>
      </div>
    )
  }
}

export default withStyles(styles)(AppDisplayFormGroup);
