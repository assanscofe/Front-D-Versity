import React, { useState } from 'react'
import { Box, Typography,Divider,Stack,Checkbox,FormControlLabel,FormGroup,IconButton } from '@mui/material'
import img1 from '../../assets/nature.jpg'
import img2 from '../../assets/LOL.png'
import IconExit from '@mui/icons-material/CancelOutlined'

const passions = [
    {
        'id': 1,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img1
    },
    {
        'id': 2,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img2
    },
    {
        'id': 3,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img1
    },
    {
        'id': 4,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img2
    },
    {
        'id': 5,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img1
    },
    {
        'id': 6,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img2
    },
    {
        'id': 7,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img1
    },
    {
        'id': 8,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img2
    },
    {
        'id': 9,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img1
    },
    {
        'id': 10,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img2
    },
    {
        'id': 11,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img1
    },
    {
        'id': 12,
        'nom': 'Musique',
        'description': 'Blabla',
        'pochette': img2
    },
    
]

const Step2 = () => {

    const [choices, setChoices] = useState([])
    const [isChecked,setIsChecked] = useState(false)
    console.log(choices)
    const handleChoice = (e) => {
        const index = choices.indexOf(e.target.value)
        setIsChecked(!isChecked)
        if (index === -1) {
            setChoices([...choices,e.target.value])
        }
        else {
            setChoices(choices.filter((choice)=> choice !== e.target.value))
        }
    }
    const handleRemove = (e) => {
        setIsChecked(false)
        setChoices(choices.filter((choice)=> choice !== e))
    }

    return (
        <Box sx={{ width: '100%', height: '100%',paddingY:1,paddingX:1}}>
            <Box sx={{
                height: {
                    xs: 'auto',
                    sm:'auto',
                    md: 450,
                },
            }}>
                <Typography variant='h4' textAlign={'center'}>Choisis tes passions:</Typography>
                <Box >
                    <Stack direction={'row'} spacing={2}>
                        {
                            choices.map((elt) => (
                                passions.map((passion) => (
                                    parseInt(elt) === passion.id ? (
                                    <Box sx={{
                                        borderRadius: 50,
                                        width:50,
                                        height: 50,
                                        border: '2px solid #2469d8',
                                        position:'relative',
                                    }}>
                                        <IconButton sx={{
                                                position: 'absolute',
                                                width: 20,
                                                height: 20,
                                                borderRadius: 50,
                                                background: '#d7415e',
                                                top: '-5px',
                                                right:'-5px',
                                                color: '#fff'
                                            }}
                                                // onChange={handleRemove(elt)}
                                            >
                                                <IconExit/>
                                        </IconButton>
                                        <Box sx={{width:'100%',height:'100%',borderRadius:50,overflow:'hidden'}}> 
                                            <img src={passion.pochette} alt="test" width={'100%'} height={ '100%'}  />
                                        </Box>
                                    </Box>  
                                    ):''
                                ))
                                      
                            ))
                        }
                    </Stack>
                    <Divider sx={{ marginY: 1 }}></Divider>
                    
                    <Box sx={{
                        width: '100%',
                        height: 350,
                        padding: {
                            sm: 3,
                            md:2
                        },
                        overflowY: 'scroll',
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        "::-webkit-scrollbar": {
                            display: "none",
                        },
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
                        gridAutoRows: '135px',
                        gridAutoFlow: 'dense',
                        gap: 1,
                        transition:'all .5s ease'
                    }}>
                        {
                        passions.map((elt) => (
                            <FormControlLabel key={elt.id}
                                sx={{
                                    margin: 0,
                                    color: '#2469d8',
                                    fontWeight:'bold'
                                }}
                                label={elt.nom}
                                labelPlacement={'bottom'}
                                control={
                                    <Checkbox
                                        value={elt.id}
                                        onChange={handleChoice} 
                                        checked={isChecked}
                                        checkedIcon={
                                            <Box sx={{
                                                background:'#efefef',
                                                height: '90px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems:'center',
                                                borderRadius: 3,
                                                overflow: 'hidden',
                                                boxShadow: '0px 5px 0 #2096f3',
                                            }}>
                                                    <img src={elt.pochette} alt={elt.nom} width={ '100%'} height={'100%'} />
                                            </Box>
                                        }
                                        icon={
                                            <Box sx={{
                                                height: '90px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems:'center',
                                                borderRadius: 3,
                                                overflow: 'hidden',       
                                            }}>
                                                <img src={elt.pochette} alt={elt.nom} width={ '100%'} height={'100%'} />
                                            </Box>
                                        }
                                        />
                                }
                            />
                        ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Step2