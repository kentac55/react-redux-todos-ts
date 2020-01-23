import { SagaIterator } from 'redux-saga'
import { bindAsyncAction } from 'typescript-fsa-redux-saga'
import { call, delay, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  invokeAddTodo,
  invokeGetTodo,
  invokeGetTodos,
  invokeUpdateTodo,
} from './api'
import { addTodo, getTodo, getTodos, toggleTodo, initApp } from '../actions'

const bindAsyncActionOptions = { skipStartedAction: true }

const addTodoWorker = bindAsyncAction(
  addTodo,
  bindAsyncActionOptions
)(function*({ text }): SagaIterator {
  return yield call(invokeAddTodo, text)
})

const toggleTodoWorker = bindAsyncAction(
  toggleTodo,
  bindAsyncActionOptions
)(function*({ todo }): SagaIterator {
  return yield call(invokeUpdateTodo, { ...todo, completed: !todo.completed })
})

const getTodoWorker = bindAsyncAction(
  getTodo,
  bindAsyncActionOptions
)(function*({ id }): SagaIterator {
  return yield call(invokeGetTodo, id)
})

const getTodosWorker = bindAsyncAction(
  getTodos,
  bindAsyncActionOptions
)(function*(): SagaIterator {
  return yield call(invokeGetTodos)
})

const initWorker = bindAsyncAction(
  initApp,
  bindAsyncActionOptions
)(function*(): SagaIterator {
  yield delay(100)
  return yield call(invokeGetTodos)
})

function* addTodoHandler(): SagaIterator {
  yield takeEvery(addTodo.started, function*({ payload }) {
    yield call(addTodoWorker, payload)
  })
}

function* toggleTodoHandler(): SagaIterator {
  yield takeEvery(toggleTodo.started, function*({ payload }) {
    yield call(toggleTodoWorker, payload)
  })
}

function* getTodoHandler(): SagaIterator {
  yield takeLatest(getTodo.started, function*({ payload }) {
    yield call(getTodoWorker, payload)
  })
}

function* getTodosHandler(): SagaIterator {
  yield takeLatest(getTodos.started, function*({ payload }) {
    yield call(getTodosWorker, payload)
  })
}

function* initHandler(): SagaIterator {
  yield takeLatest(initApp.started, function*({ payload }) {
    yield call(initWorker, payload)
  })
}

export function* fetchSaga(): SagaIterator {
  yield fork(addTodoHandler)
  yield fork(toggleTodoHandler)
  yield fork(getTodoHandler)
  yield fork(getTodosHandler)
  yield fork(initHandler)
}
