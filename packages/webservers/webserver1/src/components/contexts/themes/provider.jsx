import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Context from './context';

const defaultTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#5fdc6b',
            dark: 'rgb(154,85,85)',
            light: 'rgb(154,85,85)',
        },
        newColor: {
            main: '#fff'
        },
        anotherColor: {
            main: '#5fdc6b'
        },
        background: {
            paper: '#5771dc',
        }
    },
    typography: {
        // button: {
        //     fontSize: '1rem',
        // },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '20px',
                boxShadow: 'none',
                fontSize: '12px',
                letterSpacing: '1.2px',
                paddingLeft: '16px',
                paddingRight: '16px',
                color: '#FFFEFF',
                // fontWeight: 600,
                // minHeight: '36px',
                // lineHeight: '36px',
                // minWidth: '88px'
            }
        }
    }
});
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            dark: 'rgb(154,85,85)',
            light: 'rgb(154,85,85)',
            main: 'rgb(154,85,85)'
        },
        background: {
            // paper: '#5771dc',
            paper: '#b2dca2'
        }
    },
    // typography: {
    //     button: {
    //         fontSize: '1rem',
    //     },
    // },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '20px',
                boxShadow: 'none',
                fontSize: '12px',
                letterSpacing: '1.2px',
                paddingLeft: '16px',
                paddingRight: '16px',
                color: '#FFFEFF',
                // fontWeight: 600,
                // minHeight: '36px',
                // lineHeight: '36px',
                // minWidth: '88px'
            }
        }
    }
});

// console.log('darkTheme', darkTheme.spacing())
// console.log('darkTheme', darkTheme)
// const ThemesProvider1 = (props) => {
//     const { children } = props;
//     const [theme, setTheme] = React.useState(defaultTheme);
//     return (
//         <Context.Provider value={{
//             ...theme,
//             toggleType: this.toggleType
//         }}
//         >
//             <MuiThemeProvider theme={theme}>
//                 {children}
//             </MuiThemeProvider>
//         </Context.Provider>
//     );
// };

class ThemesProvider extends Component {
    constructor(props, context) {
        super(props, context);
        // console.log(context)
        // console.log(props)
        // const types = ['light', 'dark'];
        // this.state = {
        //     type: 'light'
        // };
        this.state = {
            theme: defaultTheme
        };

        this.toggleType = this.toggleType.bind(this);
    }

    toggleType() {
        const { theme } = this.state;
        const { type } = theme.palette;
        const currentTheme = type === 'light' ? darkTheme : defaultTheme;
        this.setState(({
            theme: currentTheme
        }));
        // this.setState((prevState) => {
        //     const type = prevState.theme.palette.type === 'light' ? 'dark' : 'light';
        //     const themes = Object.assign({}, prevState.theme , {
        //         palette: Object.assign({}, prevState.theme.palette, {
        //             type
        //         })
        //     });
        //     return createMuiTheme({ theme: themes });
        // });
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
