import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addPassion } from '../services/api'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider'


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

export default function TransitionsModal({ setIsModalOpen }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageDataUrl, setImageDataUrl] = useState(null);

    const handleCloseModal = () => {
    setIsModalOpen(false);
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
    // addPassion(title, description, image)
    //   .then((data) => {
    //     console.log(data);
    //     setIsModalOpen(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }; 

  return (
    <div>
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
                Ajouter une nouvelle passion
              </Typography>
              <TextField 
                id="outlined-basic" 
                label="Titre de la passion" 
                variant="outlined"
                value={title}
                onChange={handleTitleChange} 
                margin="normal"
                required
                sx={{width:'100%'}}
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
                sx={{width:'100%'}}
              />              

                <div>
                    <input type="file" onChange={handleImageChange} />
                    {imageDataUrl && <img width="100" height="100" src={imageDataUrl} alt="Uploaded image" />}
                </div>
              <Divider sx={{margin:2,border:'none'}}></Divider>
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