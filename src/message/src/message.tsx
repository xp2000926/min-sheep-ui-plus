import { defineComponent } from 'vue';
import { MessageProps, messageProps } from './message-type';

export default defineComponent({
  name: 'SMessage',
  props: messageProps,
  setup(props: MessageProps) {
    return () => <div class="s-message">message</div>
  }
});
