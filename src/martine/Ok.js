import { addMessage } from '../actions'

export default dispatch => {
  dispatch(addMessage('Det var kanskje litt kjedelig formulert?'))
}