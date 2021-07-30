import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 7.1c1-.4 2-.6 3-.6.8 0 1.6.1 2.3.3C15.5 2.7 10.8.9 6.8 2.6 2.8 4.4.9 9.1 2.7 13.2c.3.6.6 1.2 1 1.7l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3h4.1c-1.7-4.4.5-9.3 4.9-10.9zm9.7 13.2l-1.1-1.1c2.3-3.1 1.7-7.5-1.4-9.8s-7.5-1.7-9.8 1.4c-2.3 3.1-1.7 7.5 1.4 9.8 1.2.9 2.7 1.4 4.2 1.4h6c.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7z"
      />
    </svg>
  )
}

export default SvgComponent
