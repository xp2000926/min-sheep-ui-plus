<template>
  <span>
    <code class="api-typing mr-1">
      {{ type }}
    </code>
    <ClientOnly>
         <s-tooltip>
            
         </s-tooltip>
    </ClientOnly>
  </span>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  details: String,
});
</script>

<style lang="scss" scoped></style>
