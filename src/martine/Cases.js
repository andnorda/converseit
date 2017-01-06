import { response, addMessage, setOptions } from '../actions'
import Unsure from './Unsure'

export default dispatch => {
  dispatch(addMessage('Laster inn eksempel-prosjekter, bloggposter eller liknende..'))
  dispatch(setOptions([
    {
      content: 'Kult, hva mer?',
      action: e => {
      },
    },
    {
      content: 'Tøft, ta meg til testen!',
      action: e => {
      },
    },
    {
      content: 'Hm.',
      action: e => {
        dispatch(response('Hm.', e.top, e.left))
        Unsure(dispatch)
      },
    },
  ]))
}