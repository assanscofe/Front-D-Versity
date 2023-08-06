import React from 'react'
import { Stack, Tooltip, IconButton, Grid, Box, Paper, ListItemButton, Divider, Avatar, Typography, Button, Badge } from '@mui/material'

import { styled } from '@mui/material/styles'
// import { getAllPassions } from '../services/api'
import { useNavigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'

//------------import Images-----------
import LogoM from '../../assets/DD.png'
import Logo from '../../assets/dversity.3.png'

//--------------import Icons ------------
import HomeIcon from '@mui/icons-material/HomeOutlined'
import PeopleIcon from '@mui/icons-material/PeopleOutlineRounded'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import PhotoIcon from '@mui/icons-material/PhotoOutlined'
import DeleteIcon from '@mui/icons-material/Close'
import CreateIcon from '@mui/icons-material/CreateNewFolderOutlined'
import PointIcon from '@mui/icons-material/ThreeKPlusOutlined'
import SignOutIcon from '@mui/icons-material/PowerSettingsNewOutlined'
import GridViewIcon from '@mui/icons-material/GridViewOutlined'
import GameIcon from '@mui/icons-material/GamesRounded'
import { ReactComponent as IconGames } from '../../assets/SVG/gamepad.svg'
import { ReactComponent as IconSettings } from '../../assets/SVG/settings.svg'
import { ReactComponent as IconPhotos } from '../../assets/SVG/camera.svg'
import { ReactComponent as IconUser } from '../../assets/SVG/user.svg'
import { ReactComponent as IconHome } from '../../assets/SVG/home.svg'
import { ReactComponent as IconPassions } from '../../assets/SVG/apps.svg'
import { ReactComponent as IconMessage } from '../../assets/SVG/messages.svg'
import { ReactComponent as IconBookmark } from '../../assets/SVG/bookmark.svg'



const StyleSidebar = styled(Box)(({ theme }) => ({
    maxWidth: '300px',
    minWidth: '200px',
    height: 'calc(100vh - 8vh)',
    position: 'sticky',
    // top: '8vh',
    background: '#fff',
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none",
    },
    "::-webkit-scrollbar": {
        display: "none",
    },
}))

const StyleButton = styled('button')(({ theme }) => ({
    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '0.9rem',
    border: 'none',
    fill: '#fff',
    padding: '0.65rem',
    cursor: 'pointer',
    '&:hover': {
        opacity: '0.8'
    },
    '&:focus': {
        outline: 'none'
    }
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
    // background: '#96d7d1',
    borderRadius: '0.8rem',
    padding: '0.1rem'
})

const LeftBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user_data = useSelector(state => state.auth.user.user)
    // console.log(user_data)


    return (
        <Box flex={2} p={2} sx={{
            maxWidth: {
                xs: '4rem',
                md: '300px'
            },
            height: '100vh',
            position: 'sticky',
            // top: '8vh',
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
                display: "none",
            },
            "::-webkit-scrollbar": {
                display: "none",
            },
            // display: { xs: 'none', sm: 'none', md: 'block' }
        }}>
            <Stack direction={'column'} sx={{ height: '100%' }}>
                <IconButton sx={{
                    height: '3.2rem',
                    minHeight: '3rem',
                    display: {
                        xs: 'none',
                        md: 'block'
                    }

                }}>
                    <img src={Logo} alt='Logo Dversity' height={'100%'} />
                </IconButton>
                <IconButton sx={{
                    height: '50px',
                    display: {
                        xs: 'block',
                        md: 'none'
                    }
                }}>
                    <img src={LogoM} alt='Logo Dversity' height={'100%'} />
                </IconButton>
                <Divider sx={{ margin: '1rem 0' }}></Divider>
                <Box flexGrow={1} sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Paper sx={{
                        width: '100%',
                        boxShadow: 'none',
                        borderRadius: 3,
                        border: '1px solid #efefef',
                        padding: {
                            xs: '0',
                            md: '0.8rem'
                        }

                    }}>
                        <Stack direction='row' spacing={1} alignItems='center' justifySelf='center'>
                            <MyAvatar src={user_data.avatar} alt={user_data.last_name} sx={{
                                width: '2rem',
                                height: '2rem',
                                padding: '0',
                                bgcolor: user_data.background
                            }} />
                            <Box sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}>
                                <Typography sx={{
                                    fontSize: '0.7rem',
                                    fontWeight: 800,
                                    color: '#404040'
                                }}>{user_data.first_name} {user_data.last_name}</Typography>
                                <Typography sx={{
                                    fontSize: '0.5rem',
                                    // color: '#808080'
                                }}>{user_data.email}</Typography>
                            </Box>
                        </Stack>
                    </Paper>
                    <Grid container sx={{ height: '60vh' }}>
                        <Grid item xs={12} md={4} sx={{
                            borderRight: {
                                xs: 'none',
                                md: '1px solid #efefef'
                            },
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: '25vh',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: 2,
                            }}>
                                <Tooltip
                                    title='Ajouter une passion'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#ffda5f', color: '#fff' }}
                                >
                                    <StyleButton sx={{
                                        background: '#ffda5f',
                                        display: {
                                            xs: 'block',
                                            md: 'none'
                                        }
                                    }}>
                                        <IconHome style={{ width: '100%', height: '100%' }} />
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Profil'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#ee4266', color: '#fff' }}
                                >
                                    <StyleButton style={{ background: '#ee4266' }} onClick={() => navigate('/profil')}>
                                        <IconUser style={{ width: '100%', height: '100%' }} />
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Photos & Vidéos'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#50e450', color: '#fff' }}
                                >
                                    <StyleButton sx={{ background: '#50e450' }} onClick={() => navigate('/photos')}>
                                        <IconPhotos style={{ width: '100%', height: '100%' }} />
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Messages'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#4ac0d5', color: '#fff' }}
                                >
                                    <StyleButton sx={{ background: '#4ac0d5' }} onClick={() => navigate('/messages')}>
                                        <IconMessage style={{ width: '100%', height: '100%' }} />
                                    </StyleButton>
                                </Tooltip>
                            </Box>
                            <Tooltip
                                title='Jeux'
                                placement='right'
                                arrow
                                enterDelay={300}
                                leaveDelay={200}
                                sx={{ bgcolor: '#2469d8', color: '#fff' }}
                            >
                                <IconButton sx={{
                                    width: '50px',
                                    height: '50px',
                                    fill: '#2469d8',
                                }} onClick={() => navigate('/profil')}>
                                    <IconGames style={{ width: '100%', height: '100%' }} />
                                </IconButton>
                            </Tooltip>
                            <Box sx={{
                                width: '100%',
                                height: '25vh',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: 2,
                            }}>
                                <Tooltip
                                    title='Enregistrements'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#fa7e5c', color: '#fff' }}
                                >
                                    <StyleButton sx={{ background: '#fa7e5c' }}>
                                        <IconBookmark style={{ width: '100%', height: '100%' }} />
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Ajouter une passion'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#540d6e', color: '#fff' }}
                                >
                                    <StyleButton sx={{
                                        background: '#540d6e',
                                        display: {
                                            xs: 'block',
                                            md: 'none'
                                        }
                                    }}>
                                        <IconPassions style={{ width: '100%', height: '100%' }} />
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Paramètres'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#999999' }}
                                >
                                    <StyleButton sx={{ background: '#999999' }} onClick={() => navigate('/settings')}>
                                        <IconSettings style={{ width: '100%', height: '100%' }} />
                                    </StyleButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                        <Grid item xs={0} md={8} sx={{
                            display: {
                                xs: 'none',
                                md: 'flex'
                            },
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            rowGap: 2
                        }}>
                            <Button sx={{
                                width: '150px',
                                background: '#ffda5f',
                                borderRadius: 5,
                                padding: '1rem 0',
                                color: '#444',
                                fill: '#444'
                            }} onClick={() => navigate('')}>
                                <IconHome style={{ width: '15px', height: '15px' }} />
                                <Typography sx={{ fontSize: '0.7rem', fontWeight: 'bold', marginLeft: '1rem' }}>ACCUEIL</Typography>
                            </Button>
                            <Button sx={{
                                width: '150px',
                                background: '#fff',
                                borderRadius: 5,
                                border: '1px solid #efefef',
                                padding: '1rem',
                                color: '#444',
                                fill: '#444'
                            }}>
                                <IconPassions style={{ width: '15px', height: '15px' }} />
                                <Typography sx={{ fontSize: '0.7rem', fontWeight: 'bold', marginLeft: '1rem' }}>PASSIONS</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Button sx={{
                        width: '60%',
                        padding: '0.6rem',
                        borderRadius: 3,
                        // color: '#fff',
                        // background: '#d7415e',
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }} variant={'contained'} color={'secondary'} onClick={() => dispatch(logout())}>
                        <SignOutIcon />
                        <Typography sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}>Déconnexion</Typography>
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default LeftBar