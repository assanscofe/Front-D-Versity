import React from "react";
import { Stack, Grid, Box, Paper, Button, Avatar } from "@mui/material";
import avatar from "../assets/Icons/avatar10.png";
import { ReactComponent as IconPhotos } from "../assets/SVG/picture.svg";
import { ReactComponent as IconVideos } from "../assets/SVG/picture.svg";

const Actualites = () => {
  return (
    <Stack>
      <Stack>
        <Paper
          sx={{
            width: "100%",
            // height:'7rem',
            borderRadius: 4,
            padding: "1rem",
          }}
        >
          <Grid container>
            <Grid item xs={1} sx={{}}>
              <Avatar src={avatar} />
            </Grid>
            <Grid
              item
              xs={11}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "0 1rem",
              }}
            >
              {/* {isModalOpen && <MyModal setIsModalOpen={setIsModalOpen} />} */}
              <Box
                sx={{
                  background: "#efefef",
                  borderRadius: 6,
                  padding: "0.5rem 1rem",
                  width: "100%",
                  color: "#999",
                  cursor: "pointer",
                }}
                // onClick={() => setIsModalOpen(true)}
              >
                Quoi de neuf ?
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sx={{
                marginLeft: "auto",
                padding: "0.5rem 1rem 0 1rem",
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
              }}
            >
              <Button
                startIcon={
                  <IconPhotos
                    style={{ width: 10, height: 10, fill: "#2096f3" }}
                  />
                }
              >
                Photos
              </Button>
              <Button
                startIcon={
                  <IconVideos
                    style={{ width: 10, height: 10, fill: "#ffda5f" }}
                  />
                }
              >
                Videos
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Actualites;
