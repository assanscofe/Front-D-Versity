import React, { useState, useEffect } from 'react'
import { Stack, AppBar, Toolbar, IconButton, Grid, Box, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, Typography, Button, Badge, Card, CardMedia, CardContent, CardActions, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'
// import { getAllPassions } from '../services/api'
import { useNavigate, Outlet } from 'react-router-dom'
import Slide from '../components/slide/slide'

//------------import Images-----------
import Logo from '../assets/dversity.3.png'
import PhotoProfile from '../assets/Icons/20.png'
import ImageNature from '../assets/nature.jpg'
import PhotoUser from '../assets/Icons/18.png'

import MoreHorizIcon from '@mui/icons-material/MoreHorizOutlined'



const StyledContent = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    background: '#f0f7fc'
}))




const StyleContainer = styled(Box)(({ theme }) => ({
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '1.8rem',


}))

const StyledCard = styled(Card)(({ theme }) => ({
    width: '170px',
    height: '200px',
    background: '#2096f3',
    borderRadius: '20px',
    transition: 'none',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: '0 6px 0 #2469d8 , 0 15px 10px #2469d877 ,0 20px 15px #2469d844',
        transform: 'scale(1.05,1.05)',
        transition: 'all 0.1s ease'
    },
}))


const Home = () => {

    const navigate = useNavigate();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     getAllPassions().then((response) => {
    //         return setData(response)
    //     })
    // }, [])


    return (
        <>
            <Slide />

            {/* <Stack direction={'column'}>
                <h1>home</h1>
            </Stack> */}

            {/* <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                <StyleContainer flex={4} p={2}>
                    <Typography variant="h3" color='primary' alignSelf={'start'}>Mes Passions</Typography>
                    <Stack direction='row' spacing={2} >
                        <StyledCard>
                            <CardMedia
                                component='img'
                                height='100px'
                                image={ImageNature}
                                alt='Fond passion nature'
                            />
                            <CardContent>
                                <Typography variant='h5' color={'#fff'}>Musique</Typography>
                                <Typography sx={{ fontSize: '0.6rem' }} color='#fff'>
                                    Art de composer une mélodie selon une harmonie et un rythme.
                                </Typography>
                            </CardContent>
                        </StyledCard>
                        <StyledCard>
                            <CardMedia
                                component='img'
                                height='100px'
                                image={ImageNature}
                                alt='Fond passion nature'
                            />
                            <CardContent>
                                <Typography variant='h5' color={'#fff'}>Musique</Typography>
                                <Typography sx={{ fontSize: '0.6rem' }} color='#fff'>
                                    Art de composer une mélodie selon une harmonie et un rythme.
                                </Typography>
                            </CardContent>
                        </StyledCard>

                        <StyledCard>
                            <CardMedia
                                component='img'
                                height='100px'
                                image={ImageNature}
                                alt='Fond passion nature'
                            />
                            <CardContent>
                                <Typography variant='h5' color={'#fff'}>Musique</Typography>
                                <Typography sx={{ fontSize: '0.6rem' }} color='#fff'>
                                    Art de composer une mélodie selon une harmonie et un rythme.
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Stack>
                    <Stack direction='row' spacing={2} p={1.5} sx={{
                        width: '46vw',
                        minWidth: '500px',
                        height: 'auto',
                        // background: '#fff',
                        borderRadius: 3
                    }}>
                        <Avatar sx={{ width: 35, 
                            height: 35,
                            // background: '#f56565' 
                        }} src={PhotoProfile} />
                        <InputBase placeholder='Quoi de neuf ?' sx={{
                            flexGrow: 1
                        }} />
                        <Button>Publier</Button>
                    </Stack>
                    <Stack direction='column' p={1.5} sx={{
                        width: '46vw',
                        minWidth: '500px',
                        height: '500px',
                        // background: '#fff',
                        borderRadius: 3
                    }}>
                        <Stack direction={'column'} spacing={1}>
                            <Stack direction='row' spacing={1}>
                                <Avatar sx={{ width: 35, height: 35, 
                                    // background: '#f56565' 
                                }} src={PhotoProfile} />
                                <Box sx={{
                                    flexGrow: 1
                                }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600 }}>Nicky720</Typography>
                                    <Typography sx={{ fontSize: '0.6rem', letterSpacing: '0.1rem' }} color='text.secondary'>19h</Typography>
                                </Box>
                                <IconButton><MoreHorizIcon/></IconButton>
                            </Stack>
                            <Typography variant='body2'>
                                La vie....
                            </Typography>

                        </Stack>
                    </Stack>
                </StyleContainer>
            </Stack> */}
        </>
    )
}

export default Home