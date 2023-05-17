import React from 'react'
import { Stack, AppBar, Toolbar, IconButton, Grid, Box, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, Typography, Button, Badge, Card, CardMedia, CardContent, CardActions, InputBase } from '@mui/material'

import { styled, makeStyles } from '@mui/material/styles'
// import { getAllPassions } from '../services/api'
import { useNavigate, Outlet } from 'react-router-dom'

//------------import Images-----------
import Logo from '../../assets/dversity.3.png'
import PhotoProfile from '../../assets/Icons/20.png'
import ImageNature from '../../assets/nature.jpg'
import PhotoUser from '../../assets/Icons/18.png'

//--------------import Icons ------------
import ProfileIcon from '@mui/icons-material/PersonOutlineRounded'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import PeopleIcon from '@mui/icons-material/PeopleOutlineRounded'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import PhotoIcon from '@mui/icons-material/PhotoOutlined'
import DeleteIcon from '@mui/icons-material/Close'
import CreateIcon from '@mui/icons-material/CreateNewFolderOutlined'
import PointIcon from '@mui/icons-material/ThreeKPlusOutlined'

const StyleSidebar = styled(Box)(({ theme }) => ({
    maxWidth: '300px',
    minWidth: '200px',
    height: 'calc(100vh - 8vh)',
    position: 'sticky',
    top: '8vh',
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none",
    },
    "::-webkit-scrollbar": {
        display: "none",
    },
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

const LeftBar = () => {
    const navigate = useNavigate();


    return (
        <StyleSidebar flex={2} p={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Stack direction={'column'} spacing={2}>
                <Paper sx={{
                    // background: '#fff',
                    boxShadow: 'none',
                    borderRadius: 3,
                    padding: '0.8rem'

                }}>
                    <Stack direction='row' spacing={1} alignItems='center' justifySelf='center'>
                        <MyAvatar src={PhotoProfile} alt='Photo profile' sx={{
                            width: '35px',
                            height: '35px',
                            padding: '0'
                        }} />
                        <Box>
                            <Typography sx={{
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                // color: '#404040'
                            }}>RABESOA Nicky</Typography>
                            <Typography sx={{
                                fontSize: '0.5rem',
                                // color: '#808080'
                            }}>rabesoanicky@gmail.com</Typography>
                        </Box>
                    </Stack>
                </Paper>
                <Paper sx={{
                    // background: '#fff',
                    boxShadow: 'none',
                    borderRadius: 3
                }}>
                    <List>
                        <MyListItemButton onClick={() => navigate('')}>
                            <ListItemIcon sx={{ color: '#abb9c9' }}>
                                <HomeIcon />
                            </ListItemIcon>
                            <MyListItemText sx={{}}>Accueil</MyListItemText>
                        </MyListItemButton>
                        <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
                        <MyListItemButton onClick={() => navigate('friends')}>
                            <ListItemIcon sx={{ color: '#abb9c9' }}>
                                <PeopleIcon />
                            </ListItemIcon>
                            <MyListItemText>Amis</MyListItemText>
                        </MyListItemButton>
                        <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
                        <MyListItemButton onClick={() => navigate('photos')}>
                            <ListItemIcon sx={{ color: '#abb9c9' }}>
                                <PhotoIcon />
                            </ListItemIcon>
                            <MyListItemText>Photos</MyListItemText>
                        </MyListItemButton>
                        <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
                        <MyListItemButton onClick={() => navigate('/profile')}>
                            <ListItemIcon sx={{ color: '#abb9c9' }}>
                                <ProfileIcon />
                            </ListItemIcon>
                            <MyListItemText>Profile</MyListItemText>
                        </MyListItemButton>
                        <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
                        <MyListItemButton onClick={() => navigate('settings')}>
                            <ListItemIcon sx={{ color: '#abb9c9' }}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <MyListItemText>Paramètres</MyListItemText>
                        </MyListItemButton>
                    </List>
                </Paper>
                <Box>
                    <Stack direction={'row'} alignContent="center" justifyContent={'space-between'} sx={{ padding: '0 2rem 0 1rem', marginBottom: 2 }}>
                        <Typography variant={'body1'} sx={{
                            // color: '#abb9c9',
                            fontWeight: '400'
                        }}>INVITATIONS</Typography>
                        <MyBadge badgeContent={4} anchorOrigin={{ vertical: 'center', horizontal: 'right' }} />
                    </Stack>
                    <Card>
                        <CardMedia
                            component='img'
                            height='130px'
                            image={ImageNature}
                            alt='Fond passion nature'
                        />
                        <CardContent>
                            <Typography variant='h6'>Nature</Typography>
                            <Typography sx={{ fontSize: '0.75rem' }} color='text.secondary'>
                                Ensemble des êtres et des choses, monde, univers,...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Accepter</Button>
                            <Button size='small'>Refuser</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Stack>
        </StyleSidebar>
    )
}

export default LeftBar