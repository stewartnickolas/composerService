import React from "react";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

/**
 * A UI component that allows the user to input the 'Value' attribute of a scriptlet field.
 * While other fields, such as our checkbox field, use the 'Value' attribute, we use this
 * custom component since for readability purposes
 */
export default class TextFieldScriptletValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, handleChange, numRows } = this.props;
    return (
      <div>
        <TextField
          label="Value"
          fullWidth
          style={{ marginLeft: 0 }}
          variant="outlined"
          multiline
          rows={numRows}
          value={value}
          onChange={handleChange}
        />
        <FormHelperText>
          The value that is entered here will be injected into the jsp as if you
          were editing the file in your IDE. This value may contain a mix of
          java, html, and jstl code (e.g., &lt;div&gt;, &lt;% %&gt;, etc.)
        </FormHelperText>
      </div>
    );
  }
}
