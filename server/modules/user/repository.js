const {
  Users,
  sequelize: { Op }
} = require('../../models')

exports.list = async ({ id, name, phone, isActive = true }) => {
  let where = { isActive }
  if (id || name || phone) {
    where = {
      ...where,
      ...(id ? { id: { [Op.like]: `${id}%` } } : {}),
      ...(name
        ? { [Op.or]: [{ name: { [Op.like]: `%${name}%` } }, { email: { [Op.like]: `%${name}%` } }] }
        : {}),
      ...(phone ? { phone: { [Op.like]: `%${phone}%` } } : {})
    }
  }
  return await Users.findAll({
    where,
    attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] }
  })
}

exports.get = async id => {
  return await Users.findOne({
    where: { id },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] }
  })
}

exports.save = async (user, userId, transaction) => {
  const already = await Users.findOne({ where: { email: user.email }, attributes: ['email'] })
  if (already) return { already, message: `Email '${user.email}' já cadastrado!` }
  return await Users.create({ ...user, userId }, { transaction, userId })
}

exports.edit = async (id, { id: nop, ...user }, userId, transaction) => {
  return await Users.update(user, { where: { id }, transaction, userId })
}

exports.delete = async (id, userId, transaction) => {
  return await Users.destroy({ where: { id }, transaction, userId })
}
