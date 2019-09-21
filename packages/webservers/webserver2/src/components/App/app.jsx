import React from 'react';
import PropTypes from 'prop-types';
import Providers from './providers';
import Layout from './layout';
import { Auth0Provider } from '../contexts/auth/auth';

const onRedirectCallback = (appState) => {
    global.window.history.replaceState(
        {},
        global.document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : global.window.location.pathname
    );
};

const App = ({ routes, providers }) => (
    <Auth0Provider
        domain="dev-pd1t9vho.eu.auth0.com"
        client_id="V0B0FRqPAob8RGZxeIAMZ9lNw9S6tjeE"
        audience="https://localhost:7001/api/projects"
        redirect_uri={global.window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <Providers providers={providers}>
            <Layout routes={routes} />
        </Providers>
    </Auth0Provider>
);

App.defaultProps = {
    providers: []
};

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    providers: PropTypes.arrayOf(PropTypes.func)
};

export default App;
