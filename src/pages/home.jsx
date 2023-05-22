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
import ChainsawMan from '../assets/1280277.jpg'
import Pubg from '../assets/pubg.jpg'

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


const recommandations = [
    {
        id: 1,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 2,
        pochette: Pubg,
        titre:'PUBG',
        type: 'Jeux Mobile',
    },
    {
        id: 3,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 4,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 5,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 6,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 7,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
]

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

            <Grid container rowGap={2} sx={{
                width:'100%',
                height:'calc(100% - 8vh)',
                background:'red',
            }}>
                <Grid container xs={12} sx={{background:'#fff'}}>
                    <Grid item xs={6}  sx={{background:'blue'}}></Grid>
                    <Grid item xs={3}  sx={{background:'blue'}}></Grid>
                    <Grid item xs={3}  sx={{background:'blue'}}></Grid>
                </Grid>
                <Grid item xs={12} sx={{background:'#fff'}}></Grid>
            </Grid>

            {/* <Box sx={{
                width: '100%',
                height: 'calc(100% - 8vh)',
                display: 'grid',
                gridTemplateRows: '1fr 1.5fr',
                rowGap: 2,
            }}>
                <Box sx={{
                    width:'100%',
                    height: '100%',
                    display:'grid',
                    gridTemplateColumns: '3fr 175px 175px',
                    gridTemplateRows: '2fr 1fr',
                    gap:1
                }}>
                    <Box sx={{
                        gridColumn:'1',
                        gridRow:'1/3',
                        background: 'green',
                        overflow: 'hidden',
                        borderRadius:6
                    }}>
                        <img src={ChainsawMan} alt="ChainsawMan" width={'100%'} height={'100%'} style={{objectFit:'cover'}} />
                    </Box>
                    <Box sx={{
                        gridColumn:'2/4',
                        gridRow:'1',
                        background:'#2469d8',
                        padding: '0 0.5rem',
                        borderRadius:6
                    }}>
                        
                    </Box>
                    <Box sx={{
                        gridColumn: '2',
                        gridRow: '2',
                        background: '#2469d8',
                        borderRadius:6
                        
                    }}>
                    </Box>
                    <Box sx={{
                        gridColumn: '3',
                        gridRow: '2',
                        background: '#2469d8',
                        borderRadius:6
                        
                    }}>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{
                        width:'100%',
                        height: '100%',
                        padding:'1rem',
                        display:'grid',
                        gridTemplateColumns: '3fr 300px',
                        gap:1
                    }}>
                        <Box sx={{
                            gridColumn: '1',
                            display: 'grid',
                            gridTemplateColumns: '1fr 0.5fr 1fr 1fr',
                            gridTemplateRows: '1fr 1fr 1fr',
                            gap:1
                        }}>
                            <Button sx={{
                                gridColumn: '1/3',
                                gridRow: '1/3',
                                background: '#ee4266',
                                borderRadius:6
                            }}></Button>
                            <Button sx={{
                                gridColumn: '3',
                                gridRow: '1',
                                background: '#4ac0d5',
                                borderRadius:6
                            }}></Button>
                            <Button sx={{
                                gridColumn: '4',
                                gridRow: '1',
                                background: '#ffd23f',
                                borderRadius:6
                            }}></Button>
                            <Button sx={{
                                gridColumn: '3/5',
                                gridRow: '2',
                                background: '#540d6e',
                                borderRadius:6
                            }}></Button>
                            <Button sx={{
                                gridColumn: '1',
                                gridRow: '3',
                                background: '#fa7e5c',
                                borderRadius:6
                            }}></Button>
                            <Button sx={{
                                gridColumn: '2/4',
                                gridRow: '3',
                                background: '#dfdfdf',
                                borderRadius:6
                            }}></Button>
                            <Button sx={{
                                gridColumn: '4',
                                gridRow: '3',
                                background: '#a38182',
                                borderRadius:6
                            }}></Button>
                        </Box>
                        <Box sx={{
                            height:'100%',
                            gridColumn: '2',
                            paddingX:'1rem'
                        }}>
                            <Typography sx={{fontSize:'1.5rem'}}>Recommandations</Typography>
                            <Box sx={{
                                width: '100%',
                                height: '40vh',
                                overflowY: "scroll",
                                scrollbarWidth: "none",
                                "&::-webkit-scrollbar": {
                                    display: "none",
                                },
                                "::-webkit-scrollbar": {
                                    display: "none",
                                },
                            }}>
                                {recommandations.map((elt) => (
                                    <Box key={elt.id} sx={{
                                        width: '100%',
                                        height: '70px',
                                        marginTop:2,
                                        display: 'grid',
                                        gridTemplateColumns: '60px 1fr',
                                        columnGap:1
                                    }}>
                                        <Box sx={{
                                            borderRadius: 3,
                                            overflow:'hidden'
                                        }}>
                                            <img src={elt.pochette} alt={elt.titre} width={'100%'} height={'100%'} />
                                        </Box>
                                        <Box sx={{ background: '#efefef',borderRadius:3 ,padding:1}}>
                                            <Typography sx={{
                                                fontSize: '0.8rem',
                                                color:'#2469d8',
                                            }}>{elt.titre}({elt.type})</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Box> */}

            {/* <Slide />
            <Box>

            </Box>
            <Stack direction={'column'}>
                <h1>home</h1>
            </Stack> 

            <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
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