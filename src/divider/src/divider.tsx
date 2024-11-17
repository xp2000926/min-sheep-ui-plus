import { defineComponent } from 'vue';
import { dividerProps, DividerProps } from './divider-type';

export default defineComponent({
  name: 'SDivider',
  props: dividerProps,
  setup(props: DividerProps) {
    return () => <div class="s-divider">divider</div>;
  }
});
