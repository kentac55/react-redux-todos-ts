import { SagaIterator } from 'redux-saga'
import { bindAsyncAction } from 'typescript-fsa-redux-saga'
import { call, delay, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  addTodoAction,
  addTodoOp,
  getTodoAction,
  getTodoOp,
  getTodosAction,
  getTodosOp,
  toggleTodoAction,
  toggleTodoOp,
  initAction,
  initOp,
} from '../actions'
import { Todo } from '../types'
import { _BaseUrl } from '../util'
import axios, { AxiosRequestConfig } from 'axios'

const _fetch = async (options: AxiosRequestConfig): Promise<unknown> => {
  const baseURL = _BaseUrl || 'http://localhost:8080'
  const client = axios.create({
    baseURL,
  })
  return (await client.request(options)).data
}

const addTodoWorker = bindAsyncAction(addTodoAction)(function*(
  params
): SagaIterator {
  const data = {
    completed: false,
    text: params.text,
  }

  const todo: Todo = yield call(_fetch, {
    url: '/tasks',
    method: 'POST',
    data,
  })
  return { todo }
})

const toggleTodoWorker = bindAsyncAction(toggleTodoAction)(function*(
  params
): SagaIterator {
  const data = {
    completed: !params.todo.completed,
    text: params.todo.text,
  }

  const todo: Todo = yield call(_fetch, {
    url: `/tasks//${params.todo.id}`,
    method: 'PUT',
    data,
  })
  return { todo }
})

const getTodoWorker = bindAsyncAction(getTodoAction)(function*(
  params
): SagaIterator {
  const todo: Todo = yield call(_fetch, { url: `/tasks/${params.id}` })
  return { todo }
})

const getTodosWorker = bindAsyncAction(getTodosAction)(
  function*(): SagaIterator {
    const todos: Todo[] = yield call(_fetch, { url: `/tasks` })
    return { todos }
  }
)

const initWorker = bindAsyncAction(initAction)(function*(): SagaIterator {
  yield delay(3000)
  const todos: Todo[] = yield call(_fetch, { url: `/tasks` })
  return { todos }
})

function* addTodoHandler(): SagaIterator {
  yield takeEvery(addTodoOp, function*(action) {
    yield call(addTodoWorker, action.payload)
  })
}

function* toggleTodoHandler(): SagaIterator {
  yield takeEvery(toggleTodoOp, function*(action) {
    yield call(toggleTodoWorker, action.payload)
  })
}

function* getTodoHandler(): SagaIterator {
  yield takeLatest(getTodoOp, function*(action) {
    yield call(getTodoWorker, action.payload)
  })
}

function* getTodosHandler(): SagaIterator {
  yield takeLatest(getTodosOp, function*(action) {
    yield call(getTodosWorker, action.payload)
  })
}

function* initHandler(): SagaIterator {
  yield takeLatest(initOp, function*(action) {
    yield call(initWorker, action.payload)
  })
}

export function* rootSaga(): SagaIterator {
  yield fork(addTodoHandler)
  yield fork(toggleTodoHandler)
  yield fork(getTodoHandler)
  yield fork(getTodosHandler)
  yield fork(initHandler)
}
