import { shallowMount } from '@vue/test-utils'
import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue'
import router from '@/router'

describe('Testing AuthLAyout', () => {
  test('should be correct redirect', () => {
    const wrapper = shallowMount(AuthLayout, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBeTruthy
  })

  test('should be render title', () => {
    const wrapper = shallowMount(AuthLayout)

    expect(wrapper.find('h1').text()).toContain('Gestion de turnos')
  })
})
