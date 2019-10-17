import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Chip from '@material-ui/core/Chip';
// import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import LinkTab from '@material-ui/core/LinkTab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import styled, {withTheme} from 'styled-components';

import Router from '../../Router';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//     return {
//         id: `wrapped-tab-${index}`,
//         'aria-controls': `wrapped-tabpanel-${index}`,
//     };
// }
//
// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));
//
//
// const Div = styled.div`
//     background: green;
//     color: ${props => {
//     console.log(props)
//         return 'blue'
// }};
// `;

function DashboardMain(props) {
    // console.log(props);
    // const { history } = props;
    // const [value, setValue] = React.useState(2);
    //
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    return (
        <div>
            <h4>
                hello from dashboard
            </h4>
            <div>
                <Card>
                    lol
                </Card>
                <Button variant={"outlined"} color={'primary'} onClick={() => {
                }}>part channel</Button>
                <Button variant={"outlined"} onClick={() => {
                }}>part channel</Button>
                <Button variant={"contained"} onClick={() => {
                }}>part channel</Button>
                <Button variant={"contained"} onClick={() => {
                }} color={'primary'}>create</Button>
            </div>
            <NavLink
                to="/dashboard/overlays"
                // onClick={toggleOpen}
                // className={styles.navLink}
                // activeClassName={styles.active}
            >
                dashboard
            </NavLink>
        </div>
    );
}

export default DashboardMain;
