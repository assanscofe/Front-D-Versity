import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  // Card,
  // CardMedia,
  // CardContent,
  // Divider,
  // Button,
  Typography,
  // CardActions,
  // IconButton,
  Accordion,
  // AccordionSummary,
  // AccordionDetails,
  Box,
  Grid,
  Stack,
  Avatar,
} from "@mui/material";
// import Masonry from '@mui/lab/Masonry'
import { getAllPassions } from "../services/api";
import eventEmitter, { PASSION_ADDED } from "../components/addPassion/event";
import img1 from "../assets/432486.jpg";
import img2 from "../assets/683409.jpg";
import img3 from "../assets/798904.png";

const MyAccordion = styled(Accordion)({
  width: "18rem",
});

const StyleAccordion = styled("div")(({ theme }) => ({
  height: "auto",
  maxHeight: "100%",
  overflowY: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "::-webkit-scrollbar": {
    display: "none",
  },

  // marginTop: '1rem',
  padding: "1rem 1rem 2rem 1rem",
}));

const Passions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [passions, setPassions] = useState([]);

  useEffect(() => {
    getAllPassions()
      .then((data) => {
        // Tri des passions dans l'ordre décroissant par leur identifiant
        const sortedPassions = data.sort((a, b) => b.id - a.id);
        setPassions(sortedPassions);
      })
      .catch((error) => {
        console.error(error);
      });

    // Écoutez l'événement de nouvelle passion ajoutée
    eventEmitter.on(PASSION_ADDED, handlePassionAdded);

    // Nettoyez les écouteurs d'événements lorsque le composant est démonté
    return () => {
      eventEmitter.off(PASSION_ADDED, handlePassionAdded);
    };
  }, []);

  // Fonction de gestion de l'événement de nouvelle passion ajoutée
  const handlePassionAdded = (passion) => {
    // Mettez à jour la liste des passions avec la nouvelle passion
    setPassions((prevPassions) => [passion, ...prevPassions]);
  };
  return (
    <>
      <Typography variant="h6" color={"primary.main"}>
        Passions
      </Typography>
      <StyleAccordion>
        <Grid container sx={{}}>
          {passions.map((passion, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              sx={{
                width: "1fr",
                minWidth: "300px",
                height: "auto",
                padding: 1,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  bgcolor: "background.paper",
                  padding: "1rem",
                  borderRadius: 5,
                }}
              >
                <Grid
                  container
                  gap={1}
                  sx={{
                    maxWidth: "100%",
                    mb: "1rem",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      height: "6rem",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={passion.passionImage}
                      alt={passion.passionName}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5.8}
                    sx={{
                      height: "4rem",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img2}
                      alt={passion.passionName}
                      width="100%"
                      height="100%"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5.8}
                    sx={{
                      height: "4rem",
                      borderRadius: 3,
                      marginLeft: "auto",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img3}
                      alt={passion.passionName}
                      width="100%"
                      height="100%"
                    />
                  </Grid>
                </Grid>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <Avatar
                      src={passion.passionImage}
                      alt="image"
                      sx={{ width: 30, height: 30 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {passion.passionName}
                    </Typography>
                  </Stack>
                  <Stack direction="column" alignItems={"center"}>
                    <Typography variant="body2">180</Typography>
                    <Typography variant="body2">membres</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </StyleAccordion>
    </>
  );
};

export default Passions;
