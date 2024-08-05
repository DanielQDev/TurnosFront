import { shallowMount } from '@vue/test-utils'
import AuthLayout from '../../../../src/modules/auth/layouts/AuthLayout.vue'
import router from '../../../../src/router'

describe('Testing AuthLAyout', () => {
  test('should be correct redirect', () => {
    const wrapper = shallowMount(AuthLayout, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})
