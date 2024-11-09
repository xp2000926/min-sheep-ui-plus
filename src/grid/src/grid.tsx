import { defineComponent } from 'vue';
import { GridProps, gridProps } from './grid-type';
import '../../index.scss';
import '../style/grid.scss';

export default defineComponent({
  name: 'SGrid',
  props: gridProps,
  setup(props: GridProps) {
    return () => <div class="s-grid">grid</div>
  }
});
