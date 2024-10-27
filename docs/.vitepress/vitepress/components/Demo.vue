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
      <div v-show="isExpanded" class="highlight">
        <slot name="highlight" />
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { onMounted, ref, toRefs } from "vue";
const props = defineProps({ customClass: String, sourceCode: String });
const { customClass, sourceCode } = toRefs(props);
import Copy from "./Copy.vue";
import Code from "./Code.vue";
import message from "./message";
import clipboardCopy from "../utils/clipboard-copy";
const isExpanded = ref(true);
const copyclick = async () => {
  try {
    await clipboardCopy(sourceCode.value);
    message.info("复制成功");
  } catch (err) {
    message.error("复制失败");
  }
};
const codeclick = () => {
  isExpanded.value = !isExpanded.value;
  console.log("codeclick");
};
onMounted(() => {
  console.log("customClass", customClass.value);
  console.log("sourceCode", sourceCode.value);
});
</script>

<style lang="scss" scoped>
.demo {
  margin: 10px 0;
}
.demo-block {
  margin: 10px 0;
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 4px;
  transition: 0.2s;
}
.source {
  padding: 24px;
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
</style>
