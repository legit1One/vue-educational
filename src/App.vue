<template>
<!--    <DynamicBg ref="dynamicBg"/>-->
<!--  <img src="./assets/logo.svg" width="16" alt="">-->
<!--  <img src="@/assets/logo.svg" width="16" alt="">-->

<!--  <br>-->
<!--  <div class="square" ref="squareEl"></div>-->
</template>

<script setup>
import {onMounted, ref} from "vue";
import DynamicBg from "@/components/DynamicBg.vue";
const squareEl = ref()
const dynamicBg = ref()

onMounted(() => {
  // console.log(document.querySelector('.square'))
  console.log(squareEl.value)
  console.log(dynamicBg.value)
})
</script>