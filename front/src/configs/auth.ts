export default {
  loginEndpoint: '/api/auth/signin/web',
  twoStepsVerificationEndpoint: '/auth/validate-otp',

  meEndpoint: '/auth/me',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
