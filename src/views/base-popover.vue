<template>
  <div ref="host" class="host" @click="open">host</div>
  <Popover v-model="visible" :host="host" title="title" show-arrow
    >overlay</Popover
  >
</template>

<script setup>
import { ref } from 'vue';
// import { BasePopover } from "../base-popover";
import { Popover } from '../popover';
const visible = ref(false);
const host = ref();
const open = () => {
  visible.value = !visible.value;
};
</script>

<style lang="scss" scoped></style>
