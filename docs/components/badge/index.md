# Badge 徽章

展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```vue
<template>
  <s-badge :value="12" class="item">
    <s-button size="small">评论</s-button>
  </s-badge>
  <s-badge :value="3" class="item">
    <s-button size="small">回复</s-button>
  </s-badge>
  <s-badge :value="1" class="item" type="primary">
    <s-button size="small">评论</s-button>
  </s-badge>
  <s-badge :value="2" class="item" type="warning">
    <s-button size="small">回复</s-button>
  </s-badge>
</template>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

:::

## 最大值

可自定义最大值。

:::demo 设置`max`属性可以定义角标显示的最大值。

```vue
<template>
  <s-badge :value="200" :max="99" class="item">
    <s-button size="small">评论</s-button>
  </s-badge>
</template>
```

:::

## 自定义内容

可以显示数字以外的文本内容。

:::demo 定义value为String类型是时可以用于显示自定义文本。

```vue
<template>
  <s-badge value="new" class="item">
    <s-button size="small">评论</s-button>
  </s-badge>
  <s-badge value="hot" class="item">
    <s-button size="small">回复</s-button>
  </s-badge>
</template>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

:::

## 小红点

:::demo 除了数字外，设置`is-dot`属性，它接受一个 `Boolean`。

```vue
<template>
  <s-badge is-dot class="item">数据查询</s-badge>
  <s-badge is-dot class="item">
    <s-button class="share-button" icon="s-icon-share" type="primary">
    </s-button>
  </s-badge>
</template>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```

:::
