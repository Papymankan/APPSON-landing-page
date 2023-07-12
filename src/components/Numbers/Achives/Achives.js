import React from 'react'
import './Achives.css'

export default function Achives(props) {
    const [number] = React.useState(props.number)
    const [title] = React.useState(props.title)
  return (
    <div className='Achives'>
        {props.children}
        <h1>{number}</h1>
        <span>{title}</span>
    </div>
  )
}
