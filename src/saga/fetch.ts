import fetch from 'cross-fetch'
import { SagaIterator } from 'redux-saga'
import { bindAsyncAction } from 'typescript-fsa-redux-saga'
import { call, delay, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  addTodoOp,
  addTodoEv,
  getTodoOp,
  getTodoEv,
  getTodosOp,
  getTodosEv,
  toggleTodoOp,
  toggleTodoEv,
  initOp,
  initEv,
} from '../actions'
import { AsyncOpResult } from '../types'

const remapResponse = async (
  response: Response
): Promise<AsyncOpResult<unknown>> => {
  if (response.ok) {
    return {
      type: 'Ok',
      contents: await response.json(),
    }
  }
  const message = (await response.json()).message
  switch (response.status) {
    case 400:
      return {
        type: 'InvalidArgument',
        message,
      }
    case 401:
      return {
        type: 'Unauthenticated',
        message,
      }
    case 403:
      return {
        type: 'PermissionDenied',
        message,
      }
    case 404:
      return {
        type: 'NotFound',
        message,
      }
    case 409:
      return {
        type: 'AlreadyExists',
        message,
      }
    case 500:
      return {
        type: 'Internal',
        message,
      }
    case 503:
      return {
        type: 'Unavailable',
        message,
      }
    default:
      return {
        type: 'Unknown',
        message: 'Unknown',
      }
  }
}

const execFetch = async ({
  path,
  options,
  params,
}: {
  path: string
  options?: RequestInit
  params?: Record<string, unknown>
}): Promise<AsyncOpResult<unknown>> => {
  const baseUrl = 'http://localhost:8080'
  const url = new URL(baseUrl + path)
  const optionBase: RequestInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf8',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
  }

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      url.searchParams.append(k, String(v || ''))
    })
  }

  const result = await fetch(
    url.toString(),
    Object.assign({}, optionBase, options)
  )
  return await remapResponse(result)
}

const addTodoWorker = bindAsyncAction(addTodoEv)(function*({
  text,
}): SagaIterator {
  return yield call(execFetch, {
    path: '/tasks',
    options: {
      method: 'POST',
      body: JSON.stringify({
        completed: false,
        text: text,
      }),
    },
  })
})

const toggleTodoWorker = bindAsyncAction(toggleTodoEv)(function*({
  todo,
}): SagaIterator {
  return yield call(execFetch, {
    path: `/tasks/${todo.id}`,
    options: {
      method: 'PUT',
      body: JSON.stringify({
        completed: !todo.completed,
        text: todo.text,
      }),
    },
  })
})

const getTodoWorker = bindAsyncAction(getTodoEv)(function*({
  id,
}): SagaIterator {
  return yield call(execFetch, {
    path: `/tasks/${id}`,
  })
})

const getTodosWorker = bindAsyncAction(getTodosEv)(function*(): SagaIterator {
  return yield call(execFetch, {
    path: `/tasks`,
  })
})

const initWorker = bindAsyncAction(initEv)(function*(): SagaIterator {
  yield delay(3000)
  return yield call(execFetch, {
    path: `/tasks`,
  })
})

function* addTodoHandler(): SagaIterator {
  yield takeEvery(addTodoOp, function*({ payload }) {
    yield call(addTodoWorker, payload)
  })
}

function* toggleTodoHandler(): SagaIterator {
  yield takeEvery(toggleTodoOp, function*({ payload }) {
    yield call(toggleTodoWorker, payload)
  })
}

function* getTodoHandler(): SagaIterator {
  yield takeLatest(getTodoOp, function*({ payload }) {
    yield call(getTodoWorker, payload)
  })
}

function* getTodosHandler(): SagaIterator {
  yield takeLatest(getTodosOp, function*({ payload }) {
    yield call(getTodosWorker, payload)
  })
}

function* initHandler(): SagaIterator {
  yield takeLatest(initOp, function*({ payload }) {
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
