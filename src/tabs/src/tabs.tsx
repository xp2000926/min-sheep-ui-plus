import { defineComponent } from 'vue';
import { TabsProps, tabsProps } from './tabs-type';
import '../../index.scss';
import '../style/tabs.scss';

export default defineComponent({
  name: 'STabs',
  props: tabsProps,
  setup(props: TabsProps) {
    return () => <div class="s-tabs">tabs</div>
  }
});
