import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { AuthStatus } from '../enums/auth-status.enum'
import type { LoginUser, RegisterUser } from '../interfaces/user.interface'
import { loginAction } from '../actions/login.action'
import { registerAction } from '../actions/register.action'
import { checkStatusAction } from '../actions/checkStatus.action'

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref(AuthStatus.Checking)
  const user = ref<LoginUser | undefined>()
  const token = ref<String | undefined>()

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await loginAction(email, password)

      if (!loginResp.ok) {
        return false
      }

      user.value = loginResp.user
      token.value = loginResp.token
      authStatus.value = AuthStatus.Authenticated

      localStorage.setItem('token', token.value)

      return true
    } catch (error) {
      return logout()
    }
  }

  const register = async (registerData: RegisterUser) => {
    try {
      const loginResp = await registerAction(registerData)

      if (!loginResp.ok) {
        return false
      }

      user.value = loginResp.user
      token.value = loginResp.token
      authStatus.value = AuthStatus.Authenticated

      localStorage.setItem('token', token.value)

      return true
    } catch (error) {
      return logout()
    }
  }

  const checkStatus = async () => {
    try {
      const statusResp = await checkStatusAction()

      if (!statusResp.ok) {
        logout()
        return false
      }

      authStatus.value = AuthStatus.Authenticated
      user.value = statusResp.user
      token.value = statusResp.token

      localStorage.setItem('token', token.value)

      return true
    } catch (error) {
      logout()
      return false
    }
  }

  const logout = () => {
    console.log('logout')

    localStorage.removeItem('token')
    user.value = undefined
    token.value = ''
    authStatus.value = AuthStatus.UnAuthenticated
  }

  return {
    user,
    token,
    authStatus,

    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),
    username: computed(() => user.value?.name),

    login,
    register,
    logout,
    checkStatus
  }
})
