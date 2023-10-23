import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import {
  InputBase,
  Avatar,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchRounded";
import { DarkModeContext } from "../../context/darkModeContext";
import { search } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  width: "25%",
  padding: "0.5rem 1rem",
  borderRadius: "0.6rem",
  display: "flex",
  alignItems: "center",
}));

const SearchBar = () => {
  const navigate = useNavigate();
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [searchTxt, setSearchTxt] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [passionSearch, setPassionSearch] = useState([]);

  useEffect(() => {
    search(searchTxt).then((data) => {
      setUserSearch(data.users);
      setPassionSearch(data.passions);
    });
  }, [searchTxt]);

  const handleClick = (id) => {
    navigate("/profil/" + id);
    setSearchTxt("");
  };

  return (
    <>
      <Search
        sx={{
          background: darkMode ? "#121212" : "#fff",
        }}
      >
        <InputBase
          placeholder="Rechercher..."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          sx={{ width: "100%", fontSize: "0.8rem" }}
        />
        <SearchIcon sx={{ color: darkMode ? "#2096f3" : "#2469d8" }} />
      </Search>
      <List
        sx={{
          position: "absolute",
          top: "8vh",
          left: "1rem",
          width: { xs: "90%", md: "30vw" },
          height: "auto",
          maxHeight: { xs: "100vh", md: "80vh" },
          zIndex: "5",
          bgcolor: "background.paper",
          borderRadius: 4,
          padding: 2,
          boxShadow: "5px 5px 10px #33333355",
          display:
            searchTxt === "" ||
            (userSearch.length === 0 && passionSearch.length === 0)
              ? "none"
              : "block",
        }}
      >
        {userSearch.length !== 0 ? (
          <>
            <Typography>Utilisateur</Typography>
            <Divider />
          </>
        ) : (
          ""
        )}
        {userSearch.map((elt, index) => (
          <ListItemButton key={index} onClick={() => handleClick(elt.id)}>
            <ListItem
              disablePadding
              sx={{
                width: "100%",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={elt.avatar}
                  alt={elt.username}
                  variant="rounded"
                  sx={{ bgcolor: elt.background, borderRadius: 3, p: 0.5 }}
                />
              </ListItemAvatar>
              <ListItemText primary={elt.username} />
            </ListItem>
          </ListItemButton>
        ))}
        {passionSearch.length !== 0 ? (
          <>
            <Typography>Passions</Typography>
            <Divider />
          </>
        ) : (
          ""
        )}
        {passionSearch.map((elt, index) => (
          <ListItemButton key={index}>
            <ListItem
              disablePadding
              sx={{
                width: "100%",
              }}
            >
              <ListItemAvatar>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={elt.passionImage}
                    alt={elt.passionName}
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </ListItemAvatar>
              <ListItemText primary={elt.passionName} />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default SearchBar;
