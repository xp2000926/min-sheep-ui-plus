import { defineComponent } from 'vue';
import { messageBoxProps, MessageBoxProps } from './message-box-type';

export default defineComponent({
  name: 'SMessageBox',
  props: messageBoxProps,
  setup(props: MessageBoxProps) {
    return () => <div class="s-message-box">message-box</div>
  }
});
