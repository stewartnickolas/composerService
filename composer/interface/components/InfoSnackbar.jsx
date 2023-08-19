import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "../../images/CloseIcon.jsx";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class InfoSnackbar extends React.Component {
  render() {
    const { classes, open, handleClose, message } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={
            <Typography color="inherit" variant="body1">
              {message}
            </Typography>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(InfoSnackbar);
