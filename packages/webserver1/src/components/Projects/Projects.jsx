import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '../Tooltip';
import makeStyles from '@material-ui/core/styles/makeStyles';

const darkStyles = makeStyles({
    tooltip: {
        color: props => {
            console.log('styles', props);
            return props.resd || 'blue';
        },
        backgroundColor: 'yellow',
        fontSize: '20px'
    }
});
const Projects = (props) => (
    <div>
        <h2>
            Projects
        </h2>
        <Button href="void 0;">get projects</Button>
        <div>
            <Tooltip title={'lol'}>
                <span>
                    hello
                </span>
            </Tooltip>
        </div>
        <div>
            <Tooltip
                placement="right"
                title={'lol'}
                classes={darkStyles()}
            >
                <span>
                    hello
                </span>
            </Tooltip>
        </div>
    </div>
);

export default Projects;
