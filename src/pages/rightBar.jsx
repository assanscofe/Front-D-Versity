import { Box, Stack, Typography, Badge, Button, Avatar, Paper } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import { getAllPassions } from '../services/api'
import { useNavigate, Outlet, Link } from 'react-router-dom'
import Photo from '../assets/Icons/35.png'
import Photo1 from '../assets/Icons/27.png'
import Photo2 from '../assets/Icons/30.png'
import Photo3 from '../assets/Icons/34.png'
import Photo4 from '../assets/Icons/33.png'

const StyleRightbar = styled(Box)(({ theme }) => ({
    maxWidth: '300px',
    minWidth: '220px',
    height: 'calc(100vh - 10vh)',
    position: 'sticky',
    top: '8vh',
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "::-webkit-scrollbar": {
      display: "none",
    },
}))

const MyBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        background: '#ff4154',
        color: '#fff'
    }
}))

const RightBar = () => {
    return (
        <StyleRightbar flex={3} p={2} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg:'block' } }}>
            <Stack direction='column'>
                <Box>
                    <Stack direction={'row'} alignContent="center" justifyContent={'space-between'} sx={{ padding: '0 2rem 0 1rem', marginBottom: 2 }}>
                        <Typography variant={'body1'} sx={{ color: '#abb9c9', fontWeight: '400' }}>INVITATIONS</Typography>
                        <MyBadge badgeContent={4} anchorOrigin={{ vertical: '', horizontal: 'right' }} />
                    </Stack>
                    <Stack direction={'column'} spacing={2} alignItems={'center'} sx={{
                        height: 'calc(100vh - 65vh)'
                    }}>
                        <Paper sx={{
                            borderRadius: 3,
                            width: '100%',
                            boxShadow: 'none'
                        }}>
                            <Stack p={1.5} spacing={1}>
                                <Stack direction={'row'} spacing={1}>
                                    <Box sx={{
                                        width: 35,
                                        height: 35,
                                        background: '#fe4574',
                                        borderRadius: 3,
                                        padding: '0.2rem'
                                    }}>
                                        <Avatar src={Photo3} sx={{
                                            width: 30,
                                            height: 30
                                        }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '0.75rem',
                                            fontWeight: '600'
                                        }}>Itachi Uchiwa</Typography>
                                        <Typography sx={{
                                            fontSize: '0.6rem',
                                        }} color='text.secondary'>(1)ami(s) en communs</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction={'row'} spacing={1} sx={{
                                }}>
                                    <Button size='small' sx={{
                                        flexGrow: 1,
                                        background: '#2469d8',
                                        color: '#fff',
                                        borderRadius: 2
                                    }}>Confirmer</Button>
                                    <Button size='small' sx={{
                                        flexGrow: 1,
                                        background: '#f0f7fc',
                                        borderRadius: 2
                                    }}>Supprimer</Button>

                                </Stack>
                            </Stack>
                        </Paper>
                        <Paper sx={{
                            borderRadius: 3,
                            width: '100%',
                            boxShadow: 'none'
                        }}>
                            <Stack p={1.5} spacing={1}>
                                <Stack direction={'row'} spacing={1}>
                                    <Box sx={{
                                        width: 35,
                                        height: 35,
                                        background: '#fe4574',
                                        borderRadius: 3,
                                        padding: '0.2rem'
                                    }}>
                                        <Avatar src={Photo4} sx={{
                                            width: 30,
                                            height: 30
                                        }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '0.75rem',
                                            fontWeight: '600'
                                        }}>Itachi Uchiwa</Typography>
                                        <Typography sx={{
                                            fontSize: '0.6rem',
                                        }} color='text.secondary'>(1)ami(s) en communs</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction={'row'} spacing={1} sx={{
                                }}>
                                    <Button size='small' sx={{
                                        flexGrow: 1,
                                        background: '#2469d8',
                                        color: '#fff',
                                        borderRadius: 2
                                    }}>Confirmer</Button>
                                    <Button size='small' sx={{
                                        flexGrow: 1,
                                        background: '#f0f7fc',
                                        borderRadius: 2
                                    }}>Supprimer</Button>

                                </Stack>
                            </Stack>
                        </Paper>
                        <Typography >Voir Plus</Typography>
                    </Stack>
                    <Stack direction={'row'} alignContent="center" justifyContent={'space-between'} sx={{ padding: '0 2rem 0 1rem', marginBottom: 2 }}>
                        <Typography variant={'body1'} sx={{ color: '#abb9c9', fontWeight: '400' }}>Amis En Ligne</Typography>
                        <MyBadge badgeContent={63} anchorOrigin={{ vertical: '', horizontal: 'right' }} />
                    </Stack>
                    <Paper sx={{
                        // background: '#fff',
                        borderRadius: 3,
                        boxShadow: 'none',
                        padding: 2,
                        height: 'calc(100vh - 58vh)',
                        overflowY: "scroll",
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": {
                        display: "none",
                        },
                        "::-webkit-scrollbar": {
                        display: "none",
                        },
                    }}>
                        <Stack direction={'column'} spacing={1}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#98bbf7', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo1} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Naruto Uzumaki</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#33ccff', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo2} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sasuke Uchiwa</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#caff88', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo3} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sakura Haruno</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#55fc77', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo4} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Kakashi Hatake</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#98bbf7', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo1} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Naruto Uzumaki</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#33ccff', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo2} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sasuke Uchiwa</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#caff88', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo3} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sakura Haruno</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#55fc77', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo4} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Kakashi Hatake</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#98bbf7', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo1} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Naruto Uzumaki</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#33ccff', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo2} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sasuke Uchiwa</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#caff88', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo3} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sakura Haruno</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#55fc77', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo4} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Kakashi Hatake</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#98bbf7', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo1} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Naruto Uzumaki</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#33ccff', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo2} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sasuke Uchiwa</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#caff88', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo3} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Sakura Haruno</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Badge variant={'dot'} invisible={false} color={'success'} >
                                    <Box sx={{ width: 30, height: 30, background: '#55fc77', borderRadius: 2, padding: '0.1rem' }}>
                                        <Avatar src={Photo4} sx={{ width: 25, height: 25 }} />
                                    </Box>
                                </Badge>
                                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Kakashi Hatake</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Box>
            </Stack>
        </StyleRightbar>
    )
}

export default RightBar