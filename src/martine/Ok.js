import { addMessage, setOptions } from '../actions'


export default dispatch => {
  dispatch(addMessage('Det var kanskje litt kjedelig formulert?'))
  dispatch(setOptions([
    {
      content: 'Start på nytt',
      action: e => {
        window.location.reload()
      },
    },
  ]))
}