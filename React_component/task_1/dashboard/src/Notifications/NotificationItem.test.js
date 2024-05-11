import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct html with type", () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.prop('data-notification-type')).toBe('default');
  });

  it("renders the correct html with value props", () => {
    const wrapper = shallow(<NotificationItem value="test" />);
    expect(wrapper.text()).toBe('test');
  });

  it('renders the correct html with html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});