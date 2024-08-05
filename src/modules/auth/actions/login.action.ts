import { isAxiosError } from 'axios'
import { authApi } from '../api/authApi'
import type { AuthResponse } from '../responses/auth.response'

export const loginAction = async (email: string, password: string) => {
  try {
    const { data } = await authApi.post<AuthResponse>('/signin', { user: { email, password } })

    return {
      ok: true,
      user: data.user,
      token: data.authorization
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return {
        ok: false,
        message: 'Datos incorrectos.'
      }
    }

    throw new Error('No se pudo completar el proceso.')
  }
}
