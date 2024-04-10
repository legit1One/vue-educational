<template>
  <div class="user">
    {{users[route.params.id].name}}
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute()

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