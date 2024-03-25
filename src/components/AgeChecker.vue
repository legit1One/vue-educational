<template>
<!--  0-5 -->
<!--  <img v-if="age <= 5" src="https://anakoskaphotography.com/wp-content/uploads/2018/09/professional-picture-of-a-cute-baby-boy-in-white.jpg" width="200" alt="">-->

<!--&lt;!&ndash;  6-12 &ndash;&gt;-->
<!--  <template v-else-if="age <= 12">-->

<!--    <template v-if="age === 8">-->
<!--      <p>Тебе</p>-->
<!--      <p>{{age}}</p>-->
<!--      <p>лет</p>-->
<!--    </template>-->
<!--    <p>-->
<!--      Ты ребенок-->
<!--    </p>-->

<!--    <p>Тебе сюда нельзя</p>-->
<!--  </template>-->

<!--&lt;!&ndash;  12-n &ndash;&gt;-->
<!--  <p v-else>Тебе {{age}} лет</p>-->

  <p v-show="age <= 5">
    Тебе меньше 6 лет
  </p>

  <button @click="age++">Increment</button>
</template>
<script setup>
import {ref} from "vue";

const age = ref(3)
</script>