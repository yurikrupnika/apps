import React from 'react';
import List from '@krupnik/list';
// import ButtonGroup from '@krupnik/button-group';

const Screen1 = () => (
    <div>
        <h2>
            I am dunamic screen
        </h2>
        <List
            data={[
                {
                    _id: 1
                },
                {
                    _id: 2
                }
            ]}
        />
        {/*<ButtonGroup />*/}
    </div>
);

export default Screen1;
