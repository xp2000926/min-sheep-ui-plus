import { defineComponent } from 'vue';
import { SwitchProps, switchProps } from './switch-type';

export default defineComponent({
  name: 'SSwitch',
  props: switchProps,
  setup(props: SwitchProps) {
    return () => <div class="s-switch">switch</div>
  }
});
