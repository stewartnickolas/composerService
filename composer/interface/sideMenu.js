import React from 'react';
import GroupTab from './groupTab.jsx';
import AddGroupBtn from './addGroupBtn.jsx';
import StudyStore from '../data/studyStore.js'
import {observer, inject} from 'mobx-react'
import Actions from '../data/actions.js'
import {DragSource, DropTarget} from 'react-dnd'
import DragUtils from '../interface/dragUtils.js'
import {DND_Type} from '../interface/dndTypes.js'

@inject('studyStore')
@observer
class SideMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      groups: props.groups,
      ...props
    }
    this.handleSortGroups = this.handleSortGroups.bind(this);
  }

  handleSortGroups(dragIndex, hoverIndex) {
    console.log("dragging group: " + dragIndex)
    let groups = [...this.state.groups];
    console.log("num groups: " + this.state.groups.length)
    let dragGroup = groups[dragIndex];
    dragGroup.isDragging = true;
    groups.splice(dragIndex, 1);
    groups.splice(hoverIndex, 0, dragGroup);

    //update the state
    this.setState({
      groups
    })
  }

  render() {

      const {connectDropTarget} = this.props;

      return connectDropTarget(
        <div>
          {/*<GroupList onSortEnd={this.onSortEnd} useDragHandle={true} parentData={this.props.studyStore.currentView}  moveHandler={this.handleSortGroups} groups={this.state.groups} {...this.props} />
          */}
          {this.state.groups.map((group, index) => (
            <GroupTab key={`item-${index}`} index={index} type="group" parentData={this.props.studyStore.currentView} moveHandler={this.handleSortGroups} label={group.label} group={group} {...group} />
          ))}
          <AddGroupBtn onClick={this.handleClick} />
        </div>
      );
  }
};

const GroupList = (props) => {

    const {connectDropTarget} = props;

    return connectDropTarget(
        <span>
          {props.groups.map((group, index) => (
            <GroupTab key={`item-${index}`} index={index} type="group" parentData={props.parentData} label={group.label} {...group} />
          ))}
        </span>
      );
};

/*
 * Begin drag and drop
 */

 const dropHandlers = {
   drop(props, monitor) {

     console.log("@todo: sort groups " + monitor.getItem().index);

     Actions.arrangeFormsOrGroups('groups', monitor.getItem().id, monitor.getItem().index);
   }/*,
   hover(props, monitor, component){
     return (DragUtils.handleMove(props.parentData, props, monitor, component));
   },*/
 }

 function dropConnector(connect, monitor){
   return{
     connectDropTarget: connect.dropTarget(),
     isOver: monitor.isOver(),
     isOverCurrent: monitor.isOver({shallow: true})
   };
 }

 export default DropTarget(DND_Type.GROUP, dropHandlers, dropConnector)(SideMenu);
