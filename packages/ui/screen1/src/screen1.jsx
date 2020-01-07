import React from 'react';
import List from '@krupnik/list';
// import Stam from './Stam';


// those fail in webserver1, webpack worked but failes in server side
import loadable from '@loadable/component';
// import ButtonList from '@krupnik/button-group';
// import('./Stam').then(({ default: Stam }) => console.log(Stam));
const Stam = loadable(() => import('./Stam'));

const Screen1 = () => (
    <div>
        <h2>
            I am dunamic a
        </h2>
        <Stam />
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
    </div>
);

export default Screen1;
