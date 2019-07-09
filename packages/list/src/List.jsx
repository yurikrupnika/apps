import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const List = ({data}) => {
    return (
        <Fragment>
            {
                data.map(v => (
                    <div
                        style={{
                            padding: '10px',
                            color: 'black'
                        }}
                        key={v._id}
                        className={styles.root}>
                        <div className={styles.root}>
                            {v._id}
                        </div>
                    </div>
                ))
            }
        </Fragment>
    );
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        context: PropTypes.string,
    }))
};

export default List;
