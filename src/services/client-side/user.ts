import END_POINTS from '../end-points'
import { failureWithError, success } from '../errors'

import axiosInstance from './axios'
import { IUserListRequest } from './types'

const UserService = {
  list: async (req?: IUserListRequest) => {
    try {
      const res = await axiosInstance.get(END_POINTS.users, {
        params: req,
      })
      return success(res)
    } catch (error) {
      return failureWithError(error)
    }
  },
}

export default UserService
