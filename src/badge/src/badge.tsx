import { defineComponent } from 'vue';
import { BadgeProps, badgeProps } from './badge-type';
import '../../index.scss';
import '../style/badge.scss';

export default defineComponent({
  name: 'SBadge',
  props: badgeProps,
  setup(props: BadgeProps) {
    return () => <div class="s-badge">badge</div>
  }
});
