import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: '#325d79'
        },
        secondary: {
            main: '#f26627'
        },
        warning: {
            main: '#96d7d1'
        },
        info: {
            main: '#f9a26c'
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
        }
    }
})

theme = responsiveFontSizes(theme)

export default theme