import React from "react";

const SvgComponent: React.FC<React.HTMLAttributes<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.167 7.642a.834.834 0 00-1.175 0L10 10.592l-2.95-2.95a.833.833 0 10-1.175 1.183l3.533 3.533a.834.834 0 001.184 0l3.575-3.533a.833.833 0 000-1.183z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
