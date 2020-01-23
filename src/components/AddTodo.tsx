import React, { useMemo, RefObject } from 'react'

type AddTodoViewProps = {
  dispatcher: (text: string) => void
  input: RefObject<HTMLInputElement>
}

export const AddTodoView: React.FC<AddTodoViewProps> = ({
  dispatcher,
  input,
}) => {
  return useMemo(() => {
    return (
      <div>
        <form
          onSubmit={(ev: React.FormEvent<HTMLFormElement>): void => {
            ev.preventDefault()
            if (!input.current?.value.trim()) {
              return
            }
            dispatcher(input.current.value)
            input.current.value = ''
          }}
        >
          <input
            ref={input}
            autoFocus={true}
            aria-label={'new todo content'}
            placeholder={'reactを極める'}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }, [dispatcher, input])
}
