import axios, { AxiosError } from 'axios'

import END_POINTS from '../end-points'

const axiosInstance = axios.create({
  baseURL: END_POINTS.baseUrl,
  withCredentials: true,
})

let isRefreshing = false
const failedQueue: Array<{
  resolve: (value: unknown) => void
  reject: (error: AxiosError) => void
}> = []

const processQueue = (error: AxiosError | null) => {
  failedQueue.forEach((prom) => {
    if (!error) {
      prom.resolve(null)
    } else {
      prom.reject(error)
    }
  })
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.request

    const ignoredEndpoints = [END_POINTS.login, END_POINTS.refreshToken]
    const originalUrl = (originalRequest?.url as string) || ''
    const isIgnoredEndpoint = ignoredEndpoints.some((endpoint) => originalUrl.includes(endpoint))

    if (error.response?.status === 401 && !isIgnoredEndpoint) {
      if (originalRequest._retry) {
        window.location.href = '/login'
        return Promise.reject(error)
      }

      if (!isRefreshing) {
        isRefreshing = true
        originalRequest._retry = true

        try {
          await axios.post(
            `${END_POINTS.baseUrl}${END_POINTS.refreshToken}`,
            {},
            { withCredentials: true },
          )

          isRefreshing = false
          processQueue(null)

          return await axiosInstance(originalRequest)
        } catch (refreshError) {
          isRefreshing = false
          processQueue(refreshError as AxiosError)

          window.location.href = '/login'
          return Promise.reject(refreshError)
        }
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      })
        .then(() => {
          return axiosInstance(originalRequest)
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
