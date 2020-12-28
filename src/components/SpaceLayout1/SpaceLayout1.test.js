import React from 'react';
import { shallow } from 'enzyme';
import SpaceLayout1 from './SpaceLayout1';

describe('<SpaceLayout1 />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SpaceLayout1 />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
