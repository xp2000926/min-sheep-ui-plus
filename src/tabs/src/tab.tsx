import { defineComponent, inject, Ref } from 'vue';
import { tabProps, TabProps } from './tab-type';

export default defineComponent({
  name: 'STab',
  props: tabProps,
  emits: ['update:modelValue'],
  setup(props: TabProps, { slots }) {
    // 获取当前激活项
    const activeTab = inject('active-tab') as Ref<string>;
    // 获取 tabsData ，并将自身数据加入其中
    const tabsData = inject('tabs-data') as Ref<
      Array<{ id: string; title: string }>
    >;
    tabsData.value.push({ id: props.id, title: props.title });

    return () => (
      <>
        {props.id === activeTab.value && (
          <div class="s-tab">{slots.default?.()}</div>
        )}
      </>
    );
  }
});
