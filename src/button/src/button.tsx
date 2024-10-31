import { computed, defineComponent, toRefs } from 'vue';
import { buttonProps, ButtonProps } from './button-type';

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props);
    const className = computed(() => ({
      's-button': true,
      [`s-button--${type.value}`]:
        type.value == '' || type.value == 'default' ? false : true
    }));
    return () => {
      const defaultslot = slots.default ? slots.default() : '';
      return <button class={className.value}>{defaultslot}</button>;
    };
  }
});
