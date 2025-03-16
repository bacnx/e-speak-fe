import END_POINTS from '../end-points'

export interface IVocabulariesRequest {
  /** limit */
  limit?: number
  /** page_number */
  page_number?: number
  /** Ex: Personal Traits */
  topic?: string
  /** Ex: A1 */
  level?: string
  /** Ex: persistent */
  text?: string
  /** is_strict = true return only one match */
  is_strict?: boolean
}

export interface ModelsVocabulary {
  audio_url: string
  image: string
  level: string
  text: string
  topic: string
  transcript_ipa: string
  translation: string
}

const getDefaultRequest = (): IVocabulariesRequest => ({
  limit: 10,
  page_number: 1,
  is_strict: false,
})

const VocabularyService = {
  get: async (req?: IVocabulariesRequest) => {
    const url = new URL(`${END_POINTS.baseUrl}${END_POINTS.vocabularies}`)

    const newReq = req || getDefaultRequest()
    Object.entries(newReq).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })

    const res = await fetch(url)

    return res.json()
  },

  getWordList: async (limit: number, page_number: number = 1): Promise<ModelsVocabulary[]> => {
    const req = getDefaultRequest()
    req.limit = limit
    req.page_number = page_number

    const res = await VocabularyService.get(req)
    return res.data
  },
}

export default VocabularyService
