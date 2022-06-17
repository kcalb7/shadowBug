// const Sentry = require('@sentry/node');

exports.response200 = (res, data, message) => {
  return res.status(200).json({ ok: true, data, message })
}

// exports.response200 = (res, data, key = '') => {
//   console.log(data);
//   return res.status(200).json({ ok: true, ...(key ? { [key]: { ...data } } : data) });
// };

exports.response503 = (res, message) => {
  if (!res.headersSent) {
    if (!message) message = 'Serviço indisponível'
    console.error(message)

    return res.status(503).json({ ok: false, message })
  }
}

exports.response500 = (res, error) => {
  if (res && !res.headersSent) {
    const message = 'Erro interno, tente novamente mais tarde.'
    console.error(error)
    console.info(message)

    // if (process.env.SENTRY_LINK) {
    //   Sentry.captureException(error);
    // }

    return res.status(500).json({ ok: false, message, log: error })
  }
}

exports.response404 = (res, error) => {
  if (!res.headersSent) {
    const message = 'Usuário não encontrado.'
    console.error(error)
    console.info(message)

    return res.status(404).json({ ok: false, message, log: error })
  }
}

exports.response403 = (res, error) => {
  if (!res.headersSent) {
    const message = 'Usuário inativo.'
    console.error(error)
    console.info(message)

    return res.status(403).json({ ok: false, message, log: error })
  }
}

exports.response401 = (res, error, logout) => {
  if (!res.headersSent) {
    const message = 'Você não tem permissão para fazer essa operação.'
    console.error(error)
    console.info(message)

    return res.status(401).json({ ok: false, message, logout, log: error })
  }
}

exports.response400 = (res, message) => {
  if (!res.headersSent) {
    console.error(message)

    return res.status(400).json({ ok: false, message })
  }
}
