import { expectSaga } from 'redux-saga-test-plan'
import rootSaga from '.'
import { fetchSaga } from './fetch'

it('should fork child sagas', () => {
  expectSaga(rootSaga)
    .fork(fetchSaga)
    .run()
})
