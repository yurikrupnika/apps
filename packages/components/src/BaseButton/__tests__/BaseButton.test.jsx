import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import Component from '../BaseButton';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {};
    render(<Component {...props}>Title</Component>);
});
