import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { AppContext } from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header Component', () => {
  it('renders without crashing', () => {
    const defaultUser = { isLoggedIn: false };
    const context = { user: defaultUser, logOut: jest.fn() };
    shallow(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
  });

  it('renders img and h1 tags', () => {
    const defaultUser = { isLoggedIn: false };
    const context = { user: defaultUser, logOut: jest.fn() };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('does not render logoutSection when user is not logged in', () => {
    const defaultContext = { user: { isLoggedIn: false }, logOut: jest.fn() };
    const wrapper = mount(
      <AppContext.Provider value={defaultContext}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const loggedInUser = { email: 'user@email.com', isLoggedIn: true };
    const context = { user: loggedInUser, logOut: jest.fn() };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const loggedInUser = { email: 'user@email.com', isLoggedIn: true };
    const context = { user: loggedInUser, logOut: logOutSpy };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});