import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'

import App from './components/App'
import {todos, visibilityFilter} from './reducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
})

const store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
  )
}
