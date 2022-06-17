const { Users } = require('./../../models')

exports.getUserByEmail = async email => {
  return await Users.findOne({
    attributes: ['email', 'name'],
    where: {
      email,
      isActive: true
    }
  })
}

exports.get = async email => {
  const user = await Users.findOne({
    attributes: ['id', 'name', 'email', 'password', 'isActive'],
    where: { email }
  })

  return { user }
}
