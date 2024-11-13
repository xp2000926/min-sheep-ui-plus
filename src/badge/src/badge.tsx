import { defineComponent, toRefs, computed } from 'vue';
import { BadgeProps, badgeProps } from './badge-type';

export default defineComponent({
  name: 'SBadge',
  props: badgeProps,
  setup(props: BadgeProps, { slots }) {
    const { value, max, isDot, type } = toRefs(props);
    const className = computed(() => ({
      's-badge--content': true,
      'is-fixed': true,
      'is-dot': isDot.value,
      [`s-badge--${type.value}`]:
        type.value == '' || type.value == 'default' ? false : true
    }));
    return () => (
      <div class="s-badge">
        {slots.default?.()}
        <sup class={className.value}>
          {value.value == 0
            ? ''
            : isDot.value
              ? ''
              : max.value == 0
                ? `${value.value}`
                : Number(value.value) > max.value
                  ? `${max.value}+`
                  : value.value}
        </sup>
      </div>
    );
  }
});
