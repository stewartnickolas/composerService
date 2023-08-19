import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FieldFinder from '../interface/components/fieldFinder.jsx'
import Validator from "../data/validator";

export default class TriggerRow extends React.Component{

  constructor(props){
    super(props);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
  }

  handleFieldsChange(unused, values) {
    let concatenated = values.join();
    this.props.handleChangeTrigger(this.props.index, 'fields', concatenated);
  }

  render(){
      const {index} = this.props;
      let hasErrorType = "triggerTypes." + this.props.id in this.props.errors && (Validator.notEmpty(this.props.errors, "A trigger type", this.props.triggerType, "triggerTypes." + this.props.id) != 'OK');
      let hasErrorFields = "triggerFields." + this.props.id in this.props.errors && (Validator.notEmpty(this.props.errors, "The trigger fields attribute", this.props.fields, "triggerFields." + this.props.id) != 'OK');
      let hasErrorValue = "triggerValues." + this.props.id in this.props.errors && (Validator.notEmpty(this.props.errors, "The attribute value ", this.props.value, "triggerValues." + this.props.id) != 'OK') && triggersWithoutValue.indexOf(this.props.triggerType) < 0;
      return(
        <div className="editCheckCard">
        <span className="editCheckCardRemove" onClick={() => this.props.handleRemoveTrigger(index) }></span> 
          <FormControl style={{minWidth: '150px'}} className={hasErrorType ? "error_field" : undefined}>
            <InputLabel>Type</InputLabel>
            <Select value={this.props.triggerType} onChange={(e) => this.props.handleChangeTrigger(index, 'triggerType', e.target.value)} autoWidth={true}>
              {triggerOptions.map((item, i) =>
                <MenuItem key={'trigger_opt_' + i} value={item}>{item}</MenuItem>
              )}
            </Select>
          </FormControl>
          {hasErrorType && <div className="errorMsg">{this.props.errors["triggerTypes." + this.props.id]}</div>}
          {(!!this.props.triggerType && triggersWithoutValue.indexOf(this.props.triggerType) < 0) &&
            <span className={hasErrorValue ? "error_field" : undefined}>
              <TextField label="Value" value={this.props.value} onChange={(e) => this.props.handleChangeTrigger(index, 'value', e.target.value)}/>
            </span>
          }
            {hasErrorValue && <div className="errorMsg" style={{marginLeft: '175px'}}>{this.props.errors["triggerValues." + this.props.id]}</div>}
          <div className={hasErrorFields ? "error_field" : undefined}>
            <FieldFinder label="Fields" name={`fields${this.props.id}`} value={this.props.fields} onChange={this.handleFieldsChange} suppressExternal={false} skipCategory={true}/>
          </div>
          {hasErrorFields && <div className="errorMsg">{this.props.errors["triggerFields." + this.props.id]}</div>}
        </div>
      );
  }
}



const triggerOptions = [
  'notBlank',
  'blank',
  'or',
  'xor',
  'alphaNumericFormat',
  'after',
  'isAfter',
  'before',
  'isBefore',
  'contains',
  'dateOrder',
  'strictDateOrder',
  'reverseDateOrder',
  'strictReverseDateOrder',
  'decreasing',
  'strictlyDecreasing',
  'timeDecreasing',
  'timeStrictlyDecreasing',
  'fieldChanged',
  'future',
  'notFuture',
  'datesOutsideDays',
    'datesOutsideHours',
    'datesOutsideMinutes',
  'datesWithinDays',
  'datesWithinMinutes',
  'datesWithinHours',
  'decimalRequired',
  'equals',
  'equalsAny',
  'equalsState',
  'greaterThan',
  'greaterThanOrEqual',
  'greaterThanState',
  'greaterThanOrEqualState',
  'increasing',
  'strictlyIncreasing',
  'timeIncreasing',
  'timeStrictlyIncreasing',
  'length',
  'lessThan',
  'lessThanOrEqual',
  'lessThanState',
  'lessThanOrEqualState',
  'match',
  'matchDates',
  'matchEntryDate',
  'minCharacters',
  'minLetters',
  'noneMatch',
  'notContains',
  'notEquals',
  'notEqualsOrBlank',
  'notEqualsState',
  'notMatch',
  'numberNonBlank',
  'plausibleEmail',
  'startsWith'
];

export const triggersWithoutValue = [
  '',
  'notBlank',
  'blank',
  'or',
  'xor',
  'alphaNumericFormat',
  'dateOrder',
  'strictDateOrder',
  'reverseDateOrder',
  'strictReverseDateOrder',
  'decreasing',
  'strictlyDecreasing',
  'timeDecreasing',
  'timeStrictlyDecreasing',
  'fieldChanged',
  'future',
  'notFuture',
  'increasing',
  'strictlyIncreasing',
  'timeIncreasing',
  'timeStrictlyIncreasing',
  'match',
  'matchEntryDate',
  'matchDates',
  'noneMatch',
  'notMatch',
  'plausibleEmail'
];