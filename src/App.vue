<template>
<!--  {{number}}-->
<!--  {{doubledNumber}}-->
<!--  <Quotations></Quotations>-->
<!--  <Counter @click-button="test"></Counter>-->
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

<!--  <br>-->
<!--  <br>-->
<!--  <Search :value="searchValue" @change="searchValue = $event"></Search>-->
<!--  <br>-->
<!--  {{searchValue}}-->

<!--  <Form @submit="email = $event"></Form>-->

<!--  <EmailChecker :email="email"/>-->

  <AgeChecker />
<!--  <SlottedComponent>-->
<!--    <iframe width="200"  src="https://www.youtube.com/embed/06-dRe6QWtU" title="Ayau – AYAULYM [live session]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>-->
<!--  </SlottedComponent>-->
</template>

<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import Counter from "@/components/Counter.vue";
import Quotations from "@/components/icons/Quotations.vue";
import Slider from "@/components/Slider.vue";
import Form from "@/components/Form.vue";
import { computed, ref } from "vue";
// import Goods from "@/components/Goods.vue";
import Search from "@/components/Search.vue";
import EmailChecker from "@/components/EmailChecker.vue";
import AgeChecker from "@/components/AgeChecker.vue";
import SlottedComponent from "@/components/SlottedComponent.vue";

const inputValue = ref('')
const clickCount = ref(0)
const searchValue = ref('John')
const email = ref('')


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