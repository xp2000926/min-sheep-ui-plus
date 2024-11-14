import { defineComponent } from 'vue';
import { CarouselProps, carouselProps } from './carousel-type';
import '../../index.scss';
import '../style/carousel.scss';

export default defineComponent({
  name: 'SCarousel',
  props: carouselProps,
  setup(props: CarouselProps) {
    return () => <div class="s-carousel">carousel</div>
  }
});