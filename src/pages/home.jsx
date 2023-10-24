import React from "react";
import {
  Chip,
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { getAllPassions } from '../services/api'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Slide from '../components/slide/slide'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//------------import Images-----------
import ChainsawMan from "../assets/1280277.jpg";
import Pubg from "../assets/pubg.jpg";
import img1 from "../assets/pexels-tara-winstead-7663172.jpg";
import img2 from "../assets/pexels-karolina-grabowska-4466205.jpg";
import img3 from "../assets/1150123.png";
import img4 from "../assets/683409.jpg";
import img5 from "../assets/pexels-eric-anada-1001990.jpg";
import img6 from "../assets/432486.jpg";
import img7 from "../assets/pexels-dzenina-lukac-1005012.jpg";
// import tt from "../assets/tt.png";
import imgSlider2 from "../assets/1135879.png";
import imgSlider3 from "../assets/1146218.png";

const StyleButton = styled(Button)(({ theme }) => ({
  padding: "0",
  overflow: "hidden",
  borderRadius: 10,
  position: "relative",
  "&:hover": {
    transform: "scale(1.03,1.03)",
    transition: "all 0.1s ease",
    boxShadow: "0 5px 10px #2469d855",
  },
}));

// const StyledCard = styled(Card)(({ theme }) => ({
//     width: '170px',
//     height: '200px',
//     background: '#2096f3',
//     borderRadius: '20px',
//     transition: 'none',
//     cursor: 'pointer',
//     '&:hover': {
//         boxShadow: '0 6px 0 #2469d8 , 0 15px 10px #2469d877 ,0 20px 15px #2469d844',
//         transform: 'scale(1.05,1.05)',
//         transition: 'all 0.1s ease',
//     },
// }))

const imgSlider = [
  {
    id: 1,
    img: imgSlider3,
    titre: "Jeux Vidéo",
    membres: "2.268",
    Description:
      "Plongez dans le monde des jeux de société revisités où les règles traditionnelles sont réinventées pour offrir des expériences ludiques uniques. Rejoignez notre communauté créative pour partager vos propres jeux repensés, ...",
  },
  {
    id: 2,
    img: imgSlider2,
    titre: "L'artisanat technologique",
    membres: "100",
    Description:
      "Si vous êtes passionné par la fusion de l'artisanat traditionnel et de la technologie moderne, notre communauté d'artisanat technologique est faite pour vous. Explorez l'intersection entre l'artisanat, l'électronique et la programmation, partagez vos créations DIY(Fais- le toi - même) et découvrez de nouvelles façons de donner vie à des objets uniques et fonctionnels.",
  },
  {
    id: 3,
    img: ChainsawMan,
    titre: "Univers Otaku",
    membres: "3.453",
    Description:
      "Découvrez la richesse de la culture japonaise à travers les anime, qu'il s'agisse des références culturelles, de l'esthétique unique ou de la musique entraînante.Rejoignez - nous pour célébrer ensemble cette forme d'art animée qui continue de captiver et d'inspirer des millions de fans à travers le monde.",
  },
];

const recommandations = [
  {
    id: 1,
    pochette: ChainsawMan,
    titre: "Chainsaw Man",
    type: "Animé",
  },
  {
    id: 2,
    pochette: Pubg,
    titre: "PUBG",
    type: "Jeux Mobile",
  },
  {
    id: 3,
    pochette: ChainsawMan,
    titre: "Chainsaw Man",
    type: "Animé",
  },
  {
    id: 4,
    pochette: ChainsawMan,
    titre: "Chainsaw Man",
    type: "Animé",
  },
  {
    id: 5,
    pochette: ChainsawMan,
    titre: "Chainsaw Man",
    type: "Animé",
  },
  {
    id: 6,
    pochette: ChainsawMan,
    titre: "Chainsaw Man",
    type: "Animé",
  },
  {
    id: 7,
    pochette: ChainsawMan,
    titre: "Chainsaw Man",
    type: "Animé",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  //Paramètres du slider
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Slider {...sliderSettings}>
          {" "}
          {imgSlider.map((elt) => (
            <Box
              sx={{
                width: "100%",
                maxHeight: "37vh",
                // display: 'none'
              }}
              key={elt.id}
            >
              <Grid
                container
                sx={{
                  width: "100%",
                  maxHeight: "37vh",
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{ height: "37vh", position: "relative" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      borderRadius: 6,
                    }}
                  >
                    <img
                      src={elt.img}
                      alt="ChainsawMan"
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Stack
                    direction={"column"}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "#33333355",
                      borderRadius: 6,
                      padding: "1rem",
                      display: { xs: "flex", md: "none" },
                    }}
                    justifyContent={"space-between"}
                  >
                    <Stack
                      direction={"column"}
                      sx={{
                        height: "70%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        // whiteSpace: "nowrap",
                      }}
                    >
                      <Typography
                        color={"white"}
                        variant={"h5"}
                        sx={{ fontWeight: 600 }}
                      >
                        {elt.titre}
                      </Typography>
                      <Typography variant={"body2"} color={"lightgray"}>
                        {elt.Description}
                      </Typography>
                    </Stack>
                    <Button
                      sx={{
                        alignSelf: "flex-end",
                        width: "50%",
                        borderRadius: 4,
                        padding: "0.55rem 1.5rem",
                      }}
                      variant={"contained"}
                      color={"primary"}
                    >
                      Rejoindre
                    </Button>
                  </Stack>
                </Grid>
                <Grid
                  item
                  container
                  xs={0}
                  md={4}
                  sx={{ px: 2, display: { xs: "none", md: "initial" } }}
                  spacing={1}
                >
                  <Grid item md={12} sx={{ height: "25vh" }}>
                    <Paper
                      sx={{
                        width: "100%",
                        height: "100%",
                        padding: { md: "1rem", xl: "1.5rem" },
                        borderRadius: 6,
                        position: "relative",
                        boxShadow: "none",
                      }}
                    >
                      <Stack
                        direction={"column"}
                        justifyContent={"space-between"}
                        sx={{ height: "100%" }}
                      >
                        <Stack
                          direction={"column"}
                          sx={{
                            height: "70%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            // whiteSpace: "nowrap",
                          }}
                        >
                          <Typography
                            color={"dark"}
                            variant={"h6"}
                            sx={{ fontWeight: 600 }}
                          >
                            {elt.titre}
                          </Typography>
                          <Typography variant={"body2"}>
                            {elt.Description}
                          </Typography>
                        </Stack>
                        <Button
                          sx={{
                            alignSelf: "flex-end",
                            width: "50%",
                            borderRadius: 4,
                            padding: "0.55rem 1.5rem",
                          }}
                          variant={"outlined"}
                          color={"primary"}
                        >
                          Rejoindre
                        </Button>
                      </Stack>
                    </Paper>
                  </Grid>
                  <Grid item md={12} sx={{ height: "12vh" }}>
                    <Stack
                      direction={"row"}
                      spacing={1}
                      sx={{ height: "100%" }}
                    >
                      <Paper
                        sx={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                          borderRadius: 6,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Typography variant={"h5"} color={"dark"}>
                          {elt.membres}
                        </Typography>
                        <Typography variant={"body1"} color={"GrayText"}>
                          membres
                        </Typography>
                      </Paper>
                      <Paper
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 6,
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={elt.img}
                          alt="ChainsawMan"
                          width={"100%"}
                          height={"100%"}
                          style={{ objectFit: "cover" }}
                        />
                      </Paper>
                    </Stack>
                  </Grid>
                  {/* <Grid item md={6} sx={{ height: "12vh" }}>
                  </Grid> */}
                </Grid>
              </Grid>
            </Box>
          ))}
        </Slider>

        <Box
          sx={{
            width: "100%",
            height: "calc((100%)/2 + 3vh)",
            padding: {
              xs: 0,
              md: "1rem",
            },
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box
            sx={{
              gridColumn: "1",
              height: "100%",
              maxWidth: { xs: "100%", md: "40vw" },
              minWidth: { md: "35vw" },
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 0.6fr 1fr 1fr",
              },
              gridTemplateRows: "1fr 1fr 1fr",
              gap: {
                xs: 1,
                xl: 2,
              },
            }}
          >
            <StyleButton
              sx={{
                gridColumn: "1/3",
                gridRow: "1/3",
              }}
              onClick={() => navigate("/actualites")}
            >
              <img
                src={img1}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  color: "#fff",
                  fontSize: { xs: "0.8rem", md: "1.2rem" },
                }}
              >
                {" "}
                Actualités{" "}
              </Typography>
            </StyleButton>
            <StyleButton
              sx={{
                gridColumn: "3",
                gridRow: "1",
              }}
              onClick={() => navigate("/events")}
            >
              <img
                src={img2}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "0.7rem",
                  left: { xs: "50%", md: "0.7rem" },
                  transform: { xs: "translateX(-50%)", md: "none" },
                  color: "#fff",
                  fontSize: { xs: "0.7rem", md: "1.05rem" },
                }}
              >
                {" "}
                Evènements{" "}
              </Typography>
            </StyleButton>
            <StyleButton
              sx={{
                gridColumn: "4",
                gridRow: "1",
              }}
            >
              <img
                src={img3}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "0.7rem",
                  left: { xs: "50%", md: "0.7rem" },
                  transform: { xs: "translateX(-50%)", md: "none" },
                  color: "#fff",
                  fontSize: { xs: "0.7rem", md: "1.05rem" },
                }}
              >
                {" "}
                Forums de Discussion
              </Typography>
            </StyleButton>
            <StyleButton
              sx={{
                gridColumn: "3/5",
                gridRow: "2",
              }}
              onClick={() => navigate("/articles")}
            >
              <img
                src={img5}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "0.8rem",
                  left: "1rem",
                  color: "#fff",
                  fontSize: { xs: "0.85rem", md: "1.2rem" },
                }}
              >
                {" "}
                Articles et Guides{" "}
              </Typography>
            </StyleButton>
            <StyleButton
              sx={{
                gridColumn: "1",
                gridRow: "3",
              }}
            >
              <img
                src={img6}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />{" "}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "0.7rem",
                  left: "0.7rem",
                  color: "#fff",
                  fontSize: { xs: "0.75rem", md: "1.05rem" },
                }}
              >
                {" "}
                Quiz{" "}
              </Typography>
            </StyleButton>
            <StyleButton
              sx={{
                gridColumn: "2/4",
                gridRow: "3",
              }}
            >
              <img
                src={img4}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "0.7rem",
                  right: "0.7rem",
                  color: "#fff",
                  fontSize: { xs: "0.75rem", md: "1.05rem" },
                }}
              >
                {" "}
                Concours et Défis{" "}
              </Typography>
            </StyleButton>
            <StyleButton
              sx={{
                gridColumn: "4",
                gridRow: "3",
              }}
              onClick={() => navigate("/Passions")}
            >
              <img
                src={img7}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />{" "}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "0.7rem",
                  right: "0.7rem",
                  fontSize: { xs: "0.75rem", md: "1.05rem" },
                  color: "#fff",
                }}
              >
                {" "}
                Passions{" "}
              </Typography>
            </StyleButton>
          </Box>
          <Box
            sx={{
              flexBasis: "auto",
              maxWidth: "35vw",
              minWidth: "0",
              height: "100%",
              display: {
                xs: "none",
                md: "none",
                xl: "flex",
              },
              background: "green",
            }}
          >
            {/* <img
              src={tt}
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover", padding: "5rem" }}
            /> */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "red",
              }}
            >
              
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: "1",
              height: "100%",
              maxWidth: { md: "25rem", xl: "30rem" },
              minWidth: { md: "22rem" },
              padding: "0 1rem",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem" }}>
              {" "}
              Recommandations{" "}
            </Typography>{" "}
            <Box
              sx={{
                width: "100%",
                height: "40vh",
                overflowY: "scroll",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {" "}
              {recommandations.map((elt) => (
                <Paper
                  key={elt.id}
                  sx={{
                    width: "100%",
                    height: "auto",
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "0.5rem",
                    borderRadius: 4,
                    columnGap: 2,
                    boxShadow: "none",
                    transition: "all .2s ease",
                    "&:hover": {
                      transform: "scale(0.95 , 1.03)",
                      transition: "all .2s ease",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "5rem",
                      height: "5rem",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={elt.pochette}
                      alt={elt.titre}
                      width={"100%"}
                      height={"100%"}
                    />{" "}
                  </Box>{" "}
                  <Box sx={{ borderRadius: 3, padding: 1, gap: 1 }}>
                    <Typography variant={"body2"} color={"dark"}>
                      {" "}
                      {elt.titre}{" "}
                    </Typography>{" "}
                    <Chip
                      label={elt.type}
                      color={"secondary"}
                      size={"small"}
                      sx={{ fontSize: "0.7rem", marginTop: "0.3rem" }}
                    />{" "}
                  </Box>{" "}
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
