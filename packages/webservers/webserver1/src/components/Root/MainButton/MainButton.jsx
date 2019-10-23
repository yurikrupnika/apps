import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './mainButton.scss';

const MainButton = (props) => {
    const { children } = props;
    return (
        <Button
            className={styles.rr}
            classes={{
                root: styles.rr
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default MainButton;
