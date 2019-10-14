import loadable from '@loadable/component';

const Main = loadable(() => import(/* webpackChunkName: "dasboard-main" */ './Main'));
const Activity = loadable(() => import('./Activity'));
const Overlays = loadable(() => import('./Overlays'));

const routes = [
    {
        path: '/dashboard',
        component: Main,
        exact: true,
        key: 'dash'
    },
    {
        path: '/dashboard/overlays',
        component: Overlays,
        key: 'dashboard/overlays'
    },
    {
        path: '/dashboard/Activity',
        component: Activity,
        key: 'dashboard/Activity'
    }
];

export default routes;
