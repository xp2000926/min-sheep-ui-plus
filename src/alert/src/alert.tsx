import { defineComponent } from 'vue';
import { AlertProps, alertProps } from './alert-type';
import '../../index.scss';
import '../style/alert.scss';

export default defineComponent({
  name: 'SAlert',
  props: alertProps,
  setup(props: AlertProps) {
    return () => <div class="s-alert">alert</div>
  }
});
