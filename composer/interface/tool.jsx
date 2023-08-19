import React from 'react';
import {DragSource} from 'react-dnd'
import {DND_Type} from './dndTypes.js'
import { withStyles, createStyles } from "@material-ui/core/styles";
import CodeIcon from '../images/CodeIcon.jsx';

const styles = createStyles((theme) => ({
  svgIconContainer: {
    backgroundColor: "#989898",
    cursor: "pointer",
    width: 30,
    height: 30,
    margin: 4,
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid rgba(50,50,50,1)",
    boxShadow: "5px 5px 10px rgba(0,0,0,0.4)",
    "&:hover": {
      border: "2px solid rgba(200, 200, 200, 0.8)",
    },
  },
}));

const toolDragger = {
  beginDrag(props){
    let item = { dragType: DND_Type.TOOL, toolType: props.icon};
    //Since sections and tables have different drop targets than the rest of the tools,
    //change the dragType for clarity
    if(props.icon === 'table'){
      item.dragType = DND_Type.TOOL_TABLE;
    } else if (props.icon === 'section'){
      item.dragType = DND_Type.TOOL_SECTION;
    }
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
  }
};

function dndConnector(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Tool extends React.Component{


    render(){

        const {connectDragSource, classes} = this.props;        

        let icon;
        let iconComponent;
        let className;
        if (this.props.icon === "scriptlet") {
          icon = {};
          iconComponent = <CodeIcon />;
          className = classes.svgIconContainer;
        } else {
          icon = {background : 'url(/global/composer/images/' + this.props.icon + '.png) no-repeat',
                    width: '30px',
                    height: '30px',
                    backgroundSize: 'cover'};
          iconComponent = <React.Fragment />;
          className = "toolIcon";
        }

        if(this.props.icon === 'section'){
          icon.width = '70px';
          icon.margin = "6px";
        }

        return connectDragSource(
            <div id={this.props.id} className={className} style={icon} title={this.props.title}>
              {iconComponent}
            </div>
        );
    }
};

const stylesWrapped = withStyles(styles)(Tool);
export default DragSource(props => props.toolType, toolDragger, dndConnector)(stylesWrapped);
