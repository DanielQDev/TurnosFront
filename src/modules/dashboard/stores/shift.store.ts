import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getShiftsAction } from '../actions/getShifts.action'
import { applyShiftAction } from '../actions/applyShift.action'
import type { Schedule } from '../interfaces/shift.interface'
import { getWeeksAction } from '../actions/getWeeks.action'
import type { Week } from '../interfaces/week.interface'
import getDateFormat from '@/utils/getDateFormat'
import type { Confirmed } from '../interfaces/confirmed.interface'
import { getConfirmedShiftsAction } from '../actions/getConfirmedShits.action'

export const useShiftStore = defineStore('shift', () => {
  const shifts = ref<Schedule[]>([])
  const weeks = ref<Week[]>([])
  const confirmed = ref<Confirmed[]>([])

  const getShifts = async (week_number: string, company_id: number) => {
    const resp = await getShiftsAction(week_number, company_id)

    if (!resp.ok) return false

    shifts.value = resp.schedules
  }

  const getConfirmedShifts = async (week_number: string, company_id: number) => {
    const resp = await getConfirmedShiftsAction(week_number, company_id)

    if (!resp.ok) return false

    confirmed.value = resp.confirmed
  }

  const apply = async (id: number, postulated: boolean) => {
    const resp = await applyShiftAction(id, postulated)

    if (!resp.ok) return false

    const dayShift = shifts.value.find(
      (dayShift) => dayShift.day === getDateFormat(resp.shift.start_hour)
    )

    if (dayShift) {
      const updateShift = dayShift.shifts.find((shift) => shift.id === resp.shift.id)

      if (updateShift) {
        updateShift.is_postulated = resp.shift.is_postulated
      }
    }
  }

  const getWeeks = async () => {
    const resp = await getWeeksAction()

    if (!resp.ok) return false

    weeks.value = resp.weeks
  }

  return {
    shifts,
    weeks,
    confirmed,

    getShifts,
    getWeeks,
    apply,
    getConfirmedShifts
  }
})
