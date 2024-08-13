import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const getWeeksAction = async () => {
  try {
    const { data } = await dashboardApi.get('/weeks')

    return {
      ok: true,
      weeks: data.data
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
