import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Divider,
  Stack,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPassion } from "../../redux/passionSlice";
import { addFormData } from "../../redux/authSlice";
import IconExit from "@mui/icons-material/CancelOutlined";

const Step2 = ({ onComplete, back }) => {
  const dispatch = useDispatch();
  //   const all_passion = useSelector((state) => state.passion.data);
  const [allPassion, setAllPassion] = useState([]);
  const [choices, setChoices] = useState([]);
  console.log(choices);

  useEffect(() => {
    dispatch(getPassion()).then((data) => setAllPassion(data.payload));
  }, [dispatch]);

  const handleChoice = (e) => {
    const index = choices.indexOf(e.target.value);
    if (index === -1) {
      setChoices([...choices, parseInt(e.target.value)]);
    } else {
      setChoices(choices.filter((choice) => choice !== e.target.value));
    }
  };
  const handleRemove = (e) => {
    setChoices(choices.filter((choice) => choice !== e));
  };

  const handleNext = () => {
    dispatch(addFormData({ passions: choices }));
    onComplete();
  };

  return (
    <Stack
      direction={"column"}
      spacing={1}
      sx={{ width: "100%", height: "100%", paddingY: 1, paddingX: 1 }}
    >
      <Box
        sx={{
          height: {
            xs: "auto",
            sm: "auto",
            md: 450,
          },
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Choisis tes passions:
        </Typography>
        <Box>
          <Stack direction={"row"} spacing={2} flexWrap={"wrap"}>
            {choices.map((elt) =>
              allPassion.map((passion) =>
                parseInt(elt) === passion.id ? (
                  <Box
                    sx={{
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                      border: "2px solid #2469d8",
                      position: "relative",
                    }}
                    key={passion.id}
                  >
                    <IconButton
                      sx={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: 50,
                        background: "#d7415e",
                        top: "-5px",
                        right: "-5px",
                        color: "#fff",
                      }}
                      onClick={() => handleRemove(elt)}
                    >
                      <IconExit />
                    </IconButton>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={passion.passionImage}
                        alt={passion.passionName}
                        width={"100%"}
                        height={"100%"}
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Box>
                ) : (
                  ""
                )
              )
            )}
          </Stack>
          <Divider sx={{ marginY: 1 }}></Divider>

          <Box
            sx={{
              width: "100%",
              height: 350,
              padding: {
                sm: 3,
                md: 2,
              },
              overflowY: "scroll",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "::-webkit-scrollbar": {
                display: "none",
              },
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
              gridAutoRows: "135px",
              gridAutoFlow: "dense",
              gap: 1,
              transition: "all .5s ease",
            }}
          >
            {allPassion.map((elt) => (
              <FormControlLabel
                key={elt.id}
                sx={{
                  margin: 0,
                  color: "GrayText",
                  fontWeight: "bold",
                }}
                label={elt.passionName}
                labelPlacement={"bottom"}
                control={
                  <Checkbox
                    value={elt.id}
                    onChange={handleChoice}
                    checked={
                      choices.find((choice) => parseInt(choice) === elt.id) !==
                      undefined
                        ? true
                        : false
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          position: "relative",
                          height: "90px",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderRadius: 3,
                          overflow: "hidden",
                          background: "#efefef",
                          boxShadow: "0px 2px 0px #2096f3, 0 8px 6px #2096f377",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <img
                          src={elt.passionImage}
                          alt={elt.passionName}
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                    }
                    icon={
                      <Box
                        sx={{
                          height: "90px",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderRadius: 3,
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={elt.passionImage}
                          alt={elt.passionName}
                          width={"100%"}
                          height={"100%"}
                        />
                      </Box>
                    }
                  />
                }
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Stack direction={"row"} justifyContent={"flex-end"} spacing={1}>
        <Button variant="contained" onClick={back} size="small">
          Retour
        </Button>
        <Button variant="contained" onClick={handleNext} size="small">
          Suivant
        </Button>
      </Stack>
    </Stack>
  );
};

export default Step2;
