<template>
  <div>Количество цитат: {{array.length}}</div>
  <ul>
    <li v-for="quote in array">{{ quote }}</li>
  </ul>

  <button @click="addQuote">Добавить цитату</button>
</template>
<script setup>
import {ref} from "vue";

const array = ref([
    'lorem',
    'ipsum',
    'itd',
])

const addQuote = () => {
  const text = prompt('Добавьте цитату')
  array.value.push(text)
}
</script>
