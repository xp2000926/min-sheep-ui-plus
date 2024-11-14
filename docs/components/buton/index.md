# button

## 基础用法

:::demo 使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```vue
<template>
  <div class="mb-4">
    <s-button>Default</s-button>
    <s-button type="primary">Primary</s-button>
    <s-button type="success">Success</s-button>
    <s-button type="info">Info</s-button>
    <s-button type="warning">Warning</s-button>
    <s-button type="danger">Danger</s-button>
  </div>
  <div class="mb-4">
    <s-button plain>Plain</s-button>
    <s-button type="primary" plain>Primary</s-button>
    <s-button type="success" plain>Success</s-button>
    <s-button type="info" plain>Info</s-button>
    <s-button type="warning" plain>Warning</s-button>
    <s-button type="danger" plain>Danger</s-button>
  </div>
  <div class="mb-4">
    <s-button round>Round</s-button>
    <s-button type="primary" round>Primary</s-button>
    <s-button type="success" round>Success</s-button>
    <s-button type="info" round>Info</s-button>
    <s-button type="warning" round>Warning</s-button>
    <s-button type="danger" round>Danger</s-button>
  </div>
  <div>
    <s-button circle />
    <s-button type="primary" circle />
    <s-button type="success" circle />
    <s-button type="info" circle />
    <s-button type="warning" circle />
    <s-button type="danger" circle />
  </div>
</template>
```

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

:::demo 使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

```vue
<template>
  <div class="mb-4">
    <s-button disabled>Default</s-button>
    <s-button type="primary" disabled>Primary</s-button>
    <s-button type="success" disabled>Success</s-button>
    <s-button type="info" disabled>Info</s-button>
    <s-button type="warning" disabled>Warning</s-button>
    <s-button type="danger" disabled>Danger</s-button>
  </div>

  <div>
    <s-button plain disabled>Plain</s-button>
    <s-button type="primary" plain disabled>Primary</s-button>
    <s-button type="success" plain disabled>Success</s-button>
    <s-button type="info" plain disabled>Info</s-button>
    <s-button type="warning" plain disabled>Warning</s-button>
    <s-button type="danger" plain disabled>Danger</s-button>
  </div>
</template>
```

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

:::demo 使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

```vue
<template>
  <div class="mb-4">
    <s-button size="large">Large</s-button>
    <s-button>Default</s-button>
    <s-button size="small">Small</s-button>
  </div>
  <div class="mb-4">
    <s-button size="large" round>Large</s-button>
    <s-button round>Default</s-button>
    <s-button size="small" round>Small</s-button>
  </div>
  <div>
    <s-button size="large" circle />
    <s-button circle />
    <s-button size="small" circle />
  </div>
</template>
```

:::

## Tag

:::demo 您可以自定义元素标签。例如，按钮，div，路由链接，nuxt链接。

```vue
<template>
  <s-button>button</s-button>
  <s-button tag="div" role="button" tabindex="0">div</s-button>
  <s-button
    type="primary"
    tag="a"
    href="https://www.baidu.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    a
  </s-button>
</template>
```

:::

## 块级按钮 block

:::demo 通过 `block` 属性设置按钮为块级

```vue
<template>
  <s-button type="primary" block>Confirm</s-button>
  <s-button block>Cancel</s-button>
</template>
```

:::

## 按钮组(开发中)

:::demo 使用`<el-button-group>`标签来嵌套你的按钮。

```vue
<template>
  <s-button-group>
    <s-button type="primary" icon="el-icon-arrow-left">上一页</s-button>
    <s-button type="primary"
      >下一页<i class="el-icon-arrow-right el-icon--right"></i
    ></s-button>
  </s-button-group>
  <s-button-group>
    <s-button type="primary" icon="el-icon-edit"></s-button>
    <s-button type="primary" icon="el-icon-share"></s-button>
    <s-button type="primary" icon="el-icon-delete"></s-button>
  </s-button-group>
</template>
```

:::

## 加载中 (开发中)

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```vue
<template>
  <s-button type="primary" :loading="true">加载中</s-button>
</template>
```

:::

## Button API

### Button 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | ^[enum]`'large' \| 'default' \| 'small'` | — |
| type | 类型 | ^[enum]`''\| 'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'\| 'default'` | — |
| plain | 是否为朴素按钮 | `boolean` | false |
| block | 块级 | `boolean` | false |
| disabled | 是否禁用状态 | `boolean` | false |
| round | 是否圆角按钮 | `boolean` | false |

### Button 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| —      | 自定义默认内容 |
