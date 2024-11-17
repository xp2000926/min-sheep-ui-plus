import { defineComponent } from 'vue';
import { AlertProps, alertProps } from './alert-type';

export default defineComponent({
  name: 'SAlert',
  props: alertProps,
  setup(props: AlertProps) {
    return () => <div class="s-alert">alert</div>
  }
});
