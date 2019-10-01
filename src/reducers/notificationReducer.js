const initialState = [
  ""
]

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET': 
      const newState = [action.data.content]
      return newState
    default:
      return state
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET',
    data: {
      content
    }
  }
}

export default notificationReducer