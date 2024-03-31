<template>
  <div class="img"></div>
  <br>
  X axis <input type="range" min="0" max="200" v-model="XAxis">
  <br>
  Y axis <input type="range" min="0" max="200" v-model="YAxis">

</template>
<script setup>
import {onMounted, ref, watch} from "vue";

const XAxis = ref(0)
const YAxis = ref(0)

watch(XAxis, () => {
  const img = document.querySelector('.img')
  img.style.backgroundPositionX = `${XAxis.value}px`
})

watch(YAxis, () => {
  const img = document.querySelector('.img')
  img.style.backgroundPositionY = `${YAxis.value}px`
})
</script>

<style scoped>
.img {
  background: url("https://i.pinimg.com/236x/d2/b2/90/d2b290e8cf7898eefdd64b68ae477849.jpg");
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>