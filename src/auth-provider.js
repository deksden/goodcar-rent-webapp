import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin'

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username } = params
    window.localStorage.setItem('username', username)
    // accept all username/password combinations
    return Promise.resolve()
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    window.localStorage.removeItem('username')
    return Promise.resolve()
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params
    if (status === 401 || status === 403) {
      window.localStorage.removeItem('username')
      return Promise.reject()
    }
    return Promise.resolve()
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return window.localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject(new Error('No auth'))
  }
  return Promise.reject(new Error('Unknown method'))
}
