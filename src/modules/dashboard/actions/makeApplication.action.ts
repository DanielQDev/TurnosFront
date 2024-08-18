import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const makeApplicationAction = async (shift_id: number) => {
  try {
    const { data } = await dashboardApi.post('/applications', { application: { shift_id } })

    return {
      ok: true,
      application: data
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
