import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter, StaticRouter, withRouter } from 'react-router-dom';
import Component from '../index';
import DashboardHeader from '../DashboardHeader';
import DefaultHeader from '../DefaultHeader';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {};
    // expect(1).toBe(1);
    const A = withRouter(Component);
    render(
        <BrowserRouter>
            <A {...props}>Title</A>
        </BrowserRouter>
    ); // eslint-disable-line
});


test(`render ${DashboardHeader.name} Component`, () => {
    const props = {
        regularRoutes: [
            {
                label: 1,
                url: 1
            }
        ],
        toggleOpen: jest.fn(),
        open: false
    };
    // expect(1).toBe(1);
    const A = withRouter(DashboardHeader);
    render(
        <BrowserRouter>
            <A {...props}>Title</A>
        </BrowserRouter>
    ); // eslint-disable-line
});

test(`render ${DefaultHeader.name} Component`, () => {
    const props = {
        regularRoutes: [
            {
                label: 1,
                url: 1
            }
        ],
        toggleOpen: jest.fn(),
        open: false
    };
    // expect(1).toBe(1);
    const A = withRouter(DefaultHeader);
    render(
        <BrowserRouter>
            <A {...props}>Title</A>
        </BrowserRouter>
    ); // eslint-disable-line
});
