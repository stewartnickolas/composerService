import React from 'react'
import {observer, inject} from 'mobx-react'
import Icon from '@material-ui/core/Icon';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import {EditorType} from './editorTypes.js'
import FormProps from './formProps.jsx'
import GroupProps from './groupProps.jsx'
import FormDetails from './formDetails.jsx'
import EditChecks from './editChecks.jsx'
import Actions from '../../data/actions.js'
import Label from '../components/label.jsx'


@inject('studyStore', 'formStore')
@observer
export default class PropertiesEditor extends React.Component{

  render(){

      const Editor = (props) => {
        return this.getEditor(props.type, props.data);
      }

    const {propertiesEditorType, propertiesEditorData, showPropertiesEditor, currentForm} = this.props.studyStore;

    console.log("opened propertiesEditor" + propertiesEditorType);
    const drawerWidth = showPropertiesEditor ? '0px' : '-400px';
    return(
      <div id='propertiesEditor' style={{right: drawerWidth}}>
        {!!propertiesEditorType &&
        <div>
          {/*<Icon className="propertiesEditorClose" onClick={() => Actions.closePropertiesEditor()}></Icon>*/}
          {this.props.studyStore.currentForm.formType !== 'provided' ? (
            <div className="propsTabHolder">
              <Tab label="Form" icon="iconFormDetails" type={EditorType.FORM_DETAILS} selectedType={propertiesEditorType}/>
              <Tab label="Calculations" icon="iconCalculations" type={EditorType.CALCULATIONS} selectedType={propertiesEditorType} />
              <Tab label="Constraints" icon="iconConstraints" type={EditorType.CONSTRAINTS} selectedType={propertiesEditorType} />
            </div>
          ):(
            <div className="propsTabHolder">
              <Tab label="Form" icon="iconFormDetails" type={EditorType.FORM_DETAILS} selectedType={propertiesEditorType}/>
            </div>
          )}
          <div id="propertiesEditorInset">
            <div className="propertiesEditorContent">
              <Editor key={"editor_" + currentForm.id} type={propertiesEditorType} data={propertiesEditorData}/>
            </div>
          </div>
        </div>
        }
      </div>
      );
  }

  getEditor(type, data){
    switch(type){
      case EditorType.GROUP_PROPS:
        return <GroupProps {...data}/>
      case EditorType.FORM_PROPS:
        return <FormProps {...data}/>
      case EditorType.FORM_DETAILS:
        return <FormDetails {...data}/>
      case EditorType.CALCULATIONS:
        return <EditChecks type={type} {...data}/>
      case EditorType.CONSTRAINTS:
        return <EditChecks type={type} {...data}/>
      default:
        console.log("unrecognized editor type '" + type + "'");
    }
  }



}

const Tab = (props) => {
  let css = props.selectedType === props.type ? "propsTabSelected " : "propsTab ";
  return(
    <span className={css} onClick={() => Actions.openPropertiesEditor(props.type)} >
      <div className={"propsTabIcon " + props.icon}></div>
      <div>
        <Label>{props.label}</Label>
      </div>
    </span>
  );
}