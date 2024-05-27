import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<AppContext.Provider value={{ user: { isLoggedIn: false } }}><Footer /></AppContext.Provider>);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not display the link when the user is logged out', () => {
    const wrapper = shallow(<AppContext.Provider value={{ user: { isLoggedIn: false } }}><Footer /></AppContext.Provider>);
    expect(wrapper.text().includes('Contact us')).toBe(false);
  });

  it('displays the link when the user is logged in', () => {
    const loggedInUser = { email: 'user@email.com', isLoggedIn: true };
    const wrapper = mount(<AppContext.Provider value={{ user: loggedInUser }}><Footer /></AppContext.Provider>);
    expect(wrapper.text().includes('Contact us')).toBe(true);
  });
});