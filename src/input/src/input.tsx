import { defineComponent } from 'vue';
import { InputProps, inputProps } from './input-type';
import '../../index.scss';
import '../style/input.scss';

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  setup(props: InputProps) {
    return () => <div class="s-input">input</div>
  }
});
