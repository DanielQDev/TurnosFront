import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { getShiftsAction, confirmShiftAction } from '../actions/getShifts.action'
import type { Shift } from '../interfaces/shift.interface'

export const useShiftStore = defineStore('shift', () => {
  const shifts = ref<Shift[]>([])

  const getShifts = async (name: string = '') => {
    const resp = await getShiftsAction(name)

    if (!resp.ok) return false

    shifts.value = resp.shifts
  }

  const confirm = async (id: number, status: boolean) => {
    const resp = await confirmShiftAction(id, status)

    if (!resp.ok) return false

    const updatesShift = shifts.value.find((s) => s.schedule.find((sc) => sc.id === id))

    updatesShift
  }

  onMounted(() => {
    getShifts()
  })

  return {
    shifts,

    getShifts,
    confirm
  }
})
