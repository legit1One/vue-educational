<template>
    <div class="cards">
      <div class="card" v-for="card in cards" :key="card.name">
        <p>{{card.name}}</p>
        <p>{{card.price}}</p>

        <button @click="addToCart(card)">Добавить в корзину</button>
      </div>
    </div>

  <h3>Итого: {{totalPrice}}</h3>
</template>
<script setup>
import {computed, ref} from "vue";

const cards = [
  {
    name: 'Iphone 13 Pro Max',
    price: 700000
  },
  {
    name: 'Macbook',
    price: 1200000
  },
  {
    name: 'Airpods',
    price: 120000
  },
]

const selectedItems = ref([])

const addToCart = (good) => {
  selectedItems.value.push(good)
}

const totalPrice = computed(() => {
  return selectedItems.value.reduce((prev, cur) => {
    prev += cur.price
    return prev
  }, 0)
})
</script>
<style scoped>
.cards {
 display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  border: 1px solid gray;
  padding: 12px;
  border-radius: 8px;
}
</style>