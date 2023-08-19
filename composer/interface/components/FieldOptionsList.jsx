import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FieldOptionRow from "./FieldOptionRow.jsx";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Validator from "../../data/validator";

const styles = createStyles((theme) => ({
  fieldOption: {
    marginBottom: 5,
  },
}));

function FieldOptionsList(props) {
  const {
    fieldOptions,
    updateOption,
    removeOption,
    fieldType,
    handleMove,
    classes,
    errors
  } = props;

  function hasErrorFieldOptionsValue(value, i) {
    return Validator.isUnique(errors, "fieldOptionsValue", "The option value", value, i, fieldOptions);
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container>
            {fieldType !== "combo" && (
              <Grid item xs={6}>
                <Typography>Label</Typography>
              </Grid>
            )}
            <Grid item xs={fieldType !== "combo" ? 6 : 12}>
              <Typography>Value</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div>
        {fieldOptions.map((opt, index) => (
          <div key={"option_row_num_" + index} className={classes.fieldOption}>
            <FieldOptionRow
              index={index}
              option={opt}
              updateOption={updateOption}
              removeOption={removeOption}
              fieldType={fieldType}
              handleMove={handleMove}
              error={hasErrorFieldOptionsValue(opt.value, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(FieldOptionsList);
