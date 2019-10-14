import React from 'react';
import { NavLink } from 'react-router-dom';

function DashboardMain() {
    return (
        <div>
            <h4>
                hello from dashboard
            </h4>
            <NavLink
                to="/dashboard/overlays"
                // onClick={toggleOpen}
                // className={styles.navLink}
                // activeClassName={styles.active}
            >
                dashboard
            </NavLink>
        </div>
    );
}

export default DashboardMain;
