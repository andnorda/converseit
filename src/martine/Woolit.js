import { response, addMessage, setOptions } from '../actions'
import Thanks from './Thanks'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Ja, la oss snakke litt om Woolit, f eks: **Info-boks/boble/kommunikasjon om Woolit**'))
  dispatch(setOptions([
    {
      content: 'Andre prosjekter',
      action: e => {
        dispatch(response('Andre prosjekter', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Kontakt oss',
      action: e => {
        dispatch(response('Kontakt oss', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Takk for titten',
      action: e => {
        dispatch(response('Takk for titten', e.top, e.left))
        Thanks(dispatch)
      },
    },
  ]))
}