import React from "react";
import TextField from "@material-ui/core/TextField";

/**
 * Styles that will be applied based on the 'variant' property.
 * The styles here are used to replicate those found on material-ui's
 * TextField component.
 * 
 * For more information on material-ui's default styles see 
 * https://github.com/mui-org/material-ui/blob/v3.x/packages/material-ui/src/
 */
const styles = {
  reset: {
    border: 0,
    borderBottom: 0,
    margin: 0,
  },
  /** Default styles for material-ui's OutlinedInput (aka <TextField variant="outlined" />) */
  outlined: {
    padding: "18.5px 14px",
  },
  /** Default styles for material-ui's OutlinedInput (aka <TextField variant="outlined" dense />) */
  outlinedDense: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  /** Default styles for material-ui's OutlinedInput (aka <TextField variant="filled" />) */
  filled: {
    padding: "27px 12px 10px",
  },
  /** Default styles for material-ui's OutlinedInput (aka <TextField variant="filled" dense />) */
  filledDense: {
    paddingTop: 24,
    paddingBottom: 6,
  },
  /** Default styles for material-ui's OutlinedInput (aka <TextField />) */
  standard: {
    padding: "6px 0 7px",
  },
  /** Default styles for material-ui's OutlinedInput (aka <TextField dense />) */
  standardDense: {
    paddingTop: 3,
  },
};

/**
 * A wrapper for material-ui's TextField component.
 * 
 * This component is meant to be used in place of material-ui's
 * TextField component because of the styling conflicts between
 * material-ui and vision. If you attempt to render a plain
 * TextField component in the dom, its default material-ui
 * styles will be overriden by those found vision8.css. This is
 * because both styles are included in formBuilder.jsp, the outermost
 * wrapper for the Composer app. page_header.jspf is included at the top
 * of the document and material-ui, while claiming to inject its styles
 * at the bottom of the <head> tag (where most css is found), is still
 * overriden by vision8.css. Previous attempts to overcome these conflicts 
 * (such as line 98 of formBuilder.jsp) have ultimately failed, so this component
 * was made. Perhaps an upgrade to v4 of material-ui will solve this problem,
 * but for now you may use this component in lieu of a TextField.
 * 
 * For more info see: 
 * https://v3.material-ui.com/css-in-js/advanced/#css-injection-order
 */
class StyledTextField extends React.Component {
  render() {
    const {
      onChange,
      value,
      margin,
      variant,
      label,
      fullWidth,
      className,
    } = this.props;

    let style = styles.reset;
    if (!!variant) {
      style = { ...style, ...styles[variant] };
    } else {
      style = { ...style, ...styles.outlined };
    }

    if (!!margin && margin === "dense") {
      style = { ...style, ...styles[variant + "Dense"] };
    }

    return (
      <TextField
        label={label}
        className={className}
        style={{ margin: 0 }}
        inputProps={{
          style,
        }}
        fullWidth={!!fullWidth ? fullWidth : false}
        value={value}
        onChange={onChange}
        margin={!!margin ? margin : "normal"}
        variant={!!variant ? variant : "standard"}
      />
    );
  }
}
export default StyledTextField;
