import { defineComponent, toRefs } from 'vue';
import { BadgeProps, badgeProps } from './badge-type';
import '../../index.scss';
import '../style/badge.scss';

export default defineComponent({
  name: 'SBadge',
  props: badgeProps,
  setup(props: BadgeProps, { slots }) {
    const { value, isDot } = toRefs(props);
    return () => (
      <div class="s-badge">
        {slots.default?.()}
        <sup
          class={['s-badge__content', 'is-fixed', isDot.value ? 'is-dot' : '']}
        >
          {isDot.value ? '' : value.value}
        </sup>
      </div>
    );
  }
});
