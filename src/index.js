import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import App from './App'
import './index.css'

const store = createStore(reducer)

import Hello from './martine/Hello'

Hello(store.dispatch)

// store.dispatch(greeting())
// switch (window.location.pathname) {
//   case '/':
//     store.dispatch(about())
//     break
//   case '/people':
//     store.dispatch(goToPeople())
//     break
//   default:
// }

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
