import { response, addMessage, setOptions } from '../actions'
import RetroGame from './RetroGame'

export default dispatch => {
  dispatch(addMessage('Den er grei. Noe annet som kan interessere deg?'))
  dispatch(setOptions([
    {
      content: 'Overrask meg',
      action: e => {
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