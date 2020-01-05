import { SagaIterator } from 'redux-saga'
import fetch from 'cross-fetch'
import { bindAsyncAction } from 'typescript-fsa-redux-saga'
import {
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import {
  addTodoAction,
  addTodoOp,
  addTodoSucceeded,
  fetchSagaFailed,
  getTodoAction,
  getTodoOp,
  getTodoSucceeded,
  getTodosAction,
  getTodosOp,
  getTodosSucceeded,
  toggleTodoAction,
  toggleTodoOp,
  toggleTodoSucceeded,
} from '../actions'
import { Todo } from '../types'
import { _BaseUrl } from '../util'

const _fetch = ({
  path,
  params,
  options,
}: {
  path: string
  params?: Record<string, unknown>
  options?: RequestInit
}): Promise<Response> => {
  const baseUrl = _BaseUrl || 'http://localhost:8080'
  const url = new URL(baseUrl + path)

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      url.searchParams.append(k, String(v || ''))
    })
  }

  return fetch(url.toString(), options)
}

const addTodoWorker = bindAsyncAction(addTodoAction)(function*(
  params
): SagaIterator {
  try {
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
        body: JSON.stringify({
          completed: false,
          ...params,
        }),
      },
    })
    yield put(addTodoSucceeded({ todo }))
  } catch (e) {
    yield put(fetchSagaFailed({ e }))
  }
})

const toggleTodoWorker = bindAsyncAction(toggleTodoAction)(function*(
  params
): SagaIterator {
  try {
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
        body: JSON.stringify({
          completed: params.todo.completed,
          ...params,
        }),
      },
    })
    yield put(toggleTodoSucceeded({ todo }))
  } catch (e) {
    yield put(fetchSagaFailed({ e }))
  }
})

const getTodoWorker = bindAsyncAction(getTodoAction)(function*(
  params
): SagaIterator {
  try {
    const todo: Todo = yield call(_fetch, { path: `/tasks/${params.id}` })
    yield put(getTodoSucceeded({ todo }))
  } catch (e) {
    yield put(fetchSagaFailed({ e }))
  }
})

const getTodosWorker = bindAsyncAction(getTodosAction)(
  function*(): SagaIterator {
    try {
      const todos: Todo[] = yield call(_fetch, { path: `/tasks` })
      yield put(getTodosSucceeded({ todos }))
    } catch (e) {
      yield put(fetchSagaFailed({ e }))
    }
  }
)

function* addTodoHandler(): SagaIterator {
  yield takeEvery(yield take(addTodoOp.type), addTodoWorker)
}

function* toggleTodoHandler(): SagaIterator {
  yield takeLatest(yield take(toggleTodoOp.type), toggleTodoWorker)
}

function* getTodoHandler(): SagaIterator {
  yield takeLatest(yield take(getTodoOp.type), getTodoWorker)
}

function* getTodosHandler(): SagaIterator {
  yield takeLatest(yield take(getTodosOp.type), getTodosWorker)
}

export function* rootSaga(): SagaIterator {
  yield fork(addTodoHandler)
  yield fork(toggleTodoHandler)
  yield fork(getTodoHandler)
  yield fork(getTodosHandler)
}
