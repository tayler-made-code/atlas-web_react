import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not display the link when the user is logged out', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.text().includes('Contact us')).toBe(false);
  });

  it('displays the link when the user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    expect(wrapper.text().includes('Contact us')).toBe(true);
  });
});