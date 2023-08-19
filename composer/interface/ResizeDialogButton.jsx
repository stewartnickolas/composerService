import React from "react";
import IconButton from "@material-ui/core/IconButton";
import UnfoldMoreIcon from "../images/UnfoldMoreIcon.jsx";
import UnfoldLessIcon from "../images/UnfoldLessIcon.jsx";

export default class ResizeDialogButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.props.handleResize}>
          {this.props.fullScreen ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
        </IconButton>
      </div>
    );
  }
}
