import React from 'react';
import {DragSource, DropTarget} from 'react-dnd'
import DragUtils from '../interface/dragUtils.js'
import {DND_Type} from '../interface/dndTypes.js'
import {DialogType} from '../dialogs/dialogTypes.js'
import Actions from '../data/actions.js'
import {observer, inject} from 'mobx-react'
import GroupOverview from './components/groupOverview.jsx';
import PasteableFormWrapper from './components/PasteableFormWrapper.jsx';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = createStyles((theme) => ({
  container: {
    transition: ".3s ease-in-out",
    background: "#AAA",
    cursor: "pointer",
    "&:hover": {
      background: "#CCC",
    },
  },
  selected: {
    background: "#DDD",
  },
  hovering: {
    background: "#99F",
  },
  dragging: {
    opacity: 0,
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
  mrAuto: {
    marginRight: "auto",
  },
  dragHandle: {
    backgroundImage: 'url("../../global/composer/images/drag_handle1.svg")',
    position: "relative",
    width: 20,
    height: 34,
    cursor: "move",
    top: 0,
  },
  label: {
    fontSize: "1.2em",
  },
}));

@inject('studyStore')
@observer
class GroupTab extends React.Component{

    constructor(props) {
        super(props);
      }

    render(){
        const {connectDragSource, connectDropTarget, isDragging, isMovingFormToGroup, classes} = this.props;
        const {currentGroup} = this.props.studyStore;
        const selected = this.props.id === this.props.studyStore.currentForm.id || this.props.id === this.props.studyStore.currentGroup.id;

      return (
        <div>
          {connectDragSource(
            connectDropTarget(
              <div
                className={clsx({
                  [classes.container]: true,
                  [classes.selected]: selected,
                  [classes.hovering]: isMovingFormToGroup,
                  [classes.dragging]: isDragging,
                })}
                onClick={() => Actions.navigateToGroup(this.props.id)}
              >
                <PasteableFormWrapper group={this.props.group}>
                  <div className={classes.flexBox}>
                    <div className={clsx(classes.flexBox, classes.mrAuto)}>
                      <div className={classes.dragHandle} />
                      <div className={classes.label}>
                        {this.props.label}
                      </div>
                    </div>
                    <div className={classes.flexBox}>
                      {selected && (
                        <IconButton
                          onClick={() =>
                            Actions.openDialog(DialogType.ADD_OR_EDIT_GROUP, {
                              addOrEdit: "edit",
                              ...currentGroup,
                            })
                          }
                        >
                          <img
                            src={"/vision/global/composer/images/edit2.png"}
                            width="10"
                            height="10"
                          />
                        </IconButton>
                      )}
                      <GroupOverview group={this.props.group} />
                    </div>
                  </div>
                </PasteableFormWrapper>
              </div>
            )
          )}
        </div>
      );
    }
};


/*
 * Begin drag and drop
 */
 const dragHandlers = {
     beginDrag(props){
       window.canMove = "";
       console.log('begin drag')
     const item = { dragType: DND_Type.GROUP, id: props.id, parentData: props.parentData, index: props.index };
     return item;
   },
   isDragging(props, monitor) {
     return props.id === monitor.getItem().id;
   },
   canDrag(props) {
     // can drag if
     // 1. there are no forms in the group
     // OR
     // 2. there is at least one form in work
     // ensure at least one form is in work
     if (!props.formRefs || props.formRefs.length === 0)
       return true;

     for (let fr of props.formRefs) {
       if (fr.formStatus === 'in-work'){
         return true;
       }
     }

     alert("This group is currently in READ-ONLY mode. Click Modify on any form to make changes.");
     return false;
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
     console.log("dropped on group: " + monitor.getItem().index);
     if (monitor.getItem().dragType === DND_Type.FORM){
         let formStatus = monitor.getItem().formStatus;
         //Only move the form if it's in-work
         if (formStatus === 'in-work'){
             Actions.moveFormToGroup(monitor.getItem().id, props.id);
         }
     }
     //group drops are handled in side menu -- no need to address here
     /*if(monitor.getItem().dragType === DND_Type.GROUP
        && props.index !== monitor.getItem().index){
       console.log("@Todo: sort groups!");
       //Actions.sortField(props.parentId, dragIndex, hoverIndex);
     }*/
   },
   hover(props, monitor, component){
      if(monitor.getItem().dragType === DND_Type.GROUP){
       return (DragUtils.handleMove(props.parentData, props, monitor, component));
      }
   },
 }

 function dropConnector(connect, monitor){
   return{
     connectDropTarget: connect.dropTarget(),
     isOver: monitor.isOver(),
     isMovingFormToGroup: (monitor.isOver() && monitor.getItem().dragType === DND_Type.FORM),
     isOverCurrent: monitor.isOver({shallow: true})
   };
 }

 function dragConnector(connect, monitor) {
   return {
     connectDragSource: connect.dragSource(),
     isDragging: monitor.isDragging()
   };
 }

 /** Wrap the group in both a drag source and a drop target to allow for sorting, and moving forms into new groups */
 const stylesWrapped = withStyles(styles)(GroupTab);
 const dragWrapped = DragSource(DND_Type.GROUP, dragHandlers, dragConnector)(stylesWrapped);
 export default DropTarget([DND_Type.FORM, DND_Type.GROUP], dropHandlers, dropConnector)(dragWrapped);
