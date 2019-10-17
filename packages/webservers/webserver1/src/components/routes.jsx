import React from 'react';
import loadable from '@loadable/component';
import Header from './Header';

const Root = loadable(() => import(/* webpackChunkName: "root" */ './Root'));
const Dashboard = loadable(() => import(/* webpackChunkName: "dashboard" */ './Dashboard'));
// const Header = loadable(() => import(/* webpackChunkName: "header" */ './Header'));
const Brands = loadable(() => import(/* webpackChunkName: "brands" */ './Brands'));
const Careers = loadable(() => import(/* webpackChunkName: "Careers" */ './Careers'));
const Dreamteam = loadable(() => import(/* webpackChunkName: "Dreamteam" */ './Dreamteam'));
const Groundcontrol = loadable(() => import(/* webpackChunkName: "Groundcontrol" */ './Groundcontrol'));
const Register = loadable(() => import(/* webpackChunkName: "Register" */ './Register'));
const ChatRoom = loadable(() => import(/* webpackChunkName: "ChatRoom" */ './ChatRoom'));
// const Projects = loadable(() => import(/* webpackChunkName: "Projects" */ './Projects'));

const routes = [
    {
        path: '/',
        component: Header,
        key: 'root',
        // exact: true
    },
    {
        path: '/',
        component: Root,
        key: 'main',
        exact: true
    },
    {
        path: '/dashboard',
        component: Dashboard,
        key: 'das'
    },
    {
        path: '/brands',
        component: Brands,
        key: 'brands'
    },
    {
        path: '/careers',
        component: Careers,
        key: 'careers'
    },
    {
        path: '/dreamteam',
        component: Dreamteam,
        key: 'dreamteam',
        // exact: true
    },
    {
        path: '/groundcontrol',
        component: Groundcontrol,
        key: 'Shows',
        // exact: true
    },
    {
        path: '/profile/:username',
        component: () => (
            <div>
                profile username
            </div>
        ),
        key: 'profile/username',
        // exact: true
    },
    {
        path: '/profile/:username/leaderboard',
        component: () => (
            <div>
                leaderboard
            </div>
        ),
        key: 'profile/username/leaderboard',
        // exact: true
    },
    {
        path: '/register',
        component: Register,
        key: 'Register',
    },
    {
        path: '/chat',
        component: ChatRoom,
        key: 'Chat',
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
    }
];

export default routes;
