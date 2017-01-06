import { addMessage, setOptions } from '../actions'

export default dispatch => {
  dispatch(addMessage('Ok. Rune har akkurat skrevet en bloggpost som forklarer mer i dybden om hvordan vi tenker.'))
  dispatch(setOptions([
    {
      content: 'Start på nytt',
      action: e => {
        window.location.reload()
      },
    },
  ]))
}