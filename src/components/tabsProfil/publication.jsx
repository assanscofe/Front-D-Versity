import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Paper,
  Grid,
  Button,
  Typography,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import avatar from "../../assets/Icons/avatar22.png";
// import img1 from '../../assets/1146218.png'
import { ReactComponent as IconPhotos } from "../../assets/SVG/picture (1).svg";
import { ReactComponent as IconVideos } from "../../assets/SVG/play (1).svg";
import { ReactComponent as IconPlanning } from "../../assets/SVG/bookmark (1).svg";
import { ReactComponent as IconHeart } from "../../assets/SVG/heart (1).svg";
import { ReactComponent as IconComment } from "../../assets/SVG/comment.svg";
import { ReactComponent as IconShare } from "../../assets/SVG/share.svg";
import { ReactComponent as IconDots } from "../../assets/SVG/menu-dots.svg";
import MyModal from "./modalPublication";
import { getPostByUserId } from "../../services/api";
import { getAllPost } from "../../services/api";
import moment from "moment";
import "moment/locale/fr"; // Importez la localisation française si nécessaire
import eventEmitter, { POST_ADDED } from "../addPassion/event";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SidebarContext } from "../../context/sidebarContext";
import { useParams } from "react-router-dom";

const MyButton = styled(Button)({
  border: "1px solid #ddd",
  borderRadius: 12,
  padding: "0.375rem 1.5rem",
  color: "#333",
});
const MyPaper = styled(Paper)({
  borderRadius: 15,
  width: "100%",
  height: "auto",
  padding: "1rem",
});

const MyBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  columnGap: 1,
  color: "#444",
  fill: "#444",
});

const Publication = () => {
  const id_profil = useParams();

  const user_data = useSelector((state) => state.auth.user.user);
  const { openSidebar } = useContext(SidebarContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const userId = user_data.id; // a dynamiser

  //   getPostByUserId(userId)
  //     .then((data) => {
  //       console.log("tonga ato ");
  //       // Tri des passions dans l'ordre décroissant par leur identifiant
  //       const sorted = data.sort((a, b) => b.id - a.id);
  //       // Conversion de la chaîne 'createdAt' en objet Date
  //       sorted.forEach((post) => {
  //         post.createdAt = moment(post.createdAt).format("DD/MM/YYYY");
  //       });
  //       setPosts(sorted);
  //       //  toast.success('Publications récupérées avec succès !');
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Erreur lors de la récupération des publications:",
  //         error
  //       );
  //       toast.error(
  //         "Une erreur est survenue lors de la récupération des publications."
  //       );
  //     });

  //   // Écoutez l'événement de nouvelle passion ajoutée
  //   eventEmitter.on(POST_ADDED, handlePostAdded);

  //   return () => {
  //     eventEmitter.off(POST_ADDED, handlePostAdded);
  //   };
  // }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost()
      .then((data) => {
        // Tri des passions dans l'ordre décroissant par leur identifiant
        const sorted = data.sort((a, b) => b.id - a.id);
        // Conversion de la chaîne 'createdAt' en objet Date
        sorted.forEach((post) => {
          post.createdAt = moment(post.createdAt).fromNow();
        });
        setPosts(sorted);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isModalOpen]);
  //     // Fonction de gestion de l'événement de nouvelle passion ajoutée
  const handlePostAdded = (post) => {
    // Mettez à jour la liste des passions avec la nouvelle passion
    setPosts((prevPost) => [post, ...prevPost]);
  };
  // console.log(posts);

  return (
    <>
      <ToastContainer />
      <Stack
        direction="column"
        spacing={2}
        sx={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 20vh)",
          borderRadius: 5,
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {user_data.id === parseInt(id_profil.id) ? (
          <Paper
            sx={{
              width: "100%",
              borderRadius: 3,
              padding: 1.5,
            }}
          >
            <Grid container>
              <Grid item xs={1}>
                <Box
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    m: "auto",
                    background: user_data.background,
                    borderRadius: 3,
                    p: 0.5,
                  }}
                >
                  <Avatar
                    src={user_data.avatar}
                    alt={user_data.username}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={11}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                }}
              >
                {isModalOpen && <MyModal setIsModalOpen={setIsModalOpen} />}
                <Box
                  sx={{
                    background: "#efefef",
                    borderRadius: 3,
                    padding: "0.5rem 1rem",
                    width: "100%",
                    color: "#999",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsModalOpen(true)}
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
                <MyButton
                  startIcon={
                    <IconPhotos
                      style={{ width: 10, height: 10, fill: "#2096f3" }}
                    />
                  }
                >
                  Photos
                </MyButton>
                <MyButton
                  startIcon={
                    <IconVideos
                      style={{ width: 10, height: 10, fill: "#ffda5f" }}
                    />
                  }
                >
                  Videos
                </MyButton>
                <MyButton
                  startIcon={
                    <IconPlanning
                      style={{ width: 10, height: 10, fill: "#d7415e" }}
                    />
                  }
                >
                  Planning
                </MyButton>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          ""
        )}
        {posts.map((post) => (
          <MyPaper key={post.id}>
            <Stack direction={"row"} justifyContent="space-between">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <Avatar
                  src={post.user_detail.avatar}
                  sx={{
                    background: post.user_detail.background,
                    p: 0.5,
                    borderRadius: 3,
                  }}
                  variant="rounded"
                />
                <Box sx={{}}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    {post.user_detail.username}
                  </Typography>
                  <Typography color="GrayText" sx={{ fontSize: "0.6rem" }}>
                    {post.createdAt}
                  </Typography>
                </Box>
              </Box>
              <IconButton>
                <IconDots style={{ width: 15, height: 15, fill: "#444" }} />
              </IconButton>
            </Stack>
            <Box
              sx={{
                width: "100%",
                height: "auto",
              }}
            >
              <Typography variant="body1">{post.postDescription}</Typography>
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: 5,
                  mt: 1,
                  height: 350,
                  maxHeight: 400,
                }}
              >
                {post.postImage.slice(post.postImage.length - 3) === "mp4" ? (
                  <video width="100%" height="100%" controls>
                    <source src={post.postImage} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={post.postImage}
                    alt={post.postImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 2,
              }}
            >
              <MyBox>
                <IconButton>
                  <IconHeart
                    style={{ width: 15, height: 15, fill: "#d7415e" }}
                  />
                </IconButton>
                <Typography>25</Typography>
              </MyBox>
              <MyBox>
                <IconButton>
                  <IconComment style={{ width: 15, height: 15 }} />
                </IconButton>
                <Typography>2</Typography>
              </MyBox>
              <MyBox>
                <IconButton>
                  <IconShare style={{ width: 15, height: 15 }} />
                </IconButton>
              </MyBox>
            </Box>
          </MyPaper>
        ))}
      </Stack>
    </>
  );
};

export default Publication;
