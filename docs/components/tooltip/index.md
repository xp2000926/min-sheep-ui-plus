# Tooltip 文字提示

:::demo

```vue
<template>
  <div class="box">
    <div class="top">
      <s-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <s-button>上左</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Top Center 提示文字"
        placement="top"
      >
        <s-button>上边</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Top Right 提示文字"
        placement="top-end"
      >
        <s-button>上右</s-button>
      </s-tooltip>
    </div>
    <div class="left">
      <s-tooltip
        class="item"
        effect="dark"
        content="Left Top 提示文字"
        placement="left-start"
      >
        <s-button>左上</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Left Center 提示文字"
        placement="left"
      >
        <s-button>左边</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Left Bottom 提示文字"
        placement="left-end"
      >
        <s-button>左下</s-button>
      </s-tooltip>
    </div>

    <div class="right">
      <s-tooltip
        class="item"
        effect="dark"
        content="Right Top 提示文字"
        placement="right-start"
      >
        <s-button>右上</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Right Center 提示文字"
        placement="right"
      >
        <s-button>右边</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Right Bottom 提示文字"
        placement="right-end"
      >
        <s-button>右下</s-button>
      </s-tooltip>
    </div>
    <div class="bottom">
      <s-tooltip
        class="item"
        effect="dark"
        content="Bottom Left 提示文字"
        placement="bottom-start"
      >
        <s-button>下左</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Bottom Center 提示文字"
        placement="bottom"
      >
        <s-button>下边</s-button>
      </s-tooltip>
      <s-tooltip
        class="item"
        effect="dark"
        content="Bottom Right 提示文字"
        placement="bottom-end"
      >
        <s-button>下右</s-button>
      </s-tooltip>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
}
</style>
```

:::
