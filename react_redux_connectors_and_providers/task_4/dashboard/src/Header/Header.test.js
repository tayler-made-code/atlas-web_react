import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('does not render logoutSection when user is not logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const wrapper = shallow(<Header user={{ email: 'user@test.com', isLoggedIn: true }} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls logOut function when logout link is clicked', () => {
    const wrapper = shallow(<Header user={{ email: 'user@test.com', isLoggedIn: true }} />);
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});