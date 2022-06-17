const { response500, response200 } = require('../../utils')
const controller = require('./controller')
const { sequelize } = require('../../models')

exports.list = async (req, res) => {
  try {
    const data = await controller.list(res)
    return response200(res, data)
  } catch (e) {
    return response500(res, e)
  }
}

exports.get = async (req, res) => {
  try {
    const data = await controller.get(res)
    return response200(res, data)
  } catch (e) {
    return response500(res, e)
  }
}

exports.save = async (req, res) => {
  const transaction = await sequelize.transaction()
  try {
    const data = await controller.save(res, transaction)

    // throw 'save';
    await transaction.commit()
    return response200(res, data)
  } catch (e) {
    await transaction.rollback()
    return response500(res, e)
  }
}

exports.edit = async (req, res) => {
  const transaction = await sequelize.transaction()
  try {
    let data = await controller.edit(res, transaction)

    if (data.length) {
      data = { ok: true, message: 'Atualizado com sucesso!' }
    } else data = { message: 'Nenhum dado alterado!' }

    // throw 'edit';
    await transaction.commit()
    return response200(res, data)
  } catch (e) {
    await transaction.rollback()
    return response500(res, e)
  }
}

exports.delete = async (req, res) => {
  try {
    const transaction = await sequelize.transaction()
    const data = await controller.delete(res, transaction)
    return response200(res, data)
  } catch (e) {
    return response500(res, e)
  }
}
