import { defineComponent } from 'vue';
import { UploadProps, uploadProps } from './upload-type';
import '../../index.scss';
import '../style/upload.scss';

export default defineComponent({
  name: 'SUpload',
  props: uploadProps,
  setup(props: UploadProps) {
    return () => <div class="s-upload">upload</div>
  }
});
