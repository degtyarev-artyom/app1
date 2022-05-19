import axios from 'axios'
import classNames from 'classnames'
import { Button } from 'components/pages/components/button-block/button/button'
import { FC, useEffect, useState } from 'react'
import { Card, CardVariant } from './card'
import { EventsExample } from './events-example'
import { TodosList } from './todos-list'
import './ts.scss'
import { ITodo, IUser } from './types'
import { UserList } from './users-list'

interface TsProps {
  className?: string
}

export const Ts: FC<TsProps> = ({
  className = ''
}) => {

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch(e) {
      alert(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      setTodos(response.data)
    } catch(e) {
      alert(e)
    }
  }

  return (
    <div className={classNames('Ts', {
      [className]: className
    })}>
      <Card
        className="Ts__card"
        width={1920}  
        height={1080}
        variant={CardVariant.two}
        squared={num => console.log(num, 'x', num, '=', num * num)}
      >
        <Button
          className="Ts__card-button"
          active
        >
          Button
        </Button>
      </Card>

      <UserList users={users} />
      <hr />
      <hr />
      <hr />
      <hr />
      <TodosList todos={todos} />

      <EventsExample />
    </div>
  )
}
