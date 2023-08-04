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