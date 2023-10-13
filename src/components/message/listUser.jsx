import React, { useContext, useEffect, useState, useMemo } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";
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
  Divider,
  Typography,
} from "@mui/material";
import { DarkModeContext } from "../../context/darkModeContext";
import { useSelector } from "react-redux";
import { getAllMessages, getUserById } from "../../services/api";

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "0.5rem 1rem",
  borderRadius: "1.2rem",
  display: "flex",
  alignItems: "center",
}));

const AvatarUser = styled(Avatar)({
  width: 40,
  height: 40,
  borderRadius: 10,
  padding: 3,
});

const DataUserById = ({ id }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserById(parseInt(id)).then((data) => setUserData(data));
  }, [id]);

  return (
    <>
      <ListItemButton onClick={() => navigate("/messages/" + userData.id)}>
        <ListItem
          disablePadding
          sx={{
            width: "100%",
            px: 2,
          }}
        >
          <ListItemIcon>
            <ListItemAvatar>
              <AvatarUser
                src={userData.avatar}
                alt="avatar"
                sx={{ bgcolor: userData.background }}
              />
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary={userData.username}
            secondary={userData.is_online ? "en ligne" : "3heurs"}
          />
        </ListItem>
      </ListItemButton>
      <Divider />
    </>
  );
};

const ListUser = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user.user);
  const { darkMode } = useContext(DarkModeContext);

  const [allUser, setAllUser] = useState([]);
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAllMessages().then((data) => {
      setMessages(
        data
          .filter((elt) => elt.user === user.id || elt.recipient === user.id)
          .sort((a, b) => b.id - a.id)
      );
    });
  }, [user, count]);

  useEffect(() => {
    setAllUser([
      ...new Set(
        messages.map((elt) => {
          if (elt.user === user.id) {
            return elt.recipient;
          } else {
            return elt.user;
          }
        })
      ),
    ]);
  }, [user, messages]);

  useEffect(() => {
    if (allUser.length !== 0) {
      navigate("/messages/" + allUser[0]);
    }
  }, [allUser, navigate]);

  const chat_notify = useMemo(
    () => new WebSocket(`ws://127.0.0.1:8000/ws/chatNotification/${user.id}/`),
    [user]
  );

  useEffect(() => {
    chat_notify.onopen = () => {
      console.log("connected to chat notification consumer");
    };

    chat_notify.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setCount(data.count);
    };

    chat_notify.onclose = () => {
      console.log("disconnect to chat notification  consumer");
    };
  }, [chat_notify]);

  // useEffect(() => {
  //   dispatch(getUser()).then((data) => {
  //     setAllUser(
  //       data.payload.filter((elt) => elt.id !== user.id && elt.id !== 1)
  //     );
  //   });
  // }, [dispatch, user]);

  return (
    <Stack
      direction={"column"}
      // spacing={1}
      sx={{
        width: "20rem",
        minWidth: "18rem",
        borderRadius: 5,
        bgcolor: "background.paper",
        // padding: "1rem",
      }}
    >
      <Stack direction={"column"} spacing={2} sx={{ p: 3 }}>
        <Typography variant="h6" color={"primary.main"}>
          Messages {count} message(s)
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
          {allUser.map((elt, index) => (
            <DataUserById id={elt} key={index} />
          ))}
        </List>
      </Box>
    </Stack>
  );
};

export default ListUser;
