import { defineComponent, ref, toRefs } from 'vue';
import { CalendarProps, calendarProps } from './calendar-type';
import { Button, ButtonGroup } from '../../button/index';
import dayjs from 'dayjs';
import SMonthCalendar from './month-calendar';

export default defineComponent({
  name: 'SCalendar',
  props: calendarProps,
  emits: ['update:modelValue'],
  setup(props: CalendarProps) {
    const { modelValue } = toRefs(props);
    const date = ref(new Date(modelValue.value));
    const handlePrevMonth = () => {
      date.value = new Date(
        date.value.getFullYear(),
        date.value.getMonth() - 1,
        1
      );
    };

    const handleNextMonth = () => {
      date.value = new Date(
        date.value.getFullYear(),
        date.value.getMonth() + 1,
        1
      );
    };

    return () => (
      <div class="s-calendar">
        <div className="s-calendar--header">
          <div className="s-calendar-title">
            {dayjs(date.value).format('YYYY 月 MM 日')}
          </div>
          <ButtonGroup>
            <Button size="small" onClick={handlePrevMonth}>
              上个月
            </Button>
            <Button
              size="small"
              onClick={() => {
                date.value = new Date();
              }}
            >
              今天
            </Button>
            <Button size="small" onClick={handleNextMonth}>
              下个月
            </Button>
          </ButtonGroup>
        </div>
        <SMonthCalendar modelValue={date.value} key={date.value} />
      </div>
    );
  }
});
