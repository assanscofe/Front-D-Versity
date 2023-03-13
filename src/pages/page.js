import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import { Paper, Stack, Typography, Button, TextField, Box, Divider, Link, FormControlLabel, Checkbox } from '@mui/material'
import Logo from '../assets/Dversity2.png'
import GoogleIcon from '../assets/icon google.png'

const Page = () => {

    const [userState,setUserState] = useState({
        username: '',
        password: '',
    })




    return (
        <div>
            <Paper sx={{
                width: {
                    xs: '100%',
                    sm: 350,
                    md: 350,
                    lg: 380,
                    xl: 380,
                },
                boxShadow: '0px 5px 5px #96d7d155',
                padding: '30px 0',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Stack direction={'column'} spacing={4}>
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
                    <Stack direction={'column'} spacing={3}>
                        <Typography variant='h6' color='primary' sx={{
                            textAlign: 'center',
                            fontWeight: '700',
                            letterSpacing: '0.09rem'
                        }}>
                            Welcome Back
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{

                                textTransform: 'none',
                                backgroundColor: '#f0f7fc'
                            }} startIcon={<img src={GoogleIcon} alt="Logo" width={"20px"} />} size={'small'}>
                            Sign In With Google
                        </Button>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                textAlign: 'center'

                            }}>
                            OR
                        </Typography>
                        {/* <form onSubmit={handleSubmit}> */}
                            <Stack direction={'column'}>
                                <TextField
                                    id='username'
                                    defaultValue={userState.username}
                                    onChange={(e) =>
                                        setUserState({
                                            ...userState,
                                            username: e.target.value
                                        })
                                    }
                                    variant='outlined'
                                    label="Username"
                                    size='small' />
                                <TextField
                                    // value={userState.password}
                                    // onChange={(e) => setUserState({
                                    //     ...userState,
                                    //     password: e.target.value
                                    // })}
                                    variant='outlined'
                                    label="Password"
                                    type='password'
                                    size='small'

                                    // autoFocus= 'true'
                                    sx={{ mt: 2 }}
                                />
                                <Stack direction='row' sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '0.75rem',
                                }}>
                                    {/* <FormControlLabel
                                        label='Remember Me'
                                        control={
                                            <Checkbox
                                                checked={rememberMe}
                                                onChange={handleChangeCheckbox}
                                            />}
                                    /> */}
                                    <Link href=''>Forgot Password?</Link>
                                </Stack>
                                <Stack direction={'column'} spacing={2}>
                                    <Button
                                        variant="contained"
                                        color='primary'
                                        type='submit'
                                        sx={{
                                            width: {
                                                xs: '100%',
                                                sm: 280,
                                                md: 280,
                                                lg: 300,
                                                xl: 300,
                                            },
                                            textTransform: 'none'
                                        }}>
                                        Sign In
                                    </Button>
                                    <Divider />
                                    <Link href='/signup' sx={{
                                        textAlign: 'center',
                                        fontSize: '0.8rem',
                                        color: '#404040',
                                        fontWeight: 700,
                                        textDecoration: 'none'
                                    }}>Don’t have an account?</Link>
                                </Stack>
                            </Stack>
                        {/* </form> */}
                    </Stack>
                </Stack>
            </Paper>
        </div>
    )
}
export default Page
