import React, { useEffect, useState, useContext, useMemo } from "react";
import {
  Stack,
  Typography,
  Box,
  IconButton,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { ReactComponent as IconLike } from "../assets/SVG/heart.svg";
import { ReactComponent as IconLikes } from "../assets/SVG/heart (1).svg";

import { SidebarContext } from "../context/sidebarContext";
import { ReactComponent as IconAdd } from "../assets/SVG/add.svg";
import ModalAddArticle from "../components/addArticle/modalAddArticle";
import { useDispatch, useSelector } from "react-redux";
import { getArticle, getArticleById } from "../redux/articleSlice";
import moment from "moment";
import { likeArticle } from "../services/api";
import { addNotification } from "../services/api";
import { ToastContainer } from "react-toastify";

const LikeButton = ({ articleId, userIdPost }) => {
  const user = useSelector((state) => state.auth.user.user);

  const dispatch = useDispatch();
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    dispatch(getArticleById(articleId)).then((data) => {
      setLikes(data.payload.like_count);

      setIsLiked(data.payload.likes.includes(user.id));
    });
  }, [dispatch, articleId, user]);

  const articleLikeSocket = useMemo(
    () => new WebSocket(`ws://127.0.0.1:8000/ws/articleLikes/${articleId}/`),
    [articleId]
  );
  useEffect(() => {
    articleLikeSocket.onopen = function () {
      console.log("connexion réussi");
    };
    articleLikeSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLikes(data.likes);
      setIsLiked(data.action === "like" ? true : false);
    };

    articleLikeSocket.onclose = function () {
      console.log("connexion ferme");
    };
  }, [articleLikeSocket]);

  const handleClick = () => {
    const message = "a réagi à votre publication";
    // likeArticle(articleId);
    const action = isLiked ? "unlike" : "like";
    articleLikeSocket.send(
      JSON.stringify({
        action,
        user_id: user.id,
      })
    );

    // addNotification(message, user.id, userIdPost, false);
  };
  return (
    <Stack direction="row" alignItems={"center"}>
      {isLiked ? (
        <IconButton onClick={handleClick}>
          <IconLikes
            style={{
              width: "20px",
              height: "20px",
              fill: "#d7415e",
            }}
          />
        </IconButton>
      ) : (
        <IconButton onClick={handleClick}>
          <IconLike
            style={{
              width: "20px",
              height: "20px",
              fill: "#d7415e",
            }}
          />
        </IconButton>
      )}
      <Typography variant={"subtitle2"} color={"#999"}>
        {likes}
      </Typography>
    </Stack>
  );
};

const Articles = () => {
  const dispatch = useDispatch();
  const { openSidebar } = useContext(SidebarContext);

  const [articles, setArticles] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getArticle()).then((data) => {
      setArticles(data.payload);
    });
  }, [openModal, dispatch]);

  const handleOpenClose = () => {
    setOpenModal(!openModal);
  };

  // console.log(articles.sort());

  return (
    <>
      <ToastContainer position="top-right" />
      <Stack
        direction={"column"}
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="h6" color={"primary.main"}>
            Articles
          </Typography>
          <Button
            sx={{ borderRadius: 5 }}
            variant="outlined"
            onClick={() => handleOpenClose()}
            startIcon={
              <IconAdd style={{ width: 20, height: 20, fill: "#2469d8" }} />
            }
          >
            Ajouter
          </Button>
          <ModalAddArticle isOpen={openModal} onClose={handleOpenClose} />
        </Stack>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "::-webkit-scrollbar": {
              display: "none",
            },
            borderRadius: 3,
          }}
        >
          <Masonry
            columns={{
              xs: 1,
              md: openSidebar ? 2 : 3,
              xl: openSidebar ? 3 : 4,
            }}
            spacing={1}
          >
            {articles.map((article, index) => (
              <Stack
                key={index}
                direction="column"
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  p: 2,
                  minWidth: {
                    xs: "100%",
                    md: 300,
                  },
                  maxWidth: "100%",
                }}
                spacing={1}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Avatar
                    src={article.user_detail.avatar}
                    alt=""
                    variant="circular"
                    sx={{
                      bgcolor: article.user_detail.background,
                      padding: 0.5,
                    }}
                  />
                  <Stack sx={"column"}>
                    <Typography
                      variant="h6"
                      color={"#333"}
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {article.articleName}
                    </Typography>
                    <Box>
                      <Chip
                        label={article.passion_detail.name}
                        color="primary"
                        size="small"
                      />
                    </Box>
                  </Stack>
                </Stack>
                <Stack direction={"column"} mt={1} spacing={1}>
                  <Typography variant="body2">
                    {article.articleContent}
                  </Typography>
                  {article.articleImage !== null ? (
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 200, md: 250 },
                        overflow: "hidden",
                        borderRadius: 2,
                      }}
                    >
                      <img
                        src={article.articleImage}
                        alt={article.articleName}
                        width={"100%"}
                        height={"100%"}
                      />
                    </Box>
                  ) : (
                    ""
                  )}
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <LikeButton
                    articleId={article.id}
                    userIdPost={article.user}
                  />
                  <Typography
                    variant="subtitle2"
                    color="#999"
                    sx={{ fontStyle: "italic" }}
                  >
                    Publié le{" "}
                    {moment(article.created_at).local().format("YYYY-MM-DD")}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Masonry>
        </Box>
      </Stack>
    </>
  );
};

export default Articles;
