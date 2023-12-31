import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default class ChevronDownIcon extends React.Component {
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
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </SvgIcon>
    );
  }
}
