import axios from 'axios'
import { checkLogin } from './axiosPost'

const axiosPatch = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  timeoutErrorMessage:
    'Request timed out, please check your internet connectivity',
  method: 'PATCH',
})

axiosPatch.interceptors.response.use(
  function (response) {
    return response
  },
  (error) => {
    const originalRequest = error.config
    if (error.response.status === 401) {
      const payload = {
        refresh: localStorage.getItem('refresh'),
      }
      return checkLogin(`login/refresh/`, { data: payload })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('access', res.data.access)
            originalRequest.headers.Authorization = `Bearer ${res.data.access}`
            return axiosPatch(originalRequest)
          }
        })
        .catch((err) => {
          window.location.reload()
          return Promise.reject(err)
        })
    }
    return Promise.reject(error)
  },
)

export default axiosPatch
