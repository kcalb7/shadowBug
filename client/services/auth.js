import { axiosDefault, handleErrors } from '../utils/helpers'

const authService = {
  login: async user => {
    try {
      const axios = axiosDefault()

      const { data } = await axios.post('/api/auth/login', { user })
      return data
    } catch (error) {
      return handleErrors(error)
    }
  },

  logout: async () => {
    try {
      const axios = axiosDefault()

      const { data } = await axios.post('/api/auth/logout')
      return data
    } catch (error) {
      return handleErrors(error)
    }
  },

  saveForgotPassword: async (email, validatePassword) => {
    try {
      const axios = axiosDefault()
      const { data } = await axios.post('/api/auth/forgot-password', { email, validatePassword })

      return data
    } catch (error) {
      return handleErrors(error)
    }
  },

  updateForgotPassword: async (newPassword, confirmNewPassword, token) => {
    try {
      const axios = axiosDefault()
      const { data } = await axios.put(`/api/auth/forgot-password/${token}`, {
        newPassword,
        confirmNewPassword
      })

      return data
    } catch (error) {
      return handleErrors(error)
    }
  }
}

export default authService
