import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe ('Login Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});