<template>
  <div>
<!--  <keep-alive>-->
    <Counter v-if="showCounter" />
<!--  </keep-alive>-->

  <br><br>
  <button @click="showCounter = !showCounter">Toggle Counter</button>
  </div>
</template>

<script setup>
import Counter from "@/components/Counter.vue";
import { ref } from "vue";

const showCounter = ref(true)
</script>