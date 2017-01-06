import React from 'react'
import Messages from './Messages'
import Options from './Options'

const App = () =>
  <div style={{
    position: 'relative',
    maxWidth: 800,
    margin: '0 auto',
  }}>
    <Messages />
    <Options />
  </div >

export default App
