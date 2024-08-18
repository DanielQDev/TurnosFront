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
        <div class="scroll-smooth focus:scroll-auto">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import DashboardNavbar from '../components/DashboardNavbar.vue'
import DashboardSidebar from '../components/DashboardSidebar.vue'
</script>
