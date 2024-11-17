import { defineComponent } from 'vue';
import { TableProps, tableProps } from './table-type';

export default defineComponent({
  name: 'STable',
  props: tableProps,
  setup(props: TableProps) {
    return () => <div class="s-table">table</div>
  }
});
