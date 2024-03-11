export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export type TwoStepsParams = {
  otp: string
}

export type ResetPasswordParams = {
  newPassword: string
  confirmNewPassword: string
}

export type UserDataType = {
  id: number
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
  lastName?: string | null
  firstName?: string | null
  changePassword?: boolean | null
  roles?: any | null
  partner?: any | null
  agency?: any | null
}

export type RoleType = {
  id: number
  name: string
  description: string
  permissions: string[]
}

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  resendCode: () => void
  twoStepsVerification: (params: TwoStepsParams, errorCallback?: ErrCallbackType) => void
  resetPassword: (params: ResetPasswordParams) => void
}
