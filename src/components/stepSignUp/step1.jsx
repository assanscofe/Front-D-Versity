import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Paper, Stack, Typography, Button, TextField, Box, Divider, Link, FormControlLabel, Grid } from '@mui/material'
import GoogleIcon from '../../assets/icon google.png'
import Lol from '../../assets/LOL.png'

// const StyledContent = styled('div')(({ theme }) => ({
//     width: '100%',
//     height: 'auto',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f7fc',
// }))
const StyledTextField = styled(TextField)(({ theme }) => ({
    flexGrow: 1
}))
const Step1 = () => {
    const handleSubmit = () => {
        console.log('submit')
    }

    return (
        <Box sx={{ width: '100%', height: '100%', paddingY:1 }}>
            <Grid container sx={{}}>
                <Grid item xs={0} md={6} xl={6} sx={{
                    display: {
                        xs: 'none',
                        sm:'none',
                        md:'block'
                    }
                }}>
                    <img src={Lol} alt="Lol" width={'100%'} height={'100%'} />
                </Grid>
                <Grid item xs={12} md={6} xl={6} sx={{
                    // height: {
                    //     // xs: 520,
                    //     // sm: 520,
                    //     md: 450,
                    //     xl: 450
                    // },
                    height:'100%',
                    paddingX: {
                        xs: '1rem',
                        sm:'2rem',
                        md: '3rem',
                        lg:'4rem',
                        xl:'5rem'
                    }
                }}>
                    <Stack direction={'column'} spacing={3}>
                        <Typography variant='h5' color='primary' sx={{
                            textAlign: 'center',
                            // fontWeight: '700',
                            letterSpacing: '0.09rem'
                        }}>
                            Inscription
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#f0f7fc'
                            }} startIcon={<img src={GoogleIcon} alt="Logo" width={"20px"} />} size={'small'}>
                            Sign Up With Google
                        </Button>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                textAlign: 'center'
                            }}>
                            OR
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Stack direction={'column'} spacing={2}>
                                <StyledTextField
                                    variant='outlined'
                                    label="Nom d'Utilisateur"
                                    size='small' />
                                <Stack direction='row' spacing={1} sx={{display:{xs:'none',md:'flex',xl:'flex'}}}>
                                    <StyledTextField
                                        variant='outlined'
                                        label="Nom"
                                        size='small' 
                                        />
                                    <StyledTextField
                                        variant='outlined'
                                        label="Prénom(s)"
                                        size='small'
                                    />
                                </Stack>
                                <StyledTextField
                                    variant='outlined'
                                    label="Nom"
                                    size='small' 
                                    sx={{display:{xs:'flex',md:'none'}}}
                                    />
                                <StyledTextField
                                    variant='outlined'
                                    label="Prénom(s)"
                                    size='small'
                                    sx={{display:{xs:'flex',md:'none'}}}
                                />
                                <StyledTextField
                                    variant='outlined'
                                    label="Adresse Email"
                                    type={'email'}
                                    size='small' />
                                <StyledTextField
                                    variant='outlined'
                                    label="Mot de Passe"
                                    type={'password'}
                                    size='small' />
                                <StyledTextField
                                    variant='outlined'
                                    label="Confirmer le Mot de Passe"
                                    type={'password'}
                                    size='small' />
                                <Stack direction={'column'} spacing={2}>
                                    {/* <Button
                                        variant="contained"
                                        color='primary'
                                        type='submit'
                                        sx={{
                                            width: '100%',
                                            textTransform: 'none'
                                        }}>
                                        Sign Up
                                    </Button> */}
                                    <Divider />
                                    <Link href='/signin' sx={{
                                        textAlign: 'center',
                                        fontSize: '0.8rem',
                                        color: '#404040',
                                        fontWeight: 700,
                                        textDecoration: 'none'
                                    }}>Already have an account?</Link>
                                </Stack>
                            </Stack>
                        </form>
                    </Stack>
                </Grid>
            </Grid>
            {/* <Paper sx={{
                width: {
                    xs: '100%',
                    sm: 380,
                    md: 380,
                    lg: 400,
                    xl: 400,
                },
                // boxShadow: '0px 5px 5px #96d7d155',
                boxShadow: 'none',
                padding: '30px 40px',
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Stack direction='column' spacing={4}>

                    <Typography variant='h6' color='primary' sx={{
                        textAlign: 'center',
                        fontWeight: '700',
                        letterSpacing: '0.09rem'
                    }}>
                        Sign Up
                    </Typography>
                    
                </Stack>

            </Paper> */}
        </Box>
    )
}

export default Step1