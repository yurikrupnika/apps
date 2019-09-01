import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import styles from './style.css';
// import styles from './styles.sass';
// import styles from './tooltip.scss';
// import styles from './list.module.scss';
import Item from './Item/Item';

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
                data.map(v => (<Item key={v._id} item={v} />))
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
