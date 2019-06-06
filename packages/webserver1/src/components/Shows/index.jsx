import React from 'react';
import PillButton from '@krupnik/pill-button'; // good
import request from '../../api/request';
import axios from 'axios';
// import { PillButton } from '@krupnik/components';
// import PillButton from '@krupnik/components/dist/PillButton';
// import { PillButton } from 'custom-react'; // needs d3
// import PillButton from 'custom-react/dist/PillButton';
// import Header from '../Example/Header';
// import { BaseButton } from 'custom-react/dist/index';
// import { PillButton } from 'custom-react/dist/cmj/index';
// import BaseButton from 'custom-react/dist/BaseButton';
// import PillButton from 'custom-react/dist/PillButton';
// import ButtonGroup from 'custom-react/dist/ButtonGroup';
// import DataGraph from 'custom-react/dist/DataGraph';
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
// import { BaseButton, PillButton } from 'custom-react/dist/main.umd'; // 3.44 kb
// import Base from 'custom-react/dist/main.esm'; // 2.23 kb

// combined 12.94 kb - to big - fails webpack
// import BaseButton from 'custom-react/dist/BaseButton'; // 5.62 kb
// import PillButton from 'custom-react/dist/PillButton'; // 7.32 kb

// 1.73kb
// import PillButton from 'custom-react/dist/PillButton.esm'; // 990 b
// import BaseButton from 'custom-react/dist/BaseButton.esm'; // 408 b

// 1
const api = {
    getData(params, cb) {
        return axios.get('http://localhost/api/users', { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err);
            });
    }
};


// const Shows = () => {
//     const [data, setData] = React.useState([]);
//
//     const getData = React.useCallback(() => {
//         // console.log('e', e);
//         // return axios.get('http://localhost:4000/api/users')
//         //     .then((res) => {
//         //         console.log('res', res);
//         //     })
//         //     .catch((err) => {
//         //         console.log('err', err);
//         //     });
//
//         return api.getData(setData);
//         // return request.get('/api/users')
//         //     .then((res) => {
//         //         console.log('res', res.data);
//         //
//         //         setData(res.data);
//         //     })
//         //     .catch((err) => {
//         //         console.log('err', err); // eslint-disabled-line
//         //     });
//     }, []);
//
//     // function getData(e) {
//     //
//     // }
//     React.useEffect(() => {
//         api.getData(setData);
//         // request.get('/users')
//         //     .then((res) => {
//         //         if (Array.isArray(res.data)) {
//         //             setData(['23', '3', '3d']);
//         //             // setData(res.data);
//         //         }
//         //     })
//         //     .catch((err) => {
//         //         console.log('err', err);
//         //     });
//         // return axios.get('http://localhost:4000/api/users')
//         //     .then((res) => {
//         //         console.log('res', res);
//         //     })
//         //     .catch((err) => {
//         //         console.log('err', err);
//         //     });
//     }, []);
//
//     return (
//         <div>
//             app1
//             <PillButton onClick={getData}>pill</PillButton>
//             {Array.isArray(data) && data.map(user => (
//                 <div key={user._id}>{user.name}</div>
//             ))}
//         </div>
//     );
// };

class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
    }

    setData(data) {
        console.log('data', data);

        this.setState({
            data
        });
    }

    getData(e) {
        console.log('e', e);
        return api.getData({}, this.setData);
    }

    render() {
        const { data } = this.state;
        console.log('this.data', data);

        return (
            <div>
                app1
                lol
                <button onClick={this.getData}>getData</button>
                {Array.isArray(data) && data.map(user => (
                    <div key={user._id}>{user.name}</div>
                ))}
            </div>
        );
    }
}

export default Shows;
