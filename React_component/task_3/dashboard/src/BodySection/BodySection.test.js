import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('should render correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    );
    
    const h2Element = wrapper.find('h2');
    const pElement = wrapper.find('p');

    expect(h2Element).toHaveLength(1);
    expect(h2Element.text()).toBe('test title');

    expect(pElement).toHaveLength(1);
    expect(pElement.text()).toBe('test children node');
  });
});