const isAdmin = user => {
  user.isAdmin = 1 // todo: to remove
  return user.isAdmin
}

exports.userCanSeeUsers = user => {
  return isAdmin(user)
}

exports.userCanCreateUsers = user => {
  return isAdmin(user)
}

exports.userCanEditUsers = user => {
  return isAdmin(user)
}

exports.userCanDeleteUsers = user => {
  return isAdmin(user)
}
