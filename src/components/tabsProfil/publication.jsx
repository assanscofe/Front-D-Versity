import React, { useState }from 'react'
import { Box, Paper, Grid,Modal, Button, Typography, Avatar, IconButton } from '@mui/material'
import {styled} from '@mui/material/styles'
import avatar from '../../assets/Icons/22.png'
import img1 from '../../assets/1146218.png'
import {ReactComponent as IconPhotos} from '../../assets/SVG/picture (1).svg'
import {ReactComponent as IconVideos} from '../../assets/SVG/play (1).svg'
import { ReactComponent as IconPlanning } from '../../assets/SVG/bookmark (1).svg'
import { ReactComponent as IconHeart } from '../../assets/SVG/heart (1).svg'
import { ReactComponent as IconComment } from '../../assets/SVG/comment.svg'
import { ReactComponent as IconShare } from '../../assets/SVG/share.svg'
import { ReactComponent as IconDots } from '../../assets/SVG/menu-dots.svg'
import MyModal from './modalPublication';

const MyButton = styled(Button)({
    border: '1px solid #ddd',
    borderRadius: '1.5rem',
    padding: '0.375rem 1.5rem',
    color:'#333'
})
const MyPaper = styled(Paper)({
    borderRadius: 15,
    width: '100%',
    height: 'auto',
    padding:'1rem'
})

const MyBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 1,
    color: '#444',
    fill:'#444'
})

const Publication = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
            marginBottom:'1rem'
        }}>
            <Paper sx={{
                width: '100%',
                // height:'7rem',
                borderRadius: 4,
                padding:'1rem'
            }}>
                <Grid container >
                    <Grid item xs={1} sx={{
                    }}>
                        <Box sx={{
                            width: '3rem',
                            height: '3rem',
                            background: '#2a5078',
                            borderRadius:50
                        }}>
                            <img src={avatar} alt="avatar" width={ "100%"} />
                        </Box>
                    </Grid>
                    <Grid item xs={11} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding:'0 1rem'
                    }}>
                        {isModalOpen && <MyModal setIsModalOpen={setIsModalOpen} />}
                        <Box sx={{
                            background: '#efefef',
                            borderRadius:6,
                            padding: '0.5rem 1rem',
                            width: '100%',
                            color:'#999',
                            cursor: 'pointer',
                        }}
                        onClick={() => setIsModalOpen(true)}
                        >
                            Quoi de neuf ?
                        </Box>
                        {/* <div  style={{
                               
                                borderRadius: 6,
                                width: '100%',
                                color: '#999',
                                cursor: 'pointer',
                            }} >
                        {isClicked ? (
                            <textarea
                            style={{
                                background: '#efefef',
                                borderRadius: 6,
                                padding: '0.5rem 1rem',
                                width: '100%',
                                color: 'black',
                            }}
                            autoFocus={true}
                            placeholder="Quoi de neuf ?"
                            />
                        ) : (
                            <div
                            onClick={handleClick}
                            >
                            Quoi de neuf ?
                            </div>
                        )}
                        </div> */}
                    </Grid>
                    <Grid item xs={11} sx={{
                        marginLeft: 'auto',
                        padding: '0.5rem 1rem 0 1rem',
                        display: 'flex',
                        flexDirection: 'row',
                        columnGap: 1,
                        
                    }}>
                        <MyButton startIcon={<IconPhotos style={{ width: 10, height: 10,fill:'#2096f3' }} /> } >Photos</MyButton>
                        <MyButton startIcon={<IconVideos style={{ width: 10, height: 10 ,fill:'#ffda5f'}} /> } >Videos</MyButton>
                        <MyButton startIcon={<IconPlanning style={{ width: 10, height: 10,fill:'#d7415e' }} />} >Planning</MyButton>
                    </Grid>
                </Grid>
            </Paper>
            <MyPaper >
                <Box sx={{
                    display: 'flex',
                    justifyContent:'space-between'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        columnGap: 1,
                        marginBottom:'0.5rem'
                    }}>
                        <Avatar 
                            src={avatar}
                            sx={{background:'#2a5078'}}
                        />
                        <Box sx={{}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'0.9rem'}}>Nom Utilisateur</Typography>
                            <Typography color='GrayText' sx={{fontSize:'0.6rem'}}>1 heure</Typography>
                        </Box>
                    </Box>
                    <IconButton>
                        <IconDots style={{ width: 15, height: 15,fill:'#444' }} />
                    </IconButton>
                </Box>
                {/* <Box sx={{
                    width: '100%',
                    height: 'auto',
                    padding: '0 1rem',
                    margin:'0'
                }}>
                    <Typography paragraph>Illustration...</Typography>
                </Box> */}
                <Box sx={{
                    width: '100%',
                    height: '18rem',
                    borderRadius: '1rem',
                    overflow:'hidden'
                }}>
                    <img src={img1} alt="image 1" width={'100%'} height={'100%'} style={{objectFit:'cover'}} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap:2
                }}>
                    <MyBox >
                        <IconButton>
                            <IconHeart style={{ width: 15, height: 15,fill:'#d7415e' }} />
                        </IconButton>
                        <Typography>25</Typography>
                    </MyBox>
                    <MyBox>
                        <IconButton>
                            <IconComment style={{ width: 15, height: 15 }} />
                        </IconButton>
                        <Typography>2</Typography>
                    </MyBox>
                    <MyBox>
                        <IconButton>
                            <IconShare style={{ width: 15, height: 15 }} />
                        </IconButton>
                    </MyBox>
                </Box>
            </MyPaper>
        </Box>
    )
}

export default Publication