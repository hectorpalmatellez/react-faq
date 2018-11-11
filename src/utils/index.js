import UsersSource from '../mock/users';

const getUserName = (user_id) => {
  const foundUser = UsersSource.find((user) => user.id === user_id)
  return foundUser.name
}
const formatOrganization = (current_user) => {
  return current_user.organization.toLowerCase().replace(/ /, '-')
}

export {
  getUserName,
  formatOrganization
}