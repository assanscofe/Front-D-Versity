import React, { useState, useContext, useEffect, useMemo } from "react";
import {
  IconButton,
  Box,
  Badge,
  InputBase,
  Stack,
  Menu,
  MenuItem,
  Icon,
  Typography,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { getAllPassions } from '../../services/api'
// import { useNavigate, Outlet } from 'react-router-dom'
// import { TextFields } from '@mui/icons-material'
import { DarkModeContext } from "../../context/darkModeContext";
import { useNavigate } from "react-router-dom";
import LogoM from "../../assets/DD.png";

//--------------import Icons ------------
import SearchIcon from "@mui/icons-material/SearchRounded";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { ReactComponent as IconNotification } from "../../assets/SVG/bell.svg";
import img1 from "../../assets/Icons/avatar1.png";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../../redux/notificationSlice";
import { getUser, getUserById } from "../../redux/authSlice";

const Search = styled("div")(({ theme }) => ({
  width: "25%",
  padding: "0.5rem 1rem",
  borderRadius: "0.6rem",
  display: "flex",
  alignItems: "center",
}));

const Icons = styled(Box)(({ theme }) => ({
  marginLeft: "2rem",
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  // [theme.breakpoints.up("sm")]: {
  //   display: "flex",
  // },
}));

// const UserBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     [theme.breakpoints.up('sm')]: {
//         display: 'none'
//     }
// }))

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.user);
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [notification, setNotification] = useState([]);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const notifSocket = new WebSocket(
      `ws://127.0.0.1:8000/ws/notification/${user.id}/`
    );

    notifSocket.onopen = function () {
      console.log("connexion réussi notification");
    };

    notifSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setNotification(data.notification);
    };

    notifSocket.onclose = function () {
      console.log("connexion fermé notification");
    };
  }, [dispatch, user.id]);

  useEffect(() => {
    dispatch(getNotification()).then((data) =>
      setNotification(data.payload.filter((elt) => elt.receiver === user.id))
    );
  }, [dispatch, user.id]);

  useEffect(() => {
    dispatch(getUser()).then((data) => setAllUser(data.payload));
  }, [dispatch]);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const AvatarSender = ({ idSender }) => {
    const [sender, setSender] = useState({});
    useEffect(() => {
      dispatch(getUserById(idSender)).then((data) => setSender(data.payload));
    }, [idSender]);

    return (
      <Avatar
        src={sender.avatar}
        alt="profil"
        sx={{
          width: "2rem",
          height: "2rem",
          padding: "0",
          bgcolor: sender.background,
        }}
      />
    );
  };
  const Sender = ({ idSender }) => {
    const [sender, setSender] = useState({});
    useEffect(() => {
      dispatch(getUserById(idSender)).then((data) => setSender(data.payload));
    }, [idSender]);

    return <strong>{sender.username} </strong>;
  };

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, my: 1, mx: 2 }}>
        Notifications
      </Typography>
      <Box
        sx={{
          maxHeight: 500,
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
        {notification.map((notif, index) => (
          <MenuItem key={index} sx={{ height: "auto" }}>
            <Box
              sx={{
                width: "2.2rem",
                height: "2.2rem",
              }}
              mt={0.25}
              mr={2}
              mb={0.25}
            >
              <AvatarSender idSender={notif.sender} />
            </Box>
            <Stack
              direction="column"
              sx={{
                width: {
                  xs: "100vw",
                  md: 300,
                },
                height: "auto",
              }}
            >
              <Typography
                variant="subtitle1"
                noWrap={true}
                whiteSpace={"normal"}
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                }}
              >
                {}
                <Sender idSender={notif.sender} />
                {notif.message}
              </Typography>
              <Typography
                variant="caption"
                color="gray"
                sx={{
                  fontSize: "0.6rem",
                  display: "flex",
                  alignItems: "center",
                  // mt: 0.5,
                }}
              >
                1 min ago
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Box>
    </Menu>
  );

  return (
    <>
      <Box
        sx={{
          position: {
            xs: "sticky",
            md: "relative",
          },
          top: "0",
          left: "0",
          width: "100%",
          height: "8vh",
          paddingX: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // bgcolor:'background.paper'
        }}
      >
        <Search
          sx={{
            background: darkMode ? "#121212" : "#fff",
          }}
        >
          <InputBase
            placeholder="Rechercher..."
            sx={{ width: "100%", fontSize: "0.8rem" }}
          />
          <SearchIcon sx={{ color: darkMode ? "#2096f3" : "#2469d8" }} />
        </Search>
        <Icons>
          <IconButton onClick={handleOpenMenu}>
            <Badge variant={"dot"} color={"error"}>
              <IconNotification
                style={{
                  fill: darkMode ? "#2096f3" : "#2469d8",
                  width: 18,
                  height: 18,
                }}
              />
            </Badge>
          </IconButton>
          {renderMenu()}
          <IconButton onClick={toggle}>
            {darkMode ? (
              <WbSunnyOutlinedIcon sx={{ color: "#2096f3" }} />
            ) : (
              <DarkModeIcon sx={{ color: "#2469d8" }} />
            )}
          </IconButton>
        </Icons>
      </Box>
    </>
  );
};

export default NavBar;
