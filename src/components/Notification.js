import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const hidden ={
    display: 'none'
  }
  console.log(props.store.getState().notification)
  return (
    <div style={props.store.getState().notification[0] === "" ? hidden : style}>
      You have added the Anecdote "{props.store.getState().notification}"
    </div>
  )
}

export default Notification