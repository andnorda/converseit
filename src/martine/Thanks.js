import { response, addMessage, setOptions } from '../actions'

export default dispatch => {
  dispatch(addMessage('Hyggelig at du stakk innom! Noe annet vi kan gjøre for deg?'))
  dispatch(setOptions([
    {
      content: 'Nei, det går bra',
      action: e => {
      },
    },
    {
      content: 'Ja, hold meg gjerne oppdatert',
      action: e => {
      },
    },
  ]))
}