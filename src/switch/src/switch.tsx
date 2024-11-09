import { defineComponent } from 'vue';
import { SwitchProps, switchProps } from './switch-type';
import '../../index.scss';
import '../style/switch.scss';

export default defineComponent({
  name: 'SSwitch',
  props: switchProps,
  setup(props: SwitchProps) {
    return () => <div class="s-switch">switch</div>
  }
});
