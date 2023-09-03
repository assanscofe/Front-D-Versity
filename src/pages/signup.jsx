import React, { useState } from "react";
import { Stepper, Step, StepLabel, Box, Paper } from "@mui/material";
import Step1 from "../components/stepSignUp/step1";
import Step2 from "../components/stepSignUp/step2";
import Step3 from "../components/stepSignUp/step3";
import Logo from "../assets/dversity.3.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSteps = [
  {
    label: "Information",
    component: Step1,
  },
  {
    label: "Passion",
    component: Step2,
  },
  {
    label: "Avatar",
    component: Step3,
  },
];

const SignUp = () => {
  localStorage.removeItem("access_token");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepComplete = () => {
    if (activeStep < 2) {
      handleNext();
    }
  };

  const CurrentStepComponent = formSteps[activeStep].component;

  return (
    <>
      <ToastContainer position="top-right" />
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "auto",
            md: "100vh",
            xl: "100vh",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#f0f7fc",
        }}
      >
        <Box
          sx={{
            width: {
              xs: 90,
              md: 120,
              xl: 150,
            },
            height: {
              xs: "auto",
              md: "10vh",
            },
            margin: "1rem 0",
          }}
        >
          <img src={Logo} alt="Logo" width={"100%"} />
        </Box>
        <Paper
          sx={{
            width: {
              xs: "100%",
              sm: "60%",
              md: "90%",
              lg: "80%",
              xl: "60%",
            },
            maxHeight: {
              xs: "auto",
              md: "calc(100vh - 10vh)",
            },
            padding: 3,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "1rem",
            boxShadow: "5px 5px 10px #2469d822",
            bgcolor: "#fff",
          }}
        >
          <Stepper
            spacing={4}
            activeStep={activeStep}
            alternativeLabel
            sx={{ width: "90%", height: "6vh" }}
          >
            {formSteps.map((step, label) => (
              <Step key={label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ width: "100%" }}>
            <CurrentStepComponent
              onComplete={handleStepComplete}
              back={handleBack}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default SignUp;
