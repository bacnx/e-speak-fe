const END_POINTS = {
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,

  vocabularies: '/vocabularies',

  // auth
  login: '/auth/login',
  refreshToken: '/auth/refresh_token',
  logout: '/auth/logout',
  register: '/auth/register',

  // user
  users: '/users',
}

if (process.env.NODE_ENV === 'development') {
  END_POINTS.baseUrl = '/api'
}

export default END_POINTS
