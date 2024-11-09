import { defineComponent } from 'vue';
import { TooltipProps, tooltipProps } from './tooltip-type';
import '../../index.scss';
import '../style/tooltip.scss';

export default defineComponent({
  name: 'STooltip',
  props: tooltipProps,
  setup(props: TooltipProps) {
    return () => <div class="s-tooltip">tooltip</div>
  }
});
