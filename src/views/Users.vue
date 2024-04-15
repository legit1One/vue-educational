<template>
  <div class="user" v-for="(user, index) in users">
    <router-link :to="{name: 'User', params: { id: index }}">
      {{ user.name }}
    </router-link>
  </div>
</template>
<script setup>
import { useComponentBase } from "@/composables/useComponentBase.js";

useComponentBase()

const users = [
  {
    name: 'Brad Pitt'
  },
  {
    name: 'Johny Depp'
  },
  {
    name: 'Dwayne The Rock'
  },
]

</script>