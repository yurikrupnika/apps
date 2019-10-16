import React from 'react';
import { loadableReady } from '@loadable/component';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './components/routes';
import { Provider } from './services/users/context';
import { Provider as ThemeProviders } from './components/contexts/themes';
import config from './config';
import './styles/_index.scss';

if (!config.isProd) {
    render(
        <BrowserRouter>
            <App
                userAgent={global.navigator.userAgent}
                routes={routes}
                providers={[Provider, ThemeProviders]}
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
                    providers={[Provider, ThemeProviders]}
                />
            </BrowserRouter>
        ), global.document.getElementById('root'));
    });
}
