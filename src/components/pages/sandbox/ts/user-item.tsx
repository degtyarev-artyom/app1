import React, { FC } from 'react'
import { IUser } from './types'

interface UserItemProps {
  user: IUser
}

export const UserItem: FC<UserItemProps> = ({
  user
}) => {
  return (
    <div>
      <hr />
      ({ user.id }) = { user.name }
      , { user.address.city }, { user.address.street }
    </div>
  )
}