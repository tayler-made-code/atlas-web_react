import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe ('Login Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 3 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('submit button is enabled after email and password are filled in', () => {
    const wrapper = shallow(<Login />);

    const submitButtonBefore = wrapper.find('input[type="submit"]');
    expect(submitButtonBefore.prop('disabled')).toBe(true);

    const emailInput = wrapper.find('input[type="email"]');
    emailInput.simulate('change', { target: { value: 'obiwan@jedi.com' } });

    const submitButtonDuring = wrapper.find('input[type="submit"]');
    expect(submitButtonDuring.prop('disabled')).toBe(true);

    const passwordInput = wrapper.find('input[type="password"]');
    passwordInput.simulate('change', { target: { value: 'kenobi123' } });

    const submitButtonAfter = wrapper.find('input[type="submit"]');
    expect(submitButtonAfter.prop('disabled')).toBe(false);
  });
});