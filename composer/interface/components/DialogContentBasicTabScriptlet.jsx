import React from "react";
import TextFieldScriptletValue from "./TextFieldScriptletValue.jsx";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, createStyles } from "@material-ui/core/styles";
import AddIcon from "../../images/AddIcon.jsx";
import RemoveIcon from "../../images/RemoveIcon.jsx";

const styles = createStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing.unit,
  },
  buttonsContainer: {
    display: "flex",
  },
  buttons: {
    marginLeft: "auto",
  },
}));

/** Refers to the number of "rows" that will be added to the <TextField>. */
const NUM_ROWS_INCREMENT = 5;

/**
 * A UI component that allows the user to specify the attributes of a scriptlet field.
 * While other fields' settings are contained in editField.jsx, for readability's sake,
 * the scriptlet settings have been refactored into its own component
 */
class DialogContentBasicTabScriptlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: NUM_ROWS_INCREMENT,
    };

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleClickAdd(event) {
    this.setState((state) => ({
      numRows: state.numRows + NUM_ROWS_INCREMENT,
    }));
  }

  handleClickRemove(event) {
    this.setState((state) => ({
      numRows: state.numRows - NUM_ROWS_INCREMENT,
    }));
  }

  render() {
    const { numRows } = this.state;
    const { value, handleChange, classes } = this.props;

    return (
      <div>
        <div className={classes.textField}>
          <TextFieldScriptletValue
            value={value}
            handleChange={handleChange}
            numRows={numRows}
          />
        </div>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttons}>
            {numRows >= 2 * NUM_ROWS_INCREMENT && (
              <IconButton onClick={this.handleClickRemove}>
                <RemoveIcon />
              </IconButton>
            )}
            <IconButton onClick={this.handleClickAdd}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DialogContentBasicTabScriptlet);
