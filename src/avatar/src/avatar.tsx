import { defineComponent } from 'vue';
import { AvatarProps, avatarProps } from './avatar-type';
import '../../index.scss';
import '../style/avatar.scss';

export default defineComponent({
  name: 'SAvatar',
  props: avatarProps,
  setup(props: AvatarProps) {
    return () => <div class="s-avatar">avatar</div>
  }
});
