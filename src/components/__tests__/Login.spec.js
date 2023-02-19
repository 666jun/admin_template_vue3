import { describe, it, expect } from 'vitest'

import { mount,shallowMount } from '@vue/test-utils'
import Login from '@/views/base/Login.vue'

describe('Login', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
