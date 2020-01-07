import { SagaIterator } from 'redux-saga'
import fetch from 'cross-fetch'
import { bindAsyncAction } from 'typescript-fsa-redux-saga'
import { call, fork, takeEvery, takeLatest } from 'redux-saga/effects'
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

const _fetch = async ({
  path,
  params,
  options,
}: {
  path: string
  params?: Record<string, unknown>
  options?: RequestInit
}): Promise<unknown> => {
  const baseUrl = _BaseUrl || 'http://localhost:8080'
  const url = new URL(baseUrl + path)

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      url.searchParams.append(k, String(v || ''))
    })
  }

  return (await fetch(url.toString(), options)).json()
}

const addTodoWorker = bindAsyncAction(addTodoAction)(function*(
  params
): SagaIterator {
  const body = {
    completed: false,
    text: params.text,
  }

  console.log(body)
  const todo: Todo = yield call(_fetch, {
    path: '/tasks',
    options: {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(body),
    },
  })
  return { todo }
})

const toggleTodoWorker = bindAsyncAction(toggleTodoAction)(function*(
  params
): SagaIterator {
  const body = {
    completed: !params.todo.completed,
    text: params.todo.text,
  }
  console.log(body)
  const todo: Todo = yield call(_fetch, {
    path: `/tasks/${params.todo.id}`,
    options: {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(body),
    },
  })
  return { todo }
})

const getTodoWorker = bindAsyncAction(getTodoAction)(function*(
  params
): SagaIterator {
  const todo: Todo = yield call(_fetch, { path: `/tasks/${params.id}` })
  return { todo }
})

const getTodosWorker = bindAsyncAction(getTodosAction)(
  function*(): SagaIterator {
    const todos: Todo[] = yield call(_fetch, { path: `/tasks` })
    return { todos }
  }
)

const initWorker = bindAsyncAction(initAction)(function*(): SagaIterator {
  const todos: Todo[] = yield call(_fetch, { path: `/tasks` })
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
