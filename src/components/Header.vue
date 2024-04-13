<template>
  <div class="header">
    <input type="text" placeholder="search">

    {{ store.login }}
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth.js";

const store = useAuthStore()
</script>

<style scoped>
.header {
  width: 100%;
  background: #dddddd;
  height: fit-content;
  padding: 12px;
}
</style>