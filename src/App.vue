<template>
<!--  {{number}}-->
<!--  {{doubledNumber}}-->
<!--  <Quotations></Quotations>-->
  <Counter @click-button="test"></Counter>
<!--  <p>Hello World</p>-->
<!--  <Slider/>-->

<!--  <Goods/>-->

<!--  <input type="text" @input="handleInput">-->
<!---->
<!--  {{ greeting }}-->

<!--  <FirstDemo text="Нажми меня"></FirstDemo>-->
<!--  <FirstDemo text="Press me"></FirstDemo>-->
<!--  <FirstDemo text="Submit"></FirstDemo>-->

<!--  <p>-->
<!--    Человек кликнул: {{ clickCount }} раз-->
<!--  </p>-->

  <br>
  <br>
  <Search :value="searchValue" @change="searchValue = $event"></Search>
  <br>
  {{searchValue}}
</template>

<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import Counter from "@/components/Counter.vue";
import Quotations from "@/components/icons/Quotations.vue";
import Slider from "@/components/Slider.vue";
import { computed, ref } from "vue";
// import Goods from "@/components/Goods.vue";
import Search from "@/components/Search.vue";

const inputValue = ref('')
const clickCount = ref(0)
const searchValue = ref('John')


const handleInput = (e) => {
  console.log(e)
  inputValue.value = e.target.value
  // greetingText = `Hello, ${e.targer.value}`
}

const test = (e) => {
  console.log(e)
}

const greeting = computed({
  get: () => {
    if(inputValue.value.length < 5)
      return `Hello, ${inputValue.value}`
    else if(inputValue.value.length < 10)
      return `Hi, ${inputValue.value}`
    else
      return `дароу, ${inputValue.value}`
  },
  set: (value) => {
    console.log(value)
  }
})

greeting.value = 'b;ab;ab;a'

// const number = ref(0)
//
// const doubledNumber = computed(() => {
//   return number.value * 2
// })
//
// setInterval(() => {
//   number.value++
// }, 1000)
</script>