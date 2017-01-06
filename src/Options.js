import React, { Component } from 'react'
import { connect } from 'react-redux'

class Options extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.element.getBoundingClientRect()
      this.element.style.setProperty('transform', 'translate(0px, 0px)')
    }, 2500)
  }

  componentWillUpdate(nextProps, nextState) {
      this.element.style.setProperty('transition', null)
      this.element.getBoundingClientRect()
      this.element.style.setProperty('transform', 'translate(0px, 250px)')
      this.element.getBoundingClientRect()
      this.element.style.setProperty('transition', 'transform 500ms ease-in-out')
  }

  componentDidUpdate(prevProps, prevState) {
    this.componentDidMount()
  }

  render() {
    return <div
      style={{
        position: 'absolute',
        width: '100%',
        bottom: 0,
        overflow: 'hidden',
        paddingBottom: 124,
      }}>
      <div
        ref={el => this.element = el}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          transform: 'translate(0px, 250px)',
          transition: 'transform 500ms ease-in-out',
        }}>
        {this.props.options.map((option, i) =>
          <div
            key={i}
            onClick={e => {
              option.action(e.target.getBoundingClientRect())
            } }
            style={{
              backgroundColor: 'black',
              color: 'white',
              cursor: 'pointer',
              borderRadius: 3,
              padding: '6px 12px',
              margin: 8,
              display: 'inline-block',
            }}>{option.content}</div>)
        }
      </div>
    </div>
  }
}

export default connect(
  state => {
    return {
      options: state.options,
    }
  }
)(Options)
