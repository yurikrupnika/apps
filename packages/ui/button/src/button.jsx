import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Button = (props) => {
    const { children, onclick } = props; // eslint-disable-line
    return (
        <button
            onClick={onclick}
            className={styles.root}
            type="button"
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: null
};

Button.propTypes = {
    children: PropTypes.func
};
export default Button;
