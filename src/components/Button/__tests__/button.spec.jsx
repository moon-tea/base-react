import React from 'react';
import { mount } from 'enzyme';
//import sinon from 'sinon';

import Button from '../index.jsx';

describe('Buttons', () => {
    const noop = () => {};

    describe('Contstruction', () => {
        it('should exist', () => {
            const buttonComponent = mount(<Button clickFn={noop} />);
            expect(buttonComponent.find('.btn').length).toEqual(1);
        });
    });

    describe('Appearance', () => {
        it('should set the type', () => {
            const buttonComponent = mount(<Button type={'foo'} clickFn={noop} />);
            expect(buttonComponent.find('.btn--foo').hostNodes()).toHaveLength(1);
        });

        it('should default type to lowercase', () => {
            const buttonComponent = mount(<Button type={'FoObAr'} clickFn={noop} />);
            expect(buttonComponent.find('.btn--foobar').hostNodes()).toHaveLength(1);
        });

        it('should default to a default type', () => {
            const buttonComponent = mount(<Button clickFn={noop} />);
            expect(buttonComponent.find('.btn--default').hostNodes()).toHaveLength(1);
        });

        it('should disable the button', () => {
            const buttonComponent = mount(<Button disabled={true} clickFn={noop} />);
            expect(buttonComponent.find('.btn--disabled').hostNodes()).toHaveLength(1);
            expect(buttonComponent).toHaveProp('disabled');
        });

        it('should add an additional class when specified', () => {
            const buttonComponent = mount(<Button className={'foobar'} clickFn={noop} />);
            expect(buttonComponent.find('.foobar').hostNodes()).toHaveLength(1); //.toEqual(1);
        });
    });

    describe('Event Binding', () => {
        it('should bind a click event when specified', () => {
            const clickSpy = jest.fn();
            const buttonComponent = mount(<Button clickFn={clickSpy} />);

            buttonComponent.find('button').simulate('click');
            expect(clickSpy.mock.calls.length).toEqual(1);
        });
    });
});
