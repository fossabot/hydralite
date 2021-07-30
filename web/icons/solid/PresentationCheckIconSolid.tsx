import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M21 14h-1V4h1c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v10H3c-.6 0-1 .4-1 1s.4 1 1 1h8v1.2l-4.6 3c-.5.3-.6.9-.3 1.4.3.5.9.6 1.4.3l3.4-2.3V21c0 .6.4 1 1 1s1-.4 1-1v-1.4l3.4 2.3c.5.3 1.1.2 1.4-.3.3-.5.2-1.1-.3-1.4l-4.6-3V16h8c.6 0 1-.4 1-1s-.2-1-.8-1zm-5.3-6.3l-4 4c-.4.4-1 .4-1.4 0l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L11 9.6l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
      />
    </svg>
  )
}

export default SvgComponent
