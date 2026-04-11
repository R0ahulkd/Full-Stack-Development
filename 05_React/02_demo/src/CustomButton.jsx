import React from 'react'

export default function CustomButton(props) {
  return (
    <div>
        <button style={props.styles} onClick={props.onClick}>{props.text || "Click Me"}</button>
    </div>
  )
}
