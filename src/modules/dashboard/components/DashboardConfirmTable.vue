<template>
  <div class="grid grid-cols-2">
    <div
      v-for="{ day, shifts } in useShift.shiftList"
      :key="day"
      class="mt-8 bg-white p-4 mx-4 shadow rounded-lg"
    >
      <h2 class="text-black-500 text-lg font-semibold pb-4">{{ getConfirmedDateFormat(day) }}</h2>
      <div class="my-1"></div>
      <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
      <table class="w-full table-auto text-sm">
        <tbody>
          <tr
            v-for="{ id, start_hour, end_hour } in shifts"
            :key="id"
            class="hover:bg-grey-lighter text-center"
          >
            <td class="py-2 px-4 border-b border-grey-light">
              {{ getHour(start_hour) }} - {{ getHour(end_hour) }}
            </td>
            <DashboardAssignedUser :shift-id="id" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useShiftStore } from '../stores/shift.store'
import getHour from '@/utils/getHour'
import getConfirmedDateFormat from '@/utils/getConfirmedDateFormat'
import DashboardAssignedUser from './DashboardAssignedUser.vue'

const useShift = useShiftStore()

// const checkAssignment = async (shiftId: number) => {
//   console.log(shiftId)

//   await useShift.verify_assignment(shiftId)
// }
</script>
