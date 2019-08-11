import React from "react"
import { color } from "../helpers"
import { Icon, IconProps } from "./Icon"

/** EditIcon */
export const EditIcon: React.SFC<IconProps> = props => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <title>edit</title>
      <g fill={color(props.fill)} fillRule="evenodd">
        <path d="M3 3h6.992v1.009H4.008V14H14V8h1v7H3z" />
        <path
          d="M6.007 9.299l6.908-7.18L15.809 5l-7.07 6.989H6.006V9.299zm1 1.691h1.32l6.062-5.991-1.459-1.454-5.923 6.156v1.289z"
          fillRule="nonzero"
        />
      </g>
    </Icon>
  )
}
