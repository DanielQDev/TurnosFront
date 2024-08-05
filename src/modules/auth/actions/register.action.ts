import { isAxiosError } from 'axios'
import { authApi } from '../api/authApi'
import type { AuthResponse } from '../responses/auth.response'
import type { RegisterUser } from '../interfaces/user.interface'

export const registerAction = async (user: RegisterUser) => {
  try {
    const { data } = await authApi.post<AuthResponse>('/signup', { user })

    return {
      ok: true,
      user: data.user,
      token: data.authorization
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 422) {
      return {
        ok: false,
        message: 'Datos incorrectos.'
      }
    }

    throw new Error('No se pudo completar el registro.')
  }
}
