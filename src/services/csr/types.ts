export interface IAuthLoginRequest {
  email: string
  password: string
}

export interface IUserListRequest {
  limit?: number
  page_number?: number
  search_query?: string
}
