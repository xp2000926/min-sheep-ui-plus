# Calendar 日历

## 基本用法

:::demo 设置 `value` 来指定当前显示的月份。如果 `value` 未指定，则显示当月。`value` 支持 v-model 双向绑定。

```vue
<template>
  <s-calendar v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref(new Date());
 console.log('value', value.value)
</script>
```

:::
