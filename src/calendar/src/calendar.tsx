import { defineComponent, toRefs } from 'vue';
import { CalendarProps, calendarProps } from './calendar-type';
import { Button, ButtonGroup } from '../../button/index';
import '../../index.scss';
import '../style/calendar.scss';

export default defineComponent({
  name: 'SCalendar',
  props: calendarProps,
  setup(props: CalendarProps) {
    const { modelValue } = toRefs(props);
    const formatDate = (dateString: Date, format = 'YYYY-MM-DD HH:mm:ss') => {
      const date = new Date(dateString),
        // 获取年月日时分秒
        yarn = date.getFullYear().toString().padStart(4, '0'),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        data = date.getDate().toString().padStart(2, '0'),
        day = date.getDay(),
        days = ['日', '一', '二', '三', '四', '五', '六'],
        hour = String(date.getHours()).padStart(2, '0'),
        minute = date.getMinutes().toString().padStart(2, '0'),
        second = date.getSeconds().toString().padStart(2, '0'),
        millisecond = date.getMilliseconds().toString().padStart(3, '0');
      // 替换目标格式的字符串
      return format
        .replace('YYYY', yarn)
        .replace('MM', month)
        .replace('DD', data)
        .replace('dd', days[day])
        .replace('HH', hour)
        .replace('mm', minute)
        .replace('ss', second)
        .replace('ms', millisecond);
    };

    return () => (
      <div class="s-calendar">
        <div className="s-calendar--header">
          <div className="s-calendar-title">
            {formatDate(modelValue.value, 'YYYY 月 MM 日')}
          </div>
          <ButtonGroup>
            <Button size="small">上个月</Button>
            <Button size="small">今天</Button>
            <Button size="small">下个月</Button>
          </ButtonGroup>
        </div>
        <div className="s-calendar--body"></div>
      </div>
    );
  }
});
