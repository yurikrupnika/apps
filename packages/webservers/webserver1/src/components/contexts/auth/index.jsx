import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import createAuth0Client from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = () => global
    .window.history.replaceState({}, global.document.title, global.window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
    children,
    onRedirectCallback,
    ...initOptions
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [user, setUser] = useState();
    const [auth0Client, setAuth0] = useState();
    const [loading, setLoading] = useState(true);
    const [popupOpen] = useState(false);

    useEffect(() => {
        const initAuth0 = async () => {
            const auth0FromHook = await createAuth0Client(initOptions);
            // console.log('auth0FromHook', auth0FromHook);

            setAuth0(auth0FromHook);

            if (global.window.location.search.includes('code=')) {
                // console.log('window.location.search', global.window.location.search);

                const { appState } = await auth0FromHook.handleRedirectCallback();
                // console.log('appState', appState);

                onRedirectCallback(appState);
            }

            const isAuth = await auth0FromHook.isAuthenticated();

            setIsAuthenticated(isAuth);

            if (isAuth) {
                setUser(await auth0FromHook.getUser());
            }

            setLoading(false);
        };
        initAuth0();
        // eslint-disable-next-line
    }, []);

    const loginWithPopup = async () => {
        // setPopupOpen(true);
        // try {
        //     await auth0Client.loginWithPopup(params);
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     setPopupOpen(false);
        // }
        // const user = await auth0Client.getUser();
        // setUser(user);
        // setIsAuthenticated(true);
    };

    const handleRedirectCallback = async () => {
        // setLoading(true);
        // await auth0Client.handleRedirectCallback();
        // const user = await auth0Client.getUser();
        // setLoading(false);
        // setIsAuthenticated(true);
        // setUser(user);
    };
    // console.log('user', user);

    return (
        <Auth0Context.Provider
            value={{
                isAuthenticated,
                user,
                loading,
                popupOpen,
                loginWithPopup,
                handleRedirectCallback,
                getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
                loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
                getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
                getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
                logout: (...p) => auth0Client.logout(...p)
            }}
        >
            {children}
        </Auth0Context.Provider>
    );
};

Auth0Provider.defaultProps = {
    onRedirectCallback: DEFAULT_REDIRECT_CALLBACK
};

Auth0Provider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    onRedirectCallback: PropTypes.func
};
