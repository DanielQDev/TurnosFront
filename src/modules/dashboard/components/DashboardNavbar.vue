<template>
  <div class="bg-white text-white shadow w-full p-2 flex items-center justify-between">
    <div class="flex items-center">
      <div class="flex items-center">
        <img src="/favicon.ico" alt="Logo" class="w-10 h-10 ml-4" />
        <h2 class="font-bold text-xl text-gray-950">Gestion de turnos</h2>
      </div>
      <div class="md:hidden flex items-center ml-8">
        <!-- Se muestra solo en dispositivos pequeños -->
        <button id="menuBtn">
          <i class="fa fa-navicon text-gray-500 text-lg"></i>
          <!-- Ícono de menú -->
        </button>
      </div>
    </div>

    <!-- Ícono de Notificación y Perfil -->
    <div class="space-x-5 mr-5">
      <button>
        <i class="fa fa-bell text-gray-500 text-lg"></i>
      </button>
      <!-- Botón de Perfil -->
      <button>
        <i class="fa fa-user-circle-o text-gray-500 text-lg"></i>
      </button>
    </div>
  </div>
</template>
