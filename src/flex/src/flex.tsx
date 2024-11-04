import { defineComponent, toRefs } from 'vue';
import { FlexProps, flexProps } from './flex-type';
import '../../index.scss';
import '../style/flex.scss';

export default defineComponent({
  name: 'SFlex',
  props: flexProps,
  setup(props: FlexProps, { slots }) {
    const { vertical } = toRefs(props);
    return () => <div class="s-flex">{slots.default?.()}</div>;
  }
});
