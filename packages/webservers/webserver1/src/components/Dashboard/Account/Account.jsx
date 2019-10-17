import React from 'react';

import PropTypes from 'prop-types';
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import {Link, NavLink} from "react-router-dom";

import routes from './routes';
import Router from '../../Router';
// import Typography from '@material-ui/core/Typography';
//
// import Box from '@material-ui/core/Box';


const AccountMenu = (props) => {
    console.log('AccountMenu', props);
    return (
        <Router routes={routes} />
    );
}

export default React.memo(AccountMenu);
