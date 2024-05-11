import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('should render correctly a BodySection component and pass the props correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    
    const bodySectionComponent = wrapper.find(BodySection);

    expect(bodySectionComponent).toHaveLength(1);
    expect(bodySectionComponent).prop('title').toBe('test title');
    expect(bodySectionComponent).prop('children').toEqual(<p>test children node</p>);
  });

  it('should have the correct CSS style', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    const divElement = wrapper.find('div');

    expect(divElement).prop('className').toBe('bodySectionWithMargin');
  });
});