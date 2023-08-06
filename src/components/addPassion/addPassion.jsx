import * as React from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography, TextField, Divider } from '@mui/material'
import { addPassion, updatePassion} from '../../services/api'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { emitPassionAdded } from './event';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {styled} from '@mui/material/styles';
import {ReactComponent as IconPhotos} from '../../assets/SVG/picture (1).svg'
import { useSelector } from 'react-redux'

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: 2,
};

const styleForm = {
    width: '100%',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
}

const MyButton = styled(Button)({
    border: '1px solid #ddd',
    borderRadius: '1.5rem',
    padding: '0.375rem 1.5rem',
    color:'#333'
  })
  

export default function TransitionsModal({ setIsModalOpen, passionToUpdate, updatePassionInList, }) {
    const history = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageDataUrl, setImageDataUrl] = useState(null);
    const fileInputRef = useRef(null);
    const user_data = useSelector((state) => state.auth.user.user)


    useEffect(() => {
        // Si passionToUpdate est fourni, initialisez les valeurs du formulaire pour le mode mise à jour
        if (passionToUpdate) {
            setTitle(passionToUpdate.passionName);
            setDescription(passionToUpdate.passionDescription);
            setImageDataUrl(passionToUpdate.passionImage)
        }
    }, [passionToUpdate]);
    
    const handleCloseModal = () => {
        console.log('La passion a ete ')
        setIsModalOpen(false);
    };

    const handleButtonClicked = () => {
        fileInputRef.current.click();
      };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
        const reader = new FileReader();

        reader.onload = () => {
            const imageDataUrl = reader.result;
            setImageDataUrl(imageDataUrl); // stocker l'URL locale dans une autre variable d'état
        };

        reader.readAsDataURL(selectedImage);
    };


    const handleSubmit = (event) => {

        event.preventDefault();
        const formData = new FormData();
        formData.append('passionName', title);
        formData.append('passionDescription', description);
        formData.append('passionImage', image);
        console.log("formData", formData.get('passionImage'))
        if (passionToUpdate) {
            updatePassion(passionToUpdate.id, title, description,image,{
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
              .then((data) => {
                updatePassionInList(data);
                console.log(data);
                setIsModalOpen(false);
                toast.success('La passion a été mise à jour avec succès');
              })
              .catch((error) => {
                toast.error('Une erreur s\'est produite lors de la mise à jour de la passion');
                console.error(error);
              });
          } else {
            addPassion(title, description, image, user_data.id,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((data) => {
                    console.log(data);
                    setIsModalOpen(false);
                    toast.success('La passion a été ajoutée avec succès');
                    emitPassionAdded(data);   
                    history('/passions')   
                })
                .catch((error) => {
                    toast.error('Une erreur s\'est produite lors de l\'ajout de la passion');
                    console.error(error);
                });
        }
    };

    return (
        <div>    
            <ToastContainer />        
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={true}
                onClose={() => setIsModalOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={true}>
                    <Box sx={styleModal}>
                        <form onSubmit={handleSubmit} style={styleForm}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {passionToUpdate ? 'Modifier la passion' : 'Ajouter une nouvelle passion'}
                        </Typography>

                            <div>
                            <MyButton                 
                            onClick={handleButtonClicked}
                            startIcon={<IconPhotos style={{ width: 10, height: 10,fill:'#2096f3' }} /> }>
                            Photo </MyButton>
                            <input                            
                            type="file"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            />
                            {imageDataUrl && <img width="100" height="100" src={imageDataUrl} alt="Uploaded image" />}
                            </div>
                            <TextField
                                id="outlined-basic"
                                label="Titre de la passion"
                                variant="outlined"
                                value={title}
                                onChange={handleTitleChange}
                                margin="normal"
                                required
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Description de la passion"
                                multiline
                                rows={4}
                                margin="normal"
                                padding="normal"
                                value={description}
                                onChange={handleDescriptionChange}
                                required
                                sx={{ width: '100%' }}
                            />
                            <Divider sx={{ margin: 2, border: 'none' }}></Divider>
                            <Button type="submit" variant="contained" color="primary">
                                Valider
                            </Button>
                            <Button onClick={handleCloseModal}>Annuler</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
            
        </div>
    );
}