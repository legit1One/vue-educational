<template>
  <div class="sidebar">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">About</a>
    <a href="">About</a>
    <a href="">About</a>


    {{ store.login }}
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth.js";

const store = useAuthStore()
</script>

<style scoped>
.sidebar {
  max-width: 240px;
  width: 100%;
  background: #cecece;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100vh;
}
</style>