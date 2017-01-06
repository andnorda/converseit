import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'
import Response from './Response'
import Greeting from './Greeting'
import About from './About'
import People from './People'
import Person from './Person'

function content(message) {
  switch (message.type) {
    case 'greeting':
      return <Greeting />
    case 'people':
      return <People />
    case 'designers':
      return <People type="Designer" />
    case 'developers':
      return <People type="Systemutvikler" />
    case 'biz':
      return <People type="Rådgiver" />
    case 'about':
      return <About />
    case 'person':
      return <Person person={message.key} />
    default:
      return message.content
  }
}

const Messages = ({ messages }) =>
  <ul style={{
    minHeight: 600,
    paddingBottom: 200,
  }}>
    {messages.map((message, i) =>
      <li key={i}>
        {message.type === 'response'
          ? <Response content={message.content} top={message.top} left={message.left} />
          : <Message content={content(message)} />}
      </li>)}
  </ul>

export default connect(
  state => {
    return {
      messages: state.messages,
    }
  }
)(Messages)
