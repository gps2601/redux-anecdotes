import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('vote increments', () => {
  it('increments the correct vote', () => {
    const initialState = [
      {
        content: 'one note',
        id: '2601',
        votes: 0
      }
    ]
  
    const action = {
      type: 'VOTE',
      data: {
        id: '2601'
      }
    }
  
    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
  
    expect(newState.find(el => el.id === '2601').votes).toBe(1)
    })
  })