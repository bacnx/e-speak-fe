import { getCodePoints } from '@/lib/utils'

import END_POINTS from '../end-points'
import { failureWithError, ServiceResponse, success } from '../errors'

import axiosInstance from './axios'
import { ModelCheckPhonemes } from './types'

const PhonemesService = {
  check: async (
    audioFile: Blob,
    groundTruth: string,
  ): Promise<ServiceResponse<ModelCheckPhonemes>> => {
    try {
      const formData = new FormData()
      formData.append('audio_file', audioFile)
      formData.append('ground_truth', getCodePoints(groundTruth))

      const res = await axiosInstance.post(END_POINTS.checkPhonemes, formData)
      return success(res.data)
    } catch (error) {
      return failureWithError(error)
    }
  },
}

export default PhonemesService
