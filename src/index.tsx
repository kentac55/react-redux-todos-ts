import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { App } from './components/App'
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleware = createSagaMiddleWare()
const store = createStore(rootReducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
