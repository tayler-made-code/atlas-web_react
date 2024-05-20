import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('App', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('does not contain the CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe('App when isLoggedIn is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
      wrapper.setState({ user: { isLoggedIn: true } });
    });
    
    it('does not contain the Login component', () => {
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('contains the CourseList component', () => {
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  it('calls logOut and alert when control and h are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(<App logOut={logOutMock} />);

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
    wrapper.unmount();
  });

  it('has a default state for displayDrawer of false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('sets the displayDrawer state correctly', () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('updates the state correctly when logIn is called', () => {
    const wrapper = shallow(<App />);
    const email = 'test@email.com';
    const password = 'testpassword';
    wrapper.instance().logIn(email, password);
    expect(wrapper.state().user).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  it('updates the state correctly when logOut is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });
});