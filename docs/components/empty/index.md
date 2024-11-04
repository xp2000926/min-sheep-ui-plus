# Empty 空状态

空状态时的占位提示。

## 基础用法

:::demo

```vue
<template>
  <s-empty description="description" />
</template>
```

:::

## 图片尺寸​

:::demo通过使用 image-size 属性来控制图片大小。

```vue
<template>
  <s-empty :image-size="400" />
</template>
```

:::

## 自定义图片

:::demo 通过设置 `image` 属性传入图片 URL。

```vue
<template>
  <s-empty
    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  />
</template>
```

:::

## 水平/垂直排列

:::demo layout 默认为 horizontal，即水平方向排列

```vue
<template>
  <p>
    <span>layout:</span>
    <label>
      <input type="radio" value="vertical" v-model="layout" />
      vertical
    </label>
    <label>
      <input type="radio" value="horizontal" v-model="layout" />
      horizontal
    </label>
  </p>
  <s-empty layout="horizontal"></s-empty>
</template>
<script setup>
import { ref } from 'vue';
const layout = ref('horizontal');
</script>
```

:::

## 底部内容

:::demo 使用默认插槽可在底部插入内容。

```vue
<template>
  <s-empty>
    <s-button type="primary">Button</s-button>
  </s-empty>
</template>
```

:::

## Empty API

### 属性

| 属性名      | 说明                         | 类型   | 默认值     |
| ----------- | ---------------------------- | ------ | ---------- |
| image       | empty 组件的图像地址 string  | string | ''         |
| image-size  | empty 组件的图像尺寸（宽度） | number | —          |
| description | empty 组件的描述信息         | string | ''         |
| layout      | empty 组件的水平/垂直排列    | string | 'vertical' |

### 插槽

| 插槽名      | 描述说明           |
| ----------- | ------------------ |
| default     | 作为底部内容的内容 |
| image       | 作为图像的内容     |
| description | 作为描述的内容     |
