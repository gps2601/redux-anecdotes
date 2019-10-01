import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.store.dispatch(
      createAnecdote(content)
    )
    props.store.dispatch(
      setNotification(content)
    )
    setTimeout(() => props.store.dispatch(setNotification("")), 4000)
  }
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote' /></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm