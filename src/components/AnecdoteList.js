import React from 'react'
import {vote} from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes
  const filter = props.store.getState().filter

  return (
    <div>
    <h2>Anecdotes</h2>
      {anecdotes.filter(anecdotes => anecdotes.content.includes(filter))
        .sort(function(a, b) {
        var one = a.votes
        var two = b.votes
        return one > two ? -1 : 1
      }).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => props.store.dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList