import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const checkAssignmentAction = async (shift_id: number) => {
  try {
    const { data } = await dashboardApi.get(`/verify_assignment/${shift_id}`)

    return {
      ok: true,
      assigned_user: data
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
