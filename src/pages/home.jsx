import React, { useState, useEffect } from 'react'
import { Chip,  IconButton, Paper, Box, Typography, Button, Badge, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'
// import { getAllPassions } from '../services/api'
import { useNavigate } from 'react-router-dom'
// import Slide from '../components/slide/slide'
import Color from 'color-thief-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//------------import Images-----------
import ChainsawMan from '../assets/1280277.jpg'
import Pubg from '../assets/pubg.jpg'
import img1 from '../assets/pexels-tara-winstead-7663172.jpg'
import img2 from '../assets/pexels-karolina-grabowska-4466205.jpg'
import img3 from '../assets/1150123.png'
import img4 from '../assets/683409.jpg'
import img5 from '../assets/pexels-eric-anada-1001990.jpg'
import img6 from '../assets/432486.jpg'
import img7 from '../assets/pexels-dzenina-lukac-1005012.jpg'
import imgSlider2 from '../assets/1135879.png'
import imgSlider3 from '../assets/1146218.png'


const StyleButton = styled(Button)(({ theme }) => ({
    padding: '0',
    overflow: 'hidden',
    borderRadius: 10,
    position:'relative',
    '&:hover': {
        transform: 'scale(1.03,1.03)',
        transition: 'all 0.1s ease',
        boxShadow: '0 5px 10px #2469d855',
        
    }
}))

// const StyledCard = styled(Card)(({ theme }) => ({
//     width: '170px',
//     height: '200px',
//     background: '#2096f3',
//     borderRadius: '20px',
//     transition: 'none',
//     cursor: 'pointer',
//     '&:hover': {
//         boxShadow: '0 6px 0 #2469d8 , 0 15px 10px #2469d877 ,0 20px 15px #2469d844',
//         transform: 'scale(1.05,1.05)',
//         transition: 'all 0.1s ease',
//     },
// }))

const imgSlider = [
    {
        id: 1,
        img: ChainsawMan,
        titre: 'Chainsaw Man',
        membres: '2.268',
        Description: 'ni na na na ni nan na'
    },
    {
        id: 2,
        img: imgSlider2,
        titre: 'Chainsaw Man',
        membres: '2.268',
        Description: 'ni na na na ni nan na'
    },
    {
        id: 3,
        img: imgSlider3,
        titre: 'Chainsaw Man',
        membres: '2.268',
        Description: 'ni na na na ni nan na'
    },
]

const recommandations = [
    {
        id: 1,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 2,
        pochette: Pubg,
        titre:'PUBG',
        type: 'Jeux Mobile',
    },
    {
        id: 3,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 4,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 5,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 6,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
    {
        id: 7,
        pochette: ChainsawMan,
        titre:'Chainsaw Man',
        type: 'Animé',
    },
]

const Home = () => {

    const navigate = useNavigate();

    //Paramètres du slider
    const sliderSettings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    }


    return (
        <>
            <Box sx={{
                width: '100%',
                height: 'calc(100% - 8vh)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    display:'none'
                },
                '::-webkit-scrollbar': {
                    display:'none'
                }
            }}>
                <Slider {...sliderSettings}>
                    {
                        imgSlider.map((elt) => (
                            <Box sx={{
                                width:'100%',
                                height: '37vh',
                            }}  key={elt.id}>
                                <Color src={elt.img} format="hex">
                                    {({ data, loading, error }) => (
                                        <Box sx={{
                                            width: '100%',
                                            height:'100%',
                                            display:'grid',
                                            gridTemplateColumns: '3fr 12rem 12rem',
                                            gridTemplateRows: '2fr 1fr',
                                            gap:1
                                        }}>
                                            <Box sx={{
                                                gridColumn:'1',
                                                gridRow: '1/3',
                                                overflow: 'hidden',
                                                borderRadius:6
                                            }}>
                                                <img src={elt.img} alt="ChainsawMan" width={'100%'} height={'100%'} style={{objectFit:'cover'}} />
                                            </Box>
                                            <Paper sx={{
                                                gridColumn:'2/4',
                                                gridRow:'1',
                                                padding: '1.5rem',
                                                borderRadius: 6,
                                                position: 'relative',
                                                boxShadow:'none'
                                                
                                            }}>
                                            <Typography color={'dark'} variant={'h3'}>{elt.titre}</Typography>
                                            <Typography variant={'body2'}>{elt.Description}</Typography>
                                            <Button sx={{
                                                position:'absolute',
                                                bottom: '1.5rem',
                                                right: '1.5rem',
                                                borderRadius: 4,
                                                padding:'0.65rem 1.5rem'
                                            }} variant={'outlined'} color={'primary'}>

                                                Rejoindre
                                                </Button>
                                            </Paper>
                                            <Paper sx={{
                                                gridColumn: '2',
                                                gridRow: '2',
                                                position: 'relative',
                                                borderRadius: 6,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                boxShadow:'none'

                                        }}>
                                                <Typography variant={'h4'} color={'dark'}>{elt.membres }</Typography>
                                                <Typography variant={'body1'} color={'GrayText'}>membres</Typography>
                                            </Paper>
                                            <Paper sx={{
                                                gridColumn: '3',
                                                gridRow: '2',
                                                borderRadius: 6,
                                                overflow:'hidden'
                                                
                                            }}>
                                                <img src={elt.img} alt="ChainsawMan" width={'100%'} height={'100%'} objectFit={'cover'} />
                                            </Paper>
                                        </Box>   
                                    )}
                                </Color>
                            </Box>
                                    
                        ))
                    }
                </Slider>
                
                <Box sx={{
                    width:'100%',
                    height: 'calc((100%)/2 + 3vh)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap:1
                }}>
                    <Box sx={{
                        gridColumn: '1',
                        height:'100%',
                        display: 'grid',
                        gridTemplateColumns: '9rem 5rem 9rem 9rem',
                        gridTemplateRows: '1fr 1fr 1fr',
                        gap: {
                            xs: 1,
                            xl:2
                        }
                    }}>
                        <StyleButton sx={{
                            gridColumn: '1/3',
                            gridRow: '1/3',
                        }}>
                            <img src={img1} alt="" width={'100%'} height={'100%'} objectFit={'cover'}  />
                            <Typography sx={{position:'absolute',bottom:'1rem',left:'1rem',color:'#fff',fontSize:'1.2rem'}}>Evènements</Typography>
                        </StyleButton>
                        <StyleButton sx={{
                            gridColumn: '3',
                            gridRow: '1',
                        }}>
                            <img src={img2} alt="" width={'100%'} height={ '100%'} objectFit={'cover'} />
                            <Typography sx={{position:'absolute',bottom:'0.7rem',left:'0.7rem',color:'#fff',fontSize:'1.05rem'}}>Rencontres</Typography>
                        </StyleButton>
                        <StyleButton sx={{
                            gridColumn: '4',
                            gridRow: '1',
                        }}>
                            <img src={img3} alt="" width={'100%'} height={ '100%'} objectFit={'cover'} />
                            <Typography sx={{position:'absolute',top:'0.7rem',left:'0.7rem',color:'#fff',fontSize:'1.05rem'}}>Forums de</Typography>
                            <Typography sx={{position:'absolute',top:'2rem',right:'0.7rem',color:'#fff',fontSize:'1.05rem'}}>Discussion</Typography>
                        </StyleButton>
                        <StyleButton sx={{
                            gridColumn: '3/5',
                            gridRow: '2',
                        }}>
                            <img src={img5} alt="" width={'100%'} height={ '100%'} objectFit={'cover'} />
                            <Typography sx={{position:'absolute',top:'0.8rem',left:'1rem',color:'#fff',fontSize:'1.2rem'}}>Articles et Guides</Typography>
                        </StyleButton>
                        <StyleButton sx={{
                            gridColumn: '1',
                            gridRow: '3',
                        }}>
                            <img src={img6} alt="" width={'100%'} height={ '100%'} objectFit={'cover'} />
                            <Typography sx={{position:'absolute',bottom:'0.7rem',left:'0.7rem',color:'#fff',fontSize:'1.05rem'}}>Quiz</Typography>

                        </StyleButton>
                        <StyleButton sx={{
                            gridColumn: '2/4',
                            gridRow: '3',
                        }}>
                            <img src={img4} alt="" width={'100%'} height={ '100%'} objectFit={'cover'} />
                            <Typography sx={{position:'absolute',bottom:'0.7rem',right:'0.7rem',color:'#fff',fontSize:'1.05rem'}}>Concours et Défis</Typography>

                        </StyleButton>
                        <StyleButton sx={{
                            gridColumn: '4',
                            gridRow: '3',
                        }} onClick={()=>navigate('/Passions')}>
                            <img src={img7} alt="" width={'100%'} height={ '100%'} objectFit={'cover'} />
                            <Typography sx={{position:'absolute',bottom:'0.7rem',right:'0.7rem',fontSize:'1.05rem',color:'#fff'}}>Passions</Typography>

                        </StyleButton>
                    </Box>
                    <Box sx={{
                        flexGrow: '3',
                        height: '100%',
                        display: {
                            xs: 'none',
                            md: 'none',
                            xl:'flex',
                        },
                        background:'green'
                    }}>

                    </Box>
                    <Box sx={{
                        flexGrow: '1',
                        height: '100%',
                        minWidth: '20rem',
                        padding:'0 1rem'
                    }}>
                        <Typography sx={{fontSize:'1.5rem'}}>Recommandations</Typography>
                        <Box sx={{
                            width: '100%',
                            height: '40vh',
                            overflowY: "scroll",
                            scrollbarWidth: "none",
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
                            "::-webkit-scrollbar": {
                                display: "none",
                            },
                        }}>
                            {recommandations.map((elt) => (
                                <Paper key={elt.id} sx={{
                                    width: '100%',
                                    height: 'auto',
                                    marginTop: 2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems:'center',
                                    padding: '0.5rem',
                                    borderRadius: 4,
                                    columnGap: 2,
                                    boxShadow: 'none',
                                    transition: 'all .2s ease',
                                    '&:hover': {
                                        transform: 'scale(0.95 , 1.03)',
                                        transition:'all .2s ease'
                                    },
                                }} >
                                    <Box sx={{
                                        width: '5rem',
                                        height:'5rem',
                                        borderRadius: 3,
                                        overflow:'hidden'
                                    }}>
                                        <img src={elt.pochette} alt={elt.titre} width={'100%'} height={'100%'} />
                                    </Box>
                                    <Box sx={{ borderRadius:3 ,padding:1,gap:1}}>
                                        <Typography variant={'body2'} color={'dark'}>{elt.titre}</Typography>
                                        <Chip label={elt.type} color={'secondary'} size={'small'} sx={{fontSize:'0.7rem',marginTop:'0.3rem'}} />
                                    </Box>
                                </Paper>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home