const jwt = require('jsonwebtoken')
const { response400, response403, response404, response500, response200 } = require('../../utils')
const { checkPassword } = require('../../utils')
const authRepository = require('./repository')
const { validate } = require('./validation')
const userSession = require('../../utils/userSession')

exports.login = async (req, res, { email, password, authorized }) => {
  validate(res, { email, password })

  try {
    let data = await authRepository.get(email, authorized)

    if (data && data.user && !data.user.error) {
      const { user } = data
      if (user.isActive) {
        if (checkPassword(password, user.password)) {
          data = await generateToken(req, res, { id: user.id, name: user.name, email: user.email })

          return response200(res, data)
        }
        return response400(res, 'Usuário ou senha Inválida')
      }
      return response403(res, user)
    }
    return response404(res, data)
  } catch (e) {
    return response500(res, e)
  }
}

const generateToken = async (req, res, user) => {
  const data = {
    user
  }

  data.token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
    algorithm: process.env.JWT_ALGORITHM
  })

  return data
}

exports.logout = async (req, res) => {
  if (await userSession.isLogged(req)) {
    Promise.all([userSession.closeSession(req)])
      .then(function () {
        res.clearCookie('token')
        res.redirect(req.query.redirect || process.env.LOGIN_URL)
      })
      .catch(function () {
        res.status(500).end()
      })
  } else {
    res.clearCookie('token')
    res.redirect(req.query.redirect || process.env.LOGIN_URL)
  }
  return res
}
