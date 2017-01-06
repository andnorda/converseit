import { addMessage, setOptions } from '../actions'

export default dispatch => {
  dispatch(addMessage('Ok. Men vi setter pris på at du stakk innom, og ønsker deg en god dag videre!'))
  dispatch(setOptions([
    {
      content: 'Start på nytt',
      action: e => {
        window.location.reload()
      },
    },
  ]))
}