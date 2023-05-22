import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Stepper, Step, StepLabel, Box, Button, Typography, Paper, Grid, Stack, StepConnector, stepConnectorClasses } from "@mui/material";
import Step1 from '../components/stepSignUp/step1';
import Step2 from '../components/stepSignUp/step2';
import Step3 from '../components/stepSignUp/step3';
import Logo from '../assets/dversity.3.png'
import { Check } from '@mui/icons-material';

const formSteps = [
    {
        label: "Step 1",
        component: <Step1 />,
        validate: () => {
            // Validation logic for Step 1
        },
    },
    {
        label: "Step 2",
        component: <Step2 />,
        validate: () => {
            // Validation logic for Step 2
        },
    },
    {
        label: "Step 3",
        component: <Step3 />,
        validate: () => {
            // Validation logic for Step 3
        },
    },
];



const SignUp = () => {


    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{
            width: '100%',
            height: {
                xs: 'auto',
                md: '100vh',
                xl: '100vh'
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Box sx={{
                width: {
                    xs: 90,
                    md: 120,
                    xl: 150
                },
                height: {
                    xs: 'auto',
                    md: '10vh'
                },
                margin: '1rem 0',
                background: 'red'
            }}>
                <img src={Logo} alt="Logo" width={"100%"} />
            </Box>
            {/* <Typography variant='h5' my={2}>INSCRIPTION</Typography> */}
            <Paper sx={{
                width: {
                    xs: '100%',
                    sm: '60%',
                    md: '90%',
                    lg: '80%',
                    xl: '60%',
                },
                height: '70vh',
                padding: 3,
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                rowGap: '1rem',
                boxShadow: '5px 5px 10px #2469d822',
            }}>
                <Stepper spacing={4} activeStep={activeStep} alternativeLabel sx={{ width: '90%', height: '6vh' }}>
                    {formSteps.map((step, label) => (
                        <Step key={label}>
                            <StepLabel >{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ width: '100%' }}>
                    {formSteps[activeStep].component}
                </Box>
                <Stack direction={'row'} justifySelf={'flex-end'} alignSelf={'flex-end'}>
                    {activeStep === 0 ? '' : <Button onClick={handleBack} size='small'>
                        Retour
                    </Button>}
                    <Button variant="contained" onClick={handleNext} size='small'>
                        {activeStep === formSteps.length + 1 ? "Confirmé" : "Suivant"}
                    </Button>
                </Stack>
            </Paper>
        </Box>
    )
}

export default SignUp