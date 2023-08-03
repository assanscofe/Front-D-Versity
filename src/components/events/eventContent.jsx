import React from 'react'
import {
  Paper,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Divider,
  Avatar,
  AvatarGroup,
  Grid
} from '@mui/material'
// import { styled } from '@mui/material/styles'
// import { ReactComponent as IconExit } from '../../assets/SVG/cross-small.svg'
import { ReactComponent as IconDate } from '../../assets/SVG/clock-three.svg'
import { ReactComponent as IconPosition } from '../../assets/SVG/marker.svg'
import { ReactComponent as IconBack } from '../../assets/SVG/arrow-small-left.svg'
import IconStarActive from '@mui/icons-material/StarRounded'

import img from '../../assets/432486.jpg'
import img1 from '../../assets/1132869.jpg'
import img2 from '../../assets/1143088.jpg'
import img3 from '../../assets/1280277.jpg'
import img4 from '../../assets/683409.jpg'
import { useNavigate } from 'react-router-dom'


const style = {
  width: '100%',
  height: 'calc(100% - 14vh)',
  outline: 'none',
  overflow: 'hidden'
};

const boxImg = {
  width: '100%',
  height: 160,
  position: 'relative'
}
// const iconExit = {
//   position: 'absolute',
//   right: '1rem',
//   top: '1rem',
//   bgcolor: '#fff',
// }

const avatars = [
  {
    id: 1,
    img: img
  },
  {
    id: 2,
    img: img1
  },
  {
    id: 3,
    img: img2
  },
  {
    id: 4,
    img: img3
  },
  {
    id: 5,
    img: img4
  },
  {
    id: 6,
    img: img
  },
  {
    id: 7,
    img: img1
  },
  {
    id: 8,
    img: img2
  },
  {
    id: 9,
    img: img3
  },
  {
    id: 10,
    img: img4
  },
]

const EventContent = () => {

  const navigate = useNavigate()

  return (
    <>
      <Stack direction={'row'} >
        <IconButton onClick={() => navigate('/events')}>
          <IconBack style={{ width: '2rem', height: '2rem', fill: '#2469d8' }} />
        </IconButton>
      </Stack>
      <Grid container direction={'row'} sx={style}>
        <Grid item xs={8} bgcolor={'background.paper'}>
          <Box sx={boxImg}>
            <img src={img2} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
          </Box>
          <Stack direction={'column'} p={2}>
            <Stack direction={'row'} spacing={4}>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <IconPosition style={{ width: 15, height: 15, fill: '#d7415e' }} />
                <Typography variant='body2' color={'primary.light'}>10:30 a.m</Typography>
              </Stack>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <IconDate style={{ width: 15, height: 15, fill: 'GrayText' }} />
                <Typography variant='body2' color={'primary.light'}>7 Fev 2023</Typography>
                <Divider orientation='vertical' sx={{ height: 20 }} />
                <Typography variant='body2' color={'primary.light'}>10:30 a.m</Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant='h5'>Manga Mania</Typography>
              <Button startIcon={<IconStarActive sx={{ width: 20, height: 20, fill: '#2469d8' }} />}>Intéressé(e)</Button>
            </Stack>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', mt: 2 }}>
              <AvatarGroup max={12}>
                {
                  avatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      alt='22'
                      src={avatar.img}
                      sx={{ mr: 1.2 }}
                    />
                  ))
                }
                <Avatar alt='rest' sx={{ fontSize: '0.7rem', bgcolor: 'lightblue', color: '#2469d8' }}>+2
                </Avatar>
              </AvatarGroup>
            </Box>
            <Box mt={2}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla bla blaba bla bla </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={4} pl={2}>
          <Paper sx={{ width: '100%', height: 500 }} >

          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default EventContent