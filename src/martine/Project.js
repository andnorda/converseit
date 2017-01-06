import { response, addMessage, setOptions } from '../actions'
import Woolit from './Woolit'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Nice. Som sagt så løser vi jo caser og problemer både for kunder og oss selv. Har trukket frem et par eksempler her:'))
  dispatch(setOptions([
    {
      content: 'Kunde case (eks Call Call for Telenor)',
      action: e => {
        dispatch(response('Kunde case (eks Call Call for Telenor).', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Intern case (eks Woolit)',
      action: e => {
        dispatch(response('Intern case (eks Woolit)', e.top, e.left))
        Woolit(dispatch)
      },
    },
  ]))
}