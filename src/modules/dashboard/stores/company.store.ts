import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCompaniesAction } from '../actions/getCompanies.action'
import type { Company } from '../interfaces/company.interface'

export const useCompanyStore = defineStore('company', () => {
  const companies = ref<Company[]>([])

  const getCompanies = async () => {
    const resp = await getCompaniesAction()

    if (!resp.ok) return false

    companies.value = resp.companies
  }

  return {
    companies,

    getCompanies
  }
})
