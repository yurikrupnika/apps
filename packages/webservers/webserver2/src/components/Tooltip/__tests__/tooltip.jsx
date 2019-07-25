import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {
        title: 'tooltip title'
    };
    render(<Component {...props}><span>Title</span></Component>);
});
