import { defineComponent } from 'vue';
import { MenuProps, menuProps } from './menu-type';

export default defineComponent({
  name: 'SMenu',
  props: menuProps,
  setup(props: MenuProps) {
    return () => <div class="s-menu">menu</div>
  }
});
