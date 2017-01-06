import { response, addMessage, setOptions } from '../actions'
import RetroGame from './RetroGame'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Den er grei. Noe annet som kan interessere deg?'))
  dispatch(setOptions([
    {
      content: 'Overrask meg',
      action: e => {
        dispatch(response('Overrask meg', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Spill et retro-spill',
      action: e => {
        dispatch(response('Spill et retro-spill', e.top, e.left))
        RetroGame(dispatch)
      },
    },
  ]))
}