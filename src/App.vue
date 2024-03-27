<template>
<!--  <SlottedComponent>-->
<!--    <template #header>-->
<!--      <p>HEADER</p>-->
<!--    </template>-->

<!--    <p>ASD</p>-->
<!--  </SlottedComponent>-->
  <InputModel v-model:value="value" />

  {{value}}
</template>

<script setup>
import SlottedComponent from "@/components/SlottedComponent.vue";
import InputModel from "@/components/InputModel.vue";
import {ref} from "vue";

const value = ref()
</script>