import React from 'react'

const Link = ({ children, ...props }) =>
  <span
    style={{
      color: 'blue',
      cursor: 'pointer',
    }}
    {...props} >{children}</span>

export default Link
