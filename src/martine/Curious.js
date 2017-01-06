import { response, addMessage, setOptions } from '../actions'
import Afraid from './Afraid'

export default dispatch => {
  dispatch(addMessage('Så bra. Du vet det kanskje ikke, men du er nå en del av vårt siste eksperiment.'))
  dispatch(setOptions([
    {
      content: 'Oj, hva mener du?',
      action: e => {
      },
    },
    {
      content: 'Det vet jeg ikke om jeg tør',
      action: e => {
        dispatch(response('Det vet jeg ikke om jeg tør', e.top, e.left))
        Afraid(dispatch)
      },
    },
  ]))
}