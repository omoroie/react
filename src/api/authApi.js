// src/api/authApi.js
import axios from './axiosInstance'

export const login = async (credentials) => {
  const response = await axios.post('/auth/login', credentials)
  return response.data
}

export const register = async (userInfo) => {
  const response = await axios.post('/auth/register', userInfo)
  return response.data
}
