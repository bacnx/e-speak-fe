import END_POINTS from '../end-points'

import axiosInstance from './axios'
import { IAuthLoginRequest } from './types'

const AuthService = {
  login: async (req: IAuthLoginRequest) => {
    const res = await axiosInstance.post(END_POINTS.login, req)
    return res.data
  },
}

export default AuthService
