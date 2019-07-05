import React from 'react';
import Button from '@material-ui/core/Button';
import CustomizedTooltips from '../Tooltip';

const Projects = () => (
    <div>
        <h2>
            Projects
        </h2>
        <Button href="void 0;">get projects</Button>
        <CustomizedTooltips>
            <Button href={''}>
                hello
            </Button>
        </CustomizedTooltips>
        <CustomizedTooltips theme='dark'>
            <Button href={''}>
                hello
            </Button>
        </CustomizedTooltips>
    </div>
);

export default Projects;
