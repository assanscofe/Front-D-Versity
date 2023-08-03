import React, { useEffect, useState } from 'react'
import {
    // Box,
    Button,
    Stack,
    Typography,
    Divider,
    Avatar,
    AvatarGroup,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    FormControl,
    Select,
    MenuItem
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getAllEvents, getAllPassions } from '../services/api'


import { ReactComponent as IconDate } from '../assets/SVG/clock-three.svg'
import { ReactComponent as IconPosition } from '../assets/SVG/marker.svg'
import { ReactComponent as IconAddEvent } from '../assets/SVG/add.svg'
// import IconStar from '@mui/icons-material/StarBorderRounded'
import IconStarActive from '@mui/icons-material/StarRounded'
// import img1 from '../assets/1132869.jpg'
import img2 from '../assets/1143088.jpg'
// import img3 from '../assets/1135879.png'
import img4 from '../assets/1146218.png'
// import ModalEvent from '../components/events/eventContent'
import ModalAddEvent from '../components/events/modalAddEvent'


const Events = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [collection, setCollection] = useState([])
    // const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [allEvents, setAllEvents] = useState([])
    const [allPassion, setAllPassion] = useState([])


    const handleOpenClose = () => {
        setOpenModal(!openModal)
    }

    // const handleChange = () => {
    //     setOpen(!open)
    // }

    useEffect(() => {
        getAllEvents().then(data => {
            setAllEvents(data)
        })
        getAllPassions().then(data => {
            setAllPassion(data)
        })
        setData(allEvents)
    }, [data])

    useEffect(() => {
        setCollection([...new Set(allEvents.map((elt) => allPassion.find(passion => passion.id === elt.passion).passionName))])
    }, [data])


    const handleFilter = (item) => {
        const filterData = allEvents.filter((elt) => allPassion.find(passion => passion.id === elt.passion).passionName === item)
        setData(filterData)
    }

    return (
        <>
            <Stack direction={'column'} spacing={2} sx={{
                width: '100%',
                height: 'calc(100% - 8vh)',
            }}>
                <Stack direction='row' spacing={2} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Typography variant='h6' color={'primary.main'}>Evènements</Typography>
                        <FormControl sx={{ m: 1, width: 120, borderRadius: 4 }} >
                            <Select
                                defaultValue={'All'}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size='small'
                                sx={{ bgcolor: 'background.paper', border: 'none' }}
                            >
                                <MenuItem value="All" onClick={() => setData(allEvents)}>
                                    All
                                </MenuItem>
                                {
                                    collection.map((elt, index) => (
                                        <MenuItem key={index} value={elt} onClick={() => { handleFilter(elt) }}>
                                            {elt}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Stack>
                    <Button
                        sx={{ borderRadius: 5 }}
                        variant='outlined'
                        onClick={() => handleOpenClose()}
                        startIcon={
                            <IconAddEvent style={{ width: 20, height: 20, fill: '#2469d8' }} />
                        }>
                        Créer
                    </Button>
                    <ModalAddEvent isOpen={openModal} onClose={handleOpenClose} />
                </Stack>
                <Stack direction={'row'} flexWrap={'wrap'} gap={2}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        overflow: 'auto',
                        paddingBottom: '1rem'
                    }}>
                    {
                        data.map((elt, index) => (
                            <Card key={index} sx={{ minWidth: 250, width: 265, maxWidth: 300, position: 'relative' }}  >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="150"
                                    image={elt.coverPhoto}

                                />
                                <Typography sx={{
                                    position: 'absolute',
                                    top: '0.5rem',
                                    left: '0.5rem',
                                    background: '#d7415e',
                                    padding: '0.2rem 0.5rem',
                                    color: '#fff',
                                    borderRadius: 1
                                }}>
                                    {
                                        allPassion.find(passion => passion.id === elt.passion).passionName
                                    }
                                </Typography>
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div" color={'#2469d8'} sx={{ cursor: 'pointer' }} onClick={() => navigate('/events/' + elt.id)}>
                                        {elt.eventName}
                                    </Typography>
                                    <Stack direction={'row'} alignItems={'center'} spacing={1} color={'GrayText'} mt={2.5} >
                                        <IconDate style={{ width: 15, height: 15, fill: 'GrayText' }} />
                                        <Typography sx={{ fontSize: '0.8rem' }} color="text.secondary">{elt.startDate}</Typography>
                                        <Divider orientation='vertical' flexItem />
                                        <Typography sx={{ fontSize: '0.8rem' }} color="text.secondary">{elt.startTime}</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} spacing={1} color={'GrayText'} mt={0.5}>
                                        <IconPosition style={{ width: 15, height: 15, fill: '#d7415e' }} />
                                        <Typography sx={{ fontSize: '0.8rem' }} color="text.secondary">{elt.location}</Typography>
                                    </Stack>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                        <AvatarGroup >
                                            <Avatar
                                                sx={{ width: 30, height: 30 }}
                                                src={img4}
                                                alt='ee'
                                            />
                                            <Avatar
                                                sx={{ width: 30, height: 30 }}
                                                src={img2}
                                                alt='ee'
                                            />
                                            <Avatar alt='rest' sx={{ width: 30, height: 30, fontSize: '0.7rem', bgcolor: 'lightblue', color: '#2469d8' }}>
                                                +2
                                            </Avatar>
                                        </AvatarGroup>
                                        <Typography sx={{ fontSize: '0.8rem' }}>intéressés</Typography>
                                    </Stack>
                                    <IconButton sx={{ bgcolor: 'lightblue' }}>
                                        <IconStarActive sx={{ width: 20, height: 20, fill: '#2469d8' }} />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        ))
                    }
                </Stack>
            </Stack>
        </>
    )
}

export default Events
