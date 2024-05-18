import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
  },
  headerCell: {
    backgroundColor: "#deb5b545",
  },
  defaultCell: {
    backgroundColor: "#f5f5f5ab",
  },
});

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const cellStyle = isHeader ? styles.headerCell : styles.defaultCell;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(rowStyle)}>
          <th className={css(cellStyle)} colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(rowStyle)}>
          <th className={css(cellStyle)}>{textFirstCell}</th>
          <th className={css(cellStyle)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(rowStyle)}>
        <td className={css(cellStyle)}>{textFirstCell}</td>
        <td className={css(cellStyle)}>{textSecondCell}</td>
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