import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const applyShiftAction = async (id: number, postulated: boolean) => {
  try {
    const { data } = await dashboardApi.patch(`/shifts/${id}`, {
      shift: { is_postulated: postulated }
    })

    return {
      ok: true,
      shift: data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 422) {
      return {
        ok: false,
        message: 'Datos incorrectos.'
      }
    }

    throw new Error('No se pudo actualizar el registro.')
  }
}
