<template>
  <div class="grid grid-cols-2">
    <!-- <div class="mt-8 bg-white p-4 mx-4 shadow rounded-lg">
      <h2 class="text-gray-500 text-lg font-semibold pb-4">Lunes</h2>
      <div class="my-1"></div>
      <!-- Espacio de separación ->
      <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
      <!-- Línea con gradiente ->
      <table class="w-full table-auto text-sm">
        <thead>
          <tr class="text-sm leading-normal">
            <th
              class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
            >
              Horario
            </th>
            <th
              class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
            >
              Marcar Disponibilidad
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-grey-lighter text-center">
            <td class="py-2 px-4 border-b border-grey-light">19:00 - 20:00</td>
            <td class="py-2 px-4 border-b border-grey-light">
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked />
              </label>
            </td>
          </tr>
          <tr class="hover:bg-grey-lighter text-center">
            <td class="py-2 px-4 border-b border-grey-light">19:00 - 20:00</td>
            <td class="py-2 px-4 border-b border-grey-light">
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked />
              </label>
            </td>
          </tr>
          <tr class="hover:bg-grey-lighter text-center">
            <td class="py-2 px-4 border-b border-grey-light">19:00 - 20:00</td>
            <td class="py-2 px-4 border-b border-grey-light">
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked />
              </label>
            </td>
          </tr>
          <tr class="hover:bg-grey-lighter text-center">
            <td class="py-2 px-4 border-b border-grey-light">19:00 - 20:00</td>
            <td class="py-2 px-4 border-b border-grey-light">
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked />
              </label>
            </td>
          </tr>
          <tr class="hover:bg-grey-lighter text-center">
            <td class="py-2 px-4 border-b border-grey-light">19:00 - 20:00</td>
            <td class="py-2 px-4 border-b border-grey-light">
              <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Botón "Ver más" para la tabla de Autorizaciones Pendientes ->
      <div class="text-right mt-4">
        <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
          Ver más
        </button>
      </div>
    </div> -->
    <div
      v-for="{ day, date, schedule } in shifts"
      :key="day"
      class="mt-8 bg-white p-4 mx-4 shadow rounded-lg"
    >
      <h2 class="text-gray-500 text-lg font-semibold pb-4">{{ date }}</h2>
      <div class="my-1"></div>
      <!-- Espacio de separación -->
      <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
      <!-- Línea con gradiente -->
      <table class="w-full table-auto text-sm">
        <thead>
          <tr class="text-sm leading-normal">
            <th
              class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
            >
              Horario
            </th>
            <th
              class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
            >
              Marcar Disponibilidad
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ id, start_hour, end_hour, is_confirmed } in schedule"
            :key="id"
            class="hover:bg-grey-lighter text-center"
          >
            <td class="py-2 px-4 border-b border-grey-light">{{ start_hour }} - {{ end_hour }}</td>
            <td class="py-2 px-4 border-b border-grey-light">
              <label class="inline-flex items-center mt-3">
                <input
                  @click="confirmShift(id, is_confirmed)"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                  :checked="is_confirmed"
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Botón "Ver más" para la tabla de Autorizaciones Pendientes -->
      <div class="text-right mt-4">
        <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
          Ver más
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Shift } from '../interfaces/shift.interface'
import { useShiftStore } from '../stores/shift.store'

const useShift = useShiftStore()

interface Props {
  shifts: Shift[]
}

defineProps<Props>()

// const shift = reactive({
//   date: Date,
//   schedule: '',
//   is_confirm: false,
//   user_id: 1
// })
const confirmShift = (id: number, is_confirm: boolean) => {
  useShift.confirm(id, !is_confirm)

  // console.log(shifts)
}
</script>
