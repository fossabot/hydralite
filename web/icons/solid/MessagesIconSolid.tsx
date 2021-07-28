import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18 2H6C4.3 2 3 3.3 3 5v11c0 1.7 1.3 3 3 3h2.6l2.7 2.7c.4.4 1 .4 1.4.1l3.2-2.8H18c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z" />
    </svg>
  );
}

export default SvgComponent;
