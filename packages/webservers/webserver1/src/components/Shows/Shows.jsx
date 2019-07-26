import React from 'react';

// import PillButton from '@krupnik/pill-button'; // good
import List from '@krupnik/list'; // eslint-disable-line
import Button from '@krupnik/button'; // eslint-disable-line
import MButton from '@material-ui/core/Button';
// import s from '@krupnik/button/dist/esm/index.css'; // eslint-disable-line
// import { PillButton } from 'custom-react';
// import PillButton from 'custom-react/dist/PillButton';

// import { PillButton } from '@krupnik/components';
// import PillButton from '@krupnik/components/dist/PillButton';


// import request from '../../api/request';
import axios from 'axios';
// import { PillButton as Pill, ButtonGroup } from 'custom-react'; // needs d3
import { host, port, usersEndpoint } from '../../config';
import styles from './styles.scss';

const api = {
    getData(params, cb) {
        return axios.get(`${host}:${port}/api/users`, { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataNoHost(params, cb) {
        return axios.get('/api/users', { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataDestHost(params, cd) {
        return axios.get(`${usersEndpoint}/api/users`, { params })
            .then((res) => {
                // console.log('res', res);
                cd(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
};

const projectsApi = {
    getData(params, cb) {
        return axios.get(`${host}:${port}/api/projects`, { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataNoHost(params, cb) {
        return axios.get('/api/projects', { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataDestHost(params, cd) {
        return axios.get(`${usersEndpoint}/api/projects`, { params })
            .then((res) => {
                // console.log('res', res);
                cd(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
};

class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            projects: []
        };

        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
        this.getDataNoHost = this.getDataNoHost.bind(this);
        this.getDataDestHost = this.getDataDestHost.bind(this);
        this.setProjects = this.setProjects.bind(this);
        this.getProjectsDestHost = this.getProjectsDestHost.bind(this);
    }

    setProjects(projects) {
        this.setState({ projects });
    }

    setData(data) {
        this.setState({ data });
    }

    getData() {
        return api.getData({}, this.setData);
    }

    getDataNoHost() {
        return api.getDataNoHost({}, this.setData);
    }

    getDataDestHost() {
        return api.getDataDestHost({}, this.setData);
    }

    getProjectsDestHost() {
        return projectsApi.getDataDestHost({}, this.setProjects);
    }

    static getShit() {
        return (
            <div>
                sas
            </div>
        );
    }

    render() {
        const { data, projects } = this.state;
        return (
            <div>
                <h2 className={styles.root}>
                    app1
                </h2>
                <button type="button" onClick={this.getData}>my button</button>
                <Button type="button" onClick={this.getDataNoHost}>{Shows.getShit()}</Button>
                <button type="button" onClick={this.getDataNoHost}>getData getDataNoHost</button>
                <button type="button" onClick={this.getDataDestHost}>getData getDataDestHost</button>
                <button type="button" onClick={this.getProjectsDestHost}>getProjectsDestHost </button>
                <MButton href="" type="button" onClick={this.getDataDestHost}>MButton</MButton>
                <div>
                    <h2>new List should be here</h2>
                </div>
                <h2>Users</h2>
                <List data={data} />
                <h2>Projects</h2>
                <List data={projects} />
            </div>
        );
    }
}

export default Shows;
