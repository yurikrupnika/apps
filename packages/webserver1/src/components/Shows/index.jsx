import Loadable from '../Loadable';
// import App from './app';

const Shows = Loadable({
    loader: () => import(/* webpackChunkName: "shows" */ './Shows'),
});

export default Shows;
