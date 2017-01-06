import { addMessage } from '../actions'

export default dispatch => {
  dispatch(addMessage('Ok. Rune har akkurat skrevet en bloggpost som forklarer mer i dybden om hvordan vi tenker.'))
}