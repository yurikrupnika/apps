import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.scss';
import MaButton from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import {Avatar} from '@material-ui/core';
import styles from './button.scss';

const Button = (props) => {
    const { children, onclick } = props; // eslint-disable-line
    return (
        <MaButton
            onClick={onclick}
            className={styles.root}
            type="button"
        >
            <div>
                {children}
            </div>
        </MaButton>
    );
};

Button.defaultProps = {
    children: null
};

Button.propTypes = {
    children: PropTypes.func
};
export default Button;
