import { response, addMessage, setOptions } from '../actions'
import NotReally from './NotReally'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Ja, vi gikk kanskje litt fort frem.. I utgangspunktet er vi allerede ca 50 digitale hoder, som driver med produktutvikling. Men i stedet for at jeg babler i vei, vil du kanskje ha noen mer konkrete eksempler på hva vi faktisk gjør?'))
  dispatch(setOptions([
    {
      content: 'Ja, gjerne!',
      action: e => {
        dispatch(response('Ja, gjerne!', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Ikke egentlig',
      action: e => {
        dispatch(response('Ikke egentlig', e.top, e.left))
        NotReally(dispatch)
      },
    },
  ]))
}