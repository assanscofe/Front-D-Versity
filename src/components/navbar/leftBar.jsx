import React, { useState, useContext } from "react";
import {
  Stack,
  Tooltip,
  IconButton,
  Grid,
  Box,
  Paper,
  Divider,
  Avatar,
  Typography,
  Button,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

//------------import Images-----------
import LogoM from "../../assets/DD.png";
import Logo from "../../assets/dversity.3.png";

//--------------import Icons ------------
import SignOutIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { ReactComponent as IconGames } from "../../assets/SVG/gamepad.svg";
import { ReactComponent as IconSettings } from "../../assets/SVG/settings.svg";
import { ReactComponent as IconPhotos } from "../../assets/SVG/camera.svg";
import { ReactComponent as IconUser } from "../../assets/SVG/user.svg";
import { ReactComponent as IconHome } from "../../assets/SVG/home.svg";
import { ReactComponent as IconPassions } from "../../assets/SVG/apps.svg";
import { ReactComponent as IconMessage } from "../../assets/SVG/messages.svg";
import { ReactComponent as IconBookmark } from "../../assets/SVG/bookmark.svg";
import { ReactComponent as IconMenu } from "../../assets/SVG/menu-burger.svg";

import { SidebarContext } from "../../context/sidebarContext";

const StyleButton = styled("button")(({ theme }) => ({
  width: "100%",
  //   height: "2rem",
  maxWidth: "2.4rem",
  maxHeight: "2.4rem",
  borderRadius: "0.9rem",
  border: "none",
  fill: "#fff",
  padding: "0.60rem",
  cursor: "pointer",
  "&:hover": {
    opacity: "0.8",
  },
  "&:focus": {
    outline: "none",
  },
}));

const MyAvatar = styled(Avatar)({
  // background: '#96d7d1',
  borderRadius: "0.8rem",
  padding: "0.1rem",
});

const LeftBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.auth.user.user);
  const { toggle, openSidebar } = useContext(SidebarContext);

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        maxWidth: {
          xs: openSidebar ? "300px" : "3rem",
          md: openSidebar ? "300px" : "3.5rem",
        },
        display: {
          xs: "block",
          md: "block",
        },
        height: "100vh",
        position: "sticky",
        background: "background.paper",
        overflow: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "::-webkit-scrollbar": {
          display: "none",
        },
        bgcolor: "background.paper",
        padding: openSidebar ? "" : "0.2rem",
        transition: "all .3s ease",
        borderRadius: {
          xs: 0,
          md: openSidebar ? "0 1.5rem 1.5rem 0" : "0",
        },
      }}
    >
      <Stack direction={"column"} sx={{ position: "relative", height: "100%" }}>
        <Stack
          direction="row"
          justifyContent={openSidebar ? "space-between" : "center"}
          sx={{ marginTop: 1, p: openSidebar ? "0 0.5rem 0 5rem" : "0" }}
        >
          <IconButton
            sx={{
              height: {
                xs: "2.5rem",
                md: "3.2rem",
              },
              marginBottom: openSidebar ? "0" : "0.5rem",
              //   minHeight: "2.8rem",
              display: openSidebar ? "block" : "none",
            }}
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="Logo Dversity" height={"100%"} />
          </IconButton>
          <IconButton onClick={toggle}>
            <IconMenu style={{ width: 20, height: 20, fill: "#2469d8" }} />
          </IconButton>
        </Stack>

        <Divider
          sx={{
            margin: "1rem 0",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        ></Divider>
        <Box
          flexGrow={1}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Paper
            sx={{
              width: "90%",
              boxShadow: "none",
              borderRadius: 3,
              border: "1px solid #efefef",
              padding: {
                xs: openSidebar ? "0.5rem" : 0,
                md: openSidebar ? "0.8rem" : 0,
              },
            }}
          >
            <Stack
              direction="row"
              spacing={openSidebar ? 1 : 0}
              alignItems="center"
              justifySelf="center"
            >
              <MyAvatar
                src={user_data.avatar}
                alt={user_data.last_name}
                sx={{
                  width: openSidebar ? "2rem" : "100%",
                  height: openSidebar ? "2rem" : "2.5rem",
                  padding: "0",
                  bgcolor: user_data.background,
                }}
              />
              <Stack
                direction={"column"}
                sx={{
                  display: openSidebar ? "block" : "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: "#404040",
                  }}
                >
                  {user_data.first_name} {user_data.last_name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.6rem",
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    // color: '#808080'
                  }}
                >
                  {user_data.email}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
          <Grid container sx={{ height: "60vh" }}>
            <Grid
              item
              xs={12}
              md={openSidebar ? 4 : 12}
              sx={{
                borderRight: {
                  xs: "none",
                  md: openSidebar ? "1px solid #efefef" : "none",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "25vh",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexDirection: "column",
                  rowGap: { xs: 1.5, md: 2 },
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1.5}
                  sx={{
                    width: openSidebar ? "80%" : "auto",
                    "&:hover": {
                      color: "#2469d8",
                    },
                  }}
                  onClick={() => navigate("/")}
                >
                  <Tooltip
                    title="Accueil"
                    placement="right"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    sx={{ bgcolor: "#ffda5f", color: "#fff" }}
                  >
                    <StyleButton
                      sx={{
                        background: "#ffda5f",
                        display: {
                          xs: "block",
                          md: openSidebar ? "none" : "block",
                        },
                      }}
                      onClick={() => navigate("/")}
                    >
                      <IconHome style={{ width: "100%", height: "100%" }} />
                    </StyleButton>
                  </Tooltip>
                  <Typography
                    color="#333"
                    sx={{
                      display: {
                        xs: openSidebar ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    Accueil
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1.5}
                  sx={{
                    width: {
                      xs: openSidebar ? "80%" : "auto",
                      md: "auto",
                    },
                    "&:hover": {
                      color: "#2469d8",
                    },
                  }}
                  onClick={() => navigate("/profil")}
                >
                  <Tooltip
                    title="Profil"
                    placement="right"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    sx={{ bgcolor: "#ee4266", color: "#fff" }}
                  >
                    <StyleButton
                      style={{ background: "#ee4266" }}
                      onClick={() => navigate("/profil")}
                    >
                      <IconUser style={{ width: "100%", height: "100%" }} />
                    </StyleButton>
                  </Tooltip>
                  <Typography
                    color="#333"
                    sx={{
                      display: {
                        xs: openSidebar ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    Profil
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1.5}
                  sx={{
                    width: {
                      xs: openSidebar ? "80%" : "auto",
                      md: "auto",
                    },
                    "&:hover": {
                      color: "#2469d8",
                    },
                  }}
                  onClick={() => navigate("/photos")}
                >
                  <Tooltip
                    title="Photos & Vidéos"
                    placement="right"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    sx={{ bgcolor: "#50e450", color: "#fff" }}
                  >
                    <StyleButton
                      sx={{ background: "#50e450" }}
                      onClick={() => navigate("/photos")}
                    >
                      <IconPhotos style={{ width: "100%", height: "100%" }} />
                    </StyleButton>
                  </Tooltip>
                  <Typography
                    color="#333"
                    sx={{
                      display: {
                        xs: openSidebar ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    Photos & Vidéos
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1.5}
                  sx={{
                    width: {
                      xs: openSidebar ? "80%" : "auto",
                      md: "auto",
                    },
                    "&:hover": {
                      color: "#2469d8",
                    },
                  }}
                  onClick={() => navigate("/messages")}
                >
                  <Tooltip
                    title="Messages"
                    placement="right"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    sx={{ bgcolor: "#4ac0d5", color: "#fff" }}
                  >
                    <StyleButton
                      sx={{ background: "#4ac0d5" }}
                      onClick={() => navigate("/messages")}
                    >
                      <IconMessage style={{ width: "100%", height: "100%" }} />
                    </StyleButton>
                  </Tooltip>
                  <Typography
                    color="#333"
                    sx={{
                      display: {
                        xs: openSidebar ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    Messages
                  </Typography>
                </Stack>
              </Box>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1.5}
                sx={{
                  width: {
                    xs: openSidebar ? "80%" : "auto",
                    md: "auto",
                  },
                  "&:hover": {
                    color: "#2469d8",
                  },
                }}
                onClick={() => navigate("/messages")}
              >
                <Tooltip
                  title="Jeux"
                  placement="right"
                  arrow
                  enterDelay={300}
                  leaveDelay={200}
                  sx={{ bgcolor: "#2469d8", color: "#fff" }}
                >
                  <IconButton
                    sx={{
                      width: "50px",
                      height: "50px",
                      fill: "#2469d8",
                    }}
                    onClick={() => navigate("/profil")}
                  >
                    <IconGames style={{ width: "100%", height: "100%" }} />
                  </IconButton>
                </Tooltip>
                <Typography
                  color="#333"
                  sx={{
                    display: {
                      xs: openSidebar ? "block" : "none",
                      md: "none",
                    },
                  }}
                >
                  Jeux
                </Typography>
              </Stack>
              <Box
                sx={{
                  width: "100%",
                  height: "25vh",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  rowGap: 2,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1.5}
                  sx={{
                    width: {
                      xs: openSidebar ? "80%" : "auto",
                      md: "auto",
                    },
                    "&:hover": {
                      color: "#2469d8",
                    },
                  }}
                  onClick={() => navigate("/messages")}
                >
                  <Tooltip
                    title="Enregistrements"
                    placement="right"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    sx={{ bgcolor: "#fa7e5c", color: "#fff" }}
                  >
                    <StyleButton sx={{ background: "#fa7e5c" }}>
                      <IconBookmark style={{ width: "100%", height: "100%" }} />
                    </StyleButton>
                  </Tooltip>
                  <Typography
                    color="#333"
                    sx={{
                      display: {
                        xs: openSidebar ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    Enregistrements
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1.5}
                  sx={{
                    width: {
                      xs: openSidebar ? "80%" : "auto",
                      md: "auto",
                    },
                    "&:hover": {
                      color: "#2469d8",
                    },
                  }}
                  onClick={() => navigate("/messages")}
                >
                  <Tooltip
                    title="Ajouter une passion"
                    placement="right"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    sx={{ bgcolor: "#540d6e", color: "#fff" }}
                  >
                    <StyleButton
                      sx={{
                        background: "#540d6e",
                        display: {
                          xs: "block",
                          md: openSidebar ? "none" : "block",
                        },
                      }}
                    >
                      <IconPassions style={{ width: "100%", height: "100%" }} />
                    </StyleButton>
                  </Tooltip>
                  <Typography
                    color="#333"
                    sx={{
                      display: {
                        xs: openSidebar ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    Passions
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1.5}
                  sx={{
                    width: {
                      xs: openSidebar ? "80%" : "auto",
                      md: "auto",
                    },
                    "&:hover": {
                      color: "#2469d8",
                    },
                  }}
                  onClick={() => navigate("/messages")}
                >
                  <Tooltip
                    title="Paramètres"
                    placement="right"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    sx={{ bgcolor: "#999999" }}
                  >
                    <StyleButton
                      sx={{ background: "#999999" }}
                      onClick={() => navigate("/settings")}
                    >
                      <IconSettings style={{ width: "100%", height: "100%" }} />
                    </StyleButton>
                  </Tooltip>
                  <Typography
                    color="#333"
                    sx={{
                      display: {
                        xs: openSidebar ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    Paramètres
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={0}
              md={openSidebar ? 8 : 0}
              sx={{
                display: {
                  xs: "none",
                  md: openSidebar ? "flex" : "none",
                },
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: 2,
              }}
            >
              <Button
                sx={{
                  width: "150px",
                  background: "#ffda5f",
                  borderRadius: 5,
                  padding: "1rem 0",
                  color: "#444",
                  fill: "#444",
                }}
                onClick={() => navigate("")}
              >
                <IconHome style={{ width: "15px", height: "15px" }} />
                <Typography
                  variant="button"
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    marginLeft: "1rem",
                  }}
                >
                  ACCUEIL
                </Typography>
              </Button>
              <Button
                sx={{
                  width: "150px",
                  background: "#fff",
                  borderRadius: 5,
                  border: "1px solid #efefef",
                  padding: "1rem",
                  color: "#444",
                  fill: "#444",
                }}
              >
                <IconPassions style={{ width: "15px", height: "15px" }} />
                <Typography
                  variant="button"
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    marginLeft: "1rem",
                  }}
                >
                  PASSIONS
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Button
            sx={{
              width: "60%",
              padding: "0.6rem",
              borderRadius: 3,
              // color: '#fff',
              // background: '#d7415e',
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: openSidebar ? 1 : 0,
            }}
            variant={"contained"}
            color={"secondary"}
            onClick={() => dispatch(logout())}
          >
            <SignOutIcon />
            <Typography
              sx={{
                display: {
                  xs: "none",
                  md: openSidebar ? "block" : "none",
                },
              }}
            >
              Déconnexion
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default LeftBar;
