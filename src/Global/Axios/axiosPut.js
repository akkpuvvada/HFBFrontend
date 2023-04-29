import axios from 'axios'
import { checkLogin } from './axiosPost'

const axiosPut = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  method: 'PUT',
})

axiosPut.interceptors.response.use(
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
            return axiosPut(originalRequest)
          }
        })
        .catch((err) => {
          window.location.reload()
          return Promise.reject(err)
        })
    }
  },
)

export default axiosPut
