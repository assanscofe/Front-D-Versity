import React, { useState, useEffect } from 'react'
import { Stack, AppBar, Toolbar, IconButton, Grid, Box, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, Typography, Button, Badge, Modal} from '@mui/material'
import { styled, makeStyles } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import TransitionsModal from './passions'

//------------import Images-----------
import Logo from '../assets/dversity.3.png'
import PhotoProfile from '../assets/Icons/2.png'
import ImageNature from '../assets/nature.jpg'
import PhotoUser from '../assets/Icons/18.png'

//--------------import Icons ------------
import ProfileIcon from '@mui/icons-material/PersonOutlineRounded'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import PeopleIcon from '@mui/icons-material/PeopleOutlineRounded'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import PhotoIcon from '@mui/icons-material/PhotoOutlined'
import DeleteIcon from '@mui/icons-material/Close'
import CreateIcon from '@mui/icons-material/CreateNewFolderOutlined'
import { Outlet } from 'react-router-dom'


const StyledContent = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    background: '#f0f7fc'
}))

const MyListItemText = styled(Typography)({
    color: '#49607e',
    fontWeight: 'bold',
    fontSize: '0.8rem'
})
const MyListItemButton = styled(ListItemButton)({
    '&:hover': {
        background: '#fbfbfc'
    }
})

const MyBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        background: '#ff4154',
        color: '#fff'
    }
}))

const MyAvatar = styled(Avatar)({
    background: '#96d7d1',
    borderRadius: '0.8rem',
    padding: '0.1rem'
})

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const NavHome = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     getAllPassions().then((response) => {
    //         return setData(response)
    //     })
    // }, [])


    return (
        <StyledContent>
            {/* {
                data.map((item) => (
                    <li key={item.id}>{item.passionName}</li>
                ))
            } */}
            <AppBar position='static' sx={{
                background: '#fff',
                boxShadow: 'none',
            }} >
                <Toolbar >
                    <IconButton size='large' edge='start' aria-label='logo' >
                        <img src={Logo} alt='Logo Dversity' height={'40px'} />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Stack direction={'row'} spacing={2} alignContent="center">
                    <Button onClick={() => setIsModalOpen(true)} startIcon={<CreateIcon />} size={'small'} variant='contained'>
                    Créer Une Nouvelle Passion
                    </Button>
                    {isModalOpen && <TransitionsModal setIsModalOpen={setIsModalOpen} />}
                        <IconButton>
                            <MyAvatar src={PhotoProfile} alt='Photo profile' />
                        </IconButton>
                    </Stack>
                </Toolbar>

            </AppBar>
            <Grid container sx={{
                width: '100%',
                height: 'calc(100vh - 4rem)'

            }}>
                <Grid item xs={2} md={2.8} xl={2.8} sx={{
                    height: '100%',
                    padding: '2rem',
                }}>
                    <Stack direction={'column'} spacing={3}>
                        <Paper sx={{
                            background: '#fff',
                            boxShadow: 'none',
                            borderRadius: 3,
                            padding: '1rem'

                        }}>
                            <Stack direction='row' spacing={2} alignItems='center' justifySelf='center'>
                                <MyAvatar src={PhotoProfile} alt='Photo profile' />
                                <Box>
                                    <Typography sx={{
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        color: '#404040'
                                    }}>RABESOA Nicky</Typography>
                                    <Typography sx={{
                                        fontSize: '0.6rem',
                                        color: '#808080'
                                    }}>rabesoanicky@gmail.com</Typography>
                                </Box>
                            </Stack>
                        </Paper>
                        <Paper sx={{
                            background: '#fff',
                            boxShadow: 'none',
                            borderRadius: 3
                        }}>
                            <List>
                                <MyListItemButton onClick={() => navigate('')}>
                                    <ListItemIcon sx={{ color: '#abb9c9' }}>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <MyListItemText sx={{}}>Home</MyListItemText>
                                </MyListItemButton>
                                <Divider sx={{ margin: '0 1rem', opacity: '0.4' }} />
                                <MyListItemButton onClick={() => navigate('friends')}>
                                    <ListItemIcon sx={{ color: '#abb9c9' }}>
                                        <PeopleIcon />
                                    </ListItemIcon>
                                    <MyListItemText>Friends</MyListItemText>
                                </MyListItemButton>
                                <Divider sx={{ margin: '0 1rem', opacity: '0.4' }} />
                                <MyListItemButton onClick={() => navigate('photos')}>
                                    <ListItemIcon sx={{ color: '#abb9c9' }}>
                                        <PhotoIcon />
                                    </ListItemIcon>
                                    <MyListItemText>Photos</MyListItemText>
                                </MyListItemButton>
                                <Divider sx={{ margin: '0 1rem', opacity: '0.4' }} />
                                <MyListItemButton onClick={() => navigate('/profile')}>
                                    <ListItemIcon sx={{ color: '#abb9c9' }}>
                                        <ProfileIcon />
                                    </ListItemIcon>
                                    <MyListItemText>Profile</MyListItemText>
                                </MyListItemButton>
                                <Divider sx={{ margin: '0 1rem', opacity: '0.4' }} />
                                <MyListItemButton onClick={() => navigate('settings')}>
                                    <ListItemIcon sx={{ color: '#abb9c9' }}>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <MyListItemText>Settings</MyListItemText>
                                </MyListItemButton>
                            </List>
                        </Paper>
                        <Box>
                            <Stack direction={'row'} alignContent="center" justifyContent={'space-between'} sx={{ padding: '0 2rem 0 1rem', marginBottom: 2 }}>
                                <Typography variant={'body1'} sx={{ color: '#abb9c9', fontWeight: '400' }}>INVITATIONS</Typography>
                                <MyBadge badgeContent={4} anchorOrigin={{ vertical: 'center', horizontal: 'right' }} />
                            </Stack>
                            <Paper sx={{
                                background: '#fff',
                                boxShadow: 'none',
                                overflow: 'hidden',
                                borderRadius: 3,
                            }}>
                                <Stack direction={'column'} sx={{ padding: '1rem' }} spacing={2}>
                                    <Box sx={{
                                        height: '200px',
                                        overflow: 'hidden',
                                        backgroundImage: 'url(' + ImageNature + ')',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: 3,
                                        padding: '1rem',
                                        position: 'relative',

                                    }} justifyContent={'space-evenly'}>
                                        <MyAvatar src={PhotoUser} alt='Photo profile'
                                            sx={{
                                                border: '2px solid #fff',
                                                position: 'absolute',
                                                top: '1rem',
                                                left: '1rem'
                                            }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '0',
                                            background: '#ffffff20',
                                            width: '100%',
                                            height: '4rem',
                                            padding: '1rem',
                                            borderRadius: 3
                                        }}>
                                            <Typography variant={'h6'} sx={{
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                letterSpacing: '0.1rem'
                                            }} textAlign='center'>Music</Typography>
                                        </Box>
                                    </Box>
                                    <Stack direction='row' justifyContent={'space-between'} spacing={1} size={'small'}>
                                        <Button variant={'contained'} sx={{ borderRadius: 1.5, width: '100%' }}>Accept Invitation</Button>
                                        <IconButton size={'small'} sx={{ border: '1.5px solid #efefef', borderRadius: 1.5 }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>

                                </Stack>
                            </Paper>

                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={10} md={6.2} xl={6.2}>
                    <Outlet></Outlet>
                    {/* <Box sx={{
                        height: '100vh',
                        background: 'blue'
                    }}>
                        item2
                    </Box> */}
                </Grid>
                <Grid item xs={0} md={3} xl={3}>
                    {/* <Box sx={{
                        height: '100vh',
                        background: 'green'
                    }}>

                    </Box> */}
                </Grid>
            </Grid>
        </StyledContent >
    )
}

export default NavHome