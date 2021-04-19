import React from 'react'

import ToDo from './ToDo'

function App (props) {
  return (
    <div>
      <ToDo store={props.store} />
    </div>
  )
}

export default App
