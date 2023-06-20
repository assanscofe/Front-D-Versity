import * as React from 'react';
import { Backdrop,IconButton, Grid, Box, Modal, Fade, Button, Typography, TextField, Divider } from '@mui/material'
import { addPassion } from '../../services/api'
import { useState, useEffect,useRef  } from 'react'
import { useNavigate } from 'react-router-dom'
//import { emitPassionAdded } from './event';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {styled} from '@mui/material/styles'
import {ReactComponent as IconPhotos} from '../../assets/SVG/picture (1).svg'
import {ReactComponent as IconVideos} from '../../assets/SVG/play (1).svg'
import { ReactComponent as IconPlanning } from '../../assets/SVG/bookmark (1).svg'

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
}

const MyButton = styled(Button)({
  border: '1px solid #ddd',
  borderRadius: '1.5rem',
  padding: '0.375rem 1.5rem',
  color:'#333'
})

export default function MyModal({ setIsModalOpen }) {
    const history = useNavigate();
    const [description, setDescription] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleCloseModal = () => {
      console.log('hey')
      setIsModalOpen(false);
    };

    const handleButtonClicked = () => {
      fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
      const files = event.target.files;
    
      if (files) {
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
    
          reader.readAsDataURL(file);
    
          reader.onload = (event) => {
            const imageDataUrl = event.target.result;
            setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, file]);
            setPreviewImages((prevPreviewImages) => [...prevPreviewImages, imageDataUrl]);
          };
        });
      }
    };
    
    const handleDescriptionChange = (event) => {
       // setDescription(event.target.value);
    };

    const handleSubmit = (event) => {

        // event.preventDefault();
        // const formData = new FormData();
        // formData.append('passionName', title);
        // formData.append('passionDescription', description);
        // formData.append('passionImage', image);
        // console.log("formData", formData.get('passionImage'))
        // addPassion(title, description, image, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        // })
        //     .then((data) => {
        //         console.log(data);
        //         setIsModalOpen(false);
        //         //emitPassionAdded(data);
        //         toast.success('La passion a été ajoutée avec succès');
        //     })
        //     .catch((error) => {
        //         toast.error('Une erreur s\'est produite lors de l\'ajout de la passion');
        //         console.error(error);
        //     });

        // history('/navHome/passions')
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
                              Nouvelle Publication
                            </Typography>
                            <TextField
                                id="outlined-multiline-static"
                                label="Quoi de neuf?"
                                multiline
                                rows={4}
                                margin="normal"
                                padding="normal"
                                value={description}
                                onChange={handleDescriptionChange}
                                required
                                sx={{ width: '100%' }}
                            />
                          <Grid item xs={12} sx={{
                              marginLeft: 'auto',
                              padding: ' 1rem 0 1rem',
                              display: 'flex',
                              flexDirection: 'row',
                              columnGap: 1,
                              
                          }}>
                          <MyButton
                            startIcon={<IconPhotos style={{ width: 10, height: 10, fill: '#2096f3' }} />}
                            onClick={handleButtonClicked}
                          >
                            Photos / Videos
                          </MyButton>
                          <MyButton startIcon={<IconPlanning style={{ width: 10, height: 10, fill: '#d7415e' }} />}>
                            Planning
                          </MyButton>
                          <input
                            type="file"
                            accept="image/*,video/*"
                            multiple
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                          />
                          </Grid>    
                          {previewImages.map((previewImage, index) => (
                            <img
                              key={index}
                              src={previewImage}
                              alt={`Selected Image ${index + 1}`}
                              style={{ width: '150px', height: '150px' }}
                            />
                          ))}                       
                            <Divider sx={{ margin: 2, border: 'none' }}></Divider>
                            <Button type="submit" variant="contained" color="primary">
                                Publier
                            </Button>
                            <Button onClick={handleCloseModal} >Annuler</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}