import { SagaIterator } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { fetchSaga } from './fetch'

export default function* rootSaga(): SagaIterator {
  yield fork(fetchSaga)
}
