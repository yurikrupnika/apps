import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Context from './context';

const defaultTheme = createMuiTheme({
    palette: {
        type: 'light'
    },
    typography: {
        button: {
            fontSize: '1rem',
        },
    },
    overrides: {
        Drawer: {
            root: {
                background: 'transparent'
            }
        }
    }
});
class ThemesProvider extends Component {
    constructor(props, context) {
        super(props, context);
        // console.log(context)
        // console.log(props)
        this.state = {
            theme: defaultTheme,
        };

        this.toggleType = this.toggleType.bind(this);
    }

    toggleType(e) {
        const newTheme = createMuiTheme({
            palette: {
                type: this.state.theme.palette.type === 'light' ? 'dark' : 'light'
            },
            // typography: {
            //     button: {
            //         fontSize: '1rem',
            //     },
            // },
        });
        this.setState(({
            theme: newTheme
        }));
    }

    render() {
        const { children } = this.props;
        const { theme } = this.state;
        return (
            <Context.Provider value={{
                ...this.state,
                toggleType: this.toggleType
            }}
            >
                <MuiThemeProvider theme={theme}>
                    {children}
                </MuiThemeProvider>
            </Context.Provider>
        );
    }
}

ThemesProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default ThemesProvider;
