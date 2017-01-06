import { response, addMessage, setOptions } from '../actions'
import Unsure from './Unsure'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Laster inn eksempel-prosjekter, bloggposter eller liknende..'))
  dispatch(setOptions([
    {
      content: 'Kult, hva mer?',
      action: e => {
        dispatch(response('Kult, hva mer?', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
    {
      content: 'Tøft, ta meg til testen!',
      action: e => {
        dispatch(response('Tøft, ta meg til testen!', e.top, e.left))
        NotImplemented(dispatch)
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