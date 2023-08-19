import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Label from '../interface/components/label.jsx'
import Info from '../interface/info.jsx'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { observer, inject } from 'mobx-react'
import Actions from '../data/actions.js'
import AutoComplete from '../interface/components/autoComplete.jsx'
import Validator from '../data/validator.js'
import NumericInput from "../interface/components/NumericInput.jsx"
import {
  conditionallyIncludeInitialState,
  getConditionallyIncludeDataFromObject,
  ConditionallyIncludeSection
} from "./shared/conditionallyInclude.jsx"
import FieldFinder from "../interface/components/fieldFinder.jsx"
import ResizeDialogTitle from '../interface/ResizeDialogTitle.jsx';
import AppDisplayFormGroup from '../interface/components/AppDisplayFormGroup.jsx';

@inject('studyStore', 'formStore')
@observer
export default class AddOrEditTable extends React.Component {

  constructor(props) {
    super(props);
    let section = this.props.section;
    //when adding a table to a section, look up the section by the ID
    if(!section){
      section = this.props.formStore.findNode('section', this.props.sectionId);
    }
    //If new, initialize defaults
    if(!this.props.id) {
      this.state = {
        numRows: 1,
        numCols: 1,
        width: '100%',
        alignment: 'center',
        autoNumber: false,
        showBorders: false,
        columnHeaders: [],
        columnHeadersSortBy: [],
        rowLabels: [],
        columnWidths: [],
        tableRows: [],
        showColumnHeaders: false,
        indexed: section.indexed,
        fixedIndex: Number(section.fixedIndex),
        showRowLabels: false,
        showAlignment: false,
        controlDisplayValue: '',
        controlDisplayField: '',
        controlDisplayShowHide: '',
        controlDisplayType: '',
        usingVisibility: false,
        currentTab: 'basic',
        attributes: {},
        errorMap: {},

        ...conditionallyIncludeInitialState
      }
    } else {
      this.state = {
        numRows: props.numRows,
        numCols: props.numCols,
        width: props.width,
        alignment: props.alignment,
        autoNumber: props.autoNumber,
        showBorders: props.showBorders,
        columnHeaders: props.columnHeaders,
        columnHeadersSortBy: props.columnHeadersSortBy ? props.columnHeadersSortBy : [],
        rowLabels: props.rowLabels,
        columnWidths: props.columnWidths ? props.columnWidths : [],
        tableRows: props.tableRows,
        showColumnHeaders: props.columnHeaders.length > 0,
        showRowLabels: props.rowLabels.length > 0,
        indexed: section.indexed,
        fixedIndex: Number(section.fixedIndex),
        showAlignment: props.width !== '100%',
        controlDisplayValue: props.controlDisplayValue,
        controlDisplayField: !!props.controlDisplayField ? props.controlDisplayField : '',
        controlDisplayShowHide: props.controlDisplayShowHide,
        controlDisplayType: props.controlDisplayType ? props.controlDisplayType : '',
        usingVisibility: props.controlDisplayField !== null && props.controlDisplayField !== undefined && props.controlDisplayField.length > 0,
        currentTab: 'basic',
        attributes: Object.assign({},props.attributes),
        errorMap: {},
        blankFields: props.blankFields,
        ...getConditionallyIncludeDataFromObject(props)
      };
    }
    this.handleBlankOrNot = this.handleBlankOrNot.bind(this);
    this.handleOkBtn = this.handleOkBtn.bind(this);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
    this.handleChangeRowLabelsColumnTitle = this.handleChangeRowLabelsColumnTitle.bind(
      this
    );
  }

  handleOkBtn() {
    let errorMap = {};
    if (this.state.usingVisibility) {
      Validator.notEmpty(errorMap, "The controlled by field", this.state.controlDisplayField, "controlDisplayField");
      Validator.notEmpty(errorMap, "The controlled by field value", this.state.controlDisplayValue, "controlDisplayValue");
      Validator.notEmpty(errorMap, "The controlled field visibility", this.state.controlDisplayShowHide, "controlDisplayShowHide");
    }
    if (this.state.conditionallyIncludeChecked) {
      Validator.notEmpty(errorMap, "The conditional field", this.state.conditionallyIncludeFieldPath, "conditionallyIncludeFieldPath");
      Validator.notEmpty(errorMap, "The conditional field value", this.state.conditionallyIncludeValue, "conditionallyIncludeValue");
    }
    let currentTab = Validator.getNewTab(this.state.currentTab, {}, errorMap);
    this.setState({
      currentTab,
      errorMap
    })
    if (Object.keys(errorMap).length > 0) {
      return;
    }
    //Only send data specific to the table.  I.e. remove anything used for validation or conditional logic
    const setLabels = this.state.showRowLabels ? this.state.rowLabels : [];
    const setHeaders = this.state.showColumnHeaders ? this.state.columnHeaders : [];
    const setSortBy = this.state.showColumnHeaders ? this.state.columnHeadersSortBy : []
    let table = {
      numRows: this.state.numRows,
      numCols: this.state.numCols,
      width: this.state.width,
      alignment: this.state.alignment,
      autoNumber: this.state.autoNumber,
      showBorders: this.state.showBorders,
      columnHeaders: setHeaders,
      columnHeadersSortBy: setSortBy,
      rowLabels: setLabels,
      columnWidths: finalizeColumnWidths(this.state.numCols, this.state.columnWidths),
      tableRows: this.state.tableRows,
      controlDisplayValue: this.state.controlDisplayValue,
      controlDisplayField: this.state.controlDisplayField,
      controlDisplayShowHide: this.state.controlDisplayShowHide,
      controlDisplayType: this.state.controlDisplayType,
      attributes: this.state.attributes,
      blankFields: this.state.blankFields,
      ...getConditionallyIncludeDataFromObject(this.state)
    }

    if(this.state.showColumnHeaders && table.columnHeaders.length !== table.numCols){
      if(table.columnHeaders.length < table.numCols){
        for(let i = table.columnHeaders.length; i < table.numCols; i++){
          table.columnHeaders.push("");
        }
      } else {
        table.columnHeaders = table.columnHeaders.slice(0, table.numCols);
      }
    }

    if(!!this.props.id) {
      table.id = this.props.id;
    }

    Actions.addTable(this.props.sectionId, table, this.props.section);
    Actions.closeDialog();
  }

  handleChangeColumnWidth = (index) => (newWidth) => {
    if(this.props.studyStore.readonlyMode) return;

    this.setState((state) => {
      const newWidths = state.columnWidths.slice()
      newWidths[index] = newWidth
      return {
        columnWidths: newWidths
      }
    })
  }

  handleChangeUsingVisibility = (e) => {
    if(this.props.studyStore.readonlyMode) return;
    const checked = e.target.checked;
    this.setState({
      usingVisibility: checked
    });
    if(!checked){
      this.setState({
        controlDisplayField: '',
        controlDisplayValue: '',
        controlDisplayShowHide: '',
        controlDisplayType: ''
      });
    }
  }

  handleChangeConditionallyIncludeChecked = (e) => {
    if(this.props.studyStore.readonlyMode) return;
    const checked = e.target.checked;
    this.setState({
      conditionallyIncludeChecked: checked
    });
    if(!checked){
      this.setState(conditionallyIncludeInitialState);
    }
  }

  handleChangeColumnHeader(e, index) {
    if(this.props.studyStore.readonlyMode) return;
    let columnHeaders = this.state.columnHeaders.slice();
    columnHeaders[index] = e.target.value;
    this.setState({
      columnHeaders: columnHeaders,
    });
  }

  /* ********************* *
   * COLUMN HEADER SORT BY *
   * ********************* */

  // HANDLERS

  /**
   * Handle select onChange call, which calls with normal Event argument
   */
  handleChangeColumnHeaderSortByType = (index) => (e) => {
    this.updateColumnHeaderSortBy(index)("type")(e.target.value)
  }

  /**
   * Handle the FieldFinder onChange call, which calls with arguments
   * 'name' and 'selections'. Name is unused.
   */
  handleChangeColumnHeaderSortByField = (index) => (_, selections) => {
    this.updateColumnHeaderSortBy(index)("field")(selections && selections[0] ? selections[0] : "")
  }

  // CRUD

  getColumnHeaderSortBy = (index) => {
    const sortBy = this.state.columnHeadersSortBy[index]
    return sortBy ? sortBy : { field: "", type: "" }
  }

  updateColumnHeaderSortBy = (index) => (prop) => (value) => {
    const newSortBy = Object.assign({},
      this.getColumnHeaderSortBy(index),
      {
        [prop]: value
      })

    let sortBys = this.state.columnHeadersSortBy.slice()
    sortBys[index] = newSortBy
    this.setState({
      columnHeadersSortBy: sortBys
    })
  }

  handleChangeRowLabel(e, index){
    if(this.props.studyStore.readonlyMode) return;
    let rowLabels = this.state.rowLabels.slice();
    rowLabels[index] = e.target.value;
    this.setState({
      rowLabels: rowLabels
    });
  }

  handleChangeRowLabelValueKey(value){
    if(this.props.studyStore.readonlyMode) return;
    const clean = Validator.cleanForDBName(value);
    let attrs = this.state.attributes;
    attrs['rowLabelValueKey'] = clean;
    this.setState({
      attributes: attrs
    })
  }

  handleChange = name => event => {
    this.handleValueChange(name)(event.target.value)
  };

  handleValueChange = name => value => {
    if(this.props.studyStore.readonlyMode) return;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = name => event => {
    if(this.props.studyStore.readonlyMode) return;
    this.setState({
      [name]: event.target.checked
    });
  };

  handleFieldsChange(name, values){
    if(this.props.studyStore.readonlyMode) return;
    let concatenated = values.join();
    this.setState({
      [name] : concatenated
    });
  }
  
  handleBlankOrNot(val) {
    if(this.props.studyStore.readonlyMode) return;
    this.setState({
      controlDisplayValue: val
    })
  }

  RowWidthSection = () => {
    return (
      <fieldset style={{ marginTop: '1rem' }}>
        <legend style={{ fontSize: '1.2em' }}>
          <Label>Column Widths (%)</Label>
          <Info><Label>
            Specify custom widths by entering an integer for each column.
            The entered integer value represents a percentage of the
            width of the form.
            If left blank, the system will auto adjust the column.
          </Label></Info>
        </legend>
        <table>
          {(this.state.showRowLabels || this.state.autoNumber) &&
            <tr>
              <td>Label Column</td>
              <td>
                <NumericInput value={orDefault(this.state.columnWidths[0], "")}
                              decimal={false}
                              onChange={this.handleChangeColumnWidth(0)}/>
              </td>
            </tr>
          }
          {[...Array(this.state.numCols)].map((x, i) => {
            return (
              <tr>
                <td>Column {i+1}</td>
                <td>
                  <NumericInput value={orDefault(this.state.columnWidths[i+1], "")}
                                decimal={false}
                                onChange={this.handleChangeColumnWidth(i+1)}/>
                </td>
              </tr>
            )
          })}
        </table>
      </fieldset>
    )
  }

  handleChangeRowLabelsColumnTitle(e) {
    this.setState({
      attributes: {
        ...this.state.attributes,
        rowLabelsColumnTitle: e.target.value,
      },
    });
  }

  render() {
    const inRepeatingSection = this.state.indexed
    const inFixedRepeatingSection =
      inRepeatingSection
      && this.state.fixedIndex !== undefined
      && this.state.fixedIndex > 0

    return(
      <div>
        <Dialog open={this.props.formStore.showDialog} onClose={() => Actions.closeDialog()} PaperComponent={this.props.paperComponent} fullScreen={this.props.fullScreen} >
          <ResizeDialogTitle
            title="Table Properties"
            titleId="form-dialog-title"
            fullScreen={this.props.fullScreen}
            handleResize={this.props.handleResize}
          />
          <DialogContent>
            <AppBar position="static">
              <Tabs value={this.state.currentTab} onChange={(e, val) => this.setState({ currentTab: val })}>
                <Tab value="basic" label="Basic" />
                <Tab value="advanced" label="Advanced" />
              </Tabs>
            </AppBar>
            { this.state.currentTab === 'basic' &&
            <div>
            <FormControl>
              <InputLabel>Columns</InputLabel>
              <Select value={this.state.numCols} onChange={this.handleChange('numCols')} autoWidth={true}>
                {[...Array(20)].map((x, i) =>
                  <MenuItem key={'table_cols_' + i} value={Number(i + 1)}>{i + 1}</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Rows</InputLabel>
              <Select value={this.state.numRows} onChange={this.handleChange('numRows')} style={{width: '100px'}}>
                {[...Array(40)].map((x, i) =>
                  <MenuItem key={'table_rows_' + i} value={Number(i + 1)}>{i + 1}</MenuItem>
                )}
              </Select>
            </FormControl>
            <div style={{display: 'block'}}>
              <FormControl>
                <FormControlLabel control={<Checkbox checked={this.state.autoNumber} onChange={this.handleCheckboxChange('autoNumber') }/>} label="Number Rows" />
                <FormControlLabel control={<Checkbox checked={this.state.showBorders} onChange={this.handleCheckboxChange('showBorders') }/>} label="Show Borders" />
                <FormControlLabel control={<Checkbox checked={this.state.showColumnHeaders} onChange={this.handleCheckboxChange('showColumnHeaders')}/>} label="Column Headers" />
                { inFixedRepeatingSection &&
                  <FormControlLabel control={<Checkbox checked={this.state.showRowLabels} onChange={this.handleCheckboxChange('showRowLabels')}/>} label="Row Labels" />
                }
              </FormControl>
            </div>
            {this.state.showColumnHeaders &&
              <div style={{display: 'block'}}>
                <h3>Headers</h3>
                <table>
                  <tr>
                    <td className="heading_medium">Column</td>
                    <td className="heading_medium">Header</td>
                    {inRepeatingSection &&
                      <td className="heading_medium">Sort By Field</td>
                    }
                    {inRepeatingSection &&
                      <td className="heading_medium">Sort By Type</td>
                    }
                  </tr>
                  {[...Array(this.state.numCols)].map((x, i) => {
                    return(
                      <tr key={'header_' + i}>
                        <td className="lightly_boxed">
                          {i + 1}
                        </td>
                        <td className="lightly_boxed">
                          <TextField value={this.state.columnHeaders[i]}
                                     onChange={(e) => this.handleChangeColumnHeader(e, i)}/>
                        </td>
                        {inRepeatingSection &&
                          <td className="lightly_boxed">
                            <div className="sortByField">
                              <FieldFinder onChange={this.handleChangeColumnHeaderSortByField(i)}
                                           value={this.getColumnHeaderSortBy(i).field}
                                           name={"tableSortByField"}
                                           suppressExternal={true}
                                           skipCategory={true}
                                           includeFieldIndex={false}
                                           limit={1}/>
                            </div>
                          </td>
                        }
                        {inRepeatingSection &&
                          <td className="lightly_boxed">
                            <FormControl>
                              <Select value={this.getColumnHeaderSortBy(i).type}
                                      onChange={this.handleChangeColumnHeaderSortByType(i)}
                                      autoWidth={true}>
                                <MenuItem value=""></MenuItem>
                                <MenuItem value="text">Text</MenuItem>
                                <MenuItem value="number">Number</MenuItem>
                                <MenuItem value="date">Date</MenuItem>
                              </Select>
                            </FormControl>
                          </td>
                        }
                      </tr>
                    );
                  })
                  }
                </table>
              </div>
            }
            { (inFixedRepeatingSection && this.state.showRowLabels) &&
              <div style={{display: 'block'}}>                
                <h4>Row Labels</h4>
                <div>
                  <Label>Column Title</Label>:{" "}
                  <TextField
                    value={
                      this.state.attributes.rowLabelsColumnTitle
                    }
                    onChange={this.handleChangeRowLabelsColumnTitle}
                  />
                </div>
                <Label>Row Label Field Name</Label>: <TextField value={this.state.attributes.rowLabelValueKey} onChange={(e) => this.handleChangeRowLabelValueKey(e.target.value)}/>
                <Info>
                  When using row labels, a hidden field is inserted into the table that stores the value of the label.  You can specify the name of that field here.
                </Info>
                {[...Array(this.state.fixedIndex)].map((x, i) => {
                  return(
                    <div key={i} >Row {i + 1}<TextField value={this.state.rowLabels[i]} onChange={(e) => this.handleChangeRowLabel(e, i)}/></div>
                  );
                }
                )}
              </div>
            }
            <br/>
            <RadioGroup name="formType" value={this.state.width} onChange={this.handleChange('width')} style={{display: 'flex', flexDirection: 'row'}}>
              <FormControlLabel value="100%" control={<Radio/>} label="Full" />
              <FormControlLabel value="auto" control={<Radio />} label="Auto" />
            </RadioGroup>
            {this.state.width === 'auto' &&
              <FormControl>
                <InputLabel>Alignment</InputLabel>
                <Select value={this.state.alignment} onChange={this.handleChange('alignment')} autoWidth={true}>
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="center">Center</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </Select>
              </FormControl>
            }
            </div>
            }
            {this.state.currentTab === 'advanced' &&
              <div key="advancedTab">
                <div>
                  <div>
                    <AppDisplayFormGroup
                      errors={this.state.errorMap}
                      usingVisibility={this.state.usingVisibility}
                      handleChangeUsingVisibility={this.handleChangeUsingVisibility}
                      controlDisplayField={this.state.controlDisplayField}
                      handleChangeControlDisplayField={this.handleFieldsChange}
                      controlDisplayValue={this.state.controlDisplayValue}
                      handleChangeControlDisplayValue={this.handleValueChange("controlDisplayValue")}
                      controlDisplayShowHide={this.state.controlDisplayShowHide}
                      handleChangeControlDisplayShowHide={this.handleChange("controlDisplayShowHide")}
                      controlDisplayType={this.state.controlDisplayType}
                      handleChangeControlDisplayType={this.handleValueChange("controlDisplayType")}
                      blankFields={this.state.blankFields}
                      handleChangeBlankFields={this.handleCheckboxChange("blankFields")}
                      componentType="Table"
                    />
                  </div>
                  <this.RowWidthSection/>
                </div>
                <ConditionallyIncludeSection
                  errors={this.state.errorMap}
                  handleChange={this.handleChange}
                  handleValueChange={this.handleValueChange}
                  handleChangeConditionallyIncludeChecked={this.handleChangeConditionallyIncludeChecked}
                  currentView={this.props.studyStore.currentView.id}
                  conditionallyIncludeChecked={this.state.conditionallyIncludeChecked}
                  conditionallyIncludeType={this.state.conditionallyIncludeType}
                  conditionallyIncludeFieldPath={this.state.conditionallyIncludeFieldPath}
                  conditionallyIncludeValue={this.state.conditionallyIncludeValue}/>
              </div>
            }
          </DialogContent>
          <DialogActions >
            <Button onClick={() => this.handleOkBtn()}>Ok</Button>
            <Button onClick={() => Actions.closeDialog()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function orDefault(x, def) {
  return x ? x : def
}

/**
 * Ensure there is at least the empty string for columnWidths
 */
function finalizeColumnWidths(numCols, columnWidths) {
  const finalWidths = []
  for (let i = 0; i <= numCols; i++) {
    finalWidths[i] = (columnWidths.length > i && columnWidths[i]) // mobx throws warning when accessing invalid index
      ? columnWidths[i] : ""
  }
  return finalWidths
}
