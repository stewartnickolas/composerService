import React from 'react'
import ReactDOM from 'react-dom'
import {observer, inject} from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Form from '../elements/form.jsx'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropertiesEditor from './propertiesEditor/propertiesEditor.jsx'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import Info from './info.jsx'
import Label from './components/label.jsx'
import Actions from '../data/actions.js'
import API from '../data/api.js'
import {EditorType} from './propertiesEditor/editorTypes.js'

@inject('studyStore','formStore')
@observer
class LayoutArea extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        providedName: undefined
      }
      this.handleCloseSyncNote = this.handleCloseSyncNote.bind(this);
      this.loadProvidedFormName = this.loadProvidedFormName.bind(this);
    }

    //Handles the fade-in effect on form load
    componentDidMount(){
        var formEl = ReactDOM.findDOMNode(this.refs.formWrapper);
        if(!formEl) return;
        setTimeout(() => {
          formEl.style.opacity = 1;
        }, 1)
    }

    loadProvidedFormName(){
      if(this.state.providedName === undefined){//only load it once
        API.getPredefinedForms(this.props.studyStore.currentView.id, (data) => {
          for(const entry of data){
            if(entry.refId === this.props.formStore.formData.providedJspPath){
              this.setState({
                providedName: entry.label,
                providedBuildMessage: entry.buildMessage
              })
            }
          }
        });
      }
    }

    handleCloseSyncNote(){
      this.props.studyStore.showSyncNote = false;
    }

    render(){

        const {store} = this.props;
        const {showPropertiesEditor, currentForm} = this.props.studyStore;
        const layoutAreaRight = showPropertiesEditor ? '400px' : '0px';
        const showFormOpacity = this.props.formStore.formIsLoading ? 0 : 1;
        const {viewingHistory} = this.props.studyStore.currentForm;
        const isReadonly = this.props.studyStore.readonlyMode;
        const isReadonlyBkg = isReadonly ? "readOnlyBackground" : "";
        console.log()
        return(
                <div id="layoutAreaWrapper" >
                  <div id="layoutArea" className={isReadonlyBkg} style={{right: layoutAreaRight}}>
                  { isReadonly &&
                    <div style={{display: 'table', width: '100%', textAlign: 'center', fontSize: '1.4em', fontWeight: 'bold', color: '#666', background: '#CCD', padding: '10px'}}>
                      { !!viewingHistory &&
                        <div>
                          <div style={{fontColor: "#C33"}}>
                            Viewing revision {viewingHistory.snapshotId} published on {viewingHistory.dateTime} by {viewingHistory.fullName}
                          </div>
                          <div>
                            <Button variant="raised" onClick={() => Actions.navigateToForm(currentForm.id)}><Label>Return to Current</Label></Button>
                          </div>
                        </div>
                      }
                      { !viewingHistory &&
                        <div>
                          <span class="red_text">This form is currently in READ-ONLY mode.</span> 
                          { !_viewOnlyMode &&
                            <span>
                              <Info>Changes made while in read-only mode will not be saved.  To change the state of this form, open the <span style={{color: '#55A', fontWeight: 'bold'}} >properties editor</span>.</Info>
                              <Button variant="raised" onClick={() => Actions.changeFormState("in-work")}><Label>Modify</Label></Button>
                            </span>
                          }
                        </div>
                      }
                    </div>
                  }
                    {this.props.formStore.formIsLoading &&
                      <div style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <CircularProgress size={50} />
                      </div>
                    }
                    <span className={"formWrapper"} ref="formWrapper" >
                      {this.props.studyStore.currentForm !== undefined && this.props.studyStore.currentForm.formType === 'provided' ? (
                        <div style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                         {
                           this.loadProvidedFormName()
                         }
                          <div style={{display: 'block', textAlign: 'center'}}>
                            <h1>{this.state.providedName}</h1>
                            <h2>(Provided Form)</h2>
                            <p/>
                            <h3><Label>This is a standard form provided by Prelude Dynamics, and cannot be modified.</Label><br/><Label>You may still edit the Form Permissions for this form at the Project level.</Label></h3>
                            {this.state.providedBuildMessage &&
                              <h3><Label>{this.state.providedBuildMessage}</Label></h3>
                            }
                          </div>
                        </div>
                      ) : (
                        <Form key={this.props.formStore.formData.id + this.props.formStore.refreshId} id={this.props.formStore.formData.id} />
                      )}
                    </span>
                  </div>
                  <PropertiesEditor/>
                  {/*<DevTools/>*/}
                  <Snackbar open={this.props.studyStore.showSyncNote}
                    onClose={this.handleCloseSyncNote}
                    TransitionComponent={Fade}
                    style={{justifyContent: 'center'}}
                    message={<span id="message-id">{this.props.studyStore.syncNote}</span>}
                  />
                </div>
                );
    }
};

export default LayoutArea;
