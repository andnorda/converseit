import { response, addMessage, setOptions } from '../actions'
import Project from './Project'
import NotImplemented from './NotImplemented'

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