// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'src/configs/axios-config'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import {
  AuthValuesType,
  LoginParams,
  ErrCallbackType,
  UserDataType,
  TwoStepsParams,
  ResetPasswordParams
} from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  twoStepsVerification: () => Promise.resolve(),
  resendCode: () => Promise.resolve(),
  resetPassword: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    console.log(' First +++++++++++++++++++++++++++++++++++++ 1 ')

    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      if (storedToken) {
        setLoading(true)

        if (window.localStorage.getItem('userData')) {
          const userData = JSON.parse(window.localStorage.getItem('userData') as string)
          setUser({ ...userData })
          setLoading(false)
        } else {
          localStorage.removeItem('userData')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('accessToken')
          setUser(null)
          setLoading(false)
          if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
            router.replace('/login')
          }
        }
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    if (!params) {
      console.log(errorCallback)
    }

    const data = {
      "id": 12,
      "username": "DKOMLAVI",
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRLT01MQVZJIiwiaWF0IjoxNzEwMDcyMzgxLCJleHAiOjE3MTAxNTg3ODF9.ZSTpCzVw4m2SPB1LX6f4_tUjCcrzonOXDUc6Vi2yR70"
    };

    const user = {
      id: data.id,
      role: 'role',
      email: 'email',
      fullName: data.username,
      username: data.username,
      password: 'password',
      roles: [{
        id: -1,
        name: 'ADMIN',
        description: '',
        permissions: []
      }]
    };

    window.localStorage.setItem(authConfig.storageTokenKeyName, data.accessToken)
    setUser({ ...user })
    window.localStorage.setItem('userData', JSON.stringify(user))

    const returnUrl = router.query.returnUrl
    const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

    console.log("redirectURL :: ", redirectURL)
    router.replace(redirectURL as string)
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleTwoStepsVerification = (params: TwoStepsParams, errorCallback?: ErrCallbackType) => {
    const customParam = {
      username: router.query.username,
      otp: params.otp
    }

    axios
      .post(authConfig.twoStepsVerificationEndpoint, customParam)
      .then(async response => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.data.token)
        setUser({ ...response.data.data.user })
        window.localStorage.setItem('userData', JSON.stringify(response.data.data.user))

        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL as string)
      })

      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleResendCode = () => {
    console.log('I already resend code Thanks')
  }

  const handleResetPassword = (params: ResetPasswordParams) => {
    console.log('params ::: ', params)

    const userData = JSON.parse(window.localStorage.getItem('userData') as string)
    userData.changePassword = false

    setUser({ ...userData })
    window.localStorage.setItem('userData', JSON.stringify(userData))

    const returnUrl = router.query.returnUrl
    const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
    router.replace(redirectURL as string)
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    twoStepsVerification: handleTwoStepsVerification,
    resendCode: handleResendCode,
    resetPassword: handleResetPassword
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
