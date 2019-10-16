import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Icon from '@material-ui/core/Icon';
import RadioIcon from '@material-ui/icons/Radio';
import Switch from '@material-ui/core/Switch';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import withTheme from '@material-ui/core/styles/withTheme';
import useTheme from '@material-ui/core/styles/useTheme';
import { Context } from '../../contexts/themes';
import styles from './dashboard-header.scss';

const DashboardHeader = (props) => {
    const {regularRoutes, toggleOpen, open} = props;
    const theme = React.useContext(Context);
    const ss = useTheme();
    console.log('ss', ss);
    // console.log('theme.palette', theme.theme)
    return (
        <div>
            <AppBar
                color="primary"
                position="static"
                classes={{
                    root: styles.bar
                }}
            >
                <Toolbar>
                    <IconButton onClick={toggleOpen} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <RadioIcon />
                    {/*<Icon>star</Icon>*/}
                    <Button color="inherit" onClick={() => {}}>Login</Button>
                    <Switch
                        checked={ss.palette.type === 'dark'}
                        onChange={theme.toggleType}
                        color="primary"
                    />

                    <FormControl>
                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                        <Select
                            value={10}
                            // onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                onClose={toggleOpen}
                classes={{
                    paper: styles.paper,
                    // modal: styles.paper,
                    // root: styles.paper
                }}
            >
                <div
                    style={{
                        width: '255px',
                        // background: 'red',
                        height: '100%'
                    }}
                >
                    <div>
                        <img
                            width={180}
                            height={38}
                            src="https://cdn.streamelements.com/assets/homepage/SE_logo_600x129px_user_dashboard%403x.png"
                            alt=""
                        />
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
                                    <MenuItem>
                                        {item.label}
                                    </MenuItem>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </Drawer>
        </div>
    );
};

DashboardHeader.propTypes = {
    regularRoutes: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string
    })).isRequired,
    toggleOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default React.memo(DashboardHeader);
