import React, { useState, useRef, useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import moment from "moment";
import {
  Modal,
  styled,
  Backdrop,
  Stack,
  Typography,
  TextField,
  Card,
  Input,
  CardMedia,
  Grid,
  MenuItem,
} from "@mui/material";
import { TimeField, DatePicker } from "@mui/x-date-pickers";
import { Button, IconButton } from "@mui/material";
import { ReactComponent as IconExit } from "../../assets/SVG/cross-small.svg";
import { ReactComponent as IconCamera } from "../../assets/SVG/camera.svg";
import { addEvent } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPassion } from "../../redux/passionSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomBackrop = styled(Backdrop)(({ theme }) => ({
  background: "rgba(0,0,0,0.1)",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  width: { xs: "100%", md: 400 },
  maxHeight: "100vh",
  height: { xs: "100vh", md: "auto" },
  bgcolor: "background.paper",
  outline: "none",
  borderRadius: { xs: 0, md: 4 },
  overflow: { xs: "auto", md: "hidden" },
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "::-webkit-scrollbar": {
    display: "none",
  },
};

const ModalAddEvent = ({ isOpen, onClose }) => {
  const id_user = useSelector((state) => state.auth.user.user.id);
  const dispatch = useDispatch();
  const { darkMode } = useContext(DarkModeContext);
  const hiddenInputRef = useRef(null);

  const [dateFin, setDateFin] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [passions, setPassions] = useState([]);
  const [data, setData] = useState({
    eventName: "",
    coverPhoto: null,
    startDate: moment(),
    endDate: null,
    startTime: moment(),
    endTime: null,
    location: "",
    description: "",
    user: id_user,
    passion: "",
  });

  useEffect(() => {
    dispatch(getPassion()).then((data) => setPassions(data.payload));
  }, [dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData({
      ...data,
      coverPhoto: file,
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
  const handleAddDateFin = () => {
    setDateFin(!dateFin);
    if (!dateFin) {
      setData({
        ...data,
        endDate: moment(),
        endTime: moment(),
      });
    } else {
      setData({
        ...data,
        endDate: null,
        endTime: null,
      });
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    data.user = id_user;
    if (data.endTime !== null) {
      data.endTime = moment(data.endTime).format("HH:mm");
      data.endDate = moment(data.endDate).format("YYYY-MM-DD");
    }
    data.startTime = moment(data.startTime).format("HH:mm");
    data.startDate = moment(data.startDate).format("YYYY-MM-DD");
    addEvent(
      data.eventName,
      data.coverPhoto,
      data.startDate,
      data.endDate,
      data.startTime,
      data.endTime,
      data.location,
      data.description,
      data.user,
      data.passion
    ).then(() => {
      onClose();
      toast.success("L'évènement a été ajoutée avec succès");
      setData({
        eventName: "",
        coverPhoto: null,
        startDate: moment(),
        endDate: null,
        startTime: moment(),
        endTime: null,
        location: "",
        description: "",
        user: id_user,
        passion: "",
      });
      setDateFin(false);
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={CustomBackrop}
    >
      <Stack direction={"column"} sx={style}>
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            display: { xs: "block", md: "none" },
          }}
          onClick={onClose}
        >
          <IconExit style={{ width: 15, height: 15 }} />
        </IconButton>
        <Typography
          textAlign={"center"}
          variant="h5"
          py={2}
          color={"primary.main"}
        >
          Créer un évènement
        </Typography>
        <Card
          sx={{
            borderRadius: "0",
            boxShadow: "none",
            minHeight: 170,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: darkMode ? "#333333" : "#efefef",
          }}
        >
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            inputRef={hiddenInputRef}
            sx={{ display: "none" }}
          />
          {previewImage === null || data.coverPhoto === null ? (
            <Button
              startIcon={
                <IconCamera
                  style={{
                    width: 15,
                    height: 15,
                    fill: darkMode ? "#efefef" : "#333",
                  }}
                />
              }
              onClick={handleCardMediaClick}
            >
              Ajouter une couverture
            </Button>
          ) : (
            <CardMedia
              height="170"
              component="img"
              src={previewImage}
              alt="Preview"
              onClick={handleCardMediaClick}
              sx={{ cursor: "pointer" }}
            />
          )}
        </Card>
        <form onSubmit={handleCreate}>
          <Stack direction={"column"} p={2}>
            <Grid container rowGap={2}>
              <Grid item xs={12} md={6} sx={{ paddingRight: { xs: 0, md: 1 } }}>
                <TextField
                  label="Nom de l'évènement"
                  variant="outlined"
                  value={data.eventName}
                  sx={{ width: "100%" }}
                  onChange={(e) =>
                    setData({
                      ...data,
                      eventName: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: 0, md: 1 } }}>
                <TextField
                  label="Choisir une passion"
                  select
                  value={data.passion}
                  onChange={(e) =>
                    setData({ ...data, passion: e.target.value })
                  }
                  sx={{ width: "100%" }}
                >
                  {passions.map((passion, index) => (
                    <MenuItem key={index} value={passion.id}>
                      {passion.passionName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Stack direction={"row"} spacing={2} mt={2}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Date de début"
                value={data.startDate}
                onChange={(e) =>
                  setData({
                    ...data,
                    startDate: e,
                  })
                }
              />
              <TimeField
                sx={{ width: "100%" }}
                label="Heure de début"
                format="HH:mm"
                value={data.startTime}
                onChange={(e) =>
                  setData({
                    ...data,
                    startTime: e,
                  })
                }
              />
            </Stack>
            {dateFin ? (
              ""
            ) : (
              <Button onClick={() => handleAddDateFin()}>+ Heure de fin</Button>
            )}
            {dateFin ? (
              <Stack direction={"row"} spacing={2} my={2}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Date de fin"
                  value={data.endDate}
                  onChange={(e) =>
                    setData({
                      ...data,
                      endDate: e,
                    })
                  }
                />
                <TimeField
                  sx={{ width: "100%" }}
                  label="Heure de fin"
                  format="HH:mm"
                  value={data.endTime}
                  onChange={(e) =>
                    setData({
                      ...data,
                      endTime: e,
                    })
                  }
                />
                <IconButton onClick={() => handleAddDateFin()}>
                  <IconExit style={{ width: "1rem", height: "1rem" }} />
                </IconButton>
              </Stack>
            ) : (
              ""
            )}
            <TextField
              label="Lieu"
              sx={{ width: "100%", mb: 2 }}
              value={data.location}
              onChange={(e) =>
                setData({
                  ...data,
                  location: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ width: "100%" }}
              value={data.description}
              onChange={(e) =>
                setData({
                  ...data,
                  description: e.target.value,
                })
              }
            />
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 0, width: "100%" }}
          >
            Créer
          </Button>
        </form>
      </Stack>
    </Modal>
  );
};

export default ModalAddEvent;
