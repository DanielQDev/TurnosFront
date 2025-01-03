import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const getShiftsAction = async (week_number: string, company_id: number = 1) => {
  try {
    const { data } = await dashboardApi.get('/shifts', { params: { week_number, company_id } })

    return {
      ok: true,
      schedules: data
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
