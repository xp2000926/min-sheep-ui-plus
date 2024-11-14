<template>
  <!-- <s-tabs v-model="activeTab">
    <s-tab id="tab1" title="Tab 1">Tab 1 Content</s-tab>
    <s-tab id="tab2" title="Tab 2">Tab 2 Content</s-tab>
    <s-tab id="tab3" title="Tab 3">Tab 3 Content</s-tab>
  </s-tabs> -->
  <s-tabs v-model="activeTab" closable>
    <s-tab id="tab1" title="Tab 1">Tab 1 Content</s-tab>
    <s-tab id="tab2" title="Tab 2">Tab 2 Content</s-tab>
    <s-tab id="tab3" title="Tab 3">Tab 3 Content</s-tab>
  </s-tabs>
  <s-tabs v-model="activeTab" addable>
    <s-tab id="tab1" title="Tab 1">Tab 1 Content</s-tab>
    <s-tab id="tab2" title="Tab 2">Tab 2 Content</s-tab>
    <s-tab id="tab3" title="Tab 3">Tab 3 Content</s-tab>
  </s-tabs>
</template>

<script setup>
import { ref } from "vue";
import STabs from "../tabs/src/tabs";
import STab from "../tabs/src/tab";
import "../tabs/style/tabs.css";
const activeTab = ref("tab2");
</script>

<style lang="scss" scoped></style>
