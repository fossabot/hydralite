import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M21 4h-8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H3c-.6 0-1 .4-1 1v10c0 1.7 1.3 3 3 3h4.6l-2.3 2.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2.3-2.3V21c0 .6.4 1 1 1s1-.4 1-1v-1.6l2.3 2.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L14.4 18H19c1.7 0 3-1.3 3-3V5c0-.6-.4-1-1-1zM7 8h2c.6 0 1 .4 1 1s-.4 1-1 1H7c-.6 0-1-.4-1-1s.4-1 1-1zm6 6H7c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"
      />
    </svg>
  )
}

export default SvgComponent
