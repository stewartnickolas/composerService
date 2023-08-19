import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = createStyles((theme) => ({
  focused: {
    "&:focus": {
      border: "2px solid blue",
    },
  },
}));

const V_KEY_CODE = 86;
const MAC_COMMAND_KEY_CODES = [91, 224];
const WINDOWS_CTL_KEY_CODES = [17];

/**
 * A wrapper component that listens for a sequence of key strokes
 * that represent a paste command (e.g., cmd + v on mac).
 */
class PasteShortcutListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevKeyPressed: undefined,
    };
  }

  handleKeyDown = (e) => {
    if (
      e.keyCode === V_KEY_CODE &&
      (MAC_COMMAND_KEY_CODES.includes(this.state.prevKeyPressed) ||
        WINDOWS_CTL_KEY_CODES.includes(this.state.prevKeyPressed))
    ) {
      e.stopPropagation();
      this.props.handlePaste();
    }

    this.setState({ prevKeyPressed: e.keyCode });
  };

  handleFocus = (e) => {
    /**
     * Prevent focus event from bubbling up to parents who may also be
     * listening for this event
     */
    e.stopPropagation();
  };

  render() {
    const { children, classes } = this.props;

    return (
      <div
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleFocus}
        /**
         * In order for the onKeyDown event to be fired the
         * html element must be focusable. The tabIndex attribute
         * allows this wrapper component to be focusable, and the
         * 0 value indicates that it can be focused using the tab
         * key according.
         */
        tabIndex="0"
        className={classes.focused}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(PasteShortcutListener);
