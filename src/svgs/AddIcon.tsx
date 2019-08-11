import React from "react"
import { color } from "../helpers"
import { Icon, IconProps } from "./Icon"

/** AddIcon */
export const AddIcon: React.SFC<IconProps> = props => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <title>add</title>
      <path
        d="M15 9.5H9.514V15H8.476V9.5H3V8.48h5.476V3h1.038v5.48H15z"
        fill={color(props.fill)}
        fillRule="evenodd"
      />
    </Icon>
  )
}
