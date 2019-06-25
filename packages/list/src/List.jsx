import React from 'react';
import PropTypes from 'prop-types';

const List = props => (
    props.data.map(v => (
        <div key={v.title}>
            <h2>{v.title}</h2>
            <div>{v.context}</div>
        </div>
    ))
);

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        context: PropTypes.string,
    }))
};

export default List;
