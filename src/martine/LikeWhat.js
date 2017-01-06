import { response, addMessage, setOptions } from '../actions'
import Project from './Project'

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
      },
    },
  ]))
}