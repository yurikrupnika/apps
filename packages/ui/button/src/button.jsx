import React from 'react';
import styles from './styles.scss'

const Button = (props) => {
    const { children, onclick } = props;
    return (
        <button
            onClick={onclick}
            className={styles.root}
            type="button"
        >
            {children}
        </button>
    )
};

export default Button;
