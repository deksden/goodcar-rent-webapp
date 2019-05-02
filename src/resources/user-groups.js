import React from 'react'
import { List, Datagrid, TextField, ReferenceArrayField, SelectField,
  SingleFieldList, ChipField } from 'react-admin'

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
    </Datagrid>
  </List>
)
