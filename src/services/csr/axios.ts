import axios from 'axios'

import END_POINTS from '../end-points'

const axiosInstance = axios.create({
  baseURL: END_POINTS.baseUrl,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: ignore 401 when login or refresh-token
    if (error.response?.status === 401) {
      // TODO: send refresh-token

      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
