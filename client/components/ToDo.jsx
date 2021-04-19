import React from 'react'

function ToDo (props) {
  const {store} = props
  const state = store.getState()

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
      
      </ul>
    </div>
  )
}

export default ToDo
