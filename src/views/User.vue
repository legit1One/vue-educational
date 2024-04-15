<template>
  <div class="user">
    {{users[route.params.id].name}}
  </div>

<!--  <p>-->
<!--      {{pageTitle}}-->
<!--  </p>-->
<!--  -->
  <p>
      {{componentBase.pageTitle}}
  </p>

  <p>
      {{greeting}}
  </p>

  <p></p>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useComponentBase } from "@/composables/useComponentBase.js";
import {inject} from "vue";

const route = useRoute()

// const { pageTitle } = useComponentBase()
const componentBase = useComponentBase()

const greeting = inject('GREETING_MESSAGE')

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