import { defineComponent } from 'vue';
import { CardProps, cardProps } from './card-type';


export default defineComponent({
  name: 'SCard',
  props: cardProps,
  setup(props: CardProps) {
    return () => <div class="s-card">card</div>
  }
});
