<template>
  <div class="scroll-smooth focus:scroll-auto">
    <DashboardSearch @selected-company="getShifts" />
    <DashboardTable :shifts="shifts" />
  </div>
</template>

<script lang="ts" setup>
import DashboardSearch from '../components/DashboardSearch.vue'
import DashboardTable from '../components/DashboardTable.vue'
import { useShiftStore } from '../stores/shift.store'

// const { shifts, getShifts } = useShiftStore()
const getShifts = (id: number) => {
  console.log('compa', id)
}
</script>
