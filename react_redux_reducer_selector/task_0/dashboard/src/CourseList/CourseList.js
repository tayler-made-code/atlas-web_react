import React from 'react';
import CourseListRow from './CourseListRow';
import { css, StyleSheet } from 'aphrodite';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit' />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell='No course available yet' />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;