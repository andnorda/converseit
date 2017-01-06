import React, { Component } from 'react'

class Response extends Component {
  componentDidMount() {
    const { top, left } = this.element.getBoundingClientRect()
    this.element.style.setProperty('transform', `translate(${this.props.left - left}px, ${this.props.top - top}px)`)
    this.element.getBoundingClientRect()
    this.element.style.setProperty('transition', 'transform 0.75s ease-in-out')
    this.element.style.setProperty('opacity', 1)
    this.element.style.setProperty('transform', `translate(0px, 0px)`)
  }

  render() {
    return <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
    }}>
      <div
        ref={el => this.element = el}
        style={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 3,
          padding: '6px 12px',
          display: 'inline-block',
          margin: '16px 16px 0',
          opacity: 0,
        }} >{this.props.content}</div>
    </div>
  }
}

export default Response
