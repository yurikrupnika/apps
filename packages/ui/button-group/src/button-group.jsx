import React from 'react';
import Button from '@krupnik/button';

const ButtonGroup = () => {
    const ar = [
        'ar',
        'arr1',
        'a2'
    ];
    return (
        <div>
            {ar.map((v) => (
                <Button key={v} onClick={() => {}}>{v}</Button>
            ))}
        </div>
    );
};

export default ButtonGroup;
