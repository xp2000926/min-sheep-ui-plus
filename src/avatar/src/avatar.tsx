import { defineComponent } from 'vue';
import { AvatarProps, avatarProps } from './avatar-type';

export default defineComponent({
  name: 'SAvatar',
  props: avatarProps,
  setup(props: AvatarProps) {
    return () => <div class="s-avatar">avatar</div>
  }
});
