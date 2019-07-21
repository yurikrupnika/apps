import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.scss';
// import MaButton from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import {Avatar} from '@material-ui/core';
import styles from './button.scss';
// import styles from './button.less';
// import styles from './styles.scss';

const Button = (props) => {
    const { children, onclick } = props; // eslint-disable-line
    return (
        <button
            onClick={onclick}
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
export default Button;
