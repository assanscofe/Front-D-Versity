import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Stack, Typography, Button, TextField, Divider, Link, Grid } from '@mui/material'
import GoogleIcon from '../../assets/icon google.png'
import Lol from '../../assets/8056324.jpg'
import { useDispatch } from 'react-redux';
import { addFormData } from '../../redux/authSlice';

const StyledTextField = styled(TextField)(({ theme }) => ({
    flexGrow: 1
}))
const Step1 = ({ onComplete }) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        'username': '',
        'first_name': '',
        'last_name': '',
        'email': '',
        'password': '',
        'Cpassword': ''
    })

    const handleNext = () => {
        dispatch(addFormData(data))
        onComplete()
    }

    return (
        <Stack direction={'column'} spacing={1} sx={{ width: '100%', height: '100%', paddingY: 1, paddingX: 1 }}>
            <Grid container sx={{}}>
                <Grid item xs={0} md={6} xl={6} sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block'
                    }
                }}>
                    <img src={Lol} alt="Lol" width={'100%'} height={'100%'} />
                </Grid>
                <Grid item xs={12} md={6} xl={6} sx={{
                    height: '100%',
                    paddingX: {
                        xs: '1rem',
                        sm: '2rem',
                        md: '3rem',
                        lg: '4rem',
                        xl: '5rem'
                    }
                }}>
                    <Stack direction={'column'} spacing={3}>
                        <Typography variant='h5' color='primary' sx={{
                            textAlign: 'center',
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
                            Inscription avec Google
                        </Button>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                textAlign: 'center'
                            }}>
                            OU
                        </Typography>
                        <Stack direction={'column'} spacing={2}>
                            <StyledTextField
                                variant='outlined'
                                label="Nom d'Utilisateur"
                                size='small'
                                value={data.username}
                                onChange={(e) => setData({
                                    ...data,
                                    username: e.target.value
                                })}
                            />
                            <Stack direction='row' spacing={1} sx={{ display: { xs: 'none', md: 'flex', xl: 'flex' } }}>
                                <StyledTextField
                                    variant='outlined'
                                    label="Nom"
                                    size='small'
                                    value={data.first_name}
                                    onChange={(e) => setData({
                                        ...data,
                                        first_name: e.target.value
                                    })}
                                />
                                <StyledTextField
                                    variant='outlined'
                                    label="Prénom(s)"
                                    size='small'
                                    value={data.last_name}
                                    onChange={(e) => setData({
                                        ...data,
                                        last_name: e.target.value
                                    })}
                                />
                            </Stack>
                            <StyledTextField
                                variant='outlined'
                                label="Nom"
                                size='small'
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                                value={data.first_name}
                                onChange={(e) => setData({
                                    ...data,
                                    first_name: e.target.value
                                })}
                            />
                            <StyledTextField
                                variant='outlined'
                                label="Prénom(s)"
                                size='small'
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                                value={data.last_name}
                                onChange={(e) => setData({
                                    ...data,
                                    last_name: e.target.value
                                })}
                            />
                            <StyledTextField
                                variant='outlined'
                                label="Adresse Email"
                                type={'email'}
                                size='small'
                                value={data.email}
                                onChange={(e) => setData({
                                    ...data,
                                    email: e.target.value
                                })}
                            />

                            <StyledTextField
                                variant='outlined'
                                label="Mot de Passe"
                                type={'password'}
                                size='small'
                                value={data.password}
                                onChange={(e) => setData({
                                    ...data,
                                    password: e.target.value
                                })}
                            />
                            <StyledTextField
                                variant='outlined'
                                label="Confirmer le Mot de Passe"
                                type={'password'}
                                size='small'
                                value={data.Cpassword}
                                onChange={(e) => setData({
                                    ...data,
                                    Cpassword: e.target.value
                                })}
                            />
                            <Stack direction={'column'} spacing={2}>
                                <Divider />
                                <Link href='/signin' sx={{
                                    textAlign: 'center',
                                    fontSize: '0.8rem',
                                    color: '#404040',
                                    fontWeight: 700,
                                    textDecoration: 'none'
                                }}>Vous avez déja un compte?</Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Stack direction={'row'} justifyContent={'flex-end'}>
                <Button variant="contained" onClick={handleNext} size='small'>Suivant</Button>
            </Stack>
        </Stack>
    )
}

export default Step1