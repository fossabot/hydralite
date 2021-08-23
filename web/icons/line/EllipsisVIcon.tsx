import React from "react";

const SvgComponent: React.FC<React.HTMLAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 10a2 2 0 102 2 2 2 0 00-2-2zm-7 0a2 2 0 102 2 2 2 0 00-2-2zm14 0a2 2 0 102 2 2 2 0 00-2-2z" />
  </svg>
);

export default SvgComponent;
