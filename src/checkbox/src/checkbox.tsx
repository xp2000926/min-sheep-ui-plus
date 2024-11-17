import { defineComponent } from 'vue';
import { CheckboxProps, checkboxProps } from './checkbox-type';

export default defineComponent({
  name: 'SCheckbox',
  props: checkboxProps,
  setup(props: CheckboxProps) {
    return () => <div class="s-checkbox">checkbox</div>
  }
});
