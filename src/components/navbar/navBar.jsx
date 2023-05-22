//--------------import Icons ------------
import CreateIcon from '@mui/icons-material/CreateNewFolderOutlined'
import SearchIcon from '@mui/icons-material/SearchRounded'
import MessageIcon from '@mui/icons-material/MessageOutlined'
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import ProfileIcon from '@mui/icons-material/PersonOutlineRounded'
import SignOutIcon from '@mui/icons-material/PowerSettingsNewOutlined'
import SettingProfile from '@mui/icons-material/SettingsOutlined'
import PassionIcon from '@mui/icons-material/SpaOutlined'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import GridViewIcon from '@mui/icons-material/GridViewOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'



//------------import Images-----------
import Logo from '../../assets/dversity.2.png'
import LogoM from '../../assets/DD.png'
import PhotoProfile from '../../assets/Icons/2.png'
import ImageNature from '../../assets/nature.jpg'
import PhotoUser from '../../assets/Icons/18.png'


import React, { useState, useEffect, useContext } from 'react'
import { Stack, TextField, InputAdornment, IconButton, Grid, Box, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, Typography, Button, Badge, AppBar, Toolbar, InputBase, Menu, MenuItem } from '@mui/material'
import { styled, makeStyles } from '@mui/material/styles'
import { getAllPassions } from '../../services/api'
import { useNavigate, Outlet } from 'react-router-dom'
import { TextFields } from '@mui/icons-material'
import { DarkModeContext } from '../../context/darkModeContext'



const MyAvatar = styled(Avatar)({
    background: '#96d7d1',
    borderRadius: '0.8rem',
    padding: '0.1rem'
})

const StyledAppBar = styled('div')(({ theme }) => ({
    width: '100%',
    // height: '9vh',
    padding: '0.5rem 1rem',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    columnGap: '1rem',
    boxShadow: '0px 5px 5px #2469d844'
}));


const MyMenuItem = styled(MenuItem)({
    display: 'flex',
    gap: '0.7rem',
    letterSpacing: '0.08rem',
    fontWeight: 500,
    color: '#49607e'
})

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    // background: '#fff'
})

const Search = styled("div")(({ theme }) => ({
    width: '25%',
    padding: '0.5rem 1rem',
    borderRadius: '0.6rem',
    display: 'flex',
    alignItems: 'center',
}))

const Icons = styled(Box)(({ theme }) => ({
    marginLeft: '2rem',
    display: 'none',
    alignItems: 'center',
    gap: '1.5rem',
    [theme.breakpoints.up('sm')]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))
const NavBar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext)

    const [openDashboard, setOpenDashboard] = useState(false)

    const navigate = useNavigate();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     getAllPassions().then((response) => {
    //         return setData(response)
    //     })
    // }, [])


    return (
        <>
            {/* <Box>

            </Box> */}

            {/* <AppBar position='sticky' sx={{
                boxShadow: 'none',
            }}>
                <StyledToolbar sx={{
                    background: 'transparent'

                }}>
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
                    <Search sx={{
                        background: darkMode ? '#121212' : '#f0f7fc'
                    }}><InputBase placeholder='Rechercher...' sx={{ width: '100%' }} /></Search>
                    <Icons>
                        <IconButton onClick={toggle}>
                            {darkMode ? <WbSunnyOutlinedIcon sx={{ color: '#abb9c9' }} /> : <DarkModeIcon sx={{ color: '#abb9c9' }} />}
                        </IconButton>
                        <Badge variant={'dot'} color={'error'}>
                            <MessageIcon sx={{ color: '#abb9c9' }} />
                        </Badge>
                        <Badge variant={'dot'} color={'error'}>
                            <NotificationIcon sx={{ color: '#abb9c9' }} />
                        </Badge>
                        <Avatar sx={{ width: 35, height: 35, background: '#96d7d1', borderRadius: 3 }} src={PhotoProfile} onClick={() => setOpenDashboard(true)} />
                    </Icons>
                    <UserBox>
                        <Typography variant={"span"} sx={{ color: '#abb9c9' }}>Nicky720</Typography>
                        <Avatar sx={{ width: 35, height: 35, background: '#96d7d1', borderRadius: 3 }} src={PhotoProfile} onClick={() => setOpenDashboard(true)} />
                    </UserBox>
                </StyledToolbar>
                <Menu
                    id="basic-menu"
                    open={openDashboard}
                    onClose={() => setOpenDashboard(false)}
                    MenuListProps={{
                        'aria-labelledby': 'face-button',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MyMenuItem>
                        <ProfileIcon sx={{
                            color: '#abb9c9'
                        }} />
                        Profile
                    </MyMenuItem>
                    <MyMenuItem>
                        <PassionIcon sx={{
                            color: '#abb9c9'
                        }} />
                        Mes Passions
                    </MyMenuItem>
                    <MyMenuItem>
                        <SettingProfile sx={{
                            color: '#abb9c9'
                        }} />
                        Mon Compte
                    </MyMenuItem>
                    <Divider sx={{ margin: '0 0.8rem', opacity: '0.4' }} />
                    <MyMenuItem sx={{
                        color: '#d7415e',
                    }}>
                        <SignOutIcon />
                        Déconnexion
                    </MyMenuItem>
                </Menu>
            </AppBar> */}
            {/* <Outlet></Outlet> */}

            {/* <StyledAppBar>
                <StyledButtonLogo sx={{
                    height: '2.5rem',
                    minHeight: '2rem',
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }}>
                    <img src={Logo} alt='Logo Dversity' height={'100%'} />
                </StyledButtonLogo>
                <StyledButtonLogo sx={{
                    height: '40px',
                    display: {
                        xs: 'block',
                        sm: 'none'
                    }
                }}>
                    <img src={LogoM} alt='Logo Dversity' height={'100%'} />
                </StyledButtonLogo>
                <StyleTextField
                    size='small'
                    type='search'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'><SearchIcon sx={{
                            color: '#abb9c9'
                        }} /></InputAdornment>
                    }}
                    placeholder='Rechercher'
                />
                <Box sx={{ flexGrow: 1 }}></Box>
                <Stack direction={'row'} spacing={2} alignContent="center" sx={{
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                    <Button startIcon={<CreateIcon />} size={'small'} variant='contained'
                        sx={{
                            height: '2rem'

                        }}>Create A New Passion</Button>


                    <Badge variant={'dot'} badgeContent={101} color='secondary' max={99} anchorOrigin={{ vertical: 'right', horizontal: 'right' }}>
                        <IconButton aria-label='message' size='small' sx={{ color: '#abb9c9' }}>
                            <MessageIcon />
                        </IconButton>
                    </Badge>
                    <Badge>
                        <IconButton aria-label='message' size='small' sx={{ color: '#abb9c9' }}>
                            <NotificationIcon />
                        </IconButton>
                    </Badge>
                    <IconButton aria-label='message' size='small' >
                        <SearchIcon />
                    </IconButton>

                    <IconButton sx={{
                        width: '35px',
                        height: '35px',
                        padding: '0'
                    }}>
                        <MyAvatar src={PhotoProfile} alt='Photo profile' sx={{
                            width: '100%',
                            height: '100%'
                        }} />
                    </IconButton>
                </Stack>
            </StyledAppBar>
            <Outlet></Outlet> */}
            <Box sx={{
                width: '100%',
                height: '8vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '0 2rem'
            }}>
                <Search sx={{
                    background: darkMode ? '#121212' : '#fff'
                }}>
                    <InputBase placeholder='Rechercher...' sx={{ width: '100%', fontSize: '0.8rem' }} />
                    <SearchIcon sx={{ color: darkMode ? '#2096f3' : '#2469d8' }} />
                </Search>
                <Icons>
                    <Badge variant={'dot'} color={'error'}>
                        <NotificationIcon sx={{ color: darkMode ? '#2096f3' : '#2469d8' }} />
                    </Badge>
                    <IconButton onClick={toggle}>
                        {darkMode ? <WbSunnyOutlinedIcon sx={{ color: '#2096f3' }} /> : <DarkModeIcon sx={{ color: '#2469d8' }} />}
                    </IconButton>
                </Icons>
            </Box>
        </>
    )
}

export default NavBar