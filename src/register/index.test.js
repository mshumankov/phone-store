import React from 'react';
import Register from './index';
import renderer, { act } from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('Register component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Register />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('should render correctly when change pssword view', () => {
        let component;
        act(() => {
            component = renderer.create(
                <Register />
            );
        });

        const instance = component.root;
        const span = instance.findAllByType('span')[1];

        act(() => { span.props.onClick() });
        expect(instance.findByProps({ name: "password" }).props.type).toBe('text');

        act(() => { span.props.onClick() });
        expect(instance.findByProps({ name: "password" }).props.type).toBe('password');
    });

    test('should render correctly when change rePssword view', () => {
        let component;
        act(() => {
            component = renderer.create(
                <Register />
            );
        });

        const instance = component.root;
        const span = instance.findAllByType('span')[2];

        act(() => { span.props.onClick() });
        expect(instance.findByProps({ name: "rePassword" }).props.type).toBe('text');

        act(() => { span.props.onClick() });
        expect(instance.findByProps({ name: "rePassword" }).props.type).toBe('password');
    });

    test('should render correctly when press button', () => {
        let component;
        act(() => {
            component = renderer.create(
                <Register />
            );
        });
        expect(component.toJSON()).toMatchSnapshot();
        const instance = component.root;
        const button = instance.findByType('button');

        act(() => { button.props.onClick() });
        expect(component.toJSON()).toMatchSnapshot();
    })
});