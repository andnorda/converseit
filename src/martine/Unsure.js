import { response, addMessage, setOptions } from '../actions'
import SomethingElse from './SomethingElse'

export default dispatch => {
  dispatch(addMessage('Du virker litt usikker? Fortalte jeg at alle ansatte her også får mulighet til å bli medeiere i firmaet, og at vi også har en aktiv satsning på egne produkter?'))
  dispatch(setOptions([
    {
      content: 'Jasså?',
      action: e => {
      },
    },
    {
      content: 'Er egentlig ikke ute etter jobb',
      action: e => {
        dispatch(response('Er egentlig ikke ute etter jobb', e.top, e.left))
        SomethingElse(dispatch)
      },
    },
  ]))
}