import { defineComponent } from 'vue';
import { WatermarkProps, watermarkProps } from './watermark-type';
import '../../index.scss';
import '../style/watermark.scss';

export default defineComponent({
  name: 'SWatermark',
  props: watermarkProps,
  setup(props: WatermarkProps) {
    return () => <div class="s-watermark">watermark</div>
  }
});
