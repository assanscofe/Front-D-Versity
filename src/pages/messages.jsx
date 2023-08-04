import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemButton,
  Avatar,
  ListItemText,
  Stack,
  Chip,
  Divider,
  Typography,
  IconButton,
  // Grid,
} from "@mui/material";
import { DarkModeContext } from "../context/darkModeContext";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import avatar from "../assets/Icons/avatar41.png";
import avatar1 from "../assets/Icons/avatar39.png";
import { ReactComponent as IconMenuDots } from "../assets/SVG/menu-dots.svg";
import { ReactComponent as IconSend } from "../assets/SVG/paper-plane.svg";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "0.5rem 1rem",
  borderRadius: "1.2rem",
  display: "flex",
  alignItems: "center",
}));
const Header = styled("div")(({ theme }) => ({
  padding: "5px",
  width: "100%",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "& h1": {
    color: "white",
  },
}));
const ChatUser = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1.2rem",
}));
// const ProfilUser = styled("div")(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// }))

const CallUser = styled("div")(({ theme }) => ({}));
const UserName = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

const MessageMyMessage = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  marginBottom: "1rem",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "0.7rem",
  "& p": {
    color: "white",
    maxWidth: "70%",
    padding: "0.7rem 1rem",
    background: "rgb(0, 128, 128)",
    borderRadius: "1.2rem 1.2rem 0 1.2rem",
    fontSize: "0.9em",
  },
}));
const MessageFriendMessage = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "100%",
  marginBottom: "1rem",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  textAlign: "left",
  gap: "0.7rem",
  "& p": {
    color: "white",
    maxWidth: "70%",
    padding: "0.7rem 1rem",
    background: "#454545",
    borderRadius: "1.2rem 1.2rem 1.2rem 0",
    fontSize: "0.9em",
  },
}));
const ChatInput = styled("div")(({ theme }) => ({
  padding: "0.8rem 1rem",
  borderRadius: "1.2rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
}));
const ChatBox = styled("div")(({ theme }) => ({
  overflowY: "auto",
  padding: "30px",
  scrollMargin: "30px",
  height: "calc(100% - 28.5vh)",
  paddingBottom: "10px",
  bgcolor: "red",
}));
// const Icon = styled("div")(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-around',
//   marginTop: '10px'
// }))
const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginLeft: "20px",
}));

const Messages = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          overflow: "auto",
          gap: 2,
        }}
      >
        <Stack
          direction={"column"}
          // spacing={1}
          sx={{
            width: "20rem",
            minWidth: "18rem",
            borderRadius: 6,
            bgcolor: "background.paper",
            // padding: "1rem",
          }}
        >
          <Stack direction={"column"} spacing={2} sx={{ p: 3 }}>
            <Typography variant="h6" color={"primary.main"}>
              Messages
            </Typography>

            <Search
              sx={{
                background: darkMode ? "#232323" : "#daf0ff",
              }}
            >
              <InputBase
                placeholder="Rechercher..."
                sx={{ width: "100%", fontSize: "0.8rem" }}
              />
              <SearchIcon sx={{ color: darkMode ? "gray" : "gray" }} />
            </Search>
          </Stack>
          <Box sx={{}}>
            <List>
              <ListItemButton>
                <ListItem
                  disablePadding
                  sx={{
                    width: "100%",
                    // borderRadius: "5px",
                    px: 2,
                  }}
                >
                  <ListItemIcon>
                    <ListItemAvatar>
                      <Avatar
                        src={avatar}
                        alt="avatar"
                        sx={{ bgcolor: "#ee4266" }}
                      />
                    </ListItemAvatar>
                  </ListItemIcon>
                  <ListItemText primary="Hokage Sama" secondary="3hours ago" />
                </ListItem>
              </ListItemButton>
              <Divider />
            </List>
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          spacing={2}
          justifyContent={"space-between"}
          sx={{}}
        >
          <ChatUser>
            <UserName>
              <Avatar src={avatar} alt="avatar" sx={{ bgcolor: "#ee4266" }} />
              <Stack direction={"column"}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 400, lineHeight: 1 }}
                >
                  Hokage Sama
                </Typography>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      background: "#50e450",
                      borderRadius: 50,
                    }}
                  ></span>
                  <Typography
                    variant="caption"
                    color={"#888"}
                    sx={{ fontSize: "0.6rem" }}
                  >
                    en ligne
                  </Typography>
                </Stack>
              </Stack>
            </UserName>
            <IconButton>
              <IconMenuDots style={{ width: 20, height: 20, fill: "#333" }} />
            </IconButton>
          </ChatUser>
          <Stack
            direction={"column"}
            sx={{
              height: "100%",
              overflowY: "scroll",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <MessageMyMessage>
              <Typography>
                Hi
                <br />
              </Typography>
              <Avatar
                src={avatar1}
                alt="avatar1"
                sx={{ bgcolor: "#ee4266", width: 25, height: 25 }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
              <p>
                Hello
                <br />
              </p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>
                comment tu va
                <br />
              </p>
              <Avatar
                src={avatar1}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
              <p>
                je vais bien et toi?
                <br />
              </p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>
                Bien
                <br />
              </p>
              <Avatar
                src={avatar1}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
              <p>
                C'est bien
                <br />
              </p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only
                <br />
              </p>
              <Avatar
                src={avatar1}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it
                <br />
              </p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it
                <br />
              </p>
              <Avatar
                src={avatar1}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
            </MessageMyMessage>
            <MessageMyMessage>
              <p>
                a galley of type and scrambled it to make a type specimen book.
                It has survived not only
                <br />
              </p>
              <Avatar
                src={avatar1}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
              <p>
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it
                <br />
              </p>
            </MessageFriendMessage>
            <MessageMyMessage>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br />
              </p>
              <Avatar
                src={avatar1}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
            </MessageMyMessage>
            <MessageFriendMessage>
              <Avatar
                src={avatar}
                alt="avatar"
                sx={{ bgcolor: "#ee4266", width: "20px", height: "20px" }}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <br />
            </MessageFriendMessage>
          </Stack>
          <ChatInput
            style={{
              background: darkMode ? "#121212" : "#fff",
            }}
          >
            <IconButton sx={{ bgcolor: darkMode ? "#333" : "#efefef" }}>
              <AttachFileIcon sx={{ color: darkMode ? "#fff" : "#333" }} />
            </IconButton>
            <InputBase
              placeholder="Type de message"
              sx={{ width: "100%", fontSize: "0.9rem", px: 2 }}
            />
            <IconButton sx={{ bgcolor: darkMode ? "#333" : "#efefef", p: 1.5 }}>
              <IconSend style={{ width: 17, height: 17, fill: "#2469d8" }} />
            </IconButton>
          </ChatInput>
        </Stack>
        <Box
          sx={{
            width: "20vw",
            display: {
              md: "none",
              xl: "flex",
            },
          }}
        >
          <Header>
            <Avatar
              src={avatar}
              alt="avatarnpm"
              sx={{
                bgcolor: "#ee4266",
                width: "70px",
                height: "70px",
                border: "2px",
              }}
            />
            <h2>Hokage Sama</h2>
          </Header>
          <Body>
            <Stack
              direction="row"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Chip
                label="Membres de la discussion"
                onClick={handleClick}
                sx={{}}
              />
              <Chip
                label="Fichiers et contenus multimédias"
                onClick={handleClick}
                sx={{ marginTop: "10px" }}
              />
            </Stack>
          </Body>
        </Box>
      </Box>
    </>
  );
};

export default Messages;
