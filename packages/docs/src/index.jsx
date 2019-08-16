import path from 'path';
import express from 'express';
import ejs from 'ejs';
import morgan from 'morgan';
import render from '@krupnik/render';
import swaggerUi from 'swagger-ui-express';
import App from './components/App';
import routes from './components/routes';
import {
    port, isProd
} from './config';

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

const app = express();
app.use(morgan('dev'));
app.use(express.static(assets));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);
const routeSwagger = express.Router();

routeSwagger.use('/swagger', swaggerUi.serve);
routeSwagger.get('/swagger', swaggerUi.setup(null, {
    explorer: true,
    swaggerOptions: {
        urls: [
            {
                url: 'http://localhost:4000/swagger',
                name: '@krupnik/service1',
                tag: 'Users'
            },
            {
                url: 'http://localhost:4001/swagger',
                name: '@krupnik/projects',
                tag: 'Projects'
            }
        ]
    }
}));

app.use('/report', (req, res) => {
    app.engine('html', ejs.renderFile);
    app.set('view engine', 'html');
    return res.render('report.html');
});
app.use(routeSwagger);

app.use(render(App, routes));

app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
