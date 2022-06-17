module.exports = {
  async isLogged(req) {
    return req.session && req.session.idUser != null
  },

  async setLoggedUser(req, res, id, name, email, authorized) {
    if (!req.session) return
    req.session.user = {}
    req.session.user.idUser = id
    req.session.user.email = email
    req.session.user.name = name
    req.session.user.authorized = authorized
  },

  async closeSession(req) {
    return new Promise((resolve, reject) => {
      req.session.destroy(err => {
        if (err == null) {
          resolve()
        } else {
          reject(err)
        }
      })
    })
  }
}
