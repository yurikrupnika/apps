import React from 'react';
// import PropTypes from 'prop-types';
import Providers from './providers';
// import apiProviders from '../../api/providers';
import Layout from './layout';
import routes from '../routes';

const App = () => (
    <Providers providers={[]}>
        <Layout routes={routes} />
    </Providers>
);

App.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
