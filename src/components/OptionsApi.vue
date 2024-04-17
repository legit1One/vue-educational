<template>
  OPTIONS API Data- {{ greeting }}
  <br>
  OPTIONS API Computed- {{ greetingUser }}
  <br>
  OPTIONS API PROPS- {{ text }}
  <br>
  <button @click="greetUser">Greet user</button>
  <br>
  <input v-model="userName" >
  <br>
  <button @click="$emit('clicked')">Emit event</button>
  <br>
  <button @click="$router.push({ name: 'Users' })">Router Button</button>
  <br>
  <Counter/>
</template>
<script>
// import {ref} from "vue";
//
// const greeting = ref('Hello')

// const router = useRouter()

import Counter from "@/components/Counter.vue";

export default {
  components: {
    Counter
  },
  data: () => {
    return {
      greeting: 'Hello',
      userName: 'Dauren'
    }
  },

  computed: {
    greetingUser() {
      return `Hi, ${this.userName}`
    }
  },

  methods: {
    greetUser() {
      alert(this.greetingUser)
    }
  },

  watch: {
    userName(value) {
      console.log(value)
    }
  },

  props: {
    text: String
  },

  mounted() {
    console.log('mounted')
  },

  emits: ['clicked']
}
</script>