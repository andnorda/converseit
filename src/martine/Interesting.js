import { response, addMessage, setOptions } from '../actions'
import LikeWhat from './LikeWhat'

export default dispatch => {
  dispatch(addMessage('Ja, det synes vi også. Vi liker å ha en eksperimentell tilnærming til det vi gjør, og sånn sett også søke å bryte med allerede etablerte normer og konvensjoner. Vi tror at grunnlaget for enhver suksess ligger i et ønske om å hjelpe, eller gjøre noe bedre enn hva det allerede er.'))
  dispatch(setOptions([
    {
      content: 'Som hva da?',
      action: e => {
        dispatch(response('Som hva da?', e.top, e.left))
        LikeWhat(dispatch)
      },
    },
    {
      content: 'Åja.',
      action: e => {
      },
    },
  ]))
}