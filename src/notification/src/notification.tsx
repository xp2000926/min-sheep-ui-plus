import { defineComponent } from 'vue';
import { NotificationProps, notificationProps } from './notification-type';

export default defineComponent({
  name: 'SNotification',
  props: notificationProps,
  setup(props: NotificationProps) {
    return () => <div class="s-notification">notification</div>
  }
});
