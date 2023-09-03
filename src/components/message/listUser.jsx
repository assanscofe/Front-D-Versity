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
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/authSlice";

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

const ListUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.user);
  const { darkMode } = useContext(DarkModeContext);

  const [allUser, setAllUser] = useState([]);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    dispatch(getUser()).then((data) => {
      setAllUser(
        data.payload.filter((elt) => elt.id !== user.id && elt.id !== 1)
      );
    });
  }, [dispatch, user]);

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
            <>
              <ListItemButton
                key={index}
                onClick={() => navigate("/messages/" + elt.id)}
              >
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
                        src={elt.avatar}
                        alt="avatar"
                        sx={{ bgcolor: elt.background }}
                      />
                    </ListItemAvatar>
                  </ListItemIcon>
                  <ListItemText primary={elt.username} secondary="3hours ago" />
                </ListItem>
              </ListItemButton>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Stack>
  );
};

export default ListUser;
