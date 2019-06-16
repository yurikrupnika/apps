import Loadable from '../Loadable';
// import Loadable from '../Shows';

const Shows = Loadable({
    loader: () => import(/* webpackChunkName: "shows" */ './Shows'),
});

export default Shows;
