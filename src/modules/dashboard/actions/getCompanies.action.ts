import { dashboardApi } from '../api/dashboardApi'
import { isAxiosError } from 'axios'

export const getCompaniesAction = async () => {
  try {
    const { data } = await dashboardApi.get('/companies')

    return {
      ok: true,
      companies: data.data
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
