<template>
  <label class="inline-flex items-center mt-3">
    <input
      type="checkbox"
      :checked="is_confirm"
      @change="() => useApplication.applyShift(shiftId)"
      class="form-checkbox h-5 w-5 text-gray-600"
    />
  </label>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { useApplicationStore } from '../stores/application.store'
import { useShiftStore } from '../stores/shift.store'

const useApplication = useApplicationStore()
const useShift = useShiftStore()

const is_confirm = ref<boolean | undefined>(false)

interface Props {
  shiftId: number
}

const props = defineProps<Props>()

onBeforeMount(async () => {
  await useShift.checkPostulate(props.shiftId)
  is_confirm.value = useShift.is_postulated
})
</script>
