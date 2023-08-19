import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import Label from './label.jsx'

export default class AutoComplete extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      matches: [],
      selections: [],
      showMenu: false,
      ...props
    }
    if(this.props.value !== undefined && this.props.value.length > 0){
      this.state.selections = this.props.value.split(',');
    }

    this.textInput = React.createRef();

    this.handleUpdateMatches = this.handleUpdateMatches.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
  }

  handleUpdateMatches(value){
    const opts = this.state.options;
    const bestMatches = opts.filter((opt) => opt.startsWith(value));
    const nearMatches = opts.filter((opt) => !opt.startsWith(value) && opt.indexOf(value) !== -1);
    let matches = [...bestMatches, ...nearMatches];

    if(matches.length === 0){
      matches = opts;
    }
    matches = matches.filter((match) => !(this.state.selections.includes(match)));
    matches = Array.from(new Set(matches));
    const numResults = matches.length < 5 ? matches.length : 5;
    matches = matches.slice(0, numResults);
    this.setState({
      matches,
      showMenu: true
    })
    console.log("current matches: " + this.state.matches);
  }

  handleToggleMenu(bOpen){
    this.setState({
      showMenu: bOpen
    })
  }

  handleSelectItem(selected){
    let selections = [...this.state.selections];
    selections.push(selected);
    console.log('adding selection: '+ selected)
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

  handleDelete(idx){
    let selections = [...this.state.selections];
    console.log('removing index: ' + idx);
    selections.splice(idx, 1);
    this.setState({ selections }, () =>
      this.props.onChange(this.props.name, this.state.selections)
    );
  }

  activate(){
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
          console.log('autocomplete lost focus, closing');
          this.setState({
            showMenu: false
          })
          this.textInput.current.value = '';
      }
    }, 1);
  }

  render(){

    return(
      <div className="autoComplete" onClick={() => this.activate()} onBlur={(e) => this.deactivate(e)}>
        <InputLabel><Label>{this.props.label}</Label></InputLabel>
        <br/>
        {this.state.selections.map((selection, index) =>
          <Chip key={"selection_" + selection} label={selection} onDelete={() => this.handleDelete(index)} />
        )}

        <input type="text" onChange={(e) => this.handleUpdateMatches(e.target.value)} ref={this.textInput} />
        <div className="autoCompleteOptions">
          {this.state.showMenu &&
            this.state.matches.map((match, index) =>
              <MenuItem key={"match_" + index} onClick={(e) => this.handleSelectItem(match)}>{match}</MenuItem>
            )
          }
        </div>
        <div className="autoCompleteBase"/>
      </div>
    );
  }

}
