import React,{useState} from 'react'
import { Grid, Box,Typography,Avatar } from '@mui/material'
// import photo from '../../assets/Icons/1.png'
import Avatars from './listAvatar'
import Fonds from './listBackground'

const Step3 = () => {
    
    const [selectedAvatar, setSelectedAvatar] = useState(Avatars[0]);
    
    const [selectBackground,setSelectBackground] = useState(Fonds[0])
    
    const handleAvatarSelect = (avatar) => {
      setSelectedAvatar(avatar);
      console.log(selectedAvatar)
    };
    const handleBackgroundSelect = (background) => {
      setSelectBackground(background);
      console.log(selectBackground)
    };

    return (
        <Box sx={{ width: '100%', height: '100%', paddingY:1 }}>
            <Grid container >
                <Grid item md={6} xl={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    display: {
                        xs: 'none',
                        sm:'none',
                        md:'flex'
                    }
                }}>
                    <Box sx={{
                        width: 200,
                        height: 200,
                        background: selectBackground.color,
                        borderRadius: 3,
                    }}>
                        <img src={selectedAvatar.img} alt="Profile" width={'100%'} height={'100%'} />
                    </Box>
                    <Typography variant={'h6'}>Nom d'utilisateur</Typography>
                </Grid>
                <Grid item md={6} xl={6} sx={{
                    height: {
                        xs: 'auto',
                        sm:'auto',
                        md: 450,
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    rowGap:1
                }}>
                    
                    <Box sx={{
                        width: 150,
                        height: 150,
                        background: selectBackground.color,
                        borderRadius: 3,
                        display: {
                        xs: 'flex',
                        md:'none'
                    },
                        
                    }}>
                        <img src={selectedAvatar.img} alt="Profile" width={'100%'} height={'100%'} />
                    </Box>
                    <Typography variant='body2'>Choisir votre Avatar:</Typography>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden',
                        
                    }}>
                        <Grid container spacing={2} alignItems="center" sx={{
                            width:'100%',
                            height: {
                                xs: 120,
                                sm:120,
                                md:'auto'
                            },
                            margin:0,
                            overflowY: "scroll",
                            scrollbarWidth: "none",
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
                            "::-webkit-scrollbar": {
                                display: "none",
                            },
                        
                        }}>
                            {Avatars.map((avatar,key) => (
                                <Grid item key={key}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            alt={avatar.id}
                                            src={avatar.img}
                                            sx={{ width: 35, height: 35, cursor: 'pointer', ...(selectedAvatar && selectedAvatar.id === avatar.id && { border: '3px solid #2469d8' }) }}
                                            onClick={() => handleAvatarSelect(avatar)}
                                            />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Typography variant='body2'>Choisir le Fond de l'Avatar:</Typography>
                    <Box sx={{
                        width: '100%',
                        marginBottom: '1rem',
                        overflow: 'hidden',
                        
                    }}>
                        <Grid container spacing={2} alignItems="center" sx={{
                            width:'100%',
                            height: {
                                xs: 120,
                                sm:120,
                                md:'auto'
                            },
                            margin:0,
                            overflowY: "scroll",
                            scrollbarWidth: "none",
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
                            "::-webkit-scrollbar": {
                                display: "none",
                            },
                        
                        }}>
                            {Fonds.map((fond,key) => (
                                <Grid item key={key}>
                                    <Box sx={{
                                        width: 35,
                                        height: 35,
                                        background: fond.color,
                                        cursor: 'pointer',
                                        borderRadius: 50,
                                        ...(selectBackground && selectBackground.id === fond.id && { border: '3px solid #2469d8' })
                                    }}
                                            onClick={() => handleBackgroundSelect(fond)}>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Step3