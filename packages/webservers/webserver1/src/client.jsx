import React from 'react';
import { loadableReady } from '@loadable/component';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Auth0Provider } from './components/contexts/auth';

import routes from './components/routes';
import config from './config';
import './styles/_index.scss';

const theme = {
    palette: {
        primary: {
            main: '#47dc4a'
        },
        shit: {
            main: '#b43fdc'
        }
    }
};

if (!config.isProd) {
    render(
        <BrowserRouter>
            <App
                userAgent={global.navigator.userAgent}
                routes={routes}
                providers={[Auth0Provider]}
                theme={theme}
            />
        </BrowserRouter>,
        global.document.getElementById('root')
    );
} else {
    loadableReady(() => {
        hydrate((
            <BrowserRouter>
                <App
                    userAgent={global.navigator.userAgent}
                    routes={routes}
                    providers={[Auth0Provider]}
                    theme={theme}
                />
            </BrowserRouter>
        ), global.document.getElementById('root'));
    });
}
