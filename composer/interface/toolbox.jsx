import React from 'react';
import Tool from './tool.jsx';
import DragSource from 'react-dnd'
import {DND_Type} from './dndTypes.js'
import Trash from './trash.jsx'
import Actions from '../data/actions.js'
import {EditorType} from './propertiesEditor/editorTypes.js'
import { inject, observer } from 'mobx-react';

@inject("studyStore", "authStore")
@observer
class Toolbox extends React.Component{

    
    render(){
        const { authStore } = this.props;
        const editorToggle = this.props.studyStore.showPropertiesEditor ? {borderColor: '#DDD'} : {borderColor: '#666'};
        return (
            <div id="toolbox">
              <div className="iconFormDetailsTool toolIcon" style={editorToggle} onClick={() => Actions.togglePropertiesEditor(EditorType.FORM_DETAILS)} title="Form Details"></div>
              {!this.props.studyStore.readonlyMode &&
                  <div>
                      <div className="toolboxDivider"></div>
                      <Tool id="iconSection" icon="section" title="Section" toolType={DND_Type.TOOL_SECTION}/>
                      <div className="toolboxDivider"></div>
                      <Tool id="iconTable" icon="table" title="Table" toolType={DND_Type.TOOL_TABLE} />
                      <Tool id="iconLabel" icon="label" title="Label" toolType={DND_Type.TOOL}/>
                      <Tool id="iconText" icon="text" title="Text" toolType={DND_Type.TOOL}/>
                      <Tool id="iconTextarea" icon="textarea" title="Text Area" toolType={DND_Type.TOOL}/>
                      <Tool id="iconSelect" icon="select" title="Select" toolType={DND_Type.TOOL}/>
                      <Tool id="iconCombo" icon="combo" title="Combo Box" toolType={DND_Type.TOOL}/>
                      <Tool id="iconRadio" icon="radio" title="Radio" toolType={DND_Type.TOOL}/>
                      <Tool id="iconCheckbox" icon="checkbox" title="Checkbox" toolType={DND_Type.TOOL}/>
                      <Tool id="iconDate" icon="date" title="Date" toolType={DND_Type.TOOL}/>
                      <Tool id="iconTime" icon="time" title="Time" toolType={DND_Type.TOOL}/>
                      <Tool id="iconInteger" icon="integer" title="Integer" toolType={DND_Type.TOOL}/>
                      <Tool id="iconNumeric" icon="numeric" title="Numeric" toolType={DND_Type.TOOL}/>
                      <Tool id="iconHidden" icon="hidden" title="Hidden" toolType={DND_Type.TOOL}/>
                      <Tool id="iconFile" icon="file" title="File" toolType={DND_Type.TOOL}/>
                      <Tool id="iconModule" icon="module" title="Module" toolType={DND_Type.TOOL}/>
                      <Tool id="iconVAS" icon="vas" title="VAS" toolType={DND_Type.TOOL} />
                      {!!authStore.user && authStore.user.roleCode === "A" && (
                        /**
                         * Only show the scriptlet tool to administrators
                         *
                         * Note: in Composer, clients may define their own role codes on the 'Form Permissions'
                         * form, but the "A" for administrator role is reserved (as is "Z" and "G"). See
                         * RolePermissions.java for more information
                         */
                        <Tool
                          id="iconScriptlet"
                          icon="scriptlet"
                          title="Scriptlet"
                          toolType={DND_Type.TOOL}
                        />
                      )}
                      <Trash id="trash" />
                  </div>
              }
            </div>
        );
    }
};
export default Toolbox;
