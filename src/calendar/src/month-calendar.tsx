import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref, toRefs } from 'vue';
import classnames from 'classnames';

export default defineComponent({
  name: 'SMonthCalendar',
  props: {
    modelValue: {
      type: Object as () => Dayjs,
      required: true
    }
  },
  setup(props) {
    const { modelValue } = toRefs(props);
    const weekList = ref([
      '周日',
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六'
    ]);
    const getAllDays = (date: Dayjs) => {
      const startDate = date.startOf('month');
      const day = startDate.day();
      const daysInfo:
        | Array<{ date: Dayjs; currentMonth: boolean; isToday: boolean }>
        | [] = new Array(6 * 7);
      for (let i = 0; i < day; i++) {
        daysInfo[i] = {
          date: startDate.subtract(day - i, 'day'),
          currentMonth: false,
          isToday: false
        };
      }

      for (let i = day; i < daysInfo.length; i++) {
        const calcDate = startDate.add(i - day, 'day');
        daysInfo[i] = {
          date: calcDate,
          currentMonth: calcDate.month() === date.month(),
          isToday: dayjs(date).isSame(calcDate, 'day')
        };
      }
      console.log('daysInfo', daysInfo);

      return daysInfo;
    };

    const allDays = getAllDays(dayjs(modelValue.value));
    function renderDays(
      days: Array<{
        isToday: boolean;
        date: Dayjs;
        currentMonth: boolean;
      }>
    ) {
      const rows = [];
      for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 7; j++) {
          const item = days[i * 7 + j];
          row[j] = (
            <div
              class={classnames({
                's-calendar-month-body-cell': true,
                's-calendar-month-body-cell-current': item.currentMonth,
                today: item.isToday
              })}
            >
              <span>{item.date.date()}</span>
            </div>
          );
        }
        rows.push(row);
      }
      return rows.map(row => (
        <div className="s-calendar-month-body-row">{row}</div>
      ));
    }
    return () => {
      return (
        <>
          <div class="s-week-list">
            {weekList.value.map(week => (
              <div class="s-week-list-item">{week}</div>
            ))}
          </div>
          <div class="s-calendar-month-body">{renderDays(allDays)}</div>
        </>
      );
    };
  }
});
