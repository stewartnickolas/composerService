import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default class ChevronUpIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SvgIcon {...this.props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
        </svg>
      </SvgIcon>
    );
  }
}
