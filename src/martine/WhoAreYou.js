import { response, addMessage, setOptions } from '../actions'
import Ok from './Ok'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Hm. Glad du spør! Kort fortalt er vi en gjeng på nærmere 50 digitale hoder, som driver med produktutvikling, både for kunder, og oss selv.'))
  dispatch(setOptions([
    {
      content: 'Spennende!',
      action: e => {
        dispatch(response('Spennende!', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Ok.',
      action: e => {
        dispatch(response('Ok.', e.top, e.left))
        Ok(dispatch)
      },
    },
  ]))
}