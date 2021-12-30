import React, { createContext, useEffect, useState } from 'react'
import authServices from '../../services/auth'
import jwt from 'jsonwebtoken'
import { AuthProps, AuthContext as ContextProps } from '../../types'

const AuthContext = createContext<ContextProps | null>(null)

const AuthProvider = ({ children }: AuthProps) => {
  const [auth, setAuth] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  function checkLogin() {
    const token = localStorage.getItem('token')
    const dataToken: any = token && jwt.decode(token)

    const { exp, data } = dataToken
    if (dataToken && exp > (new Date().getTime() + 1) / 1000 && data) {
      setAuth(true)
    } else {
      setAuth(false)
      if (!window.location.pathname.includes('login')) window.location.href = '/admin/login'
    }
    setLoading(false)
  }

  const handleLogin = async (user: object) => {
    const response = await authServices.login(user)

    if (response && response.ok && response.data) {
      const { token } = response.data

      localStorage.setItem('token', token)
      setAuth(true)
    }
    return response
  }

  const handleLogout = async () => {
    localStorage.removeItem('token')
    setAuth(false)
    window.location.href = '/login'
    checkLogin()
    await authServices.logout()
  }

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout, loading, checkLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
