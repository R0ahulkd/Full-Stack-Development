import React from 'react'

export default function Hero(props) {
  return (
    <div>
      Hey this is the hero component
      <h2>{props.intro}</h2>
    </div>
  )
}
