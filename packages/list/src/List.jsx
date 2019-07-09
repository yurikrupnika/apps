import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const List = ({ data }) => (
    <Fragment>
        {
            data.map(v => (
                <div
                    style={{
                        padding: '11px',
                        color: 'black'
                    }}
                    key={v._id} // eslint-disable-line
                    className={styles.root}
                >
                    <div className={styles.root}>
                        {/* eslint-disable-next-line */}
                        {v._id}
                    </div>
                </div>
            ))
        }
    </Fragment>
);

List.defaultProps = {
    data: []
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        context: PropTypes.string,
    }))
};

export default List;
