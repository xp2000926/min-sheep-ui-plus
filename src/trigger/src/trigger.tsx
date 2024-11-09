import { defineComponent } from 'vue';
import { TriggerProps, triggerProps } from './trigger-type';
import '../../index.scss';
import '../style/trigger.scss';

export default defineComponent({
  name: 'STrigger',
  props: triggerProps,
  setup(props: TriggerProps) {
    return () => <div class="s-trigger">trigger</div>
  }
});
