import fetch from 'cross-fetch'
import { AsyncOpResult, Todo } from '../../types'

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
  return remapResponse(result)
}

export const invokeGetTodo = async (
  id: number
): Promise<AsyncOpResult<unknown>> => {
  return execFetch({ path: `/tasks/${id}` })
}

export const invokeGetTodos = async (): Promise<AsyncOpResult<unknown>> => {
  return execFetch({ path: '/tasks' })
}

export const invokeAddTodo = async (
  text: string
): Promise<AsyncOpResult<unknown>> => {
  return execFetch({
    path: '/tasks',
    options: {
      method: 'POST',
      body: JSON.stringify({
        completed: false,
        text: text,
      }),
    },
  })
}

export const invokeUpdateTodo = async (
  todo: Todo
): Promise<AsyncOpResult<unknown>> => {
  return execFetch({
    path: `/tasks/${todo.id}`,
    options: {
      method: 'PUT',
      body: JSON.stringify(todo),
    },
  })
}
