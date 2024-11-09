import { defineComponent } from 'vue';
import { NotificationProps, notificationProps } from './notification-type';
import '../../index.scss';
import '../style/notification.scss';

export default defineComponent({
  name: 'SNotification',
  props: notificationProps,
  setup(props: NotificationProps) {
    return () => <div class="s-notification">notification</div>
  }
});
