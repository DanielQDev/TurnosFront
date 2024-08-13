import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const getConfirmedShiftsAction = async (week_number: string, company_id: number) => {
  try {
    const { data } = await dashboardApi.get('/confirmed', { params: { week_number, company_id } })

    return {
      ok: true,
      confirmed: data
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
