import END_POINTS from '../end-points'
import { failure, failureWithError, ServiceResponse, success } from '../errors'

import { SERVER_BASE_URL } from './constants'
import { IVocabulariesRequest, IVocabulariesResponse, ModelsVocabulary } from './types'

const getDefaultRequest = (): IVocabulariesRequest => ({
  limit: 10,
  page_number: 1,
  is_strict: false,
})

const VocabularyService = {
  get: async (req?: IVocabulariesRequest): Promise<ServiceResponse<IVocabulariesResponse>> => {
    const url = new URL(`${SERVER_BASE_URL}${END_POINTS.vocabularies}`)

    const newReq = req || getDefaultRequest()
    Object.entries(newReq).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })

    try {
      const res = await fetch(url)
      const data = await res.json()

      if (!res.ok) {
        return failure(data?.message || 'Failed to get vocabularies')
      }
      return success(data)
    } catch (error) {
      return failureWithError(error)
    }
  },

  getWordList: async (
    limit: number,
    page_number: number = 1,
  ): Promise<ServiceResponse<ModelsVocabulary[]>> => {
    const req = getDefaultRequest()
    req.limit = limit
    req.page_number = page_number

    const res = await VocabularyService.get(req)
    if (res.isError) {
      return res
    }
    return success(res.data.data)
  },
}

export default VocabularyService
