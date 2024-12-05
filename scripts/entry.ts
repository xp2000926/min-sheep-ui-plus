// 人口文件
// 1.引入实现组件批量导出去
import type { App } from 'vue';
import ButtonPlugin, { Button, ButtonGroup } from '../src/button'; // 按钮
import EmptyPlugin, { Empty } from '../src/empty'; // 空状态
import TreePlugin, { Tree } from '../src/tree'; // 空状态
import FlexPlugin, { Flex } from '../src/flex'; // 弹性布局
import BadgePlugin, { Badge } from '../src/badge'; // 徽章
import RadioPlugin, { Radio } from '../src/radio'; // 单选框
import CalendarPlugin, { Calendar } from '../src/calendar'; // 日历
import TabsPlugin, { Tabs, Tab } from '../src/tabs'; // 标签页
import TriggerPlugin, { Trigger } from '../src/trigger'; // 触发器
import SwitchPlugin, { Switch } from '../src/switch'; // 开关

// 2.导出这些组件
export {
  Button,
  ButtonGroup,
  Empty,
  Tree,
  Flex,
  Badge,
  Radio,
  Calendar,
  Tabs,
  Tab,
  Trigger,
  Switch
};
const installs = [
  ButtonPlugin,
  EmptyPlugin,
  TreePlugin,
  FlexPlugin,
  BadgePlugin,
  RadioPlugin,
  CalendarPlugin,
  TabsPlugin,
  TriggerPlugin,
  SwitchPlugin
];
// 3.导出一个vue插件
export default {
  install(app: App) {
    installs.forEach(p => app.use(p));
  }
};
