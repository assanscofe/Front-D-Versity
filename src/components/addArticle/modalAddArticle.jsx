import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material";
import {
  Modal,
  Backdrop,
  Stack,
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { ReactComponent as IconExit } from "../../assets/SVG/cross-small.svg";
import { ReactComponent as IconPlus } from "../../assets/SVG/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPassion } from "../../redux/passionSlice";

const CustomBackrop = styled(Backdrop)(({ theme }) => ({
  background: "rgba(0,0,0,0.1)",
}));

const MyTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
}));

const ModalAddArticle = ({ isOpen, onClose }) => {
  const hiddenInputRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.user);
  // const passions = useSelector((state) => state.passion.data);
  const loading = useSelector((state) => state.article.loading);

  const [passions, setPassions] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [data, setData] = useState({
    articleName: "",
    articleContenu: "",
    articleImage: null,
    passion: null,
  });

  useEffect(() => {
    dispatch(getPassion()).then((data) => setPassions(data.payload));
  }, [dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData({
      ...data,
      articleImage: file,
    });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };
  const handleCardMediaClick = () => {
    hiddenInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(
      data.articleName,
      data.articleContenu,
      data.articleImage,
      user.id,
      data.passion
    ).then(() => {
      onClose();
      toast.success("La passion a été ajoutée avec succès");
      // navigate('/events')
    });
    setData({
      articleName: "",
      articleContenu: "",
      articleImage: null,
      passion: null,
    });
    onClose();
  };
  return (
    <Modal open={isOpen} onClose={onClose} BackdropComponent={CustomBackrop}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          padding: 2,
          width: {
            xs: "100%",
            md: "35vw",
          },
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            width: "100%",
            height: {
              xs: "100vh",
              md: "auto",
            },
          }}
          justifyContent={"space-between"}
          spacing={1}
        >
          <Box>
            <Typography
              textAlign={"center"}
              variant="h5"
              py={2}
              color={"primary.main"}
            >
              Ajouter un article
            </Typography>
            <IconButton
              sx={{
                position: "absolute",
                top: 15,
                right: 15,
                bgcolor: "#efefef",
                display: { xs: "block", md: "none" },
              }}
              onClick={onClose}
            >
              <IconExit style={{ width: 15, height: 15 }} />
            </IconButton>
            <Grid container rowSpacing={1} sx={{ width: "100%" }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ paddingRight: { xs: 0, md: 0.5 } }}
              >
                <MyTextField
                  label="Titre"
                  value={data.articleName}
                  onChange={(e) =>
                    setData({ ...data, articleName: e.target.value })
                  }
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ paddingLeft: { xs: 0, md: 0.5 } }}
              >
                <MyTextField
                  label="Choisir une passion"
                  select
                  value={data.passion}
                  onChange={(e) =>
                    setData({ ...data, passion: e.target.value })
                  }
                >
                  {passions.map((passion, index) => (
                    <MenuItem key={index} value={passion.id}>
                      {passion.passionName}
                    </MenuItem>
                  ))}
                </MyTextField>
              </Grid>
              <Grid item xs={12}>
                <MyTextField
                  label="Contenu"
                  multiline
                  rows={4}
                  value={data.articleContenu}
                  onChange={(e) =>
                    setData({ ...data, articleContenu: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                  <Button
                    sx={{
                      width: 70,
                      height: 70,
                      border:
                        previewImage === null ? "1px dashed #888888" : "none",
                      borderRadius: 3,
                      display: previewImage === null ? "flex" : "block",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      padding: 0,
                    }}
                    onClick={handleCardMediaClick}
                  >
                    {previewImage === null ? (
                      <IconPlus
                        style={{ width: 25, height: 25, fill: "#888888" }}
                      />
                    ) : (
                      <img
                        src={previewImage}
                        alt=""
                        width={"100%"}
                        height={"100%"}
                      />
                    )}
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={hiddenInputRef}
                    style={{ display: "none" }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
          {loading ? (
            <LoadingButton
              sx={{ width: "100%" }}
              onClick={handleSubmit}
              loading
            >
              Ajouter
            </LoadingButton>
          ) : (
            <Button sx={{ width: "100%" }} onClick={handleSubmit}>
              Ajouter
            </Button>
          )}
        </Stack>
      </Paper>
    </Modal>
  );
};

export default ModalAddArticle;
