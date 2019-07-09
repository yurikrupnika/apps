import React from 'react';
import styles from './styles.scss'

const Button = (props) => {
    const { children } = props;
    return (
        <button
            className={styles.root}
            type="button"
        >
            {children}
        </button>
    )
};

export default Button;
