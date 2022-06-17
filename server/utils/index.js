const {
  response200,
  response400,
  response401,
  response403,
  response404,
  response500,
  response503
} = require('./httpResponses')

module.exports = {
  response200,
  response400,
  response401,
  response403,
  response404,
  response500,
  response503
}

const bcrypt = require('bcrypt')

exports.checkPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}

exports.generatePasswordHash = async password => {
  return await bcrypt.hash(password, 13)
}

exports.getLoggedUser = session => {
  return {
    id: session.id || 0,
    email: session.email || null,
    authorized: true
  }
}
