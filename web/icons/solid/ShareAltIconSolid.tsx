import React from "react";

const SvgComponent: React.FC<React.HTMLAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M18.7 14.1c-.2-.1-.5-.1-.7-.1-1.2 0-2.3.5-3.1 1.5l-5.1-2.3c.2-.7.2-1.5 0-2.3l5.1-2.3c1.4 1.7 3.9 1.9 5.6.5 1.7-1.4 1.9-3.9.5-5.6s-3.9-1.9-5.6-.5c-.9.7-1.4 1.8-1.4 3 0 .2 0 .5.1.7L8.8 9.1c-1.6-1.5-4.1-1.5-5.7.1-1.5 1.6-1.5 4.1.1 5.7 1.6 1.5 4 1.5 5.6 0l5.3 2.4c-.4 2.2 1 4.3 3.2 4.6 2.2.4 4.3-1 4.6-3.2.4-2.2-1-4.2-3.2-4.6z" />
  </svg>
);

export default SvgComponent;
