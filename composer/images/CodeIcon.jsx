import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default class CodeIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SvgIcon {...this.props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      </SvgIcon>
    );
  }
}