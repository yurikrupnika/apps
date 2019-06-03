import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
// import routes from './components/routes';
// import App from '@krupnik/app1';
// import './styles/_index.scss';
import config from './config';
// console.log('App', App);


const renderMethod = config.isProd ? hydrate : render;

renderMethod(
    <BrowserRouter>
        <App
            userAgent={global.navigator.userAgent}
        />
    </BrowserRouter>,
    global.document.getElementById('root')
);
