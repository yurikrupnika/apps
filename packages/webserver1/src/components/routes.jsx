
import React from 'react';
import Shows from './Shows';

const routes = [
    {
        path: '/shows',
        component: Shows,
        key: 'Shows'
    },
    {
        path: '/alina',
        component: () => (
            <div>ssssss</div>
        ),
        key: 'Alina'
    },
    {
        path: '/stam',
        component: () => (
            <div>
                sss
            </div>
        ),
        key: 'Stam'
    }
];

export default routes;
