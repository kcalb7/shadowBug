const { response500 } = require('../../utils')
const { login, logout } = require('./controller')

exports.login = async (req, res) => {
  try {
    const { user } = req.body
    return await login(req, res, user)
  } catch (error) {
    return response500(res, error)
  }
}

exports.logout = async (req, res) => {
  try {
    const { user } = req.body
    return await logout(req, res, user)
  } catch (error) {
    return response500(res, error)
  }
}
