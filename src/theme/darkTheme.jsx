import { createTheme, responsiveFontSizes } from '@mui/material';

let darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1'
        }
    },
    // typography: {
    //     fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',

    //     h1: {
    //         fontSize: '3rem',
    //         lineHeight: 1.25,
    //     },

    //     h2: {
    //         fontSize: '2.25rem',
    //         lineHeight: 1.3,
    //     },

    //     h3: {
    //         fontSize: '1.875rem',
    //         lineHeight: 1.375,
    //     },

    //     h4: {
    //         fontSize: '1.5rem',
    //         lineHeight: 1.375,
    //     },

    //     h5: {
    //         fontSize: '1.25rem',
    //         lineHeight: 1.375,
    //     },

    //     h6: {
    //         fontSize: '1rem',
    //         lineHeight: 1.625,
    //     },

    //     subtitle1: {
    //         fontSize: '1.25rem',
    //         fontWeight: 400,
    //         lineHeight: 1.625,
    //     },

    //     subtitle2: {
    //         fontSize: '1rem',
    //         fontWeight: 600,
    //         lineHeight: 1.6,
    //     },

    //     body1: {
    //         fontSize: '1.25rem',
    //         fontWeight: 400,
    //         lineHeight: 1.625,
    //     },

    //     body2: {
    //         fontSize: '1rem',
    //         fontWeight: 400,
    //         lineHeight: 1.6,
    //     },

    //     button: {
    //         fontSize: '0.875rem',
    //         fontWeight: 700,
    //         lineHeight: 1.5,
    //         textTransform: "uppercase",
    //     },

    //     caption: {
    //         fontSize: '0.75rem',
    //         fontWeight: 400,
    //         lineHeight: 1.25,
    //     },

    //     lineHeight: {
    //         sm: 1.25,
    //         md: 1.5,
    //         lg: 2,
    //     },
    // },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: '#121212',
                }

            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 3
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    height: '8vh'
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: '8vh'
                }
            }
        }

    },
})

darkTheme = responsiveFontSizes(darkTheme)

export default darkTheme