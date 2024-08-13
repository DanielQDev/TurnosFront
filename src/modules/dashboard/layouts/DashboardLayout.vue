<template>
  <div class="flex flex-col h-full bg-gray-100">
    <!-- Barra de navegación superior -->
    <DashboardNavbar />

    <!-- Contenido principal -->
    <div class="flex-1 flex flex-wrap">
      <!-- Barra lateral de navegación (oculta en dispositivos pequeños) -->
      <DashboardSidebar />
      <!-- Área de contenido principal -->
      <div class="flex-1 p-4 w-full md:w-1/2">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import DashboardNavbar from '../components/DashboardNavbar.vue'
import DashboardSidebar from '../components/DashboardSidebar.vue'
import { useShiftStore } from '../stores/shift.store'
import { useCompanyStore } from '../stores/company.store'
import { onMounted } from 'vue'

const useCompany = useCompanyStore()
const useShift = useShiftStore()

onMounted(async () => {
  await useCompany.getCompanies()
  await useShift.getWeeks()
  await useShift.getShifts('', 0)
  await useShift.getConfirmedShifts('', 0)
})
</script>
