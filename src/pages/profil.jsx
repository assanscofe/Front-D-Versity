import React, { useState } from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";

import fond from "../assets/798904.png";
// import avatar from '../assets/Icons/avatar22.png'
import Publication from "../components/tabsProfil/publication";
import MyPassions from "../components/tabsProfil/myPassions";
import { useSelector } from "react-redux";

const tabsData = [
  {
    label: "Publication",
    content: <Publication />,
  },
  {
    label: "Mes Passions",
    content: <MyPassions />,
  },
];

const Profil = () => {
  const [activeTab, setActiveTab] = useState(0);

  const user_data = useSelector((state) => state.auth.user.user);

  const handleActive = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 8vh)",
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              height: "12rem",
              overflow: "hidden",
              borderRadius: "1rem 1rem 0.5rem 0.5rem",
            }}
          >
            <img
              src={fond}
              alt="image1"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            xs={3.5}
            sx={{
              height: "calc(100% - 12rem)",
              minWidth: "14rem",
              position: "relative",
            }}
          >
            <Paper
              sx={{
                position: "absolute",
                top: "-4rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "14rem",
                height: "40vh",
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: "7rem",
                  height: "7rem",
                  borderRadius: 50,
                  background: user_data.background,
                  padding: "0.5rem",
                }}
              >
                <img
                  src={user_data.avatar}
                  alt="avatar"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Typography variant="h6">{user_data.username}</Typography>
              <Typography>Bio</Typography>
              <Button>Suivre</Button>
            </Paper>
          </Grid>
          <Grid item xs={8.5} sx={{ padding: "0.5rem" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  padding: "0.5rem",
                }}
              >
                {tabsData.map((elt, index) => (
                  <Button
                    key={index}
                    onClick={() => handleActive(index)}
                    sx={{
                      padding: "0.5rem 1.5rem",
                      color: index === activeTab ? "#2469d8" : "#888",
                      borderBottom:
                        index === activeTab ? "0.2rem solid #2469d8" : "0",
                    }}
                  >
                    {elt.label}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "calc(100% - 7vh)",
                  padding: "0 1rem",
                  //  overflowY: 'scroll',
                  // scrollbarWidth: '0',
                  // '&::-webkit-scrollbar': {
                  //     display:'none'
                  // },
                  // '::-webkit-scrollbar': {
                  //     display:'none'
                  // }
                }}
              >
                {tabsData[activeTab].content}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profil;
