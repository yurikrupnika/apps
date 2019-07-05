import React from 'react';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

// function arrowGenerator(color) {
//     return {
//         '&[x-placement*="bottom"] $arrow': {
//             top: 0,
//             left: 0,
//             marginTop: '-0.95em',
//             width: '3em',
//             height: '1em',
//             '&::before': {
//                 borderWidth: '0 1em 1em 1em',
//                 borderColor: `transparent transparent ${color} transparent`,
//             },
//         },
//         '&[x-placement*="top"] $arrow': {
//             bottom: 0,
//             left: 0,
//             marginBottom: '-0.95em',
//             width: '3em',
//             height: '1em',
//             '&::before': {
//                 borderWidth: '1em 1em 0 1em',
//                 borderColor: `${color} transparent transparent transparent`,
//             },
//         },
//         '&[x-placement*="right"] $arrow': {
//             left: 0,
//             marginLeft: '-0.95em',
//             height: '3em',
//             width: '1em',
//             '&::before': {
//                 borderWidth: '1em 1em 1em 0',
//                 borderColor: `transparent ${color} transparent transparent`,
//             },
//         },
//         '&[x-placement*="left"] $arrow': {
//             right: 0,
//             marginRight: '-0.95em',
//             height: '3em',
//             width: '1em',
//             '&::before': {
//                 borderWidth: '1em 0 1em 1em',
//                 borderColor: `transparent transparent transparent ${color}`,
//             },
//         },
//     };
// }
//
// const LightTooltip = withStyles(theme => {
//     console.log('theme', theme);
//     return ({
//         tooltip: {
//             backgroundColor: theme.palette.common.white,
//             color: 'rgba(0, 0, 0, 0.87)',
//             boxShadow: theme.shadows[1],
//             fontSize: 11,
//         },
//     });
// })(Tooltip);
//
// const useStylesArrow = makeStyles(theme => ({
//     tooltip: {
//         position: 'relative',
//     },
//     arrow: {
//         position: 'absolute',
//         fontSize: 6,
//         width: '3em',
//         height: '3em',
//         '&::before': {
//             content: '""',
//             margin: 'auto',
//             display: 'block',
//             width: 0,
//             height: 0,
//             borderStyle: 'solid',
//         },
//     },
//     popper: arrowGenerator(theme.palette.grey[700]),
// }));
//
// function ArrowTooltip(props) {
//     const { arrow, ...classes } = useStylesArrow();
//     const [arrowRef, setArrowRef] = React.useState(null);
//
//     return (
//         <Tooltip
//             classes={classes}
//             PopperProps={{
//                 popperOptions: {
//                     modifiers: {
//                         arrow: {
//                             enabled: Boolean(arrowRef),
//                             element: arrowRef,
//                         },
//                     },
//                 },
//             }}
//             {...props}
//             title={
//                 <React.Fragment>
//                     {props.title}
//                     <span className={arrow} ref={setArrowRef} />
//                 </React.Fragment>
//             }
//         />
//     );
// }
//
// ArrowTooltip.propTypes = {
//     title: PropTypes.node,
// };
//
// const useStylesBootstrap = makeStyles(theme => ({
//     arrow: {
//         position: 'absolute',
//         fontSize: 6,
//         width: '3em',
//         height: '3em',
//         '&::before': {
//             content: '""',
//             margin: 'auto',
//             display: 'block',
//             width: 0,
//             height: 0,
//             borderStyle: 'solid',
//         },
//     },
//     popper: arrowGenerator(theme.palette.common.black),
//     tooltip: {
//         position: 'relative',
//         backgroundColor: theme.palette.common.black,
//     },
//     tooltipPlacementLeft: {
//         margin: '0 8px',
//     },
//     tooltipPlacementRight: {
//         margin: '0 8px',
//     },
//     tooltipPlacementTop: {
//         margin: '8px 0',
//     },
//     tooltipPlacementBottom: {
//         margin: '8px 0',
//     },
// }));
//
// function BootstrapTooltip(props) {
//     const { arrow, ...classes } = useStylesBootstrap();
//     const [arrowRef, setArrowRef] = React.useState(null);
//
//     return (
//         <Tooltip
//             classes={classes}
//             PopperProps={{
//                 popperOptions: {
//                     modifiers: {
//                         arrow: {
//                             enabled: Boolean(arrowRef),
//                             element: arrowRef,
//                         },
//                     },
//                 },
//             }}
//             {...props}
//             title={
//                 <React.Fragment>
//                     {props.title}
//                     <span className={arrow} ref={setArrowRef} />
//                 </React.Fragment>
//             }
//         />
//     );
// }
//
// BootstrapTooltip.propTypes = {
//     title: PropTypes.node,
// };
//
// const HtmlTooltip = withStyles(theme => ({
//     tooltip: {
//         backgroundColor: '#f5f5f9',
//         color: 'rgba(0, 0, 0, 0.87)',
//         maxWidth: 220,
//         fontSize: theme.typography.pxToRem(12),
//         border: '1px solid #dadde9',
//     },
// }))(Tooltip);

const defaultTheme = {
    tooltip: {

    }
};

class MyTooltip extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //
        // };
    }

    render() {
        console.log('this.props', this.props);
        const {children} = this.props;
        return (
            <ThemeProvider
                // theme={
                //     this.props.theme === 'blue'
                //         ? {
                //             // ...defaultTheme,
                //             // palette: {
                //                 // ...defaultTheme.palette,
                //                 // secondary: {
                //                 //     main: blue[500],
                //                 //     contrastText: '#fff',
                //                 // },
                //             // },
                //         }
                //         : defaultTheme
                // }
                theme={{
                    tooltip: {}
                }}
            >
                <Tooltip
                    title={"title here"}>
                    {children}
                </Tooltip>
            </ThemeProvider>
        )
    }
}

// MyTooltip.defaultProps = {
//     theme: 'light'
// };
//
// MyTooltip.propTypes = {
//     theme: PropTypes.string
// };

export default MyTooltip;

// export default function CustomizedTooltips() {
//     return (
//         <div>
//             <LightTooltip title="Add">
//                 <Button>Light</Button>
//             </LightTooltip>
//             <ArrowTooltip title="Add">
//                 <Button>Arrow</Button>
//             </ArrowTooltip>
//             <BootstrapTooltip title="Add">
//                 <Button>Bootstrap</Button>
//             </BootstrapTooltip>
//             <HtmlTooltip
//                 title={
//                     <React.Fragment>
//                         <Typography color="inherit">Tooltip with HTML</Typography>
//                         <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
//                         {"It's very engaging. Right?"}
//                     </React.Fragment>
//                 }
//             >
//                 <Button>HTML</Button>
//             </HtmlTooltip>
//         </div>
//     );
// }
