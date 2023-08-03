import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Box, Paper } from "@mui/material";
import { SignUpUser } from '../services/api'
import Step1 from '../components/stepSignUp/step1';
import Step2 from '../components/stepSignUp/step2';
import Step3 from '../components/stepSignUp/step3';
import Logo from '../assets/dversity.3.png'
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const formSteps = [
    {
        label: "Step 1",
        component: Step1,
    },
    {
        label: "Step 2",
        component: Step2,
    },
    {
        label: "Step 3",
        component: Step3,
    },
];



const SignUp = () => {
    const navigate = useNavigate()

    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        data1: '',
        data2: [],
        data3: ''
    })

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };
    const handleStepComplete = (data) => {
        console.log(data)
        // console.log(JSON.parse(JSON.stringify(data)))
        if (Array.isArray(data)) {
            setFormData((prevData) => ({
                ...prevData,
                ...data,
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                ...JSON.parse(JSON.stringify(data)),
            }))
        }
        if (activeStep < 2) {
            handleNext()
        } else {
            console.log(formData.data2)
            SignUpUser(
                formData.data1.email,
                formData.data1.username,
                formData.data1.first_name,
                formData.data1.last_name,
                formData.data1.password,
                formData.data3.avatar,
                formData.data3.background,
                formData.data2,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then(() => toast('Inscription réussie'))
                .then(() => navigate('/'))
        }
    }

    const CurrentStepComponent = formSteps[activeStep].component

    return (
        <>
            <ToastContainer position='top-right'/>
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
                backgroundColor: '#f0f7fc',

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
                }}>
                    <img src={Logo} alt="Logo" width={"100%"} />
                </Box>
                <Paper sx={{
                    width: {
                        xs: '100%',
                        sm: '60%',
                        md: '90%',
                        lg: '80%',
                        xl: '60%',
                    },
                    maxHeight: 'calc(100vh - 10vh)',
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
                        <CurrentStepComponent onComplete={handleStepComplete} formdata={formData} back={handleBack} />
                    </Box>
                    {/* <Stack direction={'row'} justifySelf={'flex-end'} alignSelf={'flex-end'}>
                        {activeStep === 0 ? '' : <Button onClick={handleBack} size='small'>
                            Retour
                        </Button>}
                        <Button variant="contained" onClick={handleNext} size='small'>
                            {activeStep === formSteps.length + 1 ? "Confirmé" : "Suivant"}
                        </Button>
                    </Stack> */}
                </Paper>
            </Box>
        </>
    )
}

export default SignUp