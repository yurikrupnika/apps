import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Shows from './Shows';
import usersRoute from '../services/users/route';


const Users = (props) => {
    const { users } = props;
    const { data, fetch } = users;
    const getData = React.useCallback(() => fetch(), []);
    return (
        <div>
            <h2>
                I have been dynamicly rendered
            </h2>
            <button type="button" onClick={getData}>getData</button>
            {Array.isArray(data) && data.map(user => (
                <div key={user._id}>{user.name}</div> // eslint-disable-line
            ))}
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.shape({
        fetch: PropTypes.func.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

const routes = [
    {
        path: '/shows',
        component: Shows,
        key: 'Shows'
    },
    {
        path: '/projects',
        component: () => (
            <div>
                <h2>
                    projects
                </h2>
                <Button>
                    get projects
                </Button>
            </div>
        ),
        key: 'Projects'
    },

    usersRoute(),
    usersRoute(Users, '/more', 'More'),
];

export default routes;
