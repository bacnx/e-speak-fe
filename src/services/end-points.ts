const END_POINTS = {
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,

  vocabularies: '/vocabularies',

  // auth
  login: '/auth/login',
  refreshToken: 'auth/refresh_token',
}

export default END_POINTS
