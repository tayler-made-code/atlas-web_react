import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('courseReducer', () => {
  it('should return the default state', () => {
    const initialState = Map();
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the normalized data when FETCH_COURSE_SUCCESS is passed', () => {
    const initialState = Map();
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
    const expectedState = Map({
      1: { id: 1, name: "ES6", credit: 60 },
      2: { id: 2, name: "Webpack", credit: 20 },
      3: { id: 3, name: "React", credit: 40 }
    });
    const state = courseReducer(initialState, { type: FETCH_COURSE_SUCCESS, data });
    expect(state).toEqual(expectedState);
  });

  it('should update the isSelected property when SELECT_COURSE is passed', () => {
    const initialState = Map({
      1: Map({ id: 1, name: "ES6", isSelected: false, credit: 60 }),
      2: Map({ id: 2, name: "Webpack", isSelected: false, credit: 20 }),
      3: Map({ id: 3, name: "React", isSelected: false, credit: 40 })
    });
    const expectedState = Map({
      1: Map({ id: 1, name: "ES6", isSelected: false, credit: 60 }),
      2: Map({ id: 2, name: "Webpack", isSelected: true, credit: 20 }),
      3: Map({ id: 3, name: "React", isSelected: false, credit: 40 })
    });
    const state = courseReducer(initialState, { type: SELECT_COURSE, index: 2 });
    expect(state).toEqual(expectedState);
  });

  it('should update the isSelected property when UNSELECT_COURSE is passed', () => {
    const initialState = Map({
      1: Map({ id: 1, name: "ES6", isSelected: false, credit: 60 }),
      2: Map({ id: 2, name: "Webpack", isSelected: true, credit: 20 }),
      3: Map({ id: 3, name: "React", isSelected: false, credit: 40 })
    });
    const expectedState = Map({
      1: Map({ id: 1, name: "ES6", isSelected: false, credit: 60 }),
      2: Map({ id: 2, name: "Webpack", isSelected: false, credit: 20 }),
      3: Map({ id: 3, name: "React", isSelected: false, credit: 40 })
    });
    const state = courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 });
    expect(state).toEqual(expectedState);
  });
});