import React from 'react';
import { mount } from 'enzyme';

import TestContainer from '../index.jsx';

describe('Test', () => {
    describe('Contstruction', () => {
        it('should exist', () => {
            const testContainer = mount(<TestContainer />);
            expect(testContainer.find('.test').length).toEqual(1);
        });
    });
});
