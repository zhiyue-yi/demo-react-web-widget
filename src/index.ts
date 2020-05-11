import 'babel-polyfill';
import { SimpleCalendar } from './simple-calendar';
import { HtmlTagWrapper } from './html-tag-wrapper';

const WrappedSimpleCalendar = HtmlTagWrapper(SimpleCalendar);

export default {
  SimpleCalendar: WrappedSimpleCalendar,
};
