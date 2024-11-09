import { defineComponent } from 'vue';
import { TourProps, tourProps } from './tour-type';
import '../../index.scss';
import '../style/tour.scss';

export default defineComponent({
  name: 'STour',
  props: tourProps,
  setup(props: TourProps) {
    return () => <div class="s-tour">tour</div>
  }
});
