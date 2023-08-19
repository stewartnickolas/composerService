import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from "./Chip.jsx";
import Label from './label.jsx'
import Info from '../info.jsx'
import API from '../../data/api.js'
import { inject } from 'mobx-react';
import { CSSTransition } from 'react-transition-group';

@inject('studyStore', 'formStore')
export default class FieldFinder extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      matches: [],
      selections: [],
      showMenu: false,
      includeAllForms: !!props.forceExternal, 
      currentFormOptions: props.options,
      matchAgainst: '',
      fieldNamesToExclude: [],
      ...props
    }

    // perform field exclusions on options
    if (this.state.options)
      this.state.options = this.filterFieldOptions(this.state.options)
    if (this.state.currentFormOptions)
      this.state.currentFormOptions = this.filterFieldOptions(this.state.currentFormOptions)

    if(this.props.value !== undefined && this.props.value != null && this.props.value.length > 0){
      this.state.selections = this.props.value.split(',');
    }

    this.textInput = React.createRef();

    this.handleUpdateMatches = this.handleUpdateMatches.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleIncludeAllForms = this.toggleIncludeAllForms.bind(this);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.moveSelection = this.moveSelection.bind(this);
  }

    /**
     * Tries to find a reasonable field match for what the user is typing.  More weight is given to the field name, then
     * the group name, and finally the form name.  More points for exact matches vs. character matches.  This could probably
     * use some refinement at some point...
     * @param value
     */
  handleUpdateMatches(value){
      let values = value.toUpperCase().split(" ");
    this.setState({
        matchAgainst : value.toUpperCase()
    })
    const opts = this.state.options;
    const scores = new Map();

    opts.map((opt) => {
        let optName = opt.name;
        let parts = optName.split('/');
        let group = "", form = "", field = "";
        let formParts = optName.substring(0, optName.indexOf("/")).split(".form.name.");
        let whole = optName.toUpperCase();
        if (parts.length > 1) {
            group = formParts[0].toUpperCase();
            form = formParts[1].toUpperCase();
            field = whole.substring(whole.lastIndexOf("/") + 1, whole.length);
        } else {
            field = whole;
        }
        let score = 0;
        let matches = 0;
        values.map(val => {
            if(field.includes(val)){
                score += 100;
                matches++;
            }
            if(group.includes(val)){
                score += 90;
                matches++;
            }
            if(form.includes(val)){
                score += 80;
                matches++;
            }
            if(whole.includes(val) && matches > 1){
                score += 60;
            }
            let counted = "";
            for(let char of val){
                if(field.includes(char) && !counted.includes(char)){
                    score += 4;
                    counted += char;
                }
                if(group.includes(char) && !counted.includes(char)){
                    score += 3;
                    counted += char;
                }
                if(form.includes(char) && !counted.includes(char)){
                    score += 2;
                    counted += char;
                }
                if(whole.includes(char) && !counted.includes(char)){
                    score += 1;
                    counted += char;
                }
            }
        });
        scores.set(opt, score);
    });
    const sorted = new Map([...scores.entries()].sort((a, b) => b[1] - a[1]));
    let matches = Array.from(sorted.keys());
    if(matches.length === 0){
      matches = opts;
    }
    let currentPath = this.props.studyStore.currentGroup.name + '.form.name.' + this.props.studyStore.currentForm.name + '/';
    matches = matches.filter((match) =>
        this.state.selections.filter(x => x == match.name || x == currentPath+match.name || currentPath+x == match.name).length == 0);
    matches = Array.from(new Set(matches));
    const numResults = matches.length < 10 ? matches.length : 10;
    matches = matches.slice(0, numResults);
    this.setState({
      matches,
      showMenu: true
    });
  }

  handleToggleMenu(bOpen){
    this.setState({
      showMenu: bOpen
    })
  }

  handleSelectItem(selected){
    if(this.props.studyStore.readonlyMode) return;
    let selections = [...this.state.selections];
    selections.push(selected.name);
    this.setState({
      selections: Array.from(new Set(selections))
    }, () => {
          this.handleUpdateMatches('')//reset the matches so that this item will be visually removed from the list
          this.props.onChange(this.props.name, this.state.selections);//send a change update to the parent
          this.setState({showMenu: false})//Close the menu
        }
    );
    this.textInput.current.value = '';
    this.textInput.current.focus();
  }

  handleManualEntry(e){
    if(this.props.studyStore.readonlyMode) return;
    if(e.key === 'Enter'){
      let val = e.target.value;
      console.log("Typed: " + val);
      this.handleSelectItem({name: val});
    }
  }

  handleDelete(idx, callback){
    if(this.props.studyStore.readonlyMode) return;
    let selections = [...this.state.selections];
    selections.splice(idx, 1);
    this.setState({ selections }, () => {
      this.props.onChange(this.props.name, this.state.selections);
      if (this.state.showMenu)
        this.handleUpdateMatches(''); //reset the matches so that this item will be visually added back to the list
      if (typeof callback === "function")
        callback();
    });
  }

  handleEdit(selection, idx){
    if(this.props.studyStore.readonlyMode) return;
    this.handleDelete(idx, () => {
      this.textInput.current.value = selection;
    });
  }

  activate(){
    if(this.props.limit !== undefined && this.state.selections.length >= this.props.limit){ //If already at the limit, do not activate options
      alert("This field is limited to " + this.props.limit + " selection(s).");
      return;
    }
    this.textInput.current.focus();
    this.handleUpdateMatches('');
    this.setState({
      showMenu: true
    })
  }

  deactivate(e){
    let currentTarget = e.currentTarget;
    
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
          this.setState({
            showMenu: false
          })
          if(this.textInput !== null && this.textInput.current !== null){
            this.textInput.current.value = '';
          }
      }
    }, 1);
  }

  toggleIncludeAllForms(){
    this.state.includeAllForms = !this.state.includeAllForms;
    if(this.state.includeAllForms){
        API.getFieldListForView(this.props.studyStore.studyData.id, this.props.studyStore.currentView.id, this.props.skipCategory, this.props.includeFieldIndex, (data) => {
            this.setState({
                options: this.filterFieldOptions([...data, ...this.state.currentFormOptions])
            }, () => {this.handleUpdateMatches('');})
        });
    } else {
        this.setState({
            // 'currentFormOptions' serves as a cache of the fields on the current form,
            // so we simply reference that for the final set of options
            options: this.filterFieldOptions(this.state.currentFormOptions)
        }, () => {this.handleUpdateMatches('');})
    }
  }

  //When loading, either load the current form options,
  //Or initiate a call to the API to receive other form options
  componentDidMount(){
    if(this.state.includeAllForms){
      API.getFieldListForView(this.props.studyStore.studyData.id, this.props.studyStore.currentView.id, this.props.skipCategory, this.props.includeFieldIndex, (data) => {
        this.setState({
            options: this.filterFieldOptions(data), // MAYBE - only if justified
            currentFormOptions: []
        }, () => {this.handleUpdateMatches('');})
      });
    } else {
      API.getFieldListForForm(this.props.studyStore.studyData.id, this.props.studyStore.currentView.id, this.props.studyStore.currentForm.id, (data) => {
        const opts = this.filterFieldOptions(data)
        this.setState({
          options: opts,
          currentFormOptions: opts
        })
      })
    }
  }

  filterFieldOptions(fieldOptions) {
    let currentPath = this.props.studyStore.currentGroup.name + '.form.name.' + this.props.studyStore.currentForm.name + '/';
    return fieldOptions.filter(op =>
        !op.name.endsWith("/") && // remove nameless fields (e.g. labels) from field list
        this.state.fieldNamesToExclude.filter(x => op.name==x || (op.name.endsWith('/' + x) && op.name.startsWith(currentPath))).length == 0
    )
  }

  /**
   * Moves a selection from 'prevIndex' to 'newIndex' in the
   * selections array. Used to implement drag-n-drop.
   * See Chip.jsx for more
   * @param {*} prevIndex index where selection currently resides
   * @param {*} newIndex index where selection is moving to
   */
  moveSelection(prevIndex, newIndex) {
    const selectionsCpy = this.state.selections.slice(); // Make deep copy of selections
    const selectionToMove = selectionsCpy[prevIndex];
    selectionsCpy.splice(prevIndex, 1);
    selectionsCpy.splice(newIndex, 0, selectionToMove);
    this.setState({
      selections: selectionsCpy
    }, () => {
          this.props.onChange(this.props.name, this.state.selections);
        }
    );
  }

  render(){
    return(
      <div className="autoComplete" onClick={() => setTimeout(() => {this.activate()},300)} onBlur={(e) => this.deactivate(e)}>
        <InputLabel><Label>{this.props.label}</Label></InputLabel>
        {!!this.props.info &&
          <Info>{this.props.info}</Info>
        }
        <br/>
        {this.state.selections.map((selection, index) =>
            <Chip
                key={"selection_" + selection}
                name={this.props.name}
                index={index}
                selection={selection}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleMove={this.moveSelection}
            />
        )}
        { (this.props.limit === undefined || this.state.selections.length < this.props.limit) &&
          <div>
            <input type="text" style={{width: '100%'}}
                 onChange={(e) => this.handleUpdateMatches(e.target.value)}
                 onKeyPress={(e) => this.handleManualEntry(e)}
                 onClick={(e) => {
                   if(this.state.showMenu) e.stopPropagation();
                 }}
                 ref={this.textInput} />
          <div className="autoCompleteOptions">
            {this.state.showMenu &&
            <div onClick={(e) => {e.stopPropagation();}}>
              {(!this.props.suppressExternal && !this.props.forceExternal) &&
              <MenuItem style={{
                "font-size": "1em",
                "padding": "6px 16px",
                "width": "max-content",
                "border-radius": "4px",
                "text-transform": "uppercase",
                "background-color": "#e0e0e0",
                "box-shadow": "0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)"}}
                        onClick={() => this.toggleIncludeAllForms()}>
                {this.state.includeAllForms ? "Current Form Only" : "Include All Forms"}
              </MenuItem>
              }
              {this.state.matches.map((match, index) =>
                  <Match key={match + index} match={match} matchAgainst={this.state.matchAgainst} handleSelectItem={this.handleSelectItem}/>
              )}
            </div>
            }
          </div>
        </div>
        }
        <div className="autoCompleteBase"/>
      </div>
    );
  }

}

export class Match extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showOptionsForMatch: false
    }
  }

  getOptionsForMatch(match, formStr, fieldStr){
    const ret = [];
    for(let i = 1; i <= match.fixedIndex; i++){
      ret.push({
        name: match.name + "(" + i + ")",
        label: fieldStr + "(" + i + ")" + formStr
      });
    }
    return ret;
  }

  render(){
  let str = this.props.match.name;
  let fieldName = str;
  let formName = "";
  let idx = str.indexOf("/");
  if(idx > -1){
      formName = str.substring(0, idx);
      formName = formName.replace("form.name.", "");
      formName = formName.replace(/(\/.*\/)/, ' ');
      fieldName = str.substring(str.lastIndexOf("/") + 1, str.length);
  }
  let check = this.props.matchAgainst;
  let fieldStr = "";
  let formStr = idx > -1 ? " <b>on form</b> " : "";
  for(let i = 0; i < fieldName.length; i++){
      if(check.includes(fieldName[i].toUpperCase())){
          fieldStr += "<span class='fieldFinderCharMatch'>" + fieldName[i] + "</span>";
      } else {
          fieldStr += fieldName[i];
      }
  }
  for(let i = 0; i < formName.length; i++){
      if(check.includes(formName[i].toUpperCase())){
          formStr += "<span class='fieldFinderCharMatch'>" + formName[i] + "</span>";
      } else {
          formStr += formName[i];
      }
  }
  let outStr = fieldStr + formStr;
  return(
    <div>
      <MenuItem style={{height: '6px'}}
        onClick={(e) => this.props.handleSelectItem(this.props.match)}>
        <div className="fieldFinderMatchBtn"   dangerouslySetInnerHTML={{
            __html: outStr
        }}></div>
        {(this.props.match.fixedIndex !== undefined && this.props.match.fixedIndex > 0) &&
          <span className="fieldFinderExpand" 
              onClick={(e) => {
                  e.stopPropagation(); 
                  this.setState({showOptionsForMatch: true})
                }}>
            +
          </span>
        }
      </MenuItem>
      {this.state.showOptionsForMatch &&
        <div>
          {this.getOptionsForMatch(this.props.match, formStr, fieldStr).map((opt, idx) => 
            <MenuItem key={idx} style={{height: '6px'}} onClick={(e) => this.props.handleSelectItem({name: opt.name})} >
              <div dangerouslySetInnerHTML={{
                  __html: opt.label
              }}></div>
            </MenuItem>
          )}
        </div>
      }
    </div>
  );
  }
}