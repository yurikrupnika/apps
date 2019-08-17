import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.scss';
// import MaButton from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import {Avatar} from '@material-ui/core';
import styles from './button.scss';
// import styles from './button.less';
// import styles from './styles.scss';

/**
 * Button module
 * @module @krupnik/button
 * @see module:my/shirt
 * @author Yuri Krupnik [krupnik.yuri@gmail.com]
 * @return array
 */


const Button = (props) => {
    const { children, onClick } = props; // eslint-disable-line
    return (
        <button
            onClick={onClick}
            className={styles.root}
            type="button"
        >
            <div>
                {children}
            </div>
        </button>
    );
};

Button.defaultProps = {
    children: null
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
    ])
};
export default React.memo(Button);
