<template>
  <div>
    <div id="number">Ваше число: {{ number }}</div>
  <!--  <FirstDemo v-bind:text="number" v-on:click="increment"></FirstDemo>-->
    <FirstDemo text="Increment" @click="increment"></FirstDemo>

  <!--  <img v-for="(link, index) in URL" :src="link" :key="link" alt="">-->

  <!--  <div v-for="(link, idx) in URL" :key="link">-->
  <!--    {{idx}} - {{ link }}-->
  <!--  </div>-->

  <!--  <div v-for="(value, field) in student" :key="field">-->
  <!--    {{ field }} - {{ value }}-->
  <!--  </div>-->
  </div>
</template>
<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import {onActivated, onBeforeMount, onBeforeUnmount, onDeactivated, onMounted, onUpdated, reactive, ref} from "vue";

const emit = defineEmits(['click-button'])

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
  emit('click-button', number.value)
}

// onBeforeMount
// onMount
// onBeforeUpdate => перед тем как че то в темплейте поменялось
// onUpdate => если че то в темплейте поменялось
// onBeforeUnmount => перед смертью компонента
// onActivated => когда компонент появился и он находится внутри keep-alive
// onDeactivated => когда компонент умер и он находится внутри keep-alive

onBeforeMount(() => {
  console.log('Before Counter mounted')

  // для запросов и подготовки переменных внутри компонента
  student.value.name = 'Satoru'
  // console.log(document.querySelector('#number'))
})

const callback = () => {

}

onMounted(() => {
  console.log(document.querySelector('#number'))

  document.addEventListener('click', callback)
})

onUpdated(() => {
  console.log("Component updated")
})

onBeforeUnmount(() => {
  console.log("Component unmounted")

  document.removeEventListener('click', callback)
})

onActivated(() => {
  console.log("Component activated")
})

onDeactivated(() => {
  console.log("Component deactivated")
})

// document.addEventListener('c')
</script>