import axios from 'axios'

const authApi = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1'
})

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export { authApi }
