import React from 'react';
import PropTypes from 'prop-types';
import PillButton from '../PillButton';

const ButtonGroup = (props) => {
    const { data } = props;
    return data.map(v => (
        <PillButton key={v.title} onClick={v.onClick}>{v.title}</PillButton>
    ));
};

ButtonGroup.defaultProps = {
    data: []
};

ButtonGroup.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({}))
};

// module.exports = BaseButton
export default ButtonGroup;
