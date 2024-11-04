import { defineComponent } from 'vue';
import { TreeProps, treeProps } from './tree-type';
import '../../index.scss';
import '../style/tree.scss';

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    return () => <div class="s-tree">tree</div>
  }
});