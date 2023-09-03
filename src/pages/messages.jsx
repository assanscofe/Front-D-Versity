import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/SearchRounded";
import { Outlet, useNavigate } from "react-router-dom";
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
import { DarkModeContext } from "../context/darkModeContext";
import avatar from "../assets/Icons/avatar41.png";
import { useSelector } from "react-redux";
import ListUser from "../components/message/listUser";

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "0.5rem 1rem",
  borderRadius: "1.2rem",
  display: "flex",
  alignItems: "center",
}));

const Messages = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user.user);
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
        <ListUser />
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Messages;
