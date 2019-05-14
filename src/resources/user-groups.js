import React from 'react'
import { List, Datagrid, TextField, ReferenceArrayField, SelectField,
  SingleFieldList, ChipField, Edit, Create, SimpleForm, DisabledInput,
  SelectInput, ReferenceArrayInput, SelectArrayInput, TextInput,
  EditButton } from 'react-admin'

const systemTypeNone = null
const systemTypeAdmin = 'Admin'
const systemTypeGuest = 'Guest'
const systemTypeLoggedIn = 'LoggedIn'

const choices = [
  { id: systemTypeNone, name: '' },
  { id: systemTypeAdmin, name: '(Administrator)' },
  { id: systemTypeGuest, name: '(Guset)' },
  { id: systemTypeLoggedIn, name: '(Logged-in users)' }
]

/*

const UserGroupTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const UserGroupFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='User' source='userId' reference='users' allowEmpty alwaysOn>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
)
*/

export const UserGroupList = props => (
  <List {...props} /* filters={<UserGroupFilter />} */ >
    <Datagrid>
      <TextField source='id' label='Id' />
      <TextField source='name' label='Name' />
      <SelectField source='systemType' choices={choices} translateChoice={false} />
      <ReferenceArrayField source='users' label='Users' reference='users'>
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />>
    </Datagrid>
  </List>
)

const UserGroupTitle = ({ record }) => {
  return <span>User Group {record ? `"${record.name}"` : ''}</span>
}

export const UserGroupEdit = props => (
  <Edit title={<UserGroupTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='name' />
      <SelectInput source='systemType' choices={choices} translateChoice={false} />
      <ReferenceArrayInput source='users' label='Users' reference='users'>
        <SelectArrayInput source='name' />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
)

export const UserGroupCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <SelectInput source='systemType' choices={choices} translateChoice={false} />
      <ReferenceArrayInput source='users' label='Users' reference='users'>
        <SelectArrayInput source='name' />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
)
