import axios, { AxiosRequestConfig } from 'axios'
import jwt from 'jsonwebtoken'

const userDefault = {
  id: 0,
  login: '',
  name: ''
}

const userLogged = () => {
  const token = localStorage.getItem('token')
  const dataToken = token && jwt.decode(token)
  // @ts-ignore
  return dataToken && dataToken.data ? dataToken.data.user : userDefault
}

const axiosDefault = () => {
  const token = localStorage.getItem('token')

  const configs: AxiosRequestConfig = {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    },
    withCredentials: true
  }

  return axios.create(configs)
}

const handleErrors = (error: any) => {
  console.error(error)

  if (error.response && error.response.data && error.response.data.log) {
    console.error('Erro:', error.response.data.log)
  }

  if (error.response && error.response.data && error.response.data.logout) {
    window.location.href = '/logout'
  }

  const statusCode = (error && error.response && error.response.status) || null

  let data = { statusCode: null, message: '' }
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

export { userLogged, axiosDefault, handleErrors }
