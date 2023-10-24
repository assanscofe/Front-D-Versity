import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Avatar,
  Tab,
  Divider,
  IconButton
} from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";

import Publication from "../components/tabsProfil/publication";
import MyPassions from "../components/tabsProfil/myPassions";
import AddIcon from "@mui/icons-material/Add";
import IconMessage from '../assets/SVG/messages.svg'
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { SidebarContext } from "../context/sidebarContext";
import {
  followUser,
  unFollowUser,
  getFollowByUser,
} from "../redux/followSlice";
import { getUserById } from "../redux/authSlice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { recommandatationUser } from "../services/api";
// import { ReactComponent as IconPublication } from "../assets/SVG/book-open-cover (1).svg";
// import { ReactComponent as IconEdit } from "../assets/SVG/following (1).svg";

const Profil = () => {
  const navigate = useNavigate()
  const user = useParams();
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.auth.dataById);
  const idUser = useSelector((state) => state.auth.user.user.id);
  const followingUser = useSelector((state) => state.follow.dataById);
  const { openSidebar } = useContext(SidebarContext);
  const [value, setValue] = useState("1");
  const [listRecommandation, setListRecommandation] = useState([])
  const [isFollowing, setIsFollowing] = useState(
    followingUser
      ? followingUser.followers.some(
          (elt) => elt.following === parseInt(idUser)
        )
      : false
  );

  // useEffect(() => {
  //   setIsFollowing();
  // }, [user, followingUser]);

  useEffect(()=>{
    recommandatationUser(idUser).then((data)=>{
      setListRecommandation(data)
    })
  },[idUser])

  useEffect(() => {
    dispatch(getFollowByUser(user.id)).then((data) => {
      setIsFollowing(
        data.payload.followers.some((elt) => elt.following === parseInt(idUser))
      );
    });
  }, [dispatch, idUser, user]);

  useEffect(() => {
    dispatch(getUserById(user.id));
  }, [user, dispatch]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // console.log(followingUser);

  const handleToggleFollow = () => {
    if (isFollowing) {
      dispatch(unFollowUser(idUser, user_data.id)).then(() => {
        setIsFollowing(false);
      });
    } else {
      dispatch(followUser(idUser, user_data.id));
      setIsFollowing(true);
    }
  };

  return (
    <>
      <TabContext value={value}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            borderRadius: 5,
            // overflowY: "auto",
            // scrollbarWidth: "none",
            // "&::-webkit-scrollbar": {
            //   display: "none",
            // },
            // "::-webkit-scrollbar": {
            //   display: "none",
            // },
          }}
        >
          <Grid container sx={{ width: "100%", height: "calc(100% - 5vh)" }}>
            <Grid item xs={12} md={openSidebar ? 3.5 : 2.8} xl={2.5}>
              <Stack
                direction={"column"}
                alignItems={"center"}
                spacing={3}
                sx={{
                  position: "relative",
                  bgcolor: "background.paper",
                  py: 4,
                  borderRadius: 5,
                  marginTop: 9,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -75,
                    width: 150,
                    height: 150,
                    bgcolor: user_data.background,
                    borderRadius: 5,
                  }}
                >
                  <Avatar
                    src={user_data.avatar}
                    alt={user_data.username}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Stack
                  direction="column"
                  alignItems={"center"}
                  sx={{ paddingTop: 5 }}
                >
                  <Typography variant="h5">{user_data.username}</Typography>
                  <Typography variant="body2">Bio</Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    width: "100%",
                    borderTop: "1px solid #efefef",
                    borderBottom: "1px solid #efefef",
                    paddingY: "0.5rem",
                  }}
                >
                  <Stack
                    direction={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                    sx={{
                      flex: "1",
                    }}
                  >
                    <Typography variant="h6">
                      {followingUser !== null
                        ? followingUser.following.length
                        : 0}
                    </Typography>
                    <Typography variant="caption">Suivi(e)</Typography>
                  </Stack>
                  <Divider
                    orientation="vertical"
                    style={{
                      height: "3.5rem",
                      border: "1px solid #efefef",
                    }}
                  />
                  <Stack
                    direction={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                    sx={{
                      flex: "1",
                    }}
                  >
                    <Typography variant="h6">
                      {" "}
                      {followingUser !== null
                        ? followingUser.followers.length
                        : 0}
                    </Typography>
                    <Typography variant="caption">followers</Typography>
                  </Stack>
                </Stack>
                {user_data.id === idUser ? (
                  <Typography
                    variant="body1"
                    sx={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#2096f3",
                    }}
                  >
                    Modifier mon profil
                  </Typography>
                ) : (
                  <Stack direction={'row'} spacing={2}>
                    <Button
                      onClick={handleToggleFollow}
                      variant={isFollowing ? "outlined" : "contained"}
                      sx={{ borderRadius: 5, width: 100 }}
                      size="small"
                      endIcon={isFollowing ? <CheckIcon /> : <AddIcon />}
                    >
                      {isFollowing ? "Suivi(e)" : "Suivre"}
                    </Button>
                    <IconButton sx={{
                      width:40,
                      height:40,
                      borderRadius:2,
                      overflow:'hidden',
                      border:'1px solid #2469d8'
                    }} onClick={()=>navigate('/messages/'+user.id)}>
                      <img src={IconMessage} alt="message" width={'100%'} height={'100%'} />
                    </IconButton>
                  </Stack>
                  
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={openSidebar ? 8.5 : 6.5} xl={7} px={2}>
              <Box sx={{}}>
                <TabList
                  onChange={handleChange}
                  textColor="primary"
                  // indicatorColor="primary"
                  centered
                >
                  <Tab label="publication" value="1" />
                  <Tab label="Passions" value="2" />
                  {/* <Tab
                    value="3"
                  /> */}
                </TabList>
              </Box>
              <Stack
                direction={"column"}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <TabPanel
                  value="1"
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxHeight: "100%",
                    px: { md: 0, xl: 12 },
                  }}
                >
                  <Publication />
                </TabPanel>
                <TabPanel value="2">
                  <MyPassions />
                </TabPanel>
              </Stack>
            </Grid>
            <Grid item xs={0} md={openSidebar ? 0 : 2.7} xl={2.5}>
              <Stack
                direction="column"
                alignItems={'center'}
                sx={{
                  bgcolor: "background.paper",
                  height: 500,
                  borderRadius: 5,
                  py:'1rem'
                }}
              >
                <Typography variant='h6'>Suggestions</Typography>
                <Stack direction={'column'}>
                  {listRecommandation.map((elt,index)=>(
                    <>
                    <Stack direction={'row'} key={index} spacing={2} sx={{
                      width:'100%',
                      padding:'1rem'
                    }} onClick={()=>navigate('/profil/'+elt.id)}> 
                      <Box sx={{
                        width:45,
                        height:45,
                        overflow:'hidden',
                        borderRadius:2,
                        background: elt.background
                      }}>
                        <img src={elt.avatar} alt={elt.username} width={'100%'} height={'100%'}/>
                      </Box>
                      <Stack direction={'column'}>
                        <Typography>{elt.username}</Typography>
                        <Typography>{elt.email}</Typography>
                      </Stack>
                    </Stack>
                    <Divider />
                    </>
                    
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </TabContext>
    </>
  );
};

export default Profil;
