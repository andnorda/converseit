import { response, addMessage, setOptions } from '../actions'
import Scared from './Scared'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Å, men det er ikke farlig. Vi er alltid opptatt av å teste ut ny teknologi, og akkurat nå forsøker vi å finne ut av hvordan vi kan presentere oss selv gjennom chatbot og ai-teknologi.'))
  dispatch(setOptions([
    {
      content: 'Gøy da!',
      action: e => {
        dispatch(response('Gøy da!', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Jeg synes fortsatt dette er litt skummelt.',
      action: e => {
        dispatch(response('Jeg synes fortsatt dette er litt skummelt.', e.top, e.left))
        Scared(dispatch)
      },
    },
  ]))
}