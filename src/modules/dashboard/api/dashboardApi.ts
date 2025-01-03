import axios from 'axios'

const dashboardApi = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1'
})

dashboardApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export { dashboardApi }
