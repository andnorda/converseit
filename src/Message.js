import React, { Component } from 'react'
import Scroll from 'react-scroll'

class Message extends Component {
  showContent = () => {
    this.contentEl.style.setProperty('display', 'block')
    this.dots.style.setProperty('display', 'none')
  }

  hideContent = () => {
    this.contentEl.style.setProperty('display', 'none')
    this.dots.style.setProperty('display', 'block')
  }

  componentDidMount() {
    setTimeout(() => {
      this.element.getBoundingClientRect()
      this.element.style.setProperty('transform', 'translate(0px, 0px)')

      setTimeout(() => {
        const { height: h0, width: w0 } = this.element.getBoundingClientRect()
        this.showContent()
        const { height: h1, width: w1 } = this.element.getBoundingClientRect()
        this.hideContent()
        this.element.style.setProperty('height', h0 + 'px')
        this.element.style.setProperty('width', w0 + 'px')
        this.element.getBoundingClientRect()
        this.element.style.setProperty('height', h1 + 'px')
        this.element.style.setProperty('width', w1 + 'px')
        const { top } = this.element.getBoundingClientRect()
        const scroll = Scroll.animateScroll
        scroll.scrollTo(top - 100)
        setTimeout(() => {
          this.showContent()
        }, 500)
      }, 1000)
    }, 800)
  }

  render() {
    return <div
      ref={el => this.element = el}
      style={{
        backgroundColor: 'white',
        display: 'inline-block',
        margin: '16px 16px 0',
        padding: '6px 12px',
        borderRadius: 3,
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',
        transition: 'width 500ms ease-in-out, height 500ms ease-in-out, transform 500ms ease-in-out',
        overflow: 'hidden',
        transform: 'translate(-60px, 0px)',
      }}>
      <div ref={el => this.dots = el}>...</div>
      <div ref={el => this.contentEl = el} style={{
        display: 'none',
        overflow: 'hidden',
      }}>{this.props.content}</div>
    </div>
  }
}

export default Message
