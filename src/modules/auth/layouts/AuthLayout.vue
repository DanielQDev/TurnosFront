<template>
  <!-- component -->
  <body class="antialiased bg-gradient-to-br from-green-100 to-white">
    <div class="container px-6 mx-auto">
      <div
        class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
      >
        <div class="flex flex-col w-full">
          <div>
            <svg
              class="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <h1 class="text-5xl text-gray-800 font-bold">Gestion de turnos</h1>
          <p class="w-5/12 mx-auto md:mx-0 text-gray-500">
            Control y monitoreo de plataformas, website o dashboard.
          </p>
        </div>
        <RouterView />
      </div>
    </div>
  </body>
</template>

<script lang="ts" setup></script>

<style scoped></style>
