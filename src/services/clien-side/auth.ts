import END_POINTS from '../end-points'

import axiosInstance from './axios'
import { IAuthLoginRequest, IAuthRegisterRequest, UserModel } from './types'

const AuthService = {
  login: async (req: IAuthLoginRequest): Promise<UserModel> => {
    const res = await axiosInstance.post(END_POINTS.login, req)
    return res.data
  },

  logout: async () => {
    const res = await axiosInstance.post(END_POINTS.logout)
    return res.data
  },

  register: async (req: IAuthRegisterRequest) => {
    const res = await axiosInstance.post(END_POINTS.register, req)
    return res.data
  },
}

export default AuthService
