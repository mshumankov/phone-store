import React from 'react';
import Price from './index';
import renderer from 'react-test-renderer';

describe('Price component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Price />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('should render correctly if price is 100$', () => {
        const component = renderer.create(
            <Price priceAll={100} />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('should render correctly if price is 100$ and priceMonth = true', () => {
        const component = renderer.create(
            <Price priceAll={100} priceMonth={true} />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('should render correctly if update price with 100$ and priceMonth = true', () => {
        let component;
        renderer.act(() => {
            component = renderer.create(<Price />)
        });

        expect(component.toJSON()).toMatchSnapshot();

        renderer.act(() => {
            component.update(<Price priceAll={100} />)
        });

        expect(component.toJSON()).toMatchSnapshot();

        renderer.act(() => {
            component.update(<Price priceAll={100} priceMonth={true} />)
        });

        expect(component.toJSON()).toMatchSnapshot();
    })


})