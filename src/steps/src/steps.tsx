import { defineComponent } from 'vue';
import { StepsProps, stepsProps } from './steps-type';

export default defineComponent({
  name: 'SSteps',
  props: stepsProps,
  setup(props: StepsProps) {
    return () => <div class="s-steps">steps</div>
  }
});
