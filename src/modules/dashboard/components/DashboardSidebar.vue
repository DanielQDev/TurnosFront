<template>
  <div class="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
    <nav>
      <a
        class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
        href="#"
      >
        <i class="fa fa-home mr-2"></i>Inicio
      </a>
      <a
        class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
        href="#"
      >
        <i class="fa fa-hourglass-o mr-2"></i>Disponibilidad
      </a>
      <a
        class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
        href="#"
      >
        <i class="fa fa-calendar mr-2"></i>Turnos
      </a>
    </nav>

    <!-- Ítem de Cerrar Sesión -->
    <a
      class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
      href="#"
    >
      <i class="fa fa-sign-out mr-2"></i>Cerrar sesión
    </a>

    <!-- Señalador de ubicación -->
    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

    <!-- Copyright al final de la navegación lateral -->
    <p class="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright WCSLAT@2023</p>
  </div>
</template>
