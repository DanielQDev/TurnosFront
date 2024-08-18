<template>
  <div v-if="isLoading">
    <h3 class="flex items-center justify-center text-slate-600 text-cyan-400">Cargando...</h3>
  </div>

  <div v-else class="grid grid-cols-2">
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
          v-for="{ id, name } in useCompany.companyList"
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
            v-for="{ week, title } in useShift.weekList"
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
import { onBeforeMount, ref } from 'vue'
import { useCompanyStore } from '../stores/company.store'
import { useShiftStore } from '../stores/shift.store'

const useCompany = useCompanyStore()
const useShift = useShiftStore()

const isLoading = ref(true)

onBeforeMount(async () => {
  await useCompany.getCompanies()
  await useShift.getWeeks()
  isLoading.value = false
})

const optionsCompanies = ref('Primera empresa')
const optionsWeeks = ref('Semana actual')

const emit = defineEmits<{
  selectedCompany: [id: number]
  selectedWeek: [week: string]
}>()

const changeWeek = (week: string, title: string) => {
  optionsWeeks.value = title
  emit('selectedWeek', week)
}

const changeCompany = (id: number, name: string) => {
  optionsCompanies.value = name
  emit('selectedCompany', id)
}
</script>
