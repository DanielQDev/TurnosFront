<template>
  <td
    v-for="{ id, is_confirmed } in useShift.confirmedUsers"
    :key="id"
    class="py-2 px-4 border-b border-grey-light cursor-not-allowed"
  >
    <label class="inline-flex items-center mt-3">
      <input
        disabled
        type="checkbox"
        :checked="is_confirmed"
        class="form-checkbox h-5 w-5 text-gray-600"
      />
    </label>
  </td>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useShiftStore } from '../stores/shift.store'

const useShift = useShiftStore()

interface Props {
  id: number
}

const props = defineProps<Props>()

onBeforeMount(async () => {
  await useShift.getConfirmedUsers(props.id)
})
</script>

<style lang="scss" scoped></style>
