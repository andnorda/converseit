import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import App from './App'
import './index.css'
import Hello from './martine/Hello'

window.startTest = () => {
  const store = createStore(reducer)


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
}

document.getElementById('root').innerHTML = `<div style="margin: 10px;">
<div>Dette er et eksperiment.</div>
<br/>
<div>Med utgangspunkt i disse ordene:</div>
<div>Gjennomsiktig</div>
<div>Menneskelig</div>
<div>Gjørokrati</div>
<div>Bygge noe</div>
<div>Fag</div>
<div>Autonom</div>
<br/>
<div>ønsker vi å sammen utfordre rammene for hva en hjemmeside kan være.</div>
<br/>
<div onClick="window.startTest()" style="color: blue;">Start eksperimentet</div>
</div>`
