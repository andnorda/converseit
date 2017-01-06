import { response, addMessage, setOptions } from '../actions'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Hyggelig at du stakk innom! Noe annet vi kan gjøre for deg?'))
  dispatch(setOptions([
    {
      content: 'Nei, det går bra',
      action: e => {
        dispatch(response('Nei, det går bra', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Ja, hold meg gjerne oppdatert',
      action: e => {
        dispatch(response('Ja, hold meg gjerne oppdatert', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
  ]))
}