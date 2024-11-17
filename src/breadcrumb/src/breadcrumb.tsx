import { defineComponent } from 'vue';
import { BreadcrumbProps, breadcrumbProps } from './breadcrumb-type';

export default defineComponent({
  name: 'SBreadcrumb',
  props: breadcrumbProps,
  setup(props: BreadcrumbProps) {
    return () => <div class="s-breadcrumb">breadcrumb</div>
  }
});
