const repository = require('./repository')
const polices = require('./polices')
// const session = require('../auth/userSession');
const { response400, response401 } = require('../../utils')
const { validate } = require('./validation')

const { generatePasswordHash, getLoggedUser } = require('../../utils')

exports.list = async res => {
  // const user = await session.isLogged(res.req);
  const user = getLoggedUser(res.req.session)
  const search = res.req.body

  if (polices.userCanSeeUsers(user)) {
    return await repository.list(search)
  } else {
    return response401(res, null)
  }
}

exports.get = async res => {
  // const user = await session.isLogged(res.req);
  const user = getLoggedUser(res.req.session)
  const { id } = res.req.params

  if (polices.userCanSeeUsers(user)) {
    return await repository.get(id)
  } else {
    return response401(res, null)
  }
}

exports.save = async (res, transaction) => {
  // const user = await session.isLogged(res.req);
  const user = getLoggedUser(res.req.session)
  const newUser = res.req.body
  validate(res, newUser)

  if (polices.userCanCreateUsers(user)) {
    newUser.password = await generatePasswordHash(newUser.newPassword)
    const data = await repository.save(newUser, user.id, transaction)
    if (data.already) return response400(res, data.message)
    return data
  } else {
    return response401(res, null)
  }
}

exports.edit = async (res, transaction) => {
  // const user = await session.isLogged(res.req);
  const user = getLoggedUser(res.req.session)
  const { id } = res.req.params
  const newData = res.req.body
  validate(res, newData)

  if (polices.userCanEditUsers(user)) {
    if (newData.newPassword) newData.password = await generatePasswordHash(newData.newPassword)
    return await repository.edit(id, newData, user.id, transaction)
  } else {
    return response401(res, null)
  }
}

exports.delete = async (res, transaction) => {
  // const user = await session.isLogged(res.req);
  const user = getLoggedUser(res.req.session)
  const { id } = res.req.params

  if (polices.userCanDeleteUsers(user)) {
    return await repository.delete(id, transaction)
  } else {
    return response401(res, null)
  }
}
