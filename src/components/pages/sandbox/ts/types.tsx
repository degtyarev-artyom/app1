export interface IUserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: IUserAddress
}

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}
