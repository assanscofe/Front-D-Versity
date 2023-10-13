import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import loupGarou from "../assets/LG.jpg";
import uno from "../assets/Uno.png";
import ludo from "../assets/Ludo.png";

const listGame = [
  {
    id: 1,
    name: "Loup Garou",
    image: loupGarou,
  },
  {
    id: 2,
    name: "Loup Garou",
    image: uno,
  },
  {
    id: 3,
    name: "Loup Garou",
    image: ludo,
  },
];

const Games = () => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="h6" color={"primary.main"}>
        Jeux
      </Typography>
      <Stack direction={"row"} flexWrap={"wrap"} spacing={3}>
        {listGame.map((elt) => (
          <Box
            sx={{
              position: "relative",
              width: "15rem",
              height: "15rem",
              bgcolor: "#fff",
              borderRadius: "3rem",
              boxShadow: "5px 5px 10px #44444455",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05,1.05)",
                transition: "all .2s ease",
              },
              "&:hover Stack": {
                display: "block",
              },
              overflow: "hidden",
            }}
          >
            <img
              src={elt.image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "95%",
                left: "50%",
                transform: "translate(-50%,-90%)",
                color: "#333",
                fontSize: "1rem",
                fontWeight: "800",
              }}
            ></Typography>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: 2,
                background: "#33333322",
                display: "none",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "0.8rem" }}
              >
                Jouer
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: "0.8rem" }}
              >
                Règles
              </Button>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Games;
