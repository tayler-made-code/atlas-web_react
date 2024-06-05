import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    const h2Element = wrapper.find('h2');
    const pElement = wrapper.find('p');

    expect(h2Element.exists()).toBe(true);
    expect(h2Element.text()).toBe('test title');

    expect(pElement.exists()).toBe(true);
    expect(pElement.text()).toBe('test children node');
  });
});