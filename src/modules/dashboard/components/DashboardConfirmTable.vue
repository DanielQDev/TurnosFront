<template>
  <div class="grid grid-cols-2">
    <div
      v-for="{ day, shifts } in confirmedShifts"
      :key="day"
      class="mt-8 bg-white p-4 mx-4 shadow rounded-lg"
    >
      <h2 class="text-black-500 text-lg font-semibold pb-4">{{ getConfirmedDateFormat(day) }}</h2>
      <div class="my-1"></div>
      <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
      <table class="w-full table-auto text-sm">
        <tbody>
          <tr
            v-for="{ id, start_hour, end_hour, user_name, color } in shifts"
            :key="id"
            class="hover:bg-grey-lighter text-center"
          >
            <td class="py-2 px-4 border-b border-grey-light">
              {{ getHour(start_hour) }} - {{ getHour(end_hour) }}
            </td>
            <td class="py-2 px-4 border-b border-grey-light" :style="{ backgroundColor: color }">
              <label class="inline-flex items-center mt-3">
                {{ user_name }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Confirmed } from '../interfaces/confirmed.interface'
import { useShiftStore } from '../stores/shift.store'
import getHour from '@/utils/getHour'
import getConfirmedDateFormat from '@/utils/getConfirmedDateFormat'

const useShift = useShiftStore()

const confirmedShifts: Confirmed[] = useShift.confirmed
</script>
