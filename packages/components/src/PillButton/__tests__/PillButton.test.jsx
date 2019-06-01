import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import Component from '../PillButton';

afterEach(cleanup);

const props = {
    onClick: jest.fn()
};

test(`render ${Component.name} Component`, () => {
    render(
        <Component {...props}>
            lol
        </Component>
    );
});

test(`render ${Component.name} click event`, () => {
    render(
        <Component {...props}>
            lol
        </Component>
    );
    // fireEvent.click(getByText(/lol/i));
});
