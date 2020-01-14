import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { AppContainer } from './containers/App'
import { rootReducer } from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleWare()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
