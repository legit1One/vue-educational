<template>
  <ul>
    <li v-for="quote in array">{{ quote }}</li>
  </ul>
</template>
<script setup>
const array = [
    'lorem',
    'ipsum',
    'itd',
]
</script>