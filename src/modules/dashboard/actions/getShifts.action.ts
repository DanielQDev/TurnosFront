import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const getShiftsAction = async (name: string) => {
  try {
    const { data } = await dashboardApi.get('/shifts', { params: { name } })

    return {
      ok: true,
      shifts: data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 422) {
      return {
        ok: false,
        message: 'Datos incorrectos.'
      }
    }

    throw new Error('No se pudo obtener los registros.')
  }
}

export const confirmShiftAction = async (id: number, status: boolean) => {
  try {
    const { data } = await dashboardApi.patch(`/shifts/${id}`, { is_confirm: status })

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

    throw new Error('No se pudo obtener los registros.')
  }
}
