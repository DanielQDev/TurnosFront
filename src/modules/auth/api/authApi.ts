import axios from 'axios'

const authApi = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1'
})

export { authApi }
