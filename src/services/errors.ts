export type ServiceResponse<T> =
  | { isError: false; data: T; message: null }
  | { isError: true; data: null; message: string }

export function success<T>(data: T): ServiceResponse<T> {
  return { isError: false, data, message: null }
}

export function failure<T>(message: string): ServiceResponse<T> {
  return { isError: true, data: null, message }
}

export function failureWithError<T>(err: unknown): ServiceResponse<T> {
  return failure(err instanceof Error ? err.message : 'Network error')
}
