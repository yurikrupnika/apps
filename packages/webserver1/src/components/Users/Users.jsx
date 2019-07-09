import React from 'react';
import PropTypes from 'prop-types';
import List from '@krupnik/list';
// import Button from '@krupnik/button';
import styles from './styles.scss';

const Users = (props) => {
    const { users } = props;
    const { data, fetch } = users;
    const getData = React.useCallback(() => fetch(), []);
    return (
        <div>
            <h2 className={styles.root}>
                I have been dynamicly rendered
            </h2>
            <button type="button" onClick={getData}>Get users dynamic</button>
            <List data={data} />
            {/*{Array.isArray(data) && data.map(user => (*/}
            {/*    <div key={user._id}>{user.name}</div> // eslint-disable-line*/}
            {/*))}*/}
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

export default Users;
