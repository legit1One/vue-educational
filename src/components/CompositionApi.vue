<template>
  OPTIONS API Data- {{ greeting }}
  <br>
<!--  OPTIONS API Computed- {{ greetingUser }}-->
<!--  <br>-->
<!--  OPTIONS API PROPS- {{ text }}-->
<!--  <br>-->
<!--  <button @click="greetUser">Greet user</button>-->
<!--  <br>-->
<!--  <input v-model="userName" >-->
<!--  <br>-->
<!--  <button @click="$emit('clicked')">Emit event</button>-->
<!--  <br>-->
<!--  <button @click="$router.push({ name: 'Users' })">Router Button</button>-->
<!--  <br>-->
  <Counter/>
</template>
<script>
// import {ref} from "vue";
//
// const greeting = ref('Hello')

// const router = useRouter()

import Counter from "@/components/Counter.vue";
import { ref } from "vue";

export default {
  setup(props, context) {

    console.log(props.text)
    const greeting = ref('hello')

    return {
      greeting,
    }
  },
  props: {
    text: String
  },
  components: {
    Counter
  }
}
</script>