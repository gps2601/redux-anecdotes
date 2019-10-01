const initialState = [""]

const filterReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET-FILTER':
      const newState = [action.data.content]
      return newState
    default:
      return state
  }
}

export const setFilter = (content) => {
  return {
    type: 'SET-FILTER',
    data: {
      content
    }
  }
}

export default filterReducer