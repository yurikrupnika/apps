import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Component from '../index';

const {
    test,
    afterEach
} = global;

afterEach(cleanup);

test('render movies with hooks', () => {
    const props = {};
    render(<Component {...props} />);
});
