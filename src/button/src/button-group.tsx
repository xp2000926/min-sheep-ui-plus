import { defineComponent } from 'vue';
// import { tabProps, TabProps } from './button-group-type';

export default defineComponent({
  name: 'SButtonGroup',
  setup(_, { slots }) {
    return () => <div class="s-button-group">{slots.default?.()}</div>;
  }
});
