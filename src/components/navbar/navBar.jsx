import React, { useState, useContext } from 'react'
import { IconButton, Grid, Box, Avatar, Badge, Toolbar, InputBase, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import { getAllPassions } from '../../services/api'
import { useNavigate, Outlet } from 'react-router-dom'
import { TextFields } from '@mui/icons-material'
import { DarkModeContext } from '../../context/darkModeContext'

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

    // const [openDashboard, setOpenDashboard] = useState(false)

    // const navigate = useNavigate();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     getAllPassions().then((response) => {
    //         return setData(response)
    //     })
    // }, [])


    return (
        <>
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