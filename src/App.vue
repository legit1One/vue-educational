<template>
  <div class="layout">
    <Sidebar/>
    <div>
      <Header/>
      <button @click="store.changeLogin">change login</button>
    </div>
  </div>

</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { useAuthStore } from "@/stores/auth.js";
const store = useAuthStore()
// const changeLogin = () => {
//   store.login = prompt('login')
// }
</script>

<style scoped>
.layout {
  display: flex;
}
</style>