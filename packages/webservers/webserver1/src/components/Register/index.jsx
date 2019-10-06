import Loadable from '../Loadable';
// import Users from './Users';
const Register = Loadable({
    loader: () => import(/* webpackChunkName: "register" */ './register'),
    // modules: ['./Users'],
    // webpack: () => [require.resolveWeak('./Users')]
});

export default Register;
