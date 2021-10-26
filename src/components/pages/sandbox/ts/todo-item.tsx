import React, { FC } from 'react'
import { ITodo } from './types'

interface TodoItemProps {
  todo: ITodo
}

export const TodoItem: FC<TodoItemProps> = ({
  todo
}) => {
  return (
    <div>
      <hr />
      <input type="checkbox" checked={todo.completed} />
      &nbsp;({ todo.id }) { todo.title }
    </div>
  )
}
