// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });

import { configure } from 'enzyme';
// import Adapter from '@wo/enzyme-adapter-react-17';
// import Adapter from 'enzyme-adapter-react-17';
// import Adapter from 'enzyme-adapter-react-15';
import Adapter from 'enzyme-adapter-react-18';

configure({ adapter: new Adapter() });