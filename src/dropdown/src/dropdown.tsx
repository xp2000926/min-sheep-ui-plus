import { defineComponent } from 'vue';
import { DropdownProps, dropdownProps } from './dropdown-type';
import '../../index.scss';
import '../style/dropdown.scss';

export default defineComponent({
  name: 'SDropdown',
  props: dropdownProps,
  setup(props: DropdownProps) {
    return () => <div class="s-dropdown">dropdown</div>
  }
});
