<template>
  <div class="images">
    <img v-for="image in images" :key="image" :src="image" alt="image" width="200">
  </div>

  <button class="add" @click="addImage">
    Добавить картинку
  </button>
</template>
<script setup>
import {ref} from "vue";

const images = ref([
    'https://i.pinimg.com/236x/d2/b2/90/d2b290e8cf7898eefdd64b68ae477849.jpg',
    'https://i.pinimg.com/236x/f0/8d/76/f08d76399be1e97e9ece740eba9b10e0.jpg'
])

const addImage = () => {
  images.value.push(prompt('Введите URL картинки'))
}
</script>

<style scoped>
.images {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.add {
  border: none;
  outline: none;
  padding: 12px;
  margin-top: 40px;
  border-radius: 8px;
  cursor: pointer;
  background: #4646dc;
  color: white;
  font-weight: bolder;
  height: 60px;
  font-size: 18px;
}
</style>