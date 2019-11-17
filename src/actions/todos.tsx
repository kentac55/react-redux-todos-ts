let nextTodoId = 0
export const addTodoAction = (text: string) =>
  ({
    type: 'ADD',
    id: nextTodoId++,
    text,
  } as const)

export const toggleTodoAction = (id: number) =>
  ({
    type: 'TOGGLE',
    id,
  } as const)
