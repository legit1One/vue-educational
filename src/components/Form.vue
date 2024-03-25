<template>
  <div class="form">
    <input type="email" placeholder="Email" v-model="value">
    <button @click="emit('submit', value)">Отправить</button>
  </div>
</template>
<script setup>
import {ref} from "vue";

const emit = defineEmits(['submit'])
const value = ref('')
</script>

<style scoped>
.form {
  border: 1px solid black;
  padding: 20px;
  width: fit-content;
  border-radius: 8px;
}
</style>