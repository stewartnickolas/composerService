import React from 'react';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class Info extends React.Component {
  state = {
    anchorEl: null,
    popperOpen: false,
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePopperOpen = () => {
    this.setState({ popperOpen: true });
  };

  handlePopperClose = () => {
    this.setState({ popperOpen: false });
  };

  render() {

    const {classes, kbLink } = this.props;
    const { anchorEl, popperOpen } = this.state;
    const open = !!anchorEl;
    const iconClass = kbLink ? "kbIcon" : "infoIcon";
    const icon = <div className={iconClass} onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose}></div>;

    return (
      <span className="wrapper">
        {kbLink && <a href={"https://help.preludedynamics.com" + kbLink} target="_blank">{icon}</a>}
        {!kbLink && <span>{icon}</span>}
        {this.props.children && <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
          style={{fontSize: '1.2em'}}
          disableRestoreFocus
        >
          <div style={{maxWidth: '400px', padding: '20px', borderRadius: '20px'}}>{this.props.children}</div>
        </Popover>}
      </span>
    );
  }
};
export default  withStyles(styles)(Info);
