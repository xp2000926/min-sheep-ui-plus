import { defineComponent } from 'vue';
import { CalendarProps, calendarProps } from './calendar-type';
import '../../index.scss';
import '../style/calendar.scss';

export default defineComponent({
  name: 'SCalendar',
  props: calendarProps,
  setup(props: CalendarProps) {
    return () => <div class="s-calendar">calendar</div>
  }
});
