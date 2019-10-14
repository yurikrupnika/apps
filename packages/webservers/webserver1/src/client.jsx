import React from 'react';
import { loadableReady } from '@loadable/component';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './components/routes';
import { Provider } from './services/users/context';
import config from './config';
import './styles/_index.scss';

// const renderMethod = config.isProd ? hydrate : render;

if (!config.isProd) {
    render(
        <BrowserRouter>
            <App
                userAgent={global.navigator.userAgent}
                routes={routes}
                providers={[Provider]}
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
                    providers={[Provider]}
                />
            </BrowserRouter>
        ), global.document.getElementById('root'));
    });
}
