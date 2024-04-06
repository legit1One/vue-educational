<template>
<!--  <div class="square" :class="`square-${color}`"></div>-->
<!--  <div class="square" :class="{-->
<!--    'square-red': color === 'red',-->
<!--    'square-blue': color === 'blue',-->
<!--    'square-purple': color === 'purple',-->
<!--  }"></div>-->

<!--  <div :class="['square', `square-${color}`]"></div>-->
<!--  <div :class="['square', {-->
<!--    'square-red': color === 'red',-->
<!--    'square-blue': color === 'blue',-->
<!--    'square-purple': color === 'purple',-->
<!--  }]"></div>-->

  <button @click="color='red'">RED</button>
  <button @click="color='blue'">BLUE</button>
  <button @click="color='purple'">PURPLE</button>

  {{color}}
</template>
<script setup>
import {ref} from "vue";

const color = ref('red')
</script>
<style scoped>
.square {
  width: 100px;
  height: 100px;
}

.square-red {
  background: red;
}

.square-blue {
  background: blue;
}

.square-purple {
  background: purple;
}

</style>