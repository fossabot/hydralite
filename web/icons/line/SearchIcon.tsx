import * as React from "react";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.187 16.063L14.25 13.15a7.125 7.125 0 10-1.1 1.1l2.913 2.913a.792.792 0 001.124 0 .792.792 0 000-1.1zM8.708 14.25a5.541 5.541 0 110-11.082 5.541 5.541 0 010 11.082z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
