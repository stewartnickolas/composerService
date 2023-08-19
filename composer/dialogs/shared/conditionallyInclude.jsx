import Checkbox from "@material-ui/core/Checkbox"
import Label from "../../interface/components/label.jsx"
import Info from "../../interface/info.jsx"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import React from "react"
import FieldFinder from "../../interface/components/fieldFinder.jsx"
import Validator from "../../data/validator";

export const conditionallyIncludeInitialState =
  // use the getter to standardize what the 'defaults' are
  getConditionallyIncludeDataFromObject({})

/**
 * Returns a subset of properties that pertain to 'conditionally include'
 * in the given object.
 *
 * Properties that are undefined for the object are
 * defaulted to implicit values.
 *
 * @param obj
 * @returns {{
 *   conditionallyIncludeChecked: *,
 *   conditionallyIncludeType: *,
 *   conditionallyIncludeFieldPath: *,
 *   conditionallyIncludeValue: *,
 * }}
 */
export function getConditionallyIncludeDataFromObject(obj) {
  return {
    conditionallyIncludeChecked: orDefault(obj.conditionallyIncludeChecked,     false),
    conditionallyIncludeType: orDefault(obj.conditionallyIncludeType,           'match'),
    conditionallyIncludeFieldPath: orDefault(obj.conditionallyIncludeFieldPath, ''),
    conditionallyIncludeValue: orDefault(obj.conditionallyIncludeValue,         ''),
  }
}

function orDefault(obj, def) {
  return obj ? obj : def
}

/**
 * @param {{ handleChange: EventHandlerNonNull,
 *           handleValueChange,
 *           handleChangeConditionallyIncludeChecked: EventHandlerNonNull,
 *           currentView: string,
 *           conditionallyIncludeChecked: boolean,
 *           conditionallyIncludeType: string,
 *           conditionallyIncludeFieldPath: string,
 *           conditionallyIncludeValue: string,
 *        }} props
 * @constructor
 */
export function ConditionallyIncludeSection(props) {
  let hasErrorConditionallyIncludeFieldPath = "conditionallyIncludeFieldPath" in props.errors && (Validator.notEmpty(props.errors, "The conditional field", props.conditionallyIncludeFieldPath, "conditionallyIncludeFieldPath") != 'OK');
  let hasErrorConditionallyIncludeValue = "conditionallyIncludeValue" in props.errors && (Validator.notEmpty(props.errors, "The conditional field value", props.conditionallyIncludeValue, "conditionallyIncludeValue") != 'OK');
  return (
    <div className="fieldGroup">
      <div style={{ fontSize: '1.2em' }}>
        <Checkbox checked={props.conditionallyIncludeChecked}
                  onChange={props.handleChangeConditionallyIncludeChecked} />
        <Label>Conditionally Include</Label>
        <Info><Label>Include the field on the form based on a condition.</Label></Info>
      </div>
      {props.conditionallyIncludeChecked &&
        <div id="conditionallyIncludeCheckedDiv">
          <div>
            <FormControl>
              <InputLabel>Condition</InputLabel>
              <Select value={props.conditionallyIncludeType}
                      onChange={props.handleChange('conditionallyIncludeType')}
                      autoWidth={true}>
                <MenuItem value="match">Match</MenuItem>
                <MenuItem value="equal">Equal</MenuItem>
                <MenuItem value="notMatch">Not Match</MenuItem>
                <MenuItem value="notEqual">Not Equal</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginTop: "5px" }} className={`textField ${hasErrorConditionallyIncludeFieldPath ? "error_field" : ""}`}>
            <FieldFinder label="Field"
                         name="conditionallyIncludeFieldPath"
                         value={props.conditionallyIncludeFieldPath}
                         onChange={handleFieldFinderSelection(props.handleValueChange('conditionallyIncludeFieldPath'))}
                         limit={1}
                         fieldNamesToExclude={props.fieldNamesToExclude == undefined ? [] : props.fieldNamesToExclude}/>
          </div>
          {hasErrorConditionallyIncludeFieldPath && <div className="errorMsg">{props.errors.conditionallyIncludeFieldPath}</div>}
          <div className="textField">
            <TextField label="Value"
                       fullWidth
                       value={props.conditionallyIncludeValue}
                       onChange={props.handleChange('conditionallyIncludeValue')}
                       className={hasErrorConditionallyIncludeValue ? "error_field" : undefined}/>
          </div>
          {hasErrorConditionallyIncludeValue && <div className="errorMsg">{props.errors.conditionallyIncludeValue}</div>}
        </div>
      }
    </div>
  )
}

function handleFieldFinderSelection(valueHandler) {
  return function (_, selections) {
    valueHandler((selections && selections[0]) ? selections[0] : '')
  }
}
