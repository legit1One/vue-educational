<template>
  <input type="text" :value="inputValue" @input="inputValue = $event.target.value">
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: String
})

const emit = defineEmits(['change'])

const inputValue = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('change', value)
  }
})
</script>