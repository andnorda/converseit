export const addMessage = message => {
  return {
    type: 'NEW_MESSAGE',
    message,
  }
}

export const setOptions = options => {
  return {
    type: 'OPTIONS',
    options,
  }
}

export const response = (content, top, left) => {
  return {
    type: 'NEW_RESPONSE',
    content,
    top,
    left,
  }
}

export const goToPeople = () => {
  return {
    type: 'PEOPLE',
  }
}

export const goToDesigners = () => {
  return {
    type: 'DESIGNERS',
  }
}

export const goToDevelopers = () => {
  return {
    type: 'DEVELOPERS',
  }
}

export const goToBiz = () => {
  return {
    type: 'BIZ',
  }
}

export const goToPerson = key => {
  return {
    type: 'PERSON',
    key,
  }
}

export const greeting = () => {
  return {
    type: 'GREETING',
  }
}

export const about = () => {
  return {
    type: 'ABOUT',
  }
}