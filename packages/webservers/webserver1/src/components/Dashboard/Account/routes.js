import loadable from '@loadable/component';
import React from 'react';

// const Account = loadable(() => import(/* webpackChunkName: "AccountMenu" */ './Account'));
// const Activity = loadable(() => import('./Activity'));
// const Overlays = loadable(() => import('./Overlays'));
const Menu = loadable(() => import('./Menu'));
const Channels = loadable(() => import('./Channels'));

const routes = [
    {
        path: '/dashboard/account',
        component: Menu,
        key: 'Meddddsnu'
    },
    {
        path: '/dashboard/account/channels',
        component: Channels,
        label: 'channels',
        key: 'dashboard/account/asd'
    },
    {
        path: '/dashboard/account/import',
        component: () => {
            return (
                <div>
                    import
                </div>
            )
        },
        label: 'import',
        key: '/dashboard/account/import'
    },
    {
        path: '/dashboard/account/integration',
        component: () => {
            return (
                <div>
                    integration
                </div>
            )
        },
        label: 'integration',
        key: 'dashboardds/integrataaion'
    },
    {
        path: '/dashboard/account/security',
        component: () => {
            return (
                <div>
                    security
                </div>
            )
        },
        label: 'security',
        key: 'dashboardds/security'
    },
    {
        path: '/dashboard/account/redemptions',
        component: () => {
            return (
                <div>
                    redemptions
                </div>
            )
        },
        label: 'my redemptions',
        key: 'dashboardds/redemptions'
    }
];

export default routes;
