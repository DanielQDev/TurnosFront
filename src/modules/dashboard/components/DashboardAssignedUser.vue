<template>
  <td class="py-2 px-4 border-b border-grey-light" :style="{ backgroundColor: user?.color }">
    <label class="inline-flex items-center mt-3">
      {{ user?.name }}
    </label>
  </td>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue'
import type { Assigned } from '../interfaces/assignedUser.interface'
import { useShiftStore } from '../stores/shift.store'

const useShift = useShiftStore()

const user: Assigned = reactive({
  name: '',
  color: ''
})

interface Props {
  shiftId: number
}

const props = defineProps<Props>()

onBeforeMount(async () => {
  await useShift.verify_assignment(props.shiftId)
  user.name = useShift.assignedUser?.name
  user.color = useShift.assignedUser?.color
})
</script>
