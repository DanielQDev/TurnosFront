import { defineStore } from 'pinia'
import { getCompaniesAction } from '../actions/getCompanies.action'
import type { Company } from '../interfaces/company.interface'
import { computed, ref } from 'vue'

export const useCompanyStore = defineStore('company', () => {
  const companies = ref<Company[]>([])

  const companyList = computed(() => [...companies.value])

  async function getCompanies() {
    const resp = await getCompaniesAction()

    if (!resp.ok) return false

    companies.value = resp.companies
  }

  return {
    companies,

    companyList,

    getCompanies
  }
})
