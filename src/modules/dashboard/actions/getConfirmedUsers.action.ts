import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const getConfirmedUsersAction = async (shift_id: number) => {
  try {
    const { data } = await dashboardApi.get(`/confirmed/${shift_id}`)

    return {
      ok: true,
      users: data.data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 422) {
      return {
        ok: false,
        message: 'Datos incorrectos.'
      }
    }

    throw new Error('No se pudo obtener el registro.')
  }
}
