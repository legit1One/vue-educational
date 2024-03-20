<template>
  <img :src="URL[currentLinkIndex]" height="100" alt="">
  <br>
  <button @click="changeSlide(-1)"> < </button>
  <button @click="changeSlide(1)"> > </button>
</template>
<script setup>
import {ref} from "vue";

const URL = [
  'https://sponsors.vuejs.org/images/bit.svg?v2',
  'https://sponsors.vuejs.org/images/appwrite.svg',
  'https://sponsors.vuejs.org/images/ionic.png?v2',
]

const currentLinkIndex = ref(0)

const changeSlide = (increment) => {
  currentLinkIndex.value = (currentLinkIndex.value + increment) % URL.length
  currentLinkIndex.value = currentLinkIndex.value < 0 ? URL.length - 1 : currentLinkIndex.value
}
</script>