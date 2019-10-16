import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Context from './context';

const defaultTheme = createMuiTheme({
    palette: {
        type: 'light',
        // primary: {
        //     500: '#5771dc'
        // }
    },
    typography: {
        // button: {
        //     fontSize: '1rem',
        // },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '20px'
            }
        },
        MuiDrawer: {
            root: {
                background: 'transparent'
            }
        }
    }
});
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        // primary: {
        //     500: '#5771dc'
        // }
    },
    // typography: {
    //     button: {
    //         fontSize: '1rem',
    //     },
    // },
    // overrides: {
    //     MuiDrawer: {
    //         root: {
    //             background: 'transparent'
    //         }
    //     }
    // }
});


const ThemesProvider1 = (props) => {
    const { children } = props;
    const [theme, setTheme] = React.useState(defaultTheme);
    return (
        <Context.Provider value={{
            ...theme,
            toggleType: this.toggleType
        }}
        >
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </Context.Provider>
    );
};

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

    toggleType() {
        const { type } = this.state.theme.palette;
        const theme = type === 'light' ? darkTheme : defaultTheme;
        this.setState(({
            theme
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
