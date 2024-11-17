import { defineComponent } from 'vue';
import { TreeProps, treeProps } from './tree-type';

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    return () => <div class="s-tree">tree</div>
  }
});