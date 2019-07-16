import React from 'react';
import Button from '@krupnik/button';
import List from '@krupnik/list';
// import Button from '@material-ui/core/Button';
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import Tooltip from '../Tooltip';
//
// const darkStyles = makeStyles({
//     tooltip: {
//         color: 'blue',
//         backgroundColor: 'yellow',
//         fontSize: '20px'
//     }
// });
const data = [
    {
        _id: 'a',
    },
    {
        _id: 'b',
    }
];
const Projects = () => (
    <div>
        <h2>
            Projects
        </h2>
        <Button href="void 0;">get projects</Button>
        <List data={data} />
        {/*<div>*/}
        {/*    <Tooltip*/}
        {/*        title="lol1"*/}
        {/*    >*/}
        {/*        <span>*/}
        {/*            hello*/}
        {/*        </span>*/}
        {/*    </Tooltip>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <Tooltip*/}
        {/*        placement="right"*/}
        {/*        title="lol2"*/}
        {/*        classes={darkStyles()}*/}
        {/*    >*/}
        {/*        <span>*/}
        {/*            hello*/}
        {/*        </span>*/}
        {/*    </Tooltip>*/}
        {/*</div>*/}
    </div>
);

export default Projects;
