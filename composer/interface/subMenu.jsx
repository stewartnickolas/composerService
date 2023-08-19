import React from 'react'
import FormTab from './formTab.js'
import {DropTarget} from 'react-dnd'
import {DND_Type} from '../interface/dndTypes.js'
import Actions from '../data/actions.js'
import {DialogType} from '../dialogs/dialogTypes.js'
import {observer, inject} from 'mobx-react'

@inject('studyStore')
@observer
class SubMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formRefs: props.forms,
      scroll: 0,
      menuContainerWidth: '',
      ...props
    }
    this.menuContainer = React.createRef();
    this.handleSortForms = this.handleSortForms.bind(this);
  }

  handleSortForms(dragIndex, hoverIndex) {
    let formRefs = [...this.state.formRefs];
    let dragForm = formRefs[dragIndex];
    dragForm.isDragging = true;
    formRefs.splice(dragIndex, 1);
    formRefs.splice(hoverIndex, 0, dragForm);

    this.setState({
      formRefs
    })
  }

  handleScroll(direction){
    let scrollAmt = direction * this.state.menuWidth;
    const max = this.state.menuContainerWidth - this.state.menuWidth + 60;
    //clamp to relevant range
    let clampedAmt = this.state.scroll + scrollAmt;
    if(this.state.scroll + scrollAmt > max) {
      clampedAmt =  max;
    } else if (this.state.scroll + scrollAmt < 0){
      clampedAmt = 0;
    }
    this.setState({
      scroll: clampedAmt
    })
  }

  componentDidMount() {
    if (this.menuContainer.current !== null) {
      this.setState({
        menuContainerWidth: this.menuContainer.current.offsetWidth,
        menuWidth: this.menuContainer.current.parentNode.parentNode.offsetWidth
      })
    }
  }

  render() {
      const {connectDropTarget} = this.props;
      const showArrows = this.state.menuWidth < this.state.menuContainerWidth;
      const showArrowsCss = showArrows ? "showArrows" : "";
      return connectDropTarget(
        <div id="composerSubMenu">
          { showArrows &&
            <span className="arrow left" onClick={() => this.handleScroll(-1)}></span>
          }
          <span id="composerSubMenuTabs" className={showArrowsCss}>
            <table ref={this.menuContainer} style={{position: 'relative', right: this.state.scroll + 'px'}}>
              <tbody>
                <tr>
                  {this.state.formRefs.map((form, index) => (
                    <FormTab key={"item-" + form.id + index} parentData={this.props.studyStore.currentGroup} moveHandler={this.handleSortForms} index={index} label={form.label} form={form} {...form}/>
                  ))}
                  {(this.state.formRefs.length > 0 && !showArrows) &&
                  <span className="addFormTab" onClick={() => Actions.openDialog(DialogType.ADD_FORM)}>
                    +
                  </span>
                  }
                </tr>
              </tbody>
            </table>
          </span>
          {(this.state.formRefs.length > 0 && showArrows) &&
          <span className="addFormTab arrow" onClick={() => Actions.openDialog(DialogType.ADD_FORM)}>
            +
          </span>
          }
          {showArrows &&
            <span className="arrow right"  onClick={() => this.handleScroll(1)}></span>
          }
        </div>
      );
  }
};


/*
 * Begin drag and drop
 */
 const dropHandlers = {
   drop(props, monitor) {
     Actions.arrangeFormsOrGroups('forms', monitor.getItem().id, monitor.getItem().index);
   }
 }

 function dropConnector(connect, monitor){
   return{
     connectDropTarget: connect.dropTarget(),
     isOver: monitor.isOver(),
     isOverCurrent: monitor.isOver({shallow: true})
   };
 }

 export default DropTarget(DND_Type.FORM, dropHandlers, dropConnector)(SubMenu);
