import { response, addMessage, setOptions } from '../actions'
import DigitalHead from './DigitalHead'
import Curious from './Curious'
import WhoAreYou from './WhoAreYou'

export default dispatch => {
  dispatch(addMessage('Hei! Vi er Iterate, hvem er du?'))
  dispatch(setOptions([
    {
      content: 'Digitalt hode',
      action: e => {
        dispatch(response('Digitalt hode', e.top, e.left))
        DigitalHead(dispatch)
      },
    },
    {
      content: 'Nysgjerrig',
      action: e => {
        dispatch(response('Nysgjerrig', e.top, e.left))
        Curious(dispatch)
      },
    },
    {
      content: 'Men hvem er dere, egentlig?',
      action: e => {
        dispatch(response('Men hvem er dere, egentlig?', e.top, e.left))
        WhoAreYou(dispatch)
      },
    },
  ]))
}