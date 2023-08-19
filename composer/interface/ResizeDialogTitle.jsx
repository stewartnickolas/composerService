import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import ResizeDialogButton from "./ResizeDialogButton.jsx";

export default class ResizeDialogTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DialogTitle id={this.props.titleId}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {typeof this.props.navBtn === 'function' && this.props.navBtn(-1)}
          <div>{this.props.title}</div>
          {typeof this.props.navBtn === 'function' && this.props.navBtn(1)}
          <div style={{ marginLeft: "auto" }}>
            <ResizeDialogButton
              fullScreen={this.props.fullScreen}
              handleResize={this.props.handleResize}
            />
          </div>
        </div>
      </DialogTitle>
    );
  }
}
