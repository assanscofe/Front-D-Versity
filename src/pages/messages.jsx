import React,{useContext} from 'react'
import {styled} from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/SearchRounded'
import { Box, Paper, IconButton, InputBase, List,ListItem,ListItemAvatar,ListItemIcon,Avatar ,ListItemText,Divider} from '@mui/material'
import { DarkModeContext } from '../context/darkModeContext'

import avatar from '../assets/Icons/41.png'


const Search = styled("div")(({ theme }) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
}))


const Messages = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)

  return (
    <>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch',
        paddingBottom:'1rem'
      }}>
        <Box sx={{
          width:'20vw',
          padding:'1rem'
        }}>
            <Search sx={{
                background: darkMode ? '#121212' : '#fff'
            }}>
                <InputBase placeholder='Rechercher...' sx={{ width: '100%', fontSize: '0.8rem' }} />
                <SearchIcon sx={{ color: darkMode ? '#2096f3' : '#2469d8' }} />
          </Search>
          <Box>
            <List>
              <ListItem >
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar
                      src={avatar}
                      alt='avatar'
                      sx={{bgcolor:'#ee4266'}}
                    />
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='item1' secondary='test1' />
              </ListItem>
              <Divider />
            </List>
          </Box>
        </Box>
        <Box sx={{
          flexGrow:'1',
          background: 'blue',
          
        }}></Box>
        <Box sx={{
          width:'20vw',
          background: 'green',
          
        }}></Box>
      </Box>
    </>
  )
}

export default Messages