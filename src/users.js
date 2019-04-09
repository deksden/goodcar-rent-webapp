import React from 'react'
import { List, Datagrid, TextField, EmailField, BooleanField } from 'react-admin'

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <EmailField source='email' />
      <BooleanField source='disabled' />
    </Datagrid>
  </List>
)
