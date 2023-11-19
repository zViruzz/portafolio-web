import * as React from "react"
import { SVGProps } from "react"

const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.414 3.828a2 2 0 0 0-2.828 0l-.672.672 1.568 1.568a2.002 2.002 0 0 1 2.45 2.45l2.05 2.05a2 2 0 1 1-1.414 1.414L13 10.414v4.854A2 2 0 0 1 12 19a2 2 0 0 1-1-3.732V9.732a2 2 0 0 1-.932-2.25L8.5 5.914l-4.672 4.672a2 2 0 0 0 0 2.828l6.758 6.758a2 2 0 0 0 2.828 0l6.758-6.758a2 2 0 0 0 0-2.828l-6.758-6.758ZM9.172 2.414a4 4 0 0 1 5.656 0l6.758 6.758a4 4 0 0 1 0 5.656l-6.758 6.758a4 4 0 0 1-5.656 0l-6.758-6.758a4 4 0 0 1 0-5.656l6.758-6.758Z"
      clipRule="evenodd"
    />
  </svg>
)
export default GitIcon
