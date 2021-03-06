import { addMessage, setOptions } from '../actions'

export default dispatch => {
  dispatch(addMessage('Bra! Det er viktig å gi seg selv litt slack innimellom, og det å leke med både ny og gammel teknologi kan ofte trigge nye idéer. Anbefaler disse som en start:'))
  dispatch(setOptions([
    {
      content: 'Start på nytt',
      action: e => {
        window.location.reload()
      },
    },
  ]))
}