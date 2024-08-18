<template>
  <!-- <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
    <div
      style="border-top-color: transparent"
      class="w-8 h-8 border-4 border-cyan-400 rounded-full animate-spin"
    ></div>
    <p class="ml-2 text-cyan-500">Cargando...</p>
  </div> -->
  <div class="grid grid-cols-2">
    <div
      v-for="{ day, shifts } in useShift.shiftList"
      :key="day"
      class="mt-8 bg-white p-4 mx-4 shadow rounded-lg"
    >
      <h2 class="text-gray-500 text-lg font-semibold pb-4">{{ getConfirmedDateFormat(day) }}</h2>
      <div class="my-1"></div>
      <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
      <table class="w-full table-auto text-sm">
        <thead>
          <tr class="text-sm leading-normal">
            <th
              class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
            >
              Horario
            </th>
            <th
              v-for="{ id, name } in useShift.confirmedUsers"
              :key="id"
              class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
            >
              {{ name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ id, start_hour, end_hour } in shifts"
            :key="id"
            class="hover:bg-grey-lighter text-center"
          >
            <td class="py-2 px-4 border-b border-grey-light">
              {{ getHour(start_hour) }} - {{ getHour(end_hour) }}
            </td>
            <ConfirmedCkeckTable :id="id" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useShiftStore } from '../stores/shift.store'
import getConfirmedDateFormat from '@/utils/getConfirmedDateFormat'
import getHour from '@/utils/getHour'
import ConfirmedCkeckTable from './ConfirmedCheckTable.vue'

const useShift = useShiftStore()
</script>
