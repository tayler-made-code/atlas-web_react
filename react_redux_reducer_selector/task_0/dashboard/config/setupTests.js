import util from 'util';

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});

import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });