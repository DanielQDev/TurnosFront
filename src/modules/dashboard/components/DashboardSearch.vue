<template>
  <div class="grid grid-cols-2">
    <div class="relative max-w-md w-full group">
      <button
        class="py-2.5 px-3 w-full md:text-sm text-site bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded"
      >
        {{ optionsCompanies }}
        <svg
          class="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        class="absolute z-[99] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-full peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-cyan-300 border border-dimmed text-xs md:text-sm"
      >
        <button
          v-for="{ id, name } in companies"
          :key="id"
          @click="changeCompany(id, name)"
          class="w-full block cursor-pointer hover:bg-white dark:hover:bg-cyan-100 hover:text-link px-3 py-2 rounded-md"
        >
          {{ name }}
        </button>
      </div>
    </div>
    <div class="text-right">
      <div class="relative max-w-md w-full group">
        <button
          class="py-2.5 px-3 w-full md:text-sm text-site bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded"
        >
          {{ optionsWeeks }}
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          class="absolute z-[99] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-full peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-cyan-300 border border-dimmed text-xs md:text-sm"
        >
          <button
            v-for="{ week, title } in weeks"
            :key="week"
            @click="changeWeek(week, title)"
            class="w-full block cursor-pointer hover:bg-white dark:hover:bg-cyan-100 hover:text-link px-3 py-2 rounded-md"
          >
            {{ title }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useCompanyStore } from '../stores/company.store'
import { useShiftStore } from '../stores/shift.store'
import type { Company } from '../interfaces/company.interface'
import type { Week } from '../interfaces/week.interface'

const useCompany = useCompanyStore()
const useShift = useShiftStore()

const companies: Company[] = useCompany.companies
const weeks: Week[] = useShift.weeks

const firstOptionsCompanies = companies.length > 0 ? companies[0].name : ''
const firstOptionsWeeks = weeks.length > 0 ? weeks[0].title : ''

const optionsCompanies = ref(firstOptionsCompanies)
const optionsWeeks = ref(firstOptionsWeeks)

const emit = defineEmits<{
  selectedCompany: [id: number]
  selectedWeek: [week: number]
}>()

const changeWeek = (week: number, title: string) => {
  optionsWeeks.value = title
  emit('selectedWeek', week)
}

const changeCompany = (id: number, name: string) => {
  optionsCompanies.value = name
  emit('selectedCompany', id)
}

// const weeks = () => {
//   const dateNow: Date = new Date()
//   const startYear: number = new Date(dateNow.getFullYear(), 0, 1).getTime()
//   const today: number = new Date(
//     dateNow.getFullYear(),
//     dateNow.getMonth(),
//     dateNow.getDay()
//   ).getTime()
//   const days: number = (today - startYear) / 86400000
//   const week: number = Math.ceil(days / 7)

//   return week
// }
</script>
