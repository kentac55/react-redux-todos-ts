import React from 'react'

type AddTodoViewProps = {
  dispatcher: (s: string) => () => void
}

export const AddTodoView: React.FC<AddTodoViewProps> = ({ dispatcher }) => {
  const input = React.createRef<HTMLInputElement>()
  return (
    <div>
      <form
        onSubmit={(ev: React.FormEvent<HTMLFormElement>): void => {
          ev.preventDefault()
          if (!input.current?.value.trim()) {
            return
          }
          dispatcher(input.current.value)()
          input.current.value = ''
        }}
      >
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
