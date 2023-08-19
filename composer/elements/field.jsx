import React from 'react'
import {observer, inject} from 'mobx-react'
import {DialogType} from '../dialogs/dialogTypes.js'
import Actions from '../data/actions.js'
import {DragSource, DropTarget} from 'react-dnd'
import DragUtils from '../interface/dragUtils.js'
import {DND_Type} from '../interface/dndTypes.js'
import {EditorType} from '../interface/propertiesEditor/editorTypes.js'
import Label from '../interface/components/label.jsx'
import {LABEL_CONTENT_SOURCE} from "../dialogs/editField.jsx"
import ShareRulesButtonField from '../interface/components/shareRulesButtonField.jsx'
import CopyableFieldWrapper from '../interface/components/CopyableFieldWrapper.jsx'
import { FieldData } from '../data/formStore.js'
import { getStudyAttribute } from "../data/studyStore";
import CodeIcon from '../images/CodeIcon.jsx'
import { withStyles, createStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

const styles = createStyles((theme) => ({
  svgIconContainer: {
    opacity: 0.9,
    backgroundColor: "#808080",
    cursor: "move",
    width: 18,
    height: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: 1,
  },
}));

@inject("formStore", "studyStore", "authStore")
@observer
class Field extends React.Component{
    render(){

        const {formStore, studyStore, authStore, connectDragSource, connectDropTarget, isDragging, classes, ...f} = this.props;
        const layout = f.layoutOrientation !== 'horizontal' ? 'fieldWrapper fieldWrapperVertical' : 'fieldWrapper';
        const isDraggingStyle = isDragging ? {opacity: 0} : {opacity: 1};
        let wrapFieldCss = 'fieldInnerWrapper fieldInnerWrapperEdit';
        wrapFieldCss = wrapFieldCss + ((f.controlDisplayField && f.controlDisplayField.length > 0) || f.conditionallyIncludeChecked ? " appDisplayBackground" : '');
        const iconName = f.fieldType.replace(".", "-");
        
        let toolComponent;
        switch (f.fieldType) {
          case "scriptlet":
            toolComponent = (
              <div className={classes.svgIconContainer}>
                <CodeIcon fontSize="small" />
              </div>
            );
            break;
          default:
            toolComponent = (
              <span className="fieldHandle">
                <span className={"icon-" + iconName + "-small"} />
              </span>
            );
            break;
        }

        /**
         * this.props has extraneous attributes that do
         * not belong to a FieldData object. So we enumerate
         * the properties here to create a proper FieldData object.
         */
        let fieldData = new FieldData();
        for (let key in fieldData) {
          fieldData[key] = this.props[key];
        }

        const isScriptlet = f.fieldType === "scriptlet";
        const isAdmin = !!authStore.user && authStore.user.roleCode === "A";
        
        if (isScriptlet && !isAdmin) {
          /**
           * Only admins are allowed to edit scriptlet fields. Since auth user is not an
           * admin, we show a static field component
           *
           * @todo: this component really needs to be refactored into a readable format.
           * There is simply too much logic and code encapsulated into this file. At the
           * very least, the various components that make up this field (e.g., <WrappedHtml>,
           * <FieldHtml>, <FieldOptions>, etc.) should be extracted into their own components.
           * More likely, each field type (e.g., scriptlet, text, vas, etc.) should have their
           * own component
           */
          return (
            <div>
              <div className={wrapFieldCss}>
                <div style={{ display: "flex", alignItems: "center", padding: 4 }}>
                  <div>{toolComponent}</div>
                  <div style={{ marginLeft: 4 }}>
                    <Typography>Custom Code</Typography>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return(
              <span>{connectDragSource(connectDropTarget(
              <div className={layout} id={f.id} >
                <CopyableFieldWrapper field={fieldData}>
                      <div className={wrapFieldCss}>
                          <table>
                              <tbody>
                                  <tr>
                                      <td style={{ verticalAlign: 'top' }}>
                                        {toolComponent}
                                      </td>
                                      <React.Fragment
                                          // Here, a key is being added so that <td> instance will create anew when field attributes change
                                          // Without this, it was observed that the field of type label could resize <td> contents while outer content did not resize.
                                          // In other words, when a label image was added and previewed in build, a change of size of the image or label type
                                          // did not change the width of the image's container.
                                          key={JSON.stringify(f, (key, value) => {
                                            if (key == 'parent') {return value.id;}
                                            else {return value;}
                                          })}
                                      >
                                        <td>
                                            <div style={isDraggingStyle}>
                                                <WrappedHtml field={f} {...this.props} />
                                            </div>
                                        </td>
                                      </React.Fragment>
                                  </tr>
                                  <tr>
                                      <td colSpan="2">
                                          <div className="fieldEditRow">
                                              {f.fieldType !== "label" &&
                                                f.fieldType !== "scriptlet" && (
                                                  <span className="value_key">{f.fieldName}</span>
                                                )}
                                              <div className="editField" onClick={() => Actions.openDialog(DialogType.EDIT_FIELD, this.props)}></div>
                                              {formStore.getFieldAssociations('calculation', f.fieldName).length > 0 &&
                                                  <div className="editCalculations" onClick={() => Actions.openPropertiesEditor(EditorType.CALCULATIONS)}></div>
                                              }
                                              {formStore.getFieldAssociations('constraint', f.fieldName).length > 0 &&
                                                  <div className="editConstraints" onClick={() => Actions.openPropertiesEditor(EditorType.CONSTRAINTS)}></div>
                                              }
                                              <ShareRulesButtonField element={f} />
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                </CopyableFieldWrapper>
              </div>
          ))}</span>
                );
        }
    }
};

const WrappedHtml = (props) => {
    const {field} = props;
    const wrapFieldCss = field.fieldType === 'label' ? '' : 'fieldInnerWrapper';
    /** Determines whether or not the label next to the icon is shown. */
    const showLabel =
      field.fieldType !== "label" &&
      field.fieldType !== "scriptlet" &&
      field.fieldLabel !== undefined &&
      field.fieldLabel != null &&
      field.fieldLabel.length > 0;

    const labelHolderClass =
      'labelHolder' +
      (['labelRight', 'labelLeft'].includes(field.labelClass) ? ' horizontal' : '')

    return(
    <span className={labelHolderClass}>
         { (showLabel && field.labelClass !== 'labelRight') &&
         <span className={field.labelClass}><Label>{field.fieldLabel}</Label></span>
         }
        <span className={wrapFieldCss}>
            <div style={{marginTop: '0px', pointerEvents: 'none'}}>
                <FieldHtml field={field} studyStore={props.studyStore}/>
            </div>
        </span>
        { (showLabel && field.labelClass === 'labelRight') &&
         <span className={field.labelClass}><Label>{field.fieldLabel}</Label></span>
        }
    </span>
    );
  }

  const FieldHtml = (props) => {
      const f = props.field;
      let style = !f.style ? {} : f.style;
      if(f.fieldType === 'text'
          || f.fieldType === 'numeric'
          || f.fieldType === 'integer'
          || f.fieldType === 'textarea'
          || f.fieldType === 'scriptlet'){
            style.border = '2px solid #CCC';
            style.padding = '2px';
          }
        if(!!f.fieldWidth){
            style.width = f.fieldWidth + "px";
        }
        if(!!f.fieldHeight && 'text' != f.fieldType){
            style.height = f.fieldHeight + "px";
        }

    let commonClassName = f.readOnly ? 'readOnlyBkg' : (f.controlDisplayField && f.controlDisplayField.length > 0) || f.conditionallyIncludeChecked ? 'controlledByBkg' : '';
      switch(f.fieldType){
          case 'text':
              return <input type="text" name={f.fieldName} placeholder={f.fieldPlaceholder} size={f.fieldSize} maxLength={f.maxlength} style={style} className={commonClassName} readOnly={f.readOnly}/>;
          case 'date':
              const dateFormat = getStudyAttribute("date.format", props.studyStore.studyData.studyAttributes, "dd-mm-yyyy")
              return <span><input name={f.fieldName} placeholder={dateFormat} className={commonClassName} readOnly={true}/>
                <img src="/vision/images/calendar.svg" class="calendar_anchor" style={{marginLeft: '-20px', paddingRight: '5px'}}/></span>;
          case 'time':
              return <input type="time" name={f.fieldName} placeholder={f.fieldPlaceholder} className={commonClassName} readOnly={f.readOnly}/>;
          case 'set.today':
              return <span className={commonClassName + " today_now_button"}>Today</span>;
          case 'set.now':
              return <span className={commonClassName + " today_now_button"}>Now</span>;
          case 'numeric':
              return <input type="numeric" name={f.fieldName} size={f.fieldSize} placeholder={f.fieldPlaceholder} maxLength={f.maxlength} style={style} className={commonClassName} readOnly={f.readOnly}/>;
          case 'integer':
              return <input type="numeric" name={f.fieldName} size={f.fieldSize} placeholder={f.fieldPlaceholder} maxLength={f.maxlength} style={style} className={commonClassName} readOnly={f.readOnly}/>;
          case 'radio':
              let css = f.fieldOptionsClass === 'radiosHorizontal' ? 'radiosSameLine' : 'radiosVertical';
              css = css + ' ' + commonClassName
              return(
                      <div className='radioTable composerBuild'>
                        <div className={css}>
                          <FieldOptions field={f}/>
                        </div>
                      </div>
              );
          case 'checkbox':
              return <div className={commonClassName}><input type="checkbox" name={f.fieldName} className={commonClassName} disabled={f.readOnly} readOnly={true} checked={f.fieldHasInitialValue}/></div>;
          case 'select':
          case 'combo':
              // since combo is falsely represented as a <select> instead of <input>, cannot use size. Must convert to width which is not perfect conversion for Firefox
              if (f.fieldType=='combo' && !f.fieldWidth && !!f.fieldSize) {
                style.width = f.fieldSize + "ex";
              }
              return (<select name={f.fieldName} className={commonClassName} disabled={f.readOnly} style={style}>
                <FieldOptions field={f} />
              </select>);
          case 'textarea':
              return <textarea name={f.fieldName} placeholder={f.fieldPlaceholder} style={style} className={commonClassName} readOnly={f.readOnly}/>;
          case 'label':
            if (f.attributes.fieldLabelContentSource === LABEL_CONTENT_SOURCE.IMAGE) {
              return (
                  <img className="textLabel" src={f.imgSrc} height={f.imgHeight} width={f.imgWidth} />
              )
            }
            let styleVal = {color: f.labelColor};
            const isTextSource = f.attributes.fieldLabelContentSource !== LABEL_CONTENT_SOURCE.FIELD
            return (
              <span className="textLabel" style={styleVal}>
                <Label>
                  {isTextSource
                    ? f.fieldLabel
                    : ("Field: " + f.attributes.fieldLabelContentField)}
                </Label>
              </span>
            )
          case 'file':
              return <input type='file' name={f.fieldName} className={commonClassName} readOnly={f.readOnly}/>
          case 'hidden':
              return <div className="hiddenPlaceholder"></div>
          case 'vas':
              return (
                  <div>
                    <input type="range" min="0" max="100" disabled={f.readOnly}/>
                    <div style={{width: "100%"}}>
                      <span style={{float: "left", color: "#888"}}>{f.attributes.lowMessage} ({f.attributes.lowValue})</span><span style={{float: "right", color: "#888"}}>{f.attributes.highMessage} ({f.attributes.highValue})</span>
                    </div>
                  </div>
              );
          case 'scriptlet':
            return (
              <textarea
                name={f.fieldName}
                placeholder={f.fieldPlaceholder}
                /** Gives the text area some extra space to show a few lines of user's scriptlet code. */
                style={{ ...style, ...{ height: 75 } }}
                className={commonClassName}
                readOnly={f.readOnly}
                value={f.value}
              />
            );
          default:
              console.log("unrecognized field type:"  + f.fieldType);
              return;
      }
  }

const FieldOptions = (props) => {
      return(
        props.field.fieldOptions.map((option, index) => 
          <FieldOption key={"field_option" + index} field={props.field} option={option}/>
        )
      );
  }

const FieldOption = (props) => {
      const f = props.field;
      const option = props.option;
      switch(f.fieldType){
          case 'radio':
              const checked = f.fieldHasInitialValue && option.value == f.fieldInitialValue;
              const vertClass = f.fieldOptionsClass;
              return (
                      <span key={f.id + "_" + option.value} className={vertClass}>
                        <input type="radio" name={f.fieldName} value={option.value} disabled={f.readOnly} checked={checked} readOnly={true}/><span className="radioLabel">{option.label}</span>
                      </span>);
          case 'select':
          case 'combo':
              return <option key={f.id + "_" + option.value} value={option.value}>{option.label}</option>;
          default:
              console.log("unrecognized option type");
      }
  }


const dragHandlers = {
    beginDrag(props){
    console.log('begin drag for ' + props.id)
    const item = { dragType: DND_Type.FIELD, id: props.id, parentData: props.parentData, index: props.index, removeFieldFromSort: props.removeFieldFromSort };
    return item;
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
  }
};

const dropHandlers = {
  drop(props, monitor) {
    
  },
  hover(props, monitor, component){
    return (DragUtils.handleMove(props.parentData, props, monitor, component));
  },
}

function dropConnector(connect, monitor){
  return{
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({shallow: true})
  };
}

function dragConnector(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const stylesWrapped = withStyles(styles)(Field);
/** Wrap the field in both a drag source and a drop target to allow for sorting */
const dragWrapped = DragSource(DND_Type.FIELD, dragHandlers, dragConnector)(stylesWrapped);
export default DropTarget([DND_Type.FIELD, DND_Type.MODULE], dropHandlers, dropConnector)(dragWrapped);

//export default DragSource(DND_Type.FIELD, dragHandlers, dndConnector)(Field);
