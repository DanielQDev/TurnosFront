import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCompaniesAction } from '../actions/getCompanies.action'
import type { Company } from '../interfaces/company.interface'

export const useCompaniesStore = defineStore('company', () => {
  const companies = ref<Company[]>([])

  const getCompanies = async () => {
    const resp = await getCompaniesAction()

    if (!resp.ok) return false

    companies.value = resp.companies
  }

  return {
    companies,

    getCompanies
  }
})

// const authStatus = ref(AuthStatus.Checking)
//   const user = ref<LoginUser | undefined>()
//   const token = ref<String | undefined>()

//   const login = async (email: string, password: string) => {
//     try {
//       const loginResp = await loginAction(email, password)

//       if (!loginResp.ok) {
//         return false
//       }

//       user.value = loginResp.user
//       token.value = loginResp.token
//       authStatus.value = AuthStatus.Authenticated

//       localStorage.setItem('token', token.value)

//       return true
//     } catch (error) {
//       return logout()
//     }
//   }

//   const register = async (registerData: RegisterUser) => {
//     try {
//       const loginResp = await registerAction(registerData)

//       if (!loginResp.ok) {
//         return false
//       }

//       user.value = loginResp.user
//       token.value = loginResp.token
//       authStatus.value = AuthStatus.Authenticated

//       localStorage.setItem('token', token.value)

//       return true
//     } catch (error) {
//       return logout()
//     }
//   }

//   const logout = () => {
//     localStorage.removeItem('token')
//     user.value = undefined
//     token.value = ''
//     authStatus.value = AuthStatus.UnAuthenticated
//   }

//   return {
//     user,
//     token,
//     authStatus,

//     isChecking: computed(() => authStatus.value === AuthStatus.Checking),
//     isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),
//     username: computed(() => user.value?.name),

//     login,
//     register
//   }
