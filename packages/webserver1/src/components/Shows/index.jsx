import Loadable from '../Loadable';

const Shows = Loadable({
    loader: () => import(/* webpackChunkName: "shows" */ './Shows'),
});

export default Shows;
