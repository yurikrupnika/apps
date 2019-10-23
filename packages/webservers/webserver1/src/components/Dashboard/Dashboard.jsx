import React from 'react';
import Router from '../Router';
import routes from './routes';
import App from '../App';
import { Provider as ThemeProviders } from '../contexts/themes';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
const theme = {
    palette: {
        primary: {
            main: '#dc5255'
        },
    }
};

const Dashboard = () => (
    <>
        <ThemeProviders>
            <Router routes={routes} />
        </ThemeProviders>
        {/*<App*/}
        {/*    routes={routes}*/}
        {/*    userAgent={global.navigator.userAgent}*/}
        {/*    providers={[ThemeProviders]}*/}
        {/*/>*/}
    </>
);

export default Dashboard;
