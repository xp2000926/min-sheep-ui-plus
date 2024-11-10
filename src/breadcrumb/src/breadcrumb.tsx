import { defineComponent } from 'vue';
import { BreadcrumbProps, breadcrumbProps } from './breadcrumb-type';
import '../../index.scss';
import '../style/breadcrumb.scss';

export default defineComponent({
  name: 'SBreadcrumb',
  props: breadcrumbProps,
  setup(props: BreadcrumbProps) {
    return () => <div class="s-breadcrumb">breadcrumb</div>
  }
});
