import { defineStore } from 'pinia'
import { getShiftsAction } from '../actions/getShifts.action'
import type { Schedule } from '../interfaces/shift.interface'
import { getWeeksAction } from '../actions/getWeeks.action'
import type { Week } from '../interfaces/week.interface'
import type { ConfirmedUser } from '../interfaces/confirmed.interface'
import { getConfirmedUsersAction } from '../actions/getConfirmedUsers.action'
import { checkPostulateAction } from '../actions/checkPostulate.action'
import { checkAssignmentAction } from '../actions/checkAssignment.action'
import type { Assigned } from '../interfaces/assignedUser.interface'
import { computed, ref } from 'vue'

export const useShiftStore = defineStore('shift', () => {
  const shifts = ref<Schedule[]>([])
  const weeks = ref<Week[]>([])
  const assignedUser = ref<Assigned>()
  const is_postulated = ref(false)
  const confirmedUsers = ref<ConfirmedUser[]>([])

  const shiftList = computed(() => [...shifts.value])
  const weekList = computed(() => [...weeks.value])

  async function getShifts(week_number: string, company_id: number) {
    const resp = await getShiftsAction(week_number, company_id)

    if (!resp.ok) return false

    shifts.value = resp.schedules
  }

  async function checkPostulate(id: number) {
    const resp = await checkPostulateAction(id)

    if (!resp.ok) return false

    is_postulated.value = resp.shift.postulated
  }

  async function getWeeks() {
    const resp = await getWeeksAction()

    if (!resp.ok) return false

    weeks.value = resp.weeks
  }

  async function verify_assignment(shift_id: number) {
    const resp = await checkAssignmentAction(shift_id)

    if (!resp.ok) return false

    assignedUser.value = resp.assigned_user
  }

  async function getConfirmedUsers(shift_id: number) {
    const resp = await getConfirmedUsersAction(shift_id)

    if (!resp.ok) return false

    confirmedUsers.value = resp.users
  }

  return {
    shifts,
    weeks,
    assignedUser,
    is_postulated,
    confirmedUsers,

    shiftList,
    weekList,

    getShifts,
    getWeeks,
    checkPostulate,
    verify_assignment,
    getConfirmedUsers
  }
})
