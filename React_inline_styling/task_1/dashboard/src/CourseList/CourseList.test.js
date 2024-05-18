import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 3 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(3);
  });

  describe('With empty listCourses', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders correctly if listCourses is empty or not provided', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('displays the message "No course available yet"', () => {
      const wrapper = shallow(<CourseList />);
      const courseListRows = wrapper.find(CourseListRow).last();
      expect(courseListRows.prop('textFirstCell')).toBe('No course available yet');
    });
  });

  describe('With listCourses containing elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the correct number of CourseListRow components', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length + 2);
    });

    it('renders the correct list of courses', () => {
      const courseListRows = wrapper.find(CourseListRow);
      expect(courseListRows.at(2).prop('textFirstCell')).toBe('ES6');
      expect(courseListRows.at(2).prop('textSecondCell')).toBe(60);
      expect(courseListRows.at(3).prop('textFirstCell')).toBe('Webpack');
      expect(courseListRows.at(3).prop('textSecondCell')).toBe(20);
      expect(courseListRows.at(4).prop('textFirstCell')).toBe('React');
      expect(courseListRows.at(4).prop('textSecondCell')).toBe(40);
    });
  });
});