import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12.6 2.2c-.3-.2-.8-.2-1.1 0-.3.2-7.2 5-7.2 12.1 0 4.3 3.5 7.7 7.8 7.8 4.3 0 7.7-3.5 7.8-7.8-.1-7.2-7.1-11.9-7.3-12.1z" />
    </svg>
  );
}

export default SvgComponent;
