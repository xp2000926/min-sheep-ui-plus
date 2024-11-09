import { defineComponent } from 'vue';
import { StepsProps, stepsProps } from './steps-type';
import '../../index.scss';
import '../style/steps.scss';

export default defineComponent({
  name: 'SSteps',
  props: stepsProps,
  setup(props: StepsProps) {
    return () => <div class="s-steps">steps</div>
  }
});
