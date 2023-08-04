import React, { useState } from "react";
import { Grid, Box, Typography, Avatar, Button, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Avatars from "./listAvatar";
import Fonds from "./listBackground";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../../redux/authSlice";

const Step3 = ({ onComplete, back }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.formDataUser);
  const loading = useSelector((state) => state.auth.signupLoading);

  const [selectedAvatar, setSelectedAvatar] = useState(Avatars[0]);

  const [selectBackground, setSelectBackground] = useState(Fonds[0]);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };
  const handleBackgroundSelect = (background) => {
    setSelectBackground(background);
  };

  const handleNext = () => {
    dispatch(
      addFormData({
        avatar: selectedAvatar.nom,
        background: selectBackground.color,
      })
    );
    onComplete();
  };

  return (
    <Stack
      direction={"column"}
      spacing={1}
      sx={{ width: "100%", height: "100%", paddingY: 1 }}
    >
      <Grid container>
        <Grid
          item
          md={6}
          xl={6}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box
            sx={{
              width: 200,
              height: 200,
              background: selectBackground.color,
              borderRadius: 3,
            }}
          >
            <img
              src={selectedAvatar.img}
              alt="Profile"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Typography variant={"h6"}>{user.username}</Typography>
        </Grid>
        <Grid
          item
          md={6}
          xl={6}
          sx={{
            height: {
              xs: "auto",
              sm: "auto",
              md: 450,
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: 1,
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              background: selectBackground.color,
              borderRadius: 3,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <img
              src={selectedAvatar.img}
              alt="Profile"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Typography variant="body2">Choisir votre Avatar:</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{
                width: "100%",
                height: {
                  xs: 120,
                  sm: 120,
                  md: "auto",
                },
                margin: 0,
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
              {Avatars.map((avatar, key) => (
                <Grid item key={key}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt={avatar.id}
                      src={avatar.img}
                      sx={{
                        width: 35,
                        height: 35,
                        cursor: "pointer",
                        ...(selectedAvatar &&
                          selectedAvatar.id === avatar.id && {
                            border: "3px solid #2469d8",
                          }),
                      }}
                      onClick={() => handleAvatarSelect(avatar)}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography variant="body2">Choisir le Fond de l'Avatar:</Typography>
          <Box
            sx={{
              width: "100%",
              marginBottom: "1rem",
              overflow: "hidden",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{
                width: "100%",
                height: {
                  xs: 120,
                  sm: 120,
                  md: "auto",
                },
                margin: 0,
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
              {Fonds.map((fond, key) => (
                <Grid item key={key}>
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      background: fond.color,
                      cursor: "pointer",
                      borderRadius: 50,
                      ...(selectBackground &&
                        selectBackground.id === fond.id && {
                          border: "3px solid #2469d8",
                        }),
                    }}
                    onClick={() => handleBackgroundSelect(fond)}
                  ></Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Stack direction={"row"} justifyContent={"flex-end"} spacing={1}>
        <Button variant="contained" onClick={back} size="small">
          Retour
        </Button>
        {loading ? (
          <LoadingButton
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: {
                xs: "100%",
                sm: 150,
              },
              textTransform: "none",
            }}
            loading
            onClick={handleNext}
          >
            S'inscrire
          </LoadingButton>
        ) : (
          <LoadingButton
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: {
                xs: "100%",
                sm: 150,
              },
              textTransform: "none",
            }}
            onClick={handleNext}
          >
            S'inscrire
          </LoadingButton>
        )}
        {/* <Button variant="contained" onClick={handleNext} size='small'>S'inscrire</Button> */}
      </Stack>
    </Stack>
  );
};

export default Step3;
