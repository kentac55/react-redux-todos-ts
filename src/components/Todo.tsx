import React from 'react'

type TodoViewProps = {
  onClick: () => void
  completed: boolean
  text: string
}

export const TodoView: React.FC<TodoViewProps> = ({
  onClick,
  completed,
  text,
}: TodoViewProps) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)
