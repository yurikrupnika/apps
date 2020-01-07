import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from '../../contexts/auth';

// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// import Header from "../Header";
// import Badge from '@material-ui/core/Badge';
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

const DefaultHeader = (props) => {
    // const { regularRoutes, toggleOpen, open } = props;
    const userContext = useAuth0();
    console.log('userContext', userContext);
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        user,
        getIdTokenClaims,
        getTokenSilently,
        getTokenWithPopup
    } = userContext;
    const { location } = props;
    const { pathname } = location;

    const getIdTokenClaimsa = async () => {
        const token = await getIdTokenClaims();
        const tokena = await getTokenSilently();
        // const a = await getTokenWithPopup();
        // console.log('getTokenSilently', tokena);
        // console.log('getIdTokenClaims', token);
        // console.log('user', user);
        // console.log('getTokenWithPopup', a);
    }
    // console.log(props)
    // console.log(pathname.includes('dashboard'))
    if (pathname.includes('dashboard')) {
        return null;
    }

    const [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={toggleOpen} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        {
                            user && user.email
                        }
                    </Typography>
                    <Typography variant="h6">
                        <Button onClick={getIdTokenClaimsa}>
                            getIdTokenClaims
                        </Button>
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => {
                            isAuthenticated ? logout() : loginWithRedirect();
                        }}
                    >
                        { isAuthenticated ? 'logout' : 'login'}
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleOpen}>
                <div
                    style={{
                        width: '400px'
                    }}
                >
                    <div>
                        logo
                    </div>
                    {
                        regularRoutes.map((item) => (
                            <div
                                key={item.label}
                            >
                                <NavLink
                                    to={item.url}
                                    onClick={toggleOpen}
                                    // className={styles.navLink}
                                    // activeClassName={styles.active}
                                >
                                    {item.label}
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </Drawer>
        </div>
    );
};

DefaultHeader.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
    // regularRoutes: PropTypes.arrayOf(PropTypes.shape({
    //     label: PropTypes.string,
    //     url: PropTypes.string
    // })).isRequired,
    // toggleOpen: PropTypes.func.isRequired,
    // open: PropTypes.bool.isRequired,
};

export default DefaultHeader;
