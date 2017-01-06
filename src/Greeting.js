import React from 'react'

const greetings = [
  'Hei!',
  'Hallo...',
  'Halla',
]

const Greeting = () =>
  <div>{greetings[Math.floor(Math.random() * greetings.length)]}</div>

export default Greeting