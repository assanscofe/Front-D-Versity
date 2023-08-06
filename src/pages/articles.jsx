import React from 'react'
import { Stack, Card, CardMedia, Paper, Typography, Grid, TextField, MenuItem, Button } from '@mui/material'
import Img from '../assets/1280277.jpg'
import Img1 from '../assets/1132869.jpg'
import Img2 from '../assets/1143088.jpg'
import Img3 from '../assets/432486.jpg'


const allPassions = [
    {
        'id': 1,
        'passionName': 'Musique',
        'passionImage': Img
    },
    {
        'id': 2,
        'passionName': 'Musique',
        'passionImage': Img1
    },
    {
        'id': 3,
        'passionName': 'Musique',
        'passionImage': Img2
    },
    {
        'id': 4,
        'passionName': 'Musique',
        'passionImage': Img3
    },
    {
        'id': 5,
        'passionName': 'Musique',
        'passionImage': Img
    },
    {
        'id': 6,
        'passionName': 'Musique',
        'passionImage': Img1
    },
    {
        'id': 7,
        'passionName': 'Musique',
        'passionImage': Img2
    },
]

const Articles = () => {


    return (
        <>
            <Stack direction={'column'} spacing={2} sx={{
                width: '100%',
                height: 'calc(100% - 8vh)',
            }}>
                <Stack direction='row'>
                    <Typography variant='h6' color={'primary.main'}>Articles</Typography>
                </Stack>
                <Grid container sx={{
                    height: 'calc(100% - 5vh)'
                }}>
                    <Grid item md={8} sx={{
                        height: '100%',
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                        '::-webkit-scrollbar': {
                            display: 'none'
                        },
                    }}>
                        <Stack direction={'row'} flexWrap={'wrap'} gap={2} >
                            {
                                allPassions.map((passion, index) => (
                                    <Card sx={{
                                        minWidth: 250,
                                        width: 265,
                                        maxWidth: 300,
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'scale(1.02,1.05)',
                                            transition: 'all 0.2s ease'
                                        }
                                    }}>
                                        <CardMedia
                                            component='img'
                                            src={passion.passionImage}
                                            alt='lk'
                                            height='180'
                                        />
                                        <Stack sx={{
                                            position: 'absolute',
                                            bottom: '0',
                                            width: '100%',
                                            // bgcolor: 'green',
                                            padding: '0.75rem 1rem'
                                        }}>
                                            <Typography variant='h5' color={'white'}>{passion.passionName}</Typography>
                                        </Stack>
                                    </Card>
                                ))
                            }
                        </Stack>
                    </Grid>
                    <Grid item md={4}>
                        <Paper>
                            <Stack direction={'column'} spacing={2} px={2} py={2}>
                                <Typography textAlign={'center'} variant='h5' color={'primary.main'}>Créer un Article</Typography>
                                <TextField
                                    label='Titre'
                                    size='small'
                                />
                                <TextField
                                    label='passions'
                                    select
                                    size='small'
                                >
                                    <MenuItem>dsf</MenuItem>
                                    <MenuItem>sdf</MenuItem>
                                    <MenuItem>sfg</MenuItem>
                                </TextField>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Contenu"
                                    multiline
                                    rows={4}
                                // defaultValue="Default Value"
                                />
                                <Button variant='contained' color={'primary'}
                                    sx={{
                                        borderRadius: 4
                                    }}>Créer</Button>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default Articles