const Joi = require('joi')
const { messages } = require('joi-translation-pt-br')
const { response400 } = require('../../utils')

const schema = Joi.object({
  id: Joi.number().allow(null),
  name: Joi.string().required().label('Nome do usuário'),
  email: Joi.string().required().email().label('Email do usuário'),
  phone: Joi.string().required().min(14).allow(null).label('Telefone do usuário'),
  isActive: Joi.bool().allow(null),
  newPassword: Joi.string()
    .min(6)
    .allow(null, '')
    .when('id', {
      is: Joi.exist(),
      then: Joi.optional(),
      otherwise: Joi.string().min(6).required()
    })
    .label('Nova senha'),
  confirmNewPassword: Joi.string().min(6).allow('', null).label('Confirmação de senha'),
  userId: Joi.number().allow(null),
  createdAt: Joi.date().allow(null),
  updatedAt: Joi.date().allow(null),
  deletedAt: Joi.date().allow(null)
})

exports.validate = (res, user) => {
  const { error } = schema.validate(user, { messages })
  let errors = error && error.details.map(error => error.message).join('./n') + '.'

  if (user.newPassword && user.newPassword.length) {
    if (user.newPassword.length < 6) {
      errors = [errors, 'A nova senha deve conter pelo menos 6 caracteres.'].join('; ')
    } else if (user.newPassword !== user.confirmNewPassword) {
      errors = [errors, 'As senhas não coincidem.'].join('; ')
    }
  }

  if (error || errors) {
    response400(res, errors)
    throw errors
  }
}
