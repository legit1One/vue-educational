<template>
  <input type="text" @input="emit('update:value', $event.target.value )">
</template>
<script setup>
import { ref } from "vue";

//update-modelValue

const emit = defineEmits(['update:value'])

defineProps({
  value: String
})
</script>