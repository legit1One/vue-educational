<template>
  <div>Ваше число: {{ number }}</div>
<!--  <FirstDemo v-bind:text="number" v-on:click="increment"></FirstDemo>-->
  <FirstDemo :text="number" @click="increment"></FirstDemo>
<!--  <img v-for="(link, index) in URL" :src="link" :key="link" alt="">-->

<!--  <div v-for="(link, idx) in URL" :key="link">-->
<!--    {{idx}} - {{ link }}-->
<!--  </div>-->

  <div v-for="(value, field) in student" :key="field">
    {{ field }} - {{ value }}
  </div>
</template>
<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import { reactive, ref } from "vue";

let number = ref(0)

const URL = [
    'https://sponsors.vuejs.org/images/bit.svg?v2',
    'https://sponsors.vuejs.org/images/appwrite.svg',
    'https://sponsors.vuejs.org/images/ionic.png?v2',
]

const student = ref({
  name: 'Brad',
  surname: 'Pitt',
  age: 60,
})

const increment = () => {
  number.value++
  student.value.age++
}

// document.addEventListener('c')
</script>