import React, { FC } from  'react'
import { List } from './list'
import { TodoItem } from './todo-item'
import { ITodo } from './types'

interface TodosListProps {
  todos: ITodo[]
}

export const TodosList: FC<TodosListProps> = ({
  todos
}) => {
  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  )
}
