import { defineComponent } from 'vue';
import { dividerProps, DividerProps } from './divider-type';
import '../../index.scss';
import '../style/divider.scss';

export default defineComponent({
  name: 'SDivider',
  props: dividerProps,
  setup(props: DividerProps) {
    return () => <div class="s-divider">divider</div>;
  }
});
