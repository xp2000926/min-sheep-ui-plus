<template>
  <ClientOnly>
    <div class="demo">
      <div class="description">
        <slot name="description" />
      </div>
      <div class="demo-block">
        <div class="source">
          <slot />
        </div>
        <div class="demo-block-control">
          <Copy @click="copyclick" />
          <Code @click="codeclick" />
        </div>
      </div>
      <div ref="highlightRef" class="highlight">
        <slot name="highlight" />
      </div>
      <div v-if="isExpanded" class="highlight-closed" @click="codeclick">
        隐藏源代码
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { nextTick, onMounted, ref, toRefs } from 'vue';
const props = defineProps({ customClass: String, sourceCode: String });
const { customClass, sourceCode } = toRefs(props);
import Copy from './Copy.vue';
import Code from './Code.vue';
import message from './message';
import clipboardCopy from '../utils/clipboard-copy';
const isExpanded = ref(false);
const highlightRef = ref();
const copyclick = async () => {
  try {
    await clipboardCopy(sourceCode.value);
    message.info('复制成功');
  } catch (err) {
    message.error('复制失败');
  }
};
const codeclick = () => {
  isExpanded.value = !isExpanded.value;
  isExpanded.value
    ? highlightRef.value.animate(
        [{ height: highlightRef.value.scrollHeight + 'px' }],
        {
          duration: 500,
          fill: 'forwards'
        }
      )
    : highlightRef.value.animate([{ height: 0 }], {
        duration: 500,
        fill: 'forwards'
      });
};
onMounted(() => {
  console.log('customClass', customClass.value);
  console.log('sourceCode', sourceCode.value);
  nextTick(() => {
    highlightRef.value.animate([{ height: 0 }], {
      duration: 500,
      fill: 'forwards'
    });
  });
});
</script>

<style lang="scss">
.highlight {
  .vp-doc div[class*='language-'] {
    margin: 0;
  }
}
</style>
<style lang="scss" scoped>
.demo {
  margin: 10px 0;
}
.demo-block {
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 4px;
  transition: 0.2s;
}
.source {
  padding: 24px;
}
.highlight {
  overflow: hidden;
}
.demo-block-control {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2.5rem;
  border-top: 1px solid var(--vp-c-divider-light);
  svg {
    margin: 0 0.5rem;
    cursor: pointer;
    user-select: none;
    color: #909399;
  }
}
.highlight-closed {
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  border: 1px solid var(--vp-c-divider-light);
  color: var(--vp-c-text-1);
  height: 44px;
  line-height: 44px;
  background-color: var(--vp-c-bg);
}
</style>
