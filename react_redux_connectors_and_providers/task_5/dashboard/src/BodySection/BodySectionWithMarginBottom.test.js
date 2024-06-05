import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom', () => {
  it('renders correctly a BodySection component and passes props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);

    expect(bodySection.exists()).toBe(true);
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.contains(<p>test children node</p>)).toBe(true);
  });
});
