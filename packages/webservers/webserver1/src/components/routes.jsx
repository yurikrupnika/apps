import React from 'react';
import Shows from './Shows';
import Projects from './Projects';
// import Users from './Users';
// import usersRoute from '../services/users';

const routes = [
    {
        path: '/shows',
        component: Shows,
        key: 'Shows',
        exact: true,
    },
    {
        path: '/shows/:id',
        component: (props) => {
            const { match } = props; // eslint-disable-line
            const { params } = match; // eslint-disable-line
            const { id } = params; // eslint-disable-line
            return (
                <div>
                    {id}
                </div>
            );
        },
        key: 'project',
        hide: true
    },
    {
        path: '/projects',
        component: Projects,
        key: 'Projects'
    }
];

export default routes;
