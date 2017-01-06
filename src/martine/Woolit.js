import { response, addMessage, setOptions } from '../actions'
import Thanks from './Thanks'

export default dispatch => {
  dispatch(addMessage('Ja, la oss snakke litt om Woolit, f eks: **Info-boks/boble/kommunikasjon om Woolit**'))
  dispatch(setOptions([
    {
      content: 'Andre prosjekter',
      action: e => {
      },
    },
    {
      content: 'Kontakt oss',
      action: e => {
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