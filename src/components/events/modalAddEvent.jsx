import React, { useState, useRef, useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext';
import dayjs from 'dayjs';
import {
    Modal,
    // Box,
    styled,
    Backdrop,
    Stack,
    Typography,
    TextField,
    Card,
    Input,
    CardMedia
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { Button, IconButton } from '@mui/material';
import { ReactComponent as IconExit } from '../../assets/SVG/cross-small.svg';
import { ReactComponent as IconCamera } from '../../assets/SVG/camera.svg';
import { addEvent } from '../../services/api'


const CustomBackrop = styled(Backdrop)(({ theme }) => ({
    background: 'rgba(0,0,0,0.1)'
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    maxWidth: 100,
    maxHeight: '100vh',
    bgcolor: 'background.paper',
    outline: 'none',
    borderRadius: 4,
    overflow: 'hidden',
};

const ModalAddEvent = ({ isOpen, onClose }) => {
    const [data, setData] = useState({
        'eventName': '',
        'coverPhoto': null,
        'startDate': '',
        'endDate': '',
        'startTime':'',
        'endTime':'',
        'location': '',
        'Description': '',
        'user': '',
        'passion': '',
    })
    const [dateFin, setDateFin] = useState(false)
    const [previewImage, setPreviewImage] = useState(null);

    const { darkMode } = useContext(DarkModeContext)
    const hiddenInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData({
            ...data,
            coverPhoto: file
        });

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const handleAddDateFin = () => {
        setDateFin(!dateFin)
    }

    const handleCardMediaClick = () => {
        hiddenInputRef.current.click();
    };

    const handleCreate = (e) => {
        e.preventDefault()
        data.user = 12
        data.passion = 8
        console.log(data)
        addEvent(
            data.eventName,
            data.coverPhoto,
            data.startDate,
            data.endDate,
            data.startTime,
            data.endTime,
            data.location,
            data.Description,
            data.user,
            data.passion
        )
//        
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropComponent={CustomBackrop}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack direction={'column'} sx={style}>
                    <Typography textAlign={'center'} variant='h5' py={2} color={'primary.main'}>Créer un évènement</Typography>
                    <Card sx={{
                        borderRadius: '0',
                        boxShadow: 'none',
                        height: 170,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: darkMode ? '#333333' : '#efefef'
                    }}>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            inputRef={hiddenInputRef}
                            sx={{ display: 'none' }}
                        />
                        {previewImage === null ? (
                            <Button startIcon={
                                <IconCamera style={{
                                    width: 15,
                                    height: 15,
                                    fill: darkMode ? '#efefef' : '#333'
                                }} />
                            } onClick={handleCardMediaClick}>
                                Ajouter une couverture
                            </Button>
                        ) : (
                            <CardMedia
                                height='170'
                                component="img"
                                src={previewImage}
                                alt="Preview"
                                onClick={handleCardMediaClick}
                                sx={{ cursor: 'pointer' }}
                            />
                        )}
                    </Card>
                    <form onSubmit={handleCreate}>
                        <Stack direction={'column'} p={2}>
                            <TextField label="Nom de l'évènement" variant='outlined'
                                value={data.eventName}
                                onChange={(e) => setData({
                                    ...data,
                                    eventName: e.target.value
                                })}
                            />
                            <Stack direction={'row'} spacing={2} mt={2}>
                                <DatePicker
                                    format='YYYY-MM-DD'
                                    views={["year", "month", "day"]}
                                    label="Date de début"
                                    value={data.startDate}
                                    onChange={(e) => setData({
                                        ...data,
                                        startDate: e.toDate().toDateString()
                                    })}
                                    renderInput={(params) => <input {...params} />}
                                />
                                <TimePicker label="Heure de début" size={'small'}
                                    value={data.startTime}
                                    onChange={(e) => setData({
                                        ...data,
                                        startTime: e.target.value
                                    })}
                                />
                            </Stack>
                            {dateFin ? '' : (
                                <Button onClick={() => handleAddDateFin()} >+ Heure de fin</Button>
                            )}
                            {
                                dateFin ? (
                                    <Stack direction={'row'} spacing={2} my={2}>
                                        <DatePicker
                                            format='YYYY-MM-DD'
                                            // views={["year", "month", "day"]}
                                            label="Date de début"
                                            value={data.endDate}
                                            onChange={(e) => setData({
                                                ...data,
                                                endDate: e.toDate().toDateString()
                                            })}
                                        />
                                        <TimePicker label="Heure de fin" size={'small'} />
                                        <IconButton onClick={() => handleAddDateFin()}>
                                            <IconExit style={{ width: '1rem', height: '1rem' }} />
                                        </IconButton>
                                    </Stack>
                                ) : ''
                            }
                            <TextField label='Lieu' sx={{ mb: 2 }}
                                value={data.location}
                                onChange={(e) => setData({
                                    ...data,
                                    location: e.target.value
                                })}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                value={data.Description}
                                onChange={(e) => setData({
                                    ...data,
                                    Description: e.target.value
                                })}
                            />
                        </Stack>
                        <Button type='submit' variant='contained' sx={{ borderRadius: 0, width: '100%' }}>Créer</Button>
                    </form>
                </Stack>
            </LocalizationProvider>
        </Modal>
    )
}

export default ModalAddEvent