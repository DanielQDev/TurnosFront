<template>
  <div class="scroll-smooth focus:scroll-auto">
    <DashboardSearch @selected-company="getByCompany" @selected-week="getByWeek" />
    <DashboardConfirmTable />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DashboardSearch from '../components/DashboardSearch.vue'
import DashboardConfirmTable from '../components/DashboardConfirmTable.vue'
import { useShiftStore } from '../stores/shift.store'

const useShift = useShiftStore()

const week_number = ref('')
const company_id = ref(0)

const getByWeek = (week: string) => {
  week_number.value = week

  // useShift.getShifts(week_number.value, company_id.value)
}
const getByCompany = (id: number) => {
  company_id.value = id

  // useShift.getShifts(week_number.value, company_id.value)
}
</script>

<style lang="scss" scoped></style>
