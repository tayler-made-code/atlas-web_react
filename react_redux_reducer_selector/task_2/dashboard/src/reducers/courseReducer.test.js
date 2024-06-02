import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state', () => {
    const initialState = [];
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the data passed when FETCH_COURSE_SUCCESS is passed', () => {
    const initialState = [];
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ];
    const expectedState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const state = courseReducer(initialState, { type: FETCH_COURSE_SUCCESS, data });
    expect(state).toEqual(expectedState);
  });

  it('should return the data with the right item updated when SELECT_COURSE is passed', () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const expectedState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const state = courseReducer(initialState, { type: SELECT_COURSE, index: 2 });
    expect(state).toEqual(expectedState);
  });

  it('should return the data with the right item updated when UNSELECT_COURSE is passed', () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const expectedState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const state = courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 });
    expect(state).toEqual(expectedState);
  });
});