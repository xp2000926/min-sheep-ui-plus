<template>
  <s-calendar v-model="value1" @change="handleChange" />
  <!-- <s-calendar v-model="value2" /> -->
</template>
<script setup>
import { handleError, ref } from 'vue';
const value1 = ref(new Date());
const value2 = ref(new Date('2023-8-15'));
const handleChange = date => {
  console.log(date.toLocaleDateString());
};
</script>
