import axios from 'axios'

// import { useRouter } from 'next/router'
import authConfig from 'src/configs/auth'

const instance = axios.create({
  baseURL: 'https://gozem-test.his-tech.tech/api',
  timeout: 5000, // Request timeout
  headers: {
    'Content-Type': 'application/json'
  }
})

const logout = () => {
  window.localStorage.removeItem('userData')
  window.localStorage.removeItem(authConfig.storageTokenKeyName)

  window.location.reload()
}

// Add a response interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401 && window.location.pathname !== '/login/') {
      logout()
    }

    return Promise.reject(error)
  }
)

export const customWebSocket = new WebSocket('wss://gozem-test.his-tech.tech/ws/'); // ws://localhost:9008

export default instance
