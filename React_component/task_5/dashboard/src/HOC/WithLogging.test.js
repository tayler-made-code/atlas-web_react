import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log when the wrapped element is pure HTML', () => {
    const HtmlComponent = WithLogging(() => <p />);
    const wrapper = mount(<HtmlComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should log when the wrapped element is the Login component', () => {
    const WrappedLogin = WithLogging(Login);
    const wrapper = mount(<WrappedLogin />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});