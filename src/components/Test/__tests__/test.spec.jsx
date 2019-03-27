import React from 'react';
import { mount } from 'enzyme';

import Test from '../index.jsx';

describe('Test', () => {
    describe('Contstruction', () => {
        it('should exist', () => {
            const testComponent = mount(<Test />);
            expect(testComponent.find('.test').length).toEqual(1);
        });
    });
});
