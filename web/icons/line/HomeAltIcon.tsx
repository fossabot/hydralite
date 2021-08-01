import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20 7.7l-6-5.3c-1.1-1-2.8-1-4 0L4 7.7c-.6.6-1 1.4-1 2.3v8.8c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V10c0-.9-.4-1.7-1-2.3zm-4 12H8v-5c0-1.7 1.3-3 3-3h2c1.7 0 3 1.3 3 3v5z" />
    </svg>
  );
}

export default SvgComponent;
