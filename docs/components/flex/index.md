# Flex 弹性布局

:::demo

```vue
<template>
  <s-flex>
    <div class="flex-item">Oops!</div>
    <div class="flex-item">Oops!</div>
    <div class="flex-item">Oops!</div>
    <div class="flex-item">Long! Long! Cross the line!</div>
  </s-flex>
</template>
<style lang="scss">
.flex-item {
  border: 1px solid #ddd;
  padding: 0 12px;
}
</style>
```

:::

:::demo

```vue
<template>
  <s-flex vertical>
    <div class="flex-item">Oops!</div>
    <div class="flex-item">Oops!</div>
    <div class="flex-item">Oops!</div>
    <div class="flex-item">Long! Long! Cross the line!</div>
  </s-flex>
</template>
```

:::
