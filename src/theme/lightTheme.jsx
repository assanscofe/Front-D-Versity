import { createTheme, responsiveFontSizes } from '@mui/material';

let lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            // default: '#f0f7fc'
            default: '#fff'
        },
        primary: {
            main: '#2469d8',
            light: '#2096f3',
        },
        secondary: {
            main: '#d7415e'
        },
        warning: {
            main: '#ffda5f'
        },
        success: {
            main: '#50e450'
        }
    },
    typography: {
        fontFamily: 'Roboto,sans-serif',
        h1: {
            fontSize: '4rem'
        },
        h2: {
            fontSize: '3rem'
        },
        h3: {
            fontSize: '2rem'
        },
        h4: {
            fontSize: '1.5rem'
        },
        h5: {
            fontSize: '1.25rem'
        },
        h6: {
            fontSize: '1.125rem'
        },
        button: {
            fontSize: '0.875rem'
        },
        body1: {
            fontSize: '0.875rem'
        },
        body2: {
            fontSize: '0.875rem'
        },
        overline: {
            fontSize: '0.875rem',
            fontWeight: 'bold',
            letterSpacing: '0.1rem',
        }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: '#f0f7fc',
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

        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: '8vh',
                    background: '#fff'
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

    },
})

lightTheme = responsiveFontSizes(lightTheme)

export default lightTheme
