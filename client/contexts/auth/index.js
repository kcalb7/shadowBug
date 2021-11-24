import React, { createContext, useEffect, useState } from 'react'
import authServices from '../../services/auth'
import jwt from 'jsonwebtoken'
import PropTypes from 'prop-types'

const Context = createContext(undefined)

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  function checkLogin() {
    const token = localStorage.getItem('token')
    const dataToken = token && jwt.decode(token)

    if (dataToken && dataToken.exp > (new Date().getTime() + 1) / 1000 && dataToken.data) {
      setAuth(true)
    } else {
      setAuth(false)
      if (!window.location.pathname.includes('login')) window.location.href = '/admin/login'
    }
    setLoading(false)
  }

  const handleLogin = async user => {
    const response = await authServices.login(user)

    if (response && response.ok && response.data) {
      const { token } = response.data

      localStorage.setItem('token', token)
      setAuth(true)
    }
    return response
  }

  const handleLogout = async () => {
    localStorage.setItem('token', null)
    setAuth(false)
    window.location.href = '/login'
    checkLogin()
    await authServices.logout()
  }

  return (
    <Context.Provider value={{ auth, handleLogin, handleLogout, loading, checkLogin }}>
      {children}
    </Context.Provider>
  )
}

AuthProvider.propTypes = { children: PropTypes.any }

export { Context, AuthProvider }
