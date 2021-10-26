import React, { FC } from 'react'
import { IUser } from './types'
import { UserItem } from './user-item'
import { List } from './list'

interface UserListProps {
  users: IUser[]
}

export const UserList: FC<UserListProps> = ({
  users
}) => {
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
    />
  )
}
