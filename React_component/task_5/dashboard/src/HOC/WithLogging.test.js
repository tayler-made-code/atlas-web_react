import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
  let logMock;
  const resetLogMock = () => {
    logMock = jest.spyOn(console, 'log').mockImplementation(() => {});
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('logs to console on mount and unmount with pure HTML element', () => {
    resetLogMock();
    const HTMLComponent = WithLogging(() => <p />);
    const wrapper = mount(<HTMLComponent />);
    expect(logMock).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(logMock).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs to console on mount and unmount with Login component', () => {
    resetLogMock();
    const LoginWithLogging = WithLogging(Login);
    const wrapper = mount(<LoginWithLogging />);
    expect(logMock).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(logMock).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});