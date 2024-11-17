<template>
  <s-trigger :default-popup-visible="true"  nmount-on-close="true">
    <s-button @click="handleClick">Click me</s-button>
    <template #content>
      <div class="demo-basic">luanhanxiao is a good man</div>
    </template>
  </s-trigger>
</template>

<script setup lang="ts">
import STrigger from "../trigger/src/trigger.tsx";
const handleClick = (e: MouseEvent) => {
  console.log(e);
};
</script>

<style lang="scss" scoped></style>
