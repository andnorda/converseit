import { addMessage, setOptions } from '../actions'

export default dispatch => {
  dispatch(addMessage('Ikke implementert'))
  dispatch(setOptions([
    {
      content: 'Start på nytt',
      action: e => {
        window.location.reload()
      },
    },
  ]))
}