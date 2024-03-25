<template>
  <div class="email">
    Ваш имейл: {{email}}
  </div>
</template>
<script setup>
defineProps({
  email: String
})
</script>
<style scoped>
.email {
  border: 1px solid black;
  padding: 20px;
  width: fit-content;
  border-radius: 8px;
  margin-top: 20px;
}
</style>