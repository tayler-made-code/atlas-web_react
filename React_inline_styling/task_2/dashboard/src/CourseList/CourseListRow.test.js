import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is True', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available Courses" />);
    expect(wrapper.find('th').prop('colSpan')).toEqual("2");
    expect(wrapper.find('th').text()).toEqual('Available Courses');
  });

  it('renders two cells when textSecondCell is present and isHeader is True', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Credit" />);
    const cells = wrapper.find('th');
    expect(cells.length).toEqual(2);
    expect(cells.at(0).text()).toEqual('Course Name');
    expect(cells.at(1).text()).toEqual('Credit');
  });

  it('renders correctly two td elements within a tr element when isHeader is False', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />);
    const cells = wrapper.find('td');
    expect(cells.length).toEqual(2);
    expect(cells.at(0).text()).toEqual('ES6');
    expect(cells.at(1).text()).toEqual('60');
    expect(wrapper.find('tr').children()).toHaveLength(2);
  });

  it('renders correctly the background color when isHeader is True', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available Courses" textSecondCell="Credit" />);
    const thElement = wrapper.find('th');
    expect(thElement.first().prop('className')).toContain('headerCell');
    const trElement = wrapper.find('tr');
    expect(trElement.prop('className')).toContain('headerRow');
  });

  it('renders correctly the background color when isHeader is False', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />);
    const tdElements = wrapper.find('td');
    expect(tdElements.first().prop('className')).toContain('defaultCell');
    const trElement = wrapper.find('tr');
    expect(trElement.prop('className')).toContain('defaultRow');
  });
});