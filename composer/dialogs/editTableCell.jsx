import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {observer, inject} from 'mobx-react'
import Actions from '../data/actions.js'

@inject('studyStore', 'formStore')
@observer
export default class EditTableCell extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          align: props.align,
          layoutOrientation: props.layoutOrientation
      }
      console.log("state : " + this.state.align + " " + this.state.layoutOrientation)
      this.handleAlign = this.handleAlign.bind(this);
      this.handleOrientation = this.handleOrientation.bind(this);
      this.handleOkBtn = this.handleOkBtn.bind(this);
  }

  handleAlign(e, value){
    if(this.props.studyStore.readonlyMode) return;
      this.setState({align: value});
  }

  handleOrientation(e, value){
    if(this.props.studyStore.readonlyMode) return;
      this.setState({layoutOrientation: value});
  }

      handleOkBtn(){
        Actions.closeDialog();
        Actions.updateTableCell(this.props.id, this.state)
    }


  render() {
    return (
      <div>
        <Dialog open={this.props.formStore.showDialog} onClose={() => Actions.closeDialog()} PaperComponent={this.props.paperComponent} >
          <DialogTitle id="form-dialog-title">Cell Properties</DialogTitle>
          <DialogContent>
            <FormControl component="fieldset" >
              <FormLabel component="legend">Alignment</FormLabel>
              <RadioGroup name="align" value={this.state.align} onChange={this.handleAlign}>
                <FormControlLabel value="left" control={<Radio />} label="Left" />
                <FormControlLabel value="center" control={<Radio />} label="Center" />
                <FormControlLabel value="right" control={<Radio />} label="Right" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Layout Orientation</FormLabel>
              <RadioGroup name="align" value={this.state.layoutOrientation} onChange={this.handleOrientation}>
                <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
                <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions >
            <Button onClick={this.handleOkBtn}>Ok</Button>
            <Button onClick={() => Actions.closeDialog()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
