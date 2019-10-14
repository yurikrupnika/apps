import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const regularRoutes = [
    {
        label: 'dashboard',
        url: '/dashboard'
    },
    {
        label: 'desktop app',
        url: '/groundcontrol'
    },
    {
        label: 'dream team',
        url: '/dreamteam'
    },
    {
        label: 'for brands',
        url: '/brands'
    },
    {
        label: 'careers',
        url: '/careers'
    }
];
const appRoutes = [
    {
        label: 'overlays',
        url: '/dashboard/overlays'
    },
    {
        label: 'Activity',
        url: '/dashboard/Activity'
    },
    {
        label: 'profile',
        url: '/dashboard/profile'
    },
    {
        label: 'tipping settings',
        url: '/dashboard/tipping-settings'
    },
    {
        label: 'legendary merch',
        url: '/dashboard/legendary-merch'
    },
    {
        label: 'modules',
        url: '/dashboard/bot-modules'
    }
];

const DashboardHeader = loadable(() => import(/* webpackChunkName: "DashboardHeader" */ './DashboardHeader'));
const DefaultHeader = loadable(() => import(/* webpackChunkName: "DashboardHeader" */ './DefaultHeader'));

const Header = (props) => {
    const [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    const { location } = props;
    const { pathname } = location;
    const isDashboard = pathname.includes('dashboard');
    if (isDashboard) {
        return (
            <DashboardHeader
                open={open}
                isDashboard={isDashboard}
                toggleOpen={toggleOpen}
                regularRoutes={appRoutes}
            />
        );
    }
    return (
        <div>
            <DefaultHeader
                open={open}
                isDashboard={isDashboard}
                toggleOpen={toggleOpen}
                regularRoutes={regularRoutes}
            />
        </div>
    );
};

Header.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};

export default Header;
