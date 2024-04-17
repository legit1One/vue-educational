<template>
  <div class="layout">
    <Sidebar/>
    <div>
      <Header/>
<!--      <button @click="store.changeLogin">change login</button>-->
<!--      <input type="text" v-model="greeting">-->

<!--      <OptionsApi text="Props text" @clicked="handleClick"/>-->
      <CompositionApi text="Props text" @clicked="handleClick"/>
    </div>
  </div>

</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { useAuthStore } from "@/stores/auth.js";
import {ref, provide} from "vue";
import OptionsApi from "@/components/OptionsApi.vue";
import CompositionApi from "@/components/CompositionApi.vue";
const store = useAuthStore()

const greeting = ref('Hello there')

const handleClick = () => {
  alert('Clicked')
}

provide('GREETING_MESSAGE', greeting)
// const changeLogin = () => {
//   store.login = prompt('login')
// }
</script>

<style scoped>
.layout {
  display: flex;
}
</style>