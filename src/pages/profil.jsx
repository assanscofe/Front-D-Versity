import React, { useState } from "react";
import { Box, Grid, Typography, Button, Tab, Stack } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import fond from "../assets/798904.png";
import IconAdd from "@mui/icons-material/Add";
// import avatar from '../assets/Icons/avatar22.png'
import Publication from "../components/tabsProfil/publication";
import MyPassions from "../components/tabsProfil/myPassions";
import { useSelector } from "react-redux";

// const tabsData = [
//   {
//     label: "Publication",
//     content: <Publication />,
//   },
//   {
//     label: "Mes Passions",
//     content: <MyPassions />,
//   },
// ];

const Profil = () => {
  //   const [activeTab, setActiveTab] = useState(0);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user_data = useSelector((state) => state.auth.user.user);

  //   const handleActive = (index) => {
  //     setActiveTab(index);
  //   };

  return (
    <>
      {/* <Box sx={{
                width: '100%',
                height: 'calc(100% - 8vh)',

            }}>
                <Grid container
                    sx={{
                        height: '100%',
                        width: '100%',
                    }}>
                    <Grid item xs={12}
                        sx={{
                            height: '12rem',
                            overflow: 'hidden',
                            borderRadius: '1rem 1rem 0.5rem 0.5rem'
                        }}>
                        <img src={fond} alt="image1" width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
                    </Grid>
                    <Grid item xs={3.5} sx={{
                        height: 'calc(100% - 12rem)',
                        minWidth: '14rem',
                        position: 'relative',

                    }}>
                        <Paper sx={{
                            position: 'absolute',
                            top: '-4rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '14rem',
                            height: '40vh',
                            borderRadius: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <Box sx={{
                                width: '7rem',
                                height: '7rem',
                                borderRadius: 50,
                                background: user_data.background,
                                padding: '0.5rem'
                            }}>
                                <img src={user_data.avatar} alt="avatar" width={'100%'} height={'100%'} />
                            </Box>
                            <Typography variant='h6'>{user_data.username}</Typography>
                            <Typography>Bio</Typography>
                            <Button>Suivre</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={8.5} sx={{ padding: '0.5rem' }}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: 'auto',
                                padding: '0.5rem',
                            }}>
                                {
                                    tabsData.map((elt, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => handleActive(index)}
                                            sx={{
                                                padding: '0.5rem 1.5rem',
                                                color: index === activeTab ? '#2469d8' : '#888',
                                                borderBottom: index === activeTab ? '0.2rem solid #2469d8' : '0',
                                            }}
                                        >
                                            {elt.label}
                                        </Button>
                                    ))
                                }
                            </Box>
                            <Box sx={{
                                width: '100%',
                                height: 'calc(100% - 7vh)',
                                padding: '0 1rem',
                                //  overflowY: 'scroll',
                                // scrollbarWidth: '0',
                                // '&::-webkit-scrollbar': {
                                //     display:'none'
                                // },
                                // '::-webkit-scrollbar': {
                                //     display:'none'
                                // }
                            }}>
                                {tabsData[activeTab].content}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box> */}
      {/* <TabContext value={value}> */}
      <Stack direction={"column"} sx={{ width: "100%", height: "100%" }}>
        <Grid
          container
          sx={{
            width: "100%",
            maxWidth: 700,
            height: "auto",
            bgcolor: "background.paper",
            margin: "0 auto",
            borderRadius: 4,
            padding: 3,
          }}
        >
          <Grid item xs={"12"} md={"4"}>
            <Stack
              direction="column"
              //   sx={{ bgcolor: "green" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <Box
                sx={{
                  width: { xs: 150 },
                  height: { xs: 150 },
                  bgcolor: user_data.background,
                  borderRadius: 50,
                  padding: 2,
                  border: "3px solid #569",
                }}
              >
                <img
                  src={user_data.avatar}
                  alt={user_data.username}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              {/* <Typography variant="h6">{user_data.username}</Typography>
              <Button>Suivre</Button> */}
            </Stack>
          </Grid>
          <Grid item xs={"12"} md={"8"}>
            <Stack
              direction="column"
              justifyContent={"center"}
              spacing={2}
              sx={{ height: "100%" }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={"center"}
                spacing={2}
              >
                <Typography variant="h6">{user_data.username}</Typography>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 4 }}
                  endIcon={<IconAdd />}
                >
                  Suivre
                </Button>
              </Stack>
              <Stack
                direction={{ xs: "column", md: "row" }}
                flexWrap="wrap"
                justifyContent={"center"}
                alignItems="center"
                spacing={2}
              >
                {/* <TabList
                    sx={{ display: "flex", flexDirection: "column" }}
                    onChange={handleChange}
                  >
                    <Tab label="Publication" value="1" />
                    <Tab label="Mes passions" value="2" />
                    <Tab label="Modifier mon profil" value="3" />
                  </TabList> */}
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Publication
                </Button>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Mes passions
                </Button>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Modifier mon profil
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        {/* <TabPanel value="1">Publication</TabPanel>
          <TabPanel value="2">Mes passions</TabPanel>
          <TabPanel value="3">Modifier mon profil</TabPanel> */}
      </Stack>
      {/* </TabContext> */}
    </>
  );
};

export default Profil;
