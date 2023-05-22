import React from 'react'
import { Stack, AppBar, Tooltip, IconButton, Grid, Box, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, Typography, Button, Badge, Card, CardMedia, CardContent, CardActions, InputBase } from '@mui/material'

import { styled, makeStyles } from '@mui/material/styles'
// import { getAllPassions } from '../services/api'
import { useNavigate, Outlet } from 'react-router-dom'

//------------import Images-----------
import LogoM from '../../assets/DD.png'
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
    height:'2.4rem',
    borderRadius: '0.9rem',
    border: 'none',
    background: '#147587',
    fill: '#fff',
    padding: '0.65rem',
    cursor: 'pointer',
    '&:hover':{
        opacity:'0.8'
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
    background: '#96d7d1',
    borderRadius: '0.8rem',
    padding: '0.1rem'
})

const LeftBar = () => {
    const navigate = useNavigate();


    return (
         <Box flex={2} p={2} sx={{
            maxWidth: {
                xs: '60px',
                sm: '250px',
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
            <Stack direction={'column'} sx={{height:'100%'}}>
                <IconButton sx={{
                        height: '3.2rem',
                        minHeight: '3rem',
                        display: {
                            xs: 'none',
                            sm: 'block'
                        }

                    }}>
                        <img src={Logo} alt='Logo Dversity' height={'100%'} />
                </IconButton>
                <IconButton sx={{
                        height: '50px',
                        display: {
                            xs: 'block',
                            sm: 'none'
                        }
                    }}>
                        <img src={LogoM} alt='Logo Dversity' height={'100%'} />
                </IconButton>
                <Divider sx={{margin:'1rem 0'}}></Divider>
                <Box flexGrow={1} sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection:'column'
                }}>
                    <Paper sx={{
                        width: '100%',
                    boxShadow: 'none',
                        borderRadius: 3,
                        border: '1px solid #efefef',
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
                                    color: '#404040'
                                }}>RABESOA Nicky</Typography>
                                <Typography sx={{
                                    fontSize: '0.5rem',
                                    // color: '#808080'
                                }}>rabesoanicky@gmail.com</Typography>
                            </Box>
                        </Stack>
                    </Paper>
                    <Grid container sx={{ height:'60vh'}}>
                        <Grid item xs={4} md={4} sx={{
                            borderRight: '1px solid #efefef',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection:'column'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height:'25vh',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: 2,
                            }}>
                                <Tooltip
                                    title='Profil'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#ee4266',color:'#fff' }}
                                >
                                    <StyleButton style={{background: '#ee4266' }}>
                                        <IconUser style={{ width: '100%', height: '100%'}}/>
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Photos & Vidéos'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#50e450',color:'#fff' }}
                                >
                                    <StyleButton sx={{background: '#50e450'}}>
                                        <IconPhotos style={{ width: '100%', height: '100%'}}/>
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Messages'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{ bgcolor: '#4ac0d5',color:'#fff' }}
                                >
                                    <StyleButton sx={{background:'#4ac0d5'}}>
                                        <IconMessage style={{ width: '100%', height: '100%'}} />
                                    </StyleButton>
                                </Tooltip>  
                            </Box>
                            <Tooltip
                                title='Jeux'
                                placement='right'
                                arrow
                                enterDelay={300}
                                leaveDelay={200}
                                sx={{bgcolor:'#2469d8',color:'#fff'}}
                            >
                                <IconButton sx={{
                                    width: '50px',
                                    height: '50px',
                                    fill: '#2469d8',
                                }}>
                                    <IconGames style={{width:'100%',height:'100%'}}/>
                                </IconButton>
                            </Tooltip>
                            <Box sx={{
                                width:'100%',
                                height:'25vh',
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
                                    sx={{bgcolor:'#fa7e5c',color:'#fff'}}
                                >
                                    <StyleButton sx={{background: '#fa7e5c'}}>
                                        <IconBookmark style={{ width: '100%', height: '100%'}}/>
                                    </StyleButton>
                                </Tooltip>
                                <Tooltip
                                    title='Paramètres'
                                    placement='right'
                                    arrow
                                    enterDelay={300}
                                    leaveDelay={200}
                                    sx={{bgcolor:'#999999'}}
                                >
                                    <StyleButton sx={{background: '#999999'}}>
                                        <IconSettings style={{ width: '100%', height: '100%'}}/>
                                    </StyleButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                        <Grid item xs={8} md={8} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            rowGap:2
                        }}>
                            <Button sx={{
                                width: '150px',
                                background: '#ffda5f',
                                borderRadius: 5,
                                padding: '1rem 0',
                                color: '#444',
                                fill:'#444'
                            }}>
                                <IconHome style={{width:'15px',height:'15px'}} />
                                <Typography sx={{ fontSize: '0.7rem',fontWeight:'bold',marginLeft:'1rem'}}>ACCUEIL</Typography>
                            </Button>
                            <Button sx={{
                                width: '150px',
                                background: '#fff',
                                borderRadius: 5,
                                border: '1px solid #efefef',
                                padding: '1rem',
                                color: '#444',
                                fill:'#444'
                            }}>
                                <IconPassions style={{width:'15px',height:'15px'}}/>
                                <Typography sx={{ fontSize: '0.7rem',fontWeight:'bold',marginLeft:'1rem'}}>PASSIONS</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Button sx={{
                        width: '60%',
                        padding:'0.8rem',
                        borderRadius: 3,
                        color: '#fff',
                        background: '#d7415e',
                        display: 'flex',
                        justifyContent:'space-evenly'
                    }}>
                        <SignOutIcon/>
                        <Typography>Déconnexion</Typography>
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default LeftBar
        // <StyleSidebar flex={2} p={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        //     <Stack direction={'column'} spacing={2}>
        //         <Paper sx={{
        //             // background: '#fff',
        //             boxShadow: 'none',
        //             borderRadius: 3,
        //             padding: '0.8rem'

        //         }}>
        //             <Stack direction='row' spacing={1} alignItems='center' justifySelf='center'>
        //                 <MyAvatar src={PhotoProfile} alt='Photo profile' sx={{
        //                     width: '35px',
        //                     height: '35px',
        //                     padding: '0'
        //                 }} />
        //                 <Box>
        //                     <Typography sx={{
        //                         fontSize: '0.7rem',
        //                         fontWeight: 800,
        //                         // color: '#404040'
        //                     }}>RABESOA Nicky</Typography>
        //                     <Typography sx={{
        //                         fontSize: '0.5rem',
        //                         // color: '#808080'
        //                     }}>rabesoanicky@gmail.com</Typography>
        //                 </Box>
        //             </Stack>
        //         </Paper>
        //         <Paper sx={{
        //             // background: '#fff',
        //             boxShadow: 'none',
        //             borderRadius: 3
        //         }}>
        //             <List>
        //                 <MyListItemButton onClick={() => navigate('')}>
        //                     <ListItemIcon sx={{ color: '#abb9c9' }}>
        //                         <HomeIcon />
        //                     </ListItemIcon>
        //                     <MyListItemText sx={{}}>Accueil</MyListItemText>
        //                 </MyListItemButton>
        //                 <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
        //                 <MyListItemButton onClick={() => navigate('friends')}>
        //                     <ListItemIcon sx={{ color: '#abb9c9' }}>
        //                         <PeopleIcon />
        //                     </ListItemIcon>
        //                     <MyListItemText>Amis</MyListItemText>
        //                 </MyListItemButton>
        //                 <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
        //                 <MyListItemButton onClick={() => navigate('photos')}>
        //                     <ListItemIcon sx={{ color: '#abb9c9' }}>
        //                         <PhotoIcon />
        //                     </ListItemIcon>
        //                     <MyListItemText>Photos</MyListItemText>
        //                 </MyListItemButton>
        //                 <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
        //                 <MyListItemButton onClick={() => navigate('/profile')}>
        //                     <ListItemIcon sx={{ color: '#abb9c9' }}>
        //                         <ProfileIcon />
        //                     </ListItemIcon>
        //                     <MyListItemText>Profile</MyListItemText>
        //                 </MyListItemButton>
        //                 <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
        //                 <MyListItemButton onClick={() => navigate('settings')}>
        //                     <ListItemIcon sx={{ color: '#abb9c9' }}>
        //                         <SettingsIcon />
        //                     </ListItemIcon>
        //                     <MyListItemText>Paramètres</MyListItemText>
        //                 </MyListItemButton>
        //             </List>
        //         </Paper>
        //         <Box>
        //             <Stack direction={'row'} alignContent="center" justifyContent={'space-between'} sx={{ padding: '0 2rem 0 1rem', marginBottom: 2 }}>
        //                 <Typography variant={'body1'} sx={{
        //                     // color: '#abb9c9',
        //                     fontWeight: '400'
        //                 }}>INVITATIONS</Typography>
        //                 <MyBadge badgeContent={4} anchorOrigin={{ vertical: 'center', horizontal: 'right' }} />
        //             </Stack>
        //             <Card>
        //                 <CardMedia
        //                     component='img'
        //                     height='130px'
        //                     image={ImageNature}
        //                     alt='Fond passion nature'
        //                 />
        //                 <CardContent>
        //                     <Typography variant='h6'>Nature</Typography>
        //                     <Typography sx={{ fontSize: '0.75rem' }} color='text.secondary'>
        //                         Ensemble des êtres et des choses, monde, univers,...
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions>
        //                     <Button size='small'>Accepter</Button>
        //                     <Button size='small'>Refuser</Button>
        //                 </CardActions>
        //             </Card>
        //         </Box>
        //     </Stack>
        // </StyleSidebar>
       