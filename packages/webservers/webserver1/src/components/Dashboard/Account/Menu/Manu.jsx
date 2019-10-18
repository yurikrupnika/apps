import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

// import routes from '../routes';
//
// const currentRoutes = routes.filter((v) => v.label);
const currentRoutes = [
    {

    }
]
const AccountMenu = (props) => {
    // console.log('routes', routes.filter(v => v.label))

    const { location } = props;
    const { pathname } = location;
    // const s = last(pathname.split('/'));
    const index = currentRoutes.findIndex((v) => v.path === pathname) || 0;
    console.log(props)
    // console.log(currentRoutes)

    // const [value, setValue] = React.useState(0);

    // const handleChange = React.useCallback((event, newValue) => {
    //     setValue(newValue);
    // }, [setValue]);
    return (
        <Paper square>
            <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
            >
                {
                    currentRoutes.map((v) => (
                        <Tab
                            key={v.label}
                            label={v.label}
                            component={Link}
                            to={v.path}
                        />
                    ))
                }
            </Tabs>
        </Paper>
    );
};

AccountMenu.propTypes = {
    // history: loc
}

export default React.memo(AccountMenu);
