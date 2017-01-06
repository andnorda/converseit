import { response, addMessage, setOptions } from '../actions'
import Project from './Project'
import NotImplemented from './NotImplemented'

export default dispatch => {
  dispatch(addMessage('Vi vil gjerne vise deg noe vi har gjort, men også hva vi for tiden gjør.'))
  dispatch(setOptions([
    {
      content: 'Prosjekt?',
      action: e => {
        dispatch(response('Prosjekt?', e.top, e.left))
        Project(dispatch)
      },
    },
    {
      content: 'Nyheter?',
      action: e => {
        dispatch(response('Nyheter?', e.top, e.left))
        NotImplemented(dispatch)
      },
    },
  ]))
}