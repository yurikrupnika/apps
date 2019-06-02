import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './components/routes';
// import './styles/_index.scss';
import config from './config';

const renderMethod = config.isProd ? hydrate : render;

renderMethod(
    <BrowserRouter>
        <App userAgent={global.navigator.userAgent} routes={routes} />
    </BrowserRouter>,
    global.document.getElementById('root')
);
