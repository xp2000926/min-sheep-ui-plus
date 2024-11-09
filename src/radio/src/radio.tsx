import { defineComponent } from 'vue';
import { RadioProps, radioProps } from './radio-type';
import '../../index.scss';
import '../style/radio.scss';

export default defineComponent({
  name: 'SRadio',
  props: radioProps,
  setup(props: RadioProps) {
    return () => <div class="s-radio">radio</div>
  }
});
