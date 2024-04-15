<template>
  <div class="layout">
    <Sidebar/>
    <div>
      <Header/>
<!--      <button @click="store.changeLogin">change login</button>-->
      <input type="text" v-model="greeting">

      <router-view/>
    </div>
  </div>

</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { useAuthStore } from "@/stores/auth.js";
import {ref, provide} from "vue";
const store = useAuthStore()

const greeting = ref('Hello there')

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