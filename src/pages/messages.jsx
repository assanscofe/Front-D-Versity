import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/SearchRounded'
import { Box, InputBase, List, ListItem, ListItemAvatar, ListItemIcon, Avatar, ListItemText, Stack, Chip, Divider } from '@mui/material'
import { DarkModeContext } from '../context/darkModeContext'
import MicIcon from '@mui/icons-material/Mic'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import avatar from '../assets/Icons/avatar41.png'
import avatar1 from '../assets/Icons/avatar39.png'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const handleClick = () => {
  console.info('You clicked the Chip.');
};




const Search = styled("div")(({ theme }) => ({
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
}))
const Header = styled("div")(({ theme }) => ({
  padding: '5px',
  width: '100%',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  '& h1': {
    color: 'white'
  }
}))
const ChatUser = styled("div")(({ theme }) => ({
  width: '100%',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid rgba(0,0,0,0.3)',
  borderRadius: '5px'
}))
// const ProfilUser = styled("div")(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// }))

const CallUser = styled("div")(({ theme }) => ({
}))
const UserName = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& h1': {
    marginLeft: '5px'
  }
}))

const MessageMyMessage = styled("div")(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  marginBottom: '5px',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& p': {
    position: 'relative',
    color: 'white',
    right: '0',
    marginRight: '3px',
    textAlign: 'left',
    maxWidth: '60%',
    padding: '12px',
    background: 'rgb(0, 128, 128)',
    borderRadius: '20px',
    fontSize: '0.9em',
  }
}))
const MessageFriendMessage = styled("div")(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  margin: '5px 0',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',
  '& p': {
    position: 'relative',
    color: 'white',
    marginLeft: '2px',
    right: '0',
    textAlign: 'left',
    maxWidth: '60%',
    padding: '12px',
    background: '#454545',
    borderRadius: '20px',
    fontSize: '0.9em',
  }
}))
const ChatInput = styled("div")(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '60px',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '5px',
  '& input': {
    position: 'relative',
    width: '90%',
    margin: '0 20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px'
  }
}))
const ChatBox = styled("div")(({ theme }) => ({
  overflowY: 'auto',
  padding: '30px',
  scrollMargin: '30px',
  height: 'calc(100% - 28.5vh)',
  paddingBottom: '10px'
}))
// const Icon = styled("div")(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-around',
//   marginTop: '10px'
// }))
const Body = styled("div")(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginLeft: '20px'
}))

const Messages = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Box>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch',
        paddingBottom: '1rem'
      }}>
        <Box sx={{
          width: 'vw',
          padding: '1rem'
        }}>
          <Search sx={{
            background: darkMode ? '#121212' : '#fff'
          }}>
            <InputBase placeholder='Rechercher...' sx={{ width: '100%', fontSize: '0.8rem' }} />
            <SearchIcon sx={{ color: darkMode ? '#2096f3' : '#2469d8' }} />
          </Search>
          <Box>
            <List>
              <ListItem sx={{
                width: '100%',
                borderRadius: '5px',

              }}>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar
                      src={avatar}
                      alt='avatar'
                      sx={{ bgcolor: '#ee4266' }}
                    />
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='Hokage Sama' secondary='message' />
              </ListItem>
              <Divider />
            </List>
          </Box>
        </Box>
        <Box sx={{
          width: '50%',
          flexGrow: '1',
          borderRadius: '5px',
          borderLeft: '1px solid rgba(0,0,0,0.4)',
          padding: '5px',

        }}>
          <ChatUser>
            <UserName>
              <Avatar
                src={avatar}
                alt='avatar'
                sx={{ bgcolor: '#ee4266' }}
              />
              <h1>Hokage Sama</h1>
            </UserName>
            <CallUser>
              <CallIcon sx={{ marginRight: '9px' }} />
              <VideocamIcon />
            </CallUser>
          </ChatUser>
          <ChatBox>
            <MessageMyMessage>
              <p>Hi<br /></p>
              <Avatar
                src={avatar1}
                alt='avatar1'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
              <p>Hello<br /></p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>comment tu va<br /></p>
              <Avatar
                src={avatar1}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
              <p>je vais bien et toi?<br /></p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>Bien<br /></p>
              <Avatar
                src={avatar1}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
              <p>C'est bien<br /></p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only<br />
              </p>
              <Avatar
                src={avatar1}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
              <p>is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it<br />
              </p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it<br />
              </p>
              <Avatar
                src={avatar1}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
            </MessageMyMessage>
            <MessageMyMessage>
              <p>a galley of type and scrambled it to make a type
                specimen book. It has survived not only<br />
              </p>
              <Avatar
                src={avatar1}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
              <p>industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it<br />
              </p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
              </p>
              <Avatar
                src={avatar1}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              < Avatar
                src={avatar}
                alt='avatar'
                sx={{ bgcolor: '#ee4266', width: '20px', height: '20px' }}
              />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><br />
            </MessageFriendMessage>
          </ChatBox>
          <ChatInput>
            <EmojiEmotionsIcon sx={{ color: 'rgb(128, 0, 128)' }} />
            <AttachFileIcon sx={{ color: 'rgb(128, 0, 128)' }} />
            <input type="text" placeholder="Type de message" />
            <SendIcon sx={{ color: 'rgb(128, 0, 128)' }} />
            <MicIcon sx={{ color: 'rgb(128, 0, 128)' }} />
          </ChatInput>
        </Box>
        <Box sx={{
          width: '20vw',
        }}>
          <Header>
            < Avatar
              src={avatar}
              alt='avatarnpm'
              sx={{ bgcolor: '#ee4266', width: '70px', height: '70px', border: "2px" }}
            />
            <h2>Hokage Sama</h2>
          </Header>
          <Body>
            <Stack direction="row" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Chip label="Membres de la discussion" onClick={handleClick} sx={{}} />
              <Chip label="Fichiers et contenus multimédias" onClick={handleClick} sx={{ marginTop: '10px' }} />
            </Stack>
          </Body>
        </Box>
      </Box>
    </Box>
  )
}

export default Messages
