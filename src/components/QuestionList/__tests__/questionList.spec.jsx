import React from 'react';
import { mount } from 'enzyme';

import QuestionList from '../index.jsx';

describe('Question List', () => {
    describe('Contstruction', () => {
        it('should exist', () => {
            const buttonComponent = mount(<QuestionList />);
            expect(buttonComponent.find('.question-list').length).toEqual(1);
        });
    });
});
