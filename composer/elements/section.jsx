import React from 'react';
import {observer, inject} from 'mobx-react'
import Row from '../elements/row.jsx'
import {DialogType} from '../dialogs/dialogTypes.js'
import {DragSource, DropTarget} from 'react-dnd'
import {DND_Type} from '../interface/dndTypes.js'
import DragUtils from '../interface/dragUtils.js'
import Actions from '../data/actions.js'
import ShareRulesButton from '../interface/components/shareRulesButton.jsx'
import {
  getConditionallyIncludeDataFromObject
} from "../dialogs/shared/conditionallyInclude.jsx"
import CopyableSectionWrapper from '../interface/components/CopyableSectionWrapper.jsx';
import PasteableTableWrapper from '../interface/components/PasteableTableWrapper.jsx';

@inject('formStore')
@observer
class Section extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        rows: this.props.section.rows,
      }
      this.moveRow = this.moveRow.bind(this);
    }

    moveRow(dragIndex, hoverIndex) {
      console.log("moving from " + dragIndex + " to " + hoverIndex);
      let rows = this.state.rows.slice();
      let dragRow = rows[dragIndex];
      dragRow.isDragging = true;
      rows.splice(dragIndex, 1);
      rows.splice(hoverIndex, 0, dragRow);

      //update the state
      this.setState({
        rows
      })
    }

    componentWillReceiveProps(nextProps) {
      //Force update of row state list from props when rows are moved between sections
      if (nextProps.rows.length !== this.state.rows.length) {
        this.setState({ rows: nextProps.rows });
      }
    } 

    render(){
        const {connectDragSource, connectDropTarget, isDragging} = this.props;
        const sectionData = {
          id: this.props.id,
          sectionName: this.props.sectionName,
          sectionLabel: this.props.sectionLabel,
          indexed: this.props.indexed,
          fixedIndex: this.props.fixedIndex,
          reversedIndex: this.props.reversedIndex,
          controlDisplayType: this.props.controlDisplayType,
          controlDisplayValue: this.props.controlDisplayValue,
          controlDisplayField: this.props.controlDisplayField,
          controlDisplayShowHide: this.props.controlDisplayShowHide,
          canEdit: this.props.canEdit,
          addInfoIcon: this.props.addInfoIcon,
          addInfoIconText: this.props.addInfoIconText,
          obfuscated: this.props.obfuscated,
          blankFields: this.props.blankFields,
          ...getConditionallyIncludeDataFromObject(this.props)
        }
        //Note: Still maintaining a 1:1 table to row ratio.  Allows for table alignment.
        const rowElements = this.state.rows.map((row, index) =>
            <Row key={row.id} className="rowEdit" parentData={this.props.section} index={index} moveHandler={this.moveRow} {...row}>
              {row.tables}
            </Row>
        );
        const isDraggingStyle = isDragging ? {opacity: 0} : {opacity: 1};
        return (
          <div>
                {connectDragSource(connectDropTarget(
                  <div>
                    <PasteableTableWrapper sectionId={this.props.id}>
                      <CopyableSectionWrapper
                        section={this.props.section}
                        parentFormId={this.props.formStore.formData.id}
                      >
                        <div className="sectionWrapper" style={isDraggingStyle}>
                          <div className="sectionHeader heading_high" >
                            <div className="sectionLabel">
                            {this.props.sectionLabel}
                            <span className="editField" style={{margin: '4px 4px -3px 3px'}}
                                  onClick={() => Actions.openDialog(DialogType.ADD_OR_EDIT_SECTION, sectionData)}>
                                </span>
                              <ShareRulesButton element={this.props.section} />
                            </div>
                          </div>
                          <div className="section">
                            {rowElements}
                          </div>
                        </div>
                      </CopyableSectionWrapper>
                    </PasteableTableWrapper>
                  </div>
                ))}
                </div>
              );
    }
};

//**********************************
// Begin Drag and Drop boilerplate
//**********************************
const dragHandlers = {
  beginDrag(props){
    const item = { dragType: DND_Type.SECTION, id: props.id, parentData: props.parentData, index: props.index };
    return item;
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  }

};

const dropHandlers = {
  drop(props, monitor) {
    console.log("show table dialog " + monitor.getItem().dragType)
    switch(monitor.getItem().dragType){
      case DND_Type.ROW:
        if(monitor.getItem().parentData.id !== props.id){
          console.log("dropped in new section: " + props.id);
          Actions.moveElement('section', props.id, monitor.getItem().parentData.id, monitor.getItem().id);
        } else {
          console.log("props.id: " + props.id );
          Actions.sortElement('section', props.id, monitor.getItem().id, monitor.getItem().index);
        }
        break;
      case DND_Type.TOOL_TABLE:
        Actions.openDialog(DialogType.ADD_OR_EDIT_TABLE, {sectionId: props.id});
        break;
    }
  },
  hover(props, monitor, component){
    if(monitor.getItem().dragType === DND_Type.SECTION){
      return (DragUtils.handleMove(props.parentData, props, monitor, component));
    }
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

/**
  Wrap the table in both a drag source and a drop target to allow for sorting
  Sections need to support the dropping of TOOL_TABLE icons, Tables from other Sections,
  and other sections for sorting purposes
*/
const dragWrapped = DragSource(DND_Type.SECTION, dragHandlers, dragConnector)(Section);
export default DropTarget([DND_Type.SECTION, DND_Type.ROW, DND_Type.TOOL_TABLE], dropHandlers, dropConnector)(dragWrapped);
