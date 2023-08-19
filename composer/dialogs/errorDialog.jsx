import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button';
import {observer, inject} from 'mobx-react'
import Actions from '../data/actions.js'

@inject('formStore')
@observer
export default class ErrorDialog extends React.Component{

  constructor(props){
      super(props);
  }

  render() {
    return (
      <div style={{color: '#F00'}}>
        <Dialog open={this.props.formStore.showDialog} onClose={() => Actions.closeDialog()}  PaperComponent={this.props.paperComponent} >
          <DialogTitle id="form-dialog-title">Error</DialogTitle>
          <DialogContent>
            <div style={{color: "#F00"}}>
                {this.props.error}
            </div>
          </DialogContent>
          <DialogActions >
            <Button onClick={() => Actions.closeDialog()}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
