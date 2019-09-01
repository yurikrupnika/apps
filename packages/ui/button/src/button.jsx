import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import MuButton from '@material-ui/core/Button';
import styles from './button.scss';


// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// });

function Button(props) {
    const { children, onClick } = props;
    return (
        <MuButton
            {...props}
            onClick={onClick}
            classes={{
                root: styles.root, // class name, e.g. `classes-nesting-root-x`
                label: styles.label, // class name, e.g. `classes-nesting-label-x`
            }}
            // color={props.color}
        >
            {children}
        </MuButton>
    );
}

Button.defaultProps = {
    children: null
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]),
    onClick: PropTypes.func.isRequired
};

export default Button;
