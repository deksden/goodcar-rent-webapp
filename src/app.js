import React from 'react'
import { Admin, Resource, Login } from 'react-admin'
import dataProvider from './ra-data-goodcar-rent'
import { UserList } from './users'
// import { PostCreate, PostEdit, PostList } from './posts'
// import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import Dashboard from './dashboard'
import authProvider from './auth-provider'

/* <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */

const MyLoginPage = () => <Login backgroundImage='https://loremflickr.com/1024/768/city,car' />

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} loginPage={MyLoginPage}>
    <Resource name='users' list={UserList} icon={UserIcon} />
  </Admin>
)

export default App
