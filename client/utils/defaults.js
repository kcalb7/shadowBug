const axios = require('axios')
const jwt = require('jsonwebtoken')

const userDefault = {
  id: 0,
  email: '',
  name: '',
  isAdmin: false
}

exports.defaultStates = () => {
  const token = localStorage.getItem('token')
  const dataToken = token && jwt.decode(token)
  const decoded = dataToken ? dataToken.data && dataToken.data.user : userDefault

  return {
    newRegister: true,
    modalState: {
      title: null,
      text: null,
      warning: null,
      toggle: false,
      onHide: null
    },
    alertScreenState: {
      open: false,
      title: null,
      text: null,
      onClick: null,
      pagePath: null,
      forceReload: null
    },
    loadingState: false,
    userLogged: decoded,
    app: process.env.REACT_APP_WEB === 'false'
  }
}

exports.defaultAlertScreenOnClick = that => {
  const { alertScreenState } = that.state
  const { pagePath, forceReload } = that.state.alertScreenState
  alertScreenState.open = false
  that.setState(alertScreenState)

  that.props.history.push(pagePath || '/')
  if (forceReload) location.reload()
}

exports.defaultModalOnHide = that => {
  const { modalState } = that.state
  modalState.toggle = false
  that.setState(modalState)
}

exports.Header = type => {
  let headers = new Headers()
  const token = localStorage.getItem('token')
  if (type !== 'file') headers.append('Content-Type', 'application/json')
  headers.append('Authorization', token ? `Bearer ${token}` : undefined)
  return headers
}

exports.axiosDefault = () => {
  const token = localStorage.getItem('token')
  const baseURL = this.baseURL()
  let { AxiosRequestConfig: configs } = axios

  configs = {
    ...configs,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      withCredentials: true,
      fromAdmin: process.env.REACT_APP_WEB,
      baseURL: baseURL
    },
    withCredentials: true,
    baseURL
  }

  return axios.create(configs)
}

exports.baseURL = () => {
  if (process.env.REACT_APP_WEB !== 'true') {
    if (process.env.REACT_APP_DEPLOYING_PRODUCTION === 'true') {
      return process.env.REACT_APP_PROD_SERVER_URL
    } else if (process.env.REACT_APP_DEPLOYING_HOMOLOGATION === 'true') {
      return process.env.REACT_APP_HOMOLOG_SERVER_URL
    } else if (process.env.REACT_APP_DEPLOYING_DEV === 'true') {
      return process.env.REACT_APP_DEV_SERVER_URL
    }
  }

  return window.location.origin
}

exports.handleErrors = error => {
  console.error(error)

  if (error.response && error.response.data && error.response.data.log) {
    console.error('Erro:', error.response.data.log)
  }

  if (error.response && error.response.data && error.response.data.logout) {
    window.location.href = '/logout'
  }

  const statusCode = (error && error.response && error.response.status) || null

  let data = {}
  if (error.response && error.response.data) {
    if (error.response.data.message) {
      data = error.response.data
    } else {
      data.message = 'Erro inesperado'
    }
    data.statusCode = statusCode
  }

  return data || { ok: false, message: 'Erro inesperado', statusCode }
}
