import END_POINTS from '../end-points'

import axiosInstance from './axios'
import { IUserListRequest } from './types'

const UserService = {
  list: async (req?: IUserListRequest) => {
    const res = await axiosInstance.get(END_POINTS.users, {
      params: req,
    })
    return res.data
  },
}

export default UserService
