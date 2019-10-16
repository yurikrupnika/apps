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

// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// import DashboardHeader from "../DashboardHeader";
// import Badge from '@material-ui/core/Badge';

const DefaultHeader = (props) => {
    const { regularRoutes, toggleOpen, open } = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={toggleOpen} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        defaukt
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => {}}
                    >
                        Login
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
    regularRoutes: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string
    })).isRequired,
    toggleOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default DefaultHeader;
