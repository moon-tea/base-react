import React from 'react';
import { mount } from 'enzyme';

import { defaultStore } from '../createStore.js';
import connectWithProvider from '../connectWithProvider.jsx';

describe('Create Connection With Provider Wrapper', () => {
    const Test = () => <div className="test">test</div>;

    const mapStateToProps = state => ({
        store: state,
    });

    const mapDispatchToProps = dispatch => ({
        dispatch: dispatch,
    });

    it('should render the passed in component', () => {
        const TestConnection = connectWithProvider(Test, mapStateToProps, mapDispatchToProps);
        const testElem = mount(<TestConnection store={defaultStore(() => {}, {})} />);
        expect(testElem.find('.test').length).toEqual(1);
    });
});
