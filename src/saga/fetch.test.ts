import { expectSaga } from 'redux-saga-test-plan'
import { fetchSaga } from './fetch'
import {
  invokeAddTodo,
  invokeGetTodo,
  invokeGetTodos,
  invokeUpdateTodo,
} from './api'
import { addTodo, getTodo, getTodos, initApp, toggleTodo } from '../actions'
import { AsyncOpResult, Todo } from '../types'

it('should add todo when addTodo action is dispatched', () => {
  const text = 'hoge'
  const result: AsyncOpResult<Todo> = {
    type: 'Ok',
    contents: {
      id: 0,
      completed: false,
      text,
    },
  }
  return expectSaga(fetchSaga)
    .provide({
      call(effect, next) {
        if (effect.fn === invokeAddTodo) {
          return result
        }
        return next()
      },
    })
    .put(
      addTodo.done({
        params: { text },
        result,
      })
    )
    .dispatch(addTodo.started({ text }))
    .silentRun()
})

it('should fetch todo when getTodo action is dispatched', () => {
  const id = 0
  const result: AsyncOpResult<Todo> = {
    type: 'Ok',
    contents: { id, text: 'hoge', completed: false },
  }
  return expectSaga(fetchSaga)
    .provide({
      call(effect, next) {
        if (effect.fn === invokeGetTodo) {
          return result
        }
        return next()
      },
    })
    .put(
      getTodo.done({
        params: { id },
        result,
      })
    )
    .dispatch(getTodo.started({ id }))
    .silentRun()
})

it('should fetch todos when initApp action is dispatched', () => {
  const result: AsyncOpResult<Todo[]> = {
    type: 'Ok',
    contents: [{ id: 0, text: 'hoge', completed: false }],
  }
  return expectSaga(fetchSaga)
    .delay(100)
    .provide({
      call(effect, next) {
        if (effect.fn === invokeGetTodos) {
          return result
        }
        return next()
      },
    })
    .put(
      initApp.done({
        params: undefined,
        result,
      })
    )
    .dispatch(initApp.started())
    .silentRun()
})

it('should fetch todos when getTodos action is dispatched', () => {
  const result: AsyncOpResult<Todo[]> = {
    type: 'Ok',
    contents: [{ id: 0, text: 'hoge', completed: false }],
  }
  return expectSaga(fetchSaga)
    .provide({
      call(effect, next) {
        if (effect.fn === invokeGetTodos) {
          return result
        }
        return next()
      },
    })
    .put(
      getTodos.done({
        params: undefined,
        result,
      })
    )
    .dispatch(getTodos.started())
    .silentRun()
})

it('should toggle todo when toggleTodo action is dispatched', () => {
  const todo: Todo = { id: 0, text: 'hoge', completed: false }
  const result: AsyncOpResult<Todo> = {
    type: 'Ok',
    contents: { ...todo, completed: true },
  }
  return expectSaga(fetchSaga)
    .provide({
      call(effect, next) {
        if (effect.fn === invokeUpdateTodo) {
          return result
        }
        return next()
      },
    })
    .put(
      toggleTodo.done({
        params: { todo },
        result,
      })
    )
    .dispatch(toggleTodo.started({ todo }))
    .silentRun()
})
