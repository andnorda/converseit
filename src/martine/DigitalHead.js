import { response, addMessage, setOptions } from '../actions'
import WhoAreYouReally from './WhoAreYouReally'

export default dispatch => {
  dispatch(addMessage('Kult. Vi ser alltid etter nye, kloke hoder.'))
  dispatch(setOptions([
    {
      content: 'Ta apptitude test',
      action: e => {
        dispatch(response('Ta apptitude test', e.top, e.left))
        window.location = 'https://docs.google.com/a/iterate.no/forms/d/e/1FAIpQLScxOUr_aV5QxC4dnXVQF9oyXfMicXYvm6b48fmk9uhbGr3JDA/viewform'
      },
    },
    {
      content: 'Nja, hvem er dere, egentlig?',
      action: e => {
        dispatch(response('Nja, hvem er dere, egentlig?', e.top, e.left))
        WhoAreYouReally(dispatch)
      },
    },
  ]))
}