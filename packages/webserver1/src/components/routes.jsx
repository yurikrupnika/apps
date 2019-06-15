import Shows from './Shows';
import Projects from './Projects';
import Users from './Users';
import usersRoute from '../services/users';

const routes = [
    {
        path: '/shows',
        component: Shows,
        key: 'Shows'
    },
    {
        path: '/projects',
        component: Projects,
        key: 'Projects'
    },

    usersRoute(),
    usersRoute(Users, '/more', 'More'),
];

export default routes;
