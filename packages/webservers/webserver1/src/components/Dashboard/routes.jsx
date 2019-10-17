import loadable from '@loadable/component';

const Main = loadable(() => import(/* webpackChunkName: "dasboard-main" */ './Main'));
const Activity = loadable(() => import('./Activity'));
const Overlays = loadable(() => import('./Overlays'));
const Account = loadable(() => import('./Account'));
const Themes = loadable(() => import('./Themes'));

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
    },
    {
        path: '/dashboard/account',
        component: Account,
        key: 'dasboard/accoundt'
    },
    {
        path: '/dashboard/themes',
        component: Themes,
        key: 'dasboard/Themes'
    }
];

export default routes;
