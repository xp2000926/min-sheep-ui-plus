# Radio 单选框

## 基本用法

:::demo

```vue
<template>
  <s-radio v-model="radio" label="1">备选项</s-radio>
  <s-radio v-model="radio" label="2">备选项</s-radio>
</template>
<script setup>
import { ref } from 'vue';
const radio = ref('1');
</script>
```

:::
