import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.612 9.418a.992.992 0 01-1.403 0L1.29 5.499A.992.992 0 011 4.8V1.99C1 1.445 1.445 1 1.992 1h2.806c.263 0 .515.105.701.29L9.418 5.21a.992.992 0 010 1.403L6.612 9.418z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.604 2.604l.23.23" stroke="#fff" strokeLinecap="round" />
    </svg>
  )
}

export default SvgComponent
