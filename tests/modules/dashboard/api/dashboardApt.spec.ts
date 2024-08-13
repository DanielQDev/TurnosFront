import { dashboardApi } from '@/modules/dashboard/api/dashboardApi'

describe('axios instance', () => {
  test.skip('should set header with token from localStorage', async () => {
    const token = 'token'
    localStorage.setItem(token, token)

    const resp = await dashboardApi.get('/tests')

    expect(resp.config.headers.Authorization).toBe(`Bearer ${token}`)
  })
})
