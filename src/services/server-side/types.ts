export interface ErrorModel {
  details?: string
  message?: string
  status?: number
  type?: string
}

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

export interface IVocabulariesResponse {
  metadata: {
    current_page: number
    page_count: number
    total_count: number
  }
  data: ModelsVocabulary[]
}
