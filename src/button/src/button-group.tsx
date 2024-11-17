import { defineComponent, Ref } from 'vue';
// import { tabProps, TabProps } from './button-group-type';

export default defineComponent({
  name: 'SButtonGroup',
  setup(props, { slots }) {
    return () => <div class="s-button-group">{slots.default?.()}</div>;
  }
});
