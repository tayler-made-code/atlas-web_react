import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
    expect(wrapper.find('th').text()).toBe('Header');
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').first().text()).toBe('Header');
    expect(wrapper.find('th').last().text()).toBe('Subheader');
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Course" textSecondCell="Credit" />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('td').first().text()).toBe('Course');
    expect(wrapper.find('td').last().text()).toBe('Credit');
  });
});