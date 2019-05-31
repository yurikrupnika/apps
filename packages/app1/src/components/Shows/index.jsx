import React from 'react';
// import Header from '../Example/Header';
// import { BaseButton } from 'custom-react/dist/index';
// import { PillButton } from 'custom-react/dist/cmj/index';
// import BaseButton from 'custom-react/dist/BaseButton';
// import PillButton from 'custom-react/dist/PillButton';
// import ButtonGroup from 'custom-react/dist/ButtonGroup';
// import DataGraph from 'custom-react/dist/DataGraph';
// import PillB from '@krupnik/pill-button';
// import Pill from 'pill-button';
// import { PillButton } from 'custom-react';
// import PillButton from 'custom-react/dist/PillButton';
// import ButtonGroup from 'custom-react/dist/ButtonGroup';
// import D from 'custom-react/dist/BaseButton';
// import DataGraph from 'custom-react/dist/DataGraph';
// import { BaseButton, PillButton, ButtonGroup, DataGraph } from 'custom-react/dist/cjs/main';
// import { BaseButton, PillButton } from 'custom-react'; // 2.23 kb main.esm.js
// import { BaseButton, PillButton,  } from 'custom-react/dist/main.cjs'; // 2.23 kb main.esm.js
// import {BaseButton, PillButton} from 'custom-react/dist/main.cjs'; // 2.23 kb main.esm.js
// import { BaseButton, PillButton } from 'custom-react/dist/main'; // 13.08 = get all components fails webpack
// import { BaseButton, PillButton, ButtonGroup } from 'custom-react/dist/main.umd'; // 2.57 kb
// import { BaseButton, PillButton } from 'custom-react/dist/main.umd'; // 3.44 kb
// import Base from 'custom-react/dist/main.esm'; // 2.23 kb

// combined 12.94 kb - to big - fails webpack
// import BaseButton from 'custom-react/dist/BaseButton'; // 5.62 kb
// import PillButton from 'custom-react/dist/PillButton'; // 7.32 kb

// 1.73kb
// import PillButton from 'custom-react/dist/PillButton.esm'; // 990 b
// import BaseButton from 'custom-react/dist/BaseButton.esm'; // 408 b

const data = [
    {
        label: 'as',
        onClick: function () {},
        children: function () {
            return (
                <div>as</div>
            );
        }
    }
]

const Shows = () => (
    <div>
        app1
        {/*<BaseButton onClick={() => {}}>sss</BaseButton>*/}
        {/*<D onClick={() => {}}>sss</D>*/}
        {/*<Pill onClick={() => {}}>PillButton Pill</Pill>*/}
        {/*<PillB onClick={() => {}}>PillButton PillB</PillB>*/}
        {/*<PillButton>PillButton</PillButton>*/}
        {/*<P>P</P>*/}
        {/*<DataGraph data={[]}>sad</DataGraph>*/}
        {/*<ButtonGroup data={data} />*/}
        {/*<DataGraph data={data} />*/}
    </div>
);

export default Shows;
