import React from "react";
import { inject } from "mobx-react";
import { action } from "mobx";
import InfoSnackbar from "./InfoSnackbar.jsx";
import CopyShortcutListener from "./CopyShortcutListener.jsx";

@inject("clipboardStore")
class CopyableTableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  @action
  handleCopy = () => {
    this.props.clipboardStore.setContent({ ...this.props.table });
    this.setState({ open: true });
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <CopyShortcutListener handleCopy={this.handleCopy}>
        {children}
        <InfoSnackbar
          handleClose={this.handleCloseSnackbar}
          open={open}
          message={"Copied table to clipboard!"}
        />
      </CopyShortcutListener>
    );
  }
}

export default CopyableTableWrapper;
