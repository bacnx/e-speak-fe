export interface IAuthLoginRequest {
  email: string
  password: string
}

export interface IAuthRegisterRequest {
  email: string
  password: string
}

export interface IUserListRequest {
  limit?: number
  page_number?: number
  search_query?: string
}

export interface UserModel {
  id: string
  name: string
  email: string
  created_at: Date
  modified_at: Date
  Lession: unknown
  Stories: unknown
}

export interface ModelPhonemeCharacter {
  char: string
  confidence: number
  end_offset: number
  start_offset: number
}

export interface ModelCheckPhonemes {
  confident: number
  ground_truth_benchmark: string
  predict: string
  characters: ModelPhonemeCharacter[]
}
