# Tabs 标签页

## 基础用法

:::demo

```vue
<template>
  <s-tabs v-model="activeTab">
    <s-tab id="tab1" title="Tab 1">Tab 1 Content</s-tab>
    <s-tab id="tab2" title="Tab 2">Tab 2 Content</s-tab>
    <s-tab id="tab3" title="Tab 3">Tab 3 Content</s-tab>
  </s-tabs>
</template>
<script setup>
import { ref } from 'vue';
const activeTab = ref('tab2');
</script>
```

:::
