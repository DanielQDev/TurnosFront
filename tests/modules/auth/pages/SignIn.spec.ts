import { mount } from '@vue/test-utils'
import SignIn from '@/modules/auth/pages/SignIn.vue'
import { createPinia, setActivePinia } from 'pinia'

vi.mock('vue-router')

describe('SignIn component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('should be have login form', () => {
    const wrapper = mount(SignIn)

    expect(wrapper.find('form')).toBeTruthy
  })
  test('should be redirect to home', async () => {
    const wrapper = mount(SignIn)

    const btnLogin = wrapper.find('button')
    expect(wrapper.html()).toContain('Login')
    await btnLogin.trigger('click')
  })
})
