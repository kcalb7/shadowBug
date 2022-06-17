const auth = require('./auth')
const user = require('./users')

exports.router = app => {
  app.use('/api/auth', auth)
  app.use('/api/user', user)
}
