import React, { useState, useRef, useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import moment from "moment";
import {
  Modal,
  // Box,
  styled,
  Backdrop,
  Stack,
  Typography,
  TextField,
  Card,
  Input,
  CardMedia,
} from "@mui/material";
import { TimePicker, DatePicker } from "@mui/x-date-pickers";
import { Button, IconButton } from "@mui/material";
import { ReactComponent as IconExit } from "../../assets/SVG/cross-small.svg";
import { ReactComponent as IconCamera } from "../../assets/SVG/camera.svg";
import { addEvent } from "../../services/api";
// import { createEvent } from '../../redux/eventSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomBackrop = styled(Backdrop)(({ theme }) => ({
  background: "rgba(0,0,0,0.1)",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  maxWidth: 100,
  maxHeight: "100vh",
  bgcolor: "background.paper",
  outline: "none",
  borderRadius: 4,
  overflow: "hidden",
};

const ModalAddEvent = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const success = useSelector((state => state.event.newData))
  const id_user = useSelector((state) => state.auth.user.user.id);
  console.log(id_user);

  const [data, setData] = useState({
    eventName: "",
    coverPhoto: null,
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    location: "",
    Description: "",
    user: "",
    passion: "",
  });
  const [dateFin, setDateFin] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const { darkMode } = useContext(DarkModeContext);
  const hiddenInputRef = useRef(null);

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
  };

  const handleCreate = (e) => {
    e.preventDefault();
    data.user = 1;
    data.passion = 1;
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
      toast.success("La passion a été ajoutée avec succès");
      // navigate('/events')
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
            height: 170,
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
          {previewImage === null ? (
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
            <TextField
              label="Nom de l'évènement"
              variant="outlined"
              value={data.eventName}
              onChange={(e) =>
                setData({
                  ...data,
                  eventName: e.target.value,
                })
              }
            />
            <Stack direction={"row"} spacing={2} mt={2}>
              <DatePicker
                format="YYYY/MM/DD"
                label="Date de début"
                value={moment(data.startDate)}
                onChange={(e) =>
                  setData({
                    ...data,
                    startDate: e.format("YYYY-MM-DD"),
                  })
                }
                renderInput={(params) => <input {...params} />}
              />
              <TimePicker
                label="Heure de début"
                size={"small"}
                format="HH:mm"
                value={moment(data.startTime)}
                onChange={(e) =>
                  setData({
                    ...data,
                    startTime: e.format("hh:mm"),
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
                  format="YYYY-MM-DD"
                  label="Date de début"
                  value={moment(data.endDate)}
                  onChange={(e) =>
                    setData({
                      ...data,
                      endDate: e.format("YYYY-MM-dd"),
                    })
                  }
                />
                <TimePicker
                  label="Heure de fin"
                  size={"small"}
                  format="HH:mm"
                  value={moment(data.endTime)}
                  onChange={(e) =>
                    setData({
                      ...data,
                      endTime: e.format("hh:mm"),
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
              sx={{ mb: 2 }}
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
              value={data.Description}
              onChange={(e) =>
                setData({
                  ...data,
                  Description: e.target.value,
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
        <ToastContainer position="top-right" />
      </Stack>
    </Modal>
  );
};

export default ModalAddEvent;
