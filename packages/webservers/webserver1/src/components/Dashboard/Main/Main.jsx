import React from 'react';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function DashboardMain() {
    return (
        <Paper>
            <h4>
                hello from dashboard
            </h4>

            <div>
                <h2>buttons</h2>
                <Button variant={"outlined"} color={'primary'} onClick={() => {}}>part channel</Button>
                <Button variant={"outlined"} onClick={() => {}}>part channel</Button>
                <Button variant={"contained"} onClick={() => {}}>part channel</Button>
                <Button variant={"contained"} onClick={() => {}} color={'primary'}>mute</Button>
            </div>
            <NavLink
                to="/dashboard/overlays"
                // onClick={toggleOpen}
                // className={styles.navLink}
                // activeClassName={styles.active}
            >
                dashboard
            </NavLink>
        </Paper>
    );
}

export default DashboardMain;
