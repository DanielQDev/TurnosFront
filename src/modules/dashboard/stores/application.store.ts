import { defineStore } from 'pinia'
import type { Application } from '../interfaces/application.interface'
import { makeApplicationAction } from '../actions/makeApplication.action'
import { ref } from 'vue'

export const useApplicationStore = defineStore('application', () => {
  const application = ref<Application>()

  async function applyShift(shift_id: number) {
    const resp = await makeApplicationAction(shift_id)

    if (!resp.ok) return false

    application.value = resp.application
  }

  return {
    application,

    applyShift
  }
})
