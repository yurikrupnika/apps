import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const DashboardHeader = loadable(() => import(/* webpackChunkName: "DashboardHeader" */ './DashboardHeader'));
const DefaultHeader = loadable(() => import(/* webpackChunkName: "DashboardHeader" */ './DefaultHeader'));
const ProfileHeader = loadable(() => import(/* webpackChunkName: "DashboardHeader" */ './ProfileHeader'));

// import DashboardHeader from './DashboardHeader';
// import DefaultHeader from './DefaultHeader';
// import ProfileHeader from './ProfileHeader';

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
        label: 'dashboard',
        url: '/dashboard'
    },
    {
        label: 'theme gallery',
        url: '/dashboard/themes'
    },
    {
        label: 'my overlays',
        url: '/dashboard/overlays'
    },
    {
        label: 'Activity feed',
        url: '/dashboard/Activity'
    },
    {
        label: 'profile page',
        url: '/dashboard/profile'
    },
    {
        label: 'tipping settings',
        url: '/dashboard/tipping-settings'
    },
    {
        label: 'revenue history',
        url: '/dashboard/tipping' // /list
    },
    {
        label: 'merch',
        url: '/dashboard/legendary-merch'
    },
    {
        label: 'modules',
        url: '/dashboard/bot-modules'
    }
];

const Header = (props) => {
    const [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    const { location } = props;
    const { pathname } = location;
    const isDashboard = pathname.includes('dashboard');
    const isProfile = pathname.includes('profile');
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
    if (isProfile) {
        return (
            <ProfileHeader
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
