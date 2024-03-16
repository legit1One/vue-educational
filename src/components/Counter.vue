<template>
  <div>Ваше число: {{ number }}</div>
  <FirstDemo text="+" @click="increment"></FirstDemo>
</template>
<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import { ref } from "vue";

let number = ref(0)

const increment = () => {
  number.value++
}
</script>