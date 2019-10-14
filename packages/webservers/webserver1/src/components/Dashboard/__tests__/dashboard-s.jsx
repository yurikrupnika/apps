import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from '../index';
import Overlays from '../Overlays';
import Activity from '../Activity';
import Main from '../Main';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {};
    // expect(1).toBe(1);
    render((
        <BrowserRouter>
            <Component {...props}>Title</Component>
        </BrowserRouter>
    )); // eslint-disable-line
});

test(`render ${Overlays.name} Component`, () => {
    const props = {};
    // expect(1).toBe(1);
    render(<Overlays {...props}>Title</Overlays>); // eslint-disable-line
});
test(`render ${Activity.name} Component`, () => {
    const props = {};
    // expect(1).toBe(1);
    render(<Activity {...props}>Title</Activity>); // eslint-disable-line
});
test(`render ${Main.name} Component`, () => {
    const props = {};
    // expect(1).toBe(1);
    render((
        <BrowserRouter>
            <Main {...props}>Title</Main>
        </BrowserRouter>
    )); // eslint-disable-line
});
