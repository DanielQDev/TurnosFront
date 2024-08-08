<template>
  <div class="grid grid-cols-2">
    <div class="relative max-w-md w-full group">
      <button
        class="py-2.5 px-3 w-full md:text-sm text-site bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded"
      >
        {{ option }}
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
      <button
        class="bg-white hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded items-center w-1/4"
      >
        <span>Siguiente semana</span>
        <i class="fa fa-arrow-right ml-4"></i>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useCompaniesStore } from '../stores/company.store'
import type { Company } from '../interfaces/company.interface'

const useCompanies = useCompaniesStore()
const companies: Company[] = useCompanies.companies

const option = ref(companies[0].name)

onMounted(async () => {
  await useCompanies.getCompanies()
})

const emit = defineEmits<{
  selectedCompany: [id: number]
}>()

const changeCompany = (id: number, name: string) => {
  option.value = name
  emit('selectedCompany', id)
}
</script>
