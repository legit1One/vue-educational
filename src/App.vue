<template>
<!--  <Table :items="items">-->
<!--    <template #price="{ cell }">-->
<!--      <span :style="`color: ${priceColor(cell)}`">-->
<!--        {{ cell }}-->
<!--      </span>-->
<!--    </template>-->

<!--&lt;!&ndash;    <template #default="{ cell }">&ndash;&gt;-->
<!--&lt;!&ndash;      <p>default slot - {{ cell }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    </template>&ndash;&gt;-->
<!--  </Table>-->

  <input type="color" v-model="color">
</template>

<script setup>
import {ref, watch} from "vue";
import Table from "@/components/Table.vue";

const color = ref('#fff')

// 0 - 2000 - green
// 2001 - 5000 - yellow
// 5001 - red

const priceColor = (price) => {
  if(price < 2001) return 'green'
  else if(price < 5001) return 'yellow'

  return  'red'
}

const items = [
  {
    name: 'Imac',
    price: 2000,
    description: 'Desktop'
  },
  {
    name: 'MacBook',
    price: 3000,
    description: 'Laptop'
  },
  {
    name: 'Iphone',
    price: 7000,
    description: 'Phone'
  },
]

watch(color, (newValue) => {
  document.body.style.background = newValue
})
</script>