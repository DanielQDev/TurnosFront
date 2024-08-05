<template>
  <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
    <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
      <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">Registrate</h2>
      <form @submit.prevent="onRegister" class="w-full">
        <div id="input" class="flex flex-col w-full my-5">
          <label for="username" class="text-gray-500 mb-2">Nombre</label>
          <input
            v-model="registerForm.first_name"
            ref="firstnameInputRef"
            type="text"
            id="firstname"
            placeholder="Ingrese su nombre"
            class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
          />
        </div>
        <div id="input" class="flex flex-col w-full my-5">
          <label for="username" class="text-gray-500 mb-2">Apellido</label>
          <input
            v-model="registerForm.last_name"
            ref="lastnameInputRef"
            type="text"
            id="lastname"
            placeholder="Ingrese su apellido"
            class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
          />
        </div>
        <div id="input" class="flex flex-col w-full my-5">
          <label for="username" class="text-gray-500 mb-2">Email</label>
          <input
            v-model="registerForm.email"
            ref="emailInputRef"
            type="email"
            id="email"
            placeholder="Ingrese su email"
            class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
          />
        </div>
        <div id="input" class="flex flex-col w-full my-5">
          <label for="password" class="text-gray-500 mb-2">Contraseña</label>
          <input
            v-model="registerForm.password"
            ref="passwordInputRef"
            type="password"
            id="password"
            placeholder="Escriba una contraseña"
            class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
          />
        </div>
        <div id="input" class="flex flex-col w-full my-5">
          <label for="username" class="text-gray-500 mb-2">Seleccione un color</label>
          <input
            v-model="registerForm.color"
            type="color"
            id="usercolor"
            class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
          />
        </div>
        <div id="button" class="flex flex-col w-full my-5">
          <button type="submit" class="w-full py-4 bg-green-600 rounded-lg text-green-100">
            <div class="flex flex-row items-center justify-center">
              <div class="mr-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
              </div>
              <div class="font-bold">Guardar</div>
            </div>
          </button>
          <div class="flex justify-evenly mt-5">
            <a href="#" class="w-full text-center font-medium text-gray-500"
              >Olvidó su contraseña!</a
            >
            <RouterLink class="w-full text-center font-medium text-gray-500" :to="{ name: 'login' }"
              >Login!</RouterLink
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { RegisterUser } from '../interfaces/user.interface'
import { useAuthStore } from '../stores/auth.store'
import { useToast } from 'vue-toastification'

const authStore = useAuthStore()
const toast = useToast()

const firstnameInputRef = ref<HTMLInputElement | null>(null)
const lastnameInputRef = ref<HTMLInputElement | null>(null)
const emailInputRef = ref<HTMLInputElement | null>(null)
const passwordInputRef = ref<HTMLInputElement | null>(null)

const registerForm = reactive<RegisterUser>({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  color: '#16a34a'
})

const onRegister = async () => {
  if (registerForm.first_name === '') return firstnameInputRef.value?.focus()
  if (registerForm.last_name === '') return lastnameInputRef.value?.focus()
  if (registerForm.email === '') return emailInputRef.value?.focus()
  if (registerForm.password === '' || registerForm.password.length <= 7) {
    return passwordInputRef.value?.focus()
  }

  const ok = await authStore.register(registerForm)

  if (!ok) {
    toast.error('El registro no se completo, intenta de nuevo.')
  }

  ;(registerForm.first_name = ''),
    (registerForm.last_name = ''),
    (registerForm.email = ''),
    (registerForm.password = ''),
    (registerForm.color = '#16a34a')

  console.log(ok)
}
</script>

<style scoped></style>
