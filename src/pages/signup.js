import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Paper, Stack, Typography, Button, TextField, Box, Divider, Link, FormControlLabel, Checkbox } from '@mui/material'
import Logo from '../assets/Dversity2.png'
import GoogleIcon from '../assets/icon google.png'

const StyledContent = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f7fc',
}))


const SignUp = () => {



    const handleSubmit = () => {
        console.log('submit')
    }

    return (
        <StyledContent>
            <Paper sx={{
                width: {
                    xs: '100%',
                    sm: 380,
                    md: 380,
                    lg: 400,
                    xl: 400,
                },
                boxShadow: '0px 5px 5px #96d7d155',
                padding: '30px 40px',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Stack direction='column' spacing={4}>
                    <Box sx={{
                        width: {
                            xs: 100,
                            sm: 100,
                            xl: 120,
                        },
                        margin: 'auto'
                    }}>
                        <img src={Logo} alt="Logo" width={"100%"} />
                    </Box>
                    <Typography variant='h6' color='primary' sx={{
                        textAlign: 'center',
                        fontWeight: '700',
                        letterSpacing: '0.09rem'
                    }}>
                        Sign Up
                    </Typography>
                    <Stack direction={'column'} spacing={3}>
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
                                <TextField
                                    variant='outlined'
                                    label="Username"
                                    size='small' />
                                <Stack direction='row' spacing={1}>
                                    <TextField
                                        variant='outlined'
                                        label="FirstName"
                                        size='small' />
                                    <TextField
                                        variant='outlined'
                                        label="Name"
                                        size='small'
                                    />
                                </Stack>
                                <TextField
                                    variant='outlined'
                                    label="Email"
                                    type={'email'}
                                    size='small' />
                                <TextField
                                    variant='outlined'
                                    label="password"
                                    type={'password'}
                                    size='small' />
                                <TextField
                                    variant='outlined'
                                    label="Confirm password"
                                    type={'password'}
                                    size='small' />
                                <Stack direction={'column'} spacing={2}>
                                    <Button
                                        variant="contained"
                                        color='primary'
                                        type='submit'
                                        sx={{
                                            width: '100%',
                                            textTransform: 'none'
                                        }}>
                                        Sign Up
                                    </Button>
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
                </Stack>

            </Paper>
        </StyledContent>
    )
}

export default SignUp