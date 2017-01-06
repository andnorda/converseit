import initialState from './initialState'

function pushMessage(state, message) {
  return Object.assign({}, state, {
    messages: [].concat(state.messages).concat([message])
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return pushMessage(state, {
        type: 'message',
        content: action.message,
      })
    case 'OPTIONS':
      return Object.assign({}, state, {
        options: action.options
      })
    case 'GREETING':
      return pushMessage(state, {
        type: 'greeting',
      })
    case 'ABOUT':
      return pushMessage(state, {
        type: 'about',
      })
    case 'PEOPLE':
      return pushMessage(state, {
        type: 'people',
      })
    case 'PERSON':
      return pushMessage(state, {
        type: 'person',
        key: action.key,
      })
    case 'DESIGNERS':
      return pushMessage(state, {
        type: 'designers',
        key: action.key,
      })
    case 'DEVELOPERS':
      return pushMessage(state, {
        type: 'developers',
        key: action.key,
      })
    case 'BIZ':
      return pushMessage(state, {
        type: 'biz',
        key: action.key,
      })
    case 'NEW_RESPONSE':
      return Object.assign({}, pushMessage(state, {
        type: 'response',
        content: action.content,
        top: action.top,
        left: action.left,
      }), {
          options: [],
        })
    default:
      return state
  }
}
