import { v4 as uuidv4 } from 'uuid'

import { getCodePoints } from '@/lib/utils'

import END_POINTS from '../end-points'
import { failureWithError, ServiceResponse, success } from '../errors'

import axiosInstance from './axios'
import { ModelCheckPhonemes, ModelPhonemeCharacter } from './types'

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
      const characters = res.data.characters.map((char: ModelPhonemeCharacter) => ({
        ...char,
        id: uuidv4(),
      }))
      return success({ ...res.data, characters })
    } catch (error) {
      return failureWithError(error)
    }
  },
}

export default PhonemesService
