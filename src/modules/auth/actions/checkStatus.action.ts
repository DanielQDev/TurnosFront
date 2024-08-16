import { isAxiosError } from 'axios'
import { authApi } from '../api/authApi'
import type { AuthResponse } from '../responses/auth.response'

export const checkStatusAction = async () => {
  try {
    const token = localStorage.getItem('token')

    if (!token) {
      return { ok: false }
    }

    const { data } = await authApi.get<AuthResponse>('/check_status', {
      headers: { Authorization: `Bearer ${token}` }
    })

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

    throw new Error('No se pudo verificar la session.')
  }
}
