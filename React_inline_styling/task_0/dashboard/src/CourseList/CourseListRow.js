import React from 'react';
import PropTypes from 'prop-types';

const headerRowStyle = { backgroundColor: "#deb5b545" };
const rowStyle = { backgroundColor: "#f5f5f5ab" };

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" style={headerRowStyle}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th style={headerRowStyle}>{textFirstCell}</th>
          <th style={headerRowStyle}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td style={rowStyle}>{textFirstCell}</td>
        <td style={rowStyle}>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;