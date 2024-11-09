import { defineComponent } from 'vue';
import { messageBoxProps, MessageBoxProps } from './message-box-type';
import '../../index.scss';
import '../style/message-box.scss';

export default defineComponent({
  name: 'SMessageBox',
  props: messageBoxProps,
  setup(props: MessageBoxProps) {
    return () => <div class="s-message-box">message-box</div>
  }
});
