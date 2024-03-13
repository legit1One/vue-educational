<template>
  <button>{{ text }}</button>
</template>

<script setup>
// props
defineProps({
  text: String
})
</script>

<style>
button {
  padding: 20px;
}
</style>