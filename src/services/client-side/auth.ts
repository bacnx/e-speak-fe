import END_POINTS from '../end-points'
import { failureWithError, ServiceResponse, success } from '../errors'

import axiosInstance from './axios'
import { IAuthLoginRequest, IAuthRegisterRequest, UserModel } from './types'

const AuthService = {
  login: async (req: IAuthLoginRequest): Promise<ServiceResponse<UserModel>> => {
    try {
      const res = await axiosInstance.post(END_POINTS.login, req)
      return success(res.data)
    } catch (error) {
      return failureWithError(error)
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post(END_POINTS.logout)
      return success(res.data)
    } catch (error) {
      return failureWithError(error)
    }
  },

  register: async (req: IAuthRegisterRequest) => {
    try {
      const res = await axiosInstance.post(END_POINTS.register, req)
      return success(res.data)
    } catch (error) {
      return failureWithError(error)
    }
  },
}

export default AuthService
