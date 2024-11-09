import { defineComponent } from 'vue';
import { MessageProps, messageProps } from './message-type';
import '../../index.scss';
import '../style/message.scss';

export default defineComponent({
  name: 'SMessage',
  props: messageProps,
  setup(props: MessageProps) {
    return () => <div class="s-message">message</div>
  }
});
