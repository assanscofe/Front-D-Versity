import React, { useEffect, useState, useContext } from "react";
import {
  // Box,
  Button,
  Stack,
  Typography,
  Divider,
  Avatar,
  AvatarGroup,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ReactComponent as IconDate } from "../assets/SVG/clock-three.svg";
import { ReactComponent as IconPosition } from "../assets/SVG/marker.svg";
import { ReactComponent as IconAddEvent } from "../assets/SVG/add.svg";
import IconStarActive from "@mui/icons-material/StarRounded";
import img2 from "../assets/1143088.jpg";
import img4 from "../assets/1146218.png";
import ModalAddEvent from "../components/events/modalAddEvent";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../redux/eventSlice";
import { getPassion } from "../redux/passionSlice";
import { ToastContainer } from "react-toastify";
import { SidebarContext } from "../context/sidebarContext";
import moment from "moment";

const Events = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataEvent = useSelector((state) => state.event.data);
  const dataPassion = useSelector((state) => state.passion.data);

  const { openSidebar } = useContext(SidebarContext);

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenClose = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    dispatch(getEvent());
    dispatch(getPassion());
  }, [openModal, dispatch]);

  useEffect(() => {
    setData(dataEvent);
  }, [dataEvent]);

  useEffect(() => {
    setCollection([
      ...new Set(
        dataEvent.map(
          (elt) =>
            dataPassion.find((passion) => passion.id === elt.passion)
              .passionName
        )
      ),
    ]);
  }, [dataEvent, dataPassion]);

  const handleFilter = (item) => {
    const filterData = dataEvent.filter(
      (elt) =>
        dataPassion.find((passion) => passion.id === elt.passion)
          .passionName === item
    );
    setData(filterData);
  };

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
        <Stack
          direction="row"
          spacing={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography variant="h6" color={"primary.main"}>
              Evènements
            </Typography>
            <FormControl
              sx={{ m: 1, width: { xs: 90, md: 120 }, borderRadius: 4 }}
            >
              <Select
                defaultValue={"Tous"}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                size="small"
                sx={{ bgcolor: "background.paper", border: "none" }}
              >
                <MenuItem value="Tous" onClick={() => setData(dataEvent)}>
                  Tous
                </MenuItem>
                {collection.map((elt, index) => (
                  <MenuItem
                    key={index}
                    value={elt}
                    onClick={() => {
                      handleFilter(elt);
                    }}
                  >
                    {elt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Button
            sx={{ borderRadius: 5 }}
            variant="outlined"
            onClick={() => handleOpenClose()}
          >
            <IconAddEvent style={{ width: 20, height: 20, fill: "#2469d8" }} />
            <Typography
              variant="body2"
              sx={{ display: { xs: "none", md: "block" }, marginLeft: 1 }}
            >
              Créer
            </Typography>
          </Button>
          <ModalAddEvent isOpen={openModal} onClose={handleOpenClose} />
        </Stack>
        <Grid
          container
          sx={{
            width: "100%",
            height: "auto",
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
          {data.map((elt, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={openSidebar ? 4 : 3}
              xl={openSidebar ? 2.4 : 2}
              sx={{
                padding: "0 1rem 1rem 0",
              }}
            >
              <Card
                key={index}
                sx={{
                  // minWidth: 250,
                  // width: 265,
                  // maxWidth: 300,
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={elt.coverPhoto}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "0.5rem",
                    left: "0.5rem",
                    background: "#d7415e",
                    padding: "0.2rem 0.5rem",
                    color: "#fff",
                    borderRadius: 1,
                  }}
                >
                  {
                    dataPassion.find((passion) => passion.id === elt.passion)
                      .passionName
                  }
                </Typography>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={"#2469d8"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/events/" + elt.id)}
                  >
                    {elt.eventName}
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    color={"GrayText"}
                    mt={2.5}
                  >
                    <IconDate
                      style={{ width: 15, height: 15, fill: "GrayText" }}
                    />
                    <Typography
                      sx={{ fontSize: "0.8rem" }}
                      color="text.secondary"
                    >
                      {moment(elt.startDate, "YYYY-MM-DD").format(
                        "Do MMMM YYYY"
                      )}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography
                      sx={{ fontSize: "0.8rem" }}
                      color="text.secondary"
                    >
                      {moment(elt.startTime, "HH:mm:ss").format("LT")}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    color={"GrayText"}
                    mt={0.5}
                  >
                    <IconPosition
                      style={{ width: 15, height: 15, fill: "#d7415e" }}
                    />
                    <Typography
                      sx={{ fontSize: "0.8rem" }}
                      color="text.secondary"
                    >
                      {elt.location}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <AvatarGroup>
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={img4}
                        alt="ee"
                      />
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={img2}
                        alt="ee"
                      />
                      <Avatar
                        alt="rest"
                        sx={{
                          width: 30,
                          height: 30,
                          fontSize: "0.7rem",
                          bgcolor: "lightblue",
                          color: "#2469d8",
                        }}
                      >
                        +2
                      </Avatar>
                    </AvatarGroup>
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      intéressés
                    </Typography>
                  </Stack>
                  <IconButton sx={{ bgcolor: "lightblue" }}>
                    <IconStarActive
                      sx={{ width: 20, height: 20, fill: "#2469d8" }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default Events;
