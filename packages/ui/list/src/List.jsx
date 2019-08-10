import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import styles from './style.css';
// import styles from './styles.sass';
// import styles from './styles.scss';
import styles from './list.module.scss';


/**
 * List module.
 * @module @krupnik/list
 *
 * @typedef data
 * @property {array} data
 *
 */

const List = (props) => {
    const { data } = props;
    return (
        <Fragment>
            {
                data.map(v => (
                    <div
                        key={v._id} // eslint-disable-line
                        className={styles.root}
                    >
                        <div>
                            {/* eslint-disable-next-line */}
                            {v._id}
                        </div>
                    </div>
                ))
            }
        </Fragment>
    );
};

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
