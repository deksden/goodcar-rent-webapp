import React from 'react'
import { List, Datagrid, TextField, EmailField, BooleanField, DateField,
  Edit, Create, SimpleForm, DisabledInput, TextInput, BooleanInput } from 'react-admin'

export const InviteList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <EmailField source='email' />
      <DateField source='expireAt' />
      <BooleanField source='disabled' />
    </Datagrid>
  </List>
)

export const InviteEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='email' />
      <BooleanInput source='disabled' />
    </SimpleForm>
  </Edit>
)

export const InviteCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='email' />
      <BooleanInput source='disabled' />
    </SimpleForm>
  </Create>
)
