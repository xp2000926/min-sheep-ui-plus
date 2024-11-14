import { defineComponent, toRefs } from 'vue';
import { RadioProps, radioProps } from './radio-type';
import classNames from 'classnames';

export default defineComponent({
  name: 'SRadio',
  props: radioProps,
  emits: ['update:modelValue'],
  setup(props: RadioProps, { slots, emit }) {
    const { modelValue, label } = toRefs(props);
    console.log('modelValue', modelValue.value, 'label', label.value);

    return () => (
      <label class="s-radio is-checked">
        <span
          onClick={() => {
            emit('update:modelValue', label.value);
          }}
          class={classNames('s-radio__input', {
            'is-checked': modelValue.value == label.value
          })}
        >
          <span class="s-radio__inner"></span>
          <input
            type="radio"
            aria-hidden="true"
            tabindex="-1"
            autocomplete="off"
            class="s-radio__original"
            value={modelValue.value}
          />
        </span>
        <span class="s-radio__label">{slots.default?.()}</span>
      </label>
    );
  }
});
