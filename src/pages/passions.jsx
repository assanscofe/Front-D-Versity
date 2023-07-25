import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box
} from '@mui/material'
import Color from 'color-thief-react'
import { getAllPassions, deletePassion } from '../services/api'
import eventEmitter, { PASSION_ADDED } from '../components/addPassion/event';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

//-----------import images--------
// import img1 from '../assets/1132869.jpg'
const MyButton = styled(Button)({
    border: '1px solid #444',
    borderRadius: '1.5rem',
    padding: '0.375rem 1.5rem',
    color:'#444',
})

const MyAccordion = styled(Accordion)({
    width: '18rem',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
})

const StyleAccordion = styled('div')(({ theme }) => ({
    height: 'auto',
    maxHeight: 'calc(100% - 12vh)',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
    '::-webkit-scrollbar': {
        display: 'none'
    },
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
    padding:'1rem 1rem 2rem 1rem'
}))

const NoPassionMessage = styled(Typography)({
    marginTop: '1rem',
    fontSize: '1.2rem',
    color: '#888',
  });

const DeleteButton = styled(Button)({
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '1.5rem',
    padding: '0.375rem 1.5rem',

});

// const passions = [
//     {
//         id: 1,
//         passionImage: img1,
//         passionName: 'Musique',
//         passionDescription: 'bla bla blabla blabla bla bla blabla blabla bla bla blabla blabla'
//     },
// ]

const Passions = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [passions, setPassions] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [passionToDeleteId, setPassionToDeleteId] = useState(null);

    useEffect(() => {
        Modal.setAppElement('#root'); // Utilisez le sélecteur CSS de l'élément racine de votre application
    }, []);

    useEffect(() => {
        getAllPassions()
             .then(data => {
                 // Tri des passions dans l'ordre décroissant par leur identifiant
                const sortedPassions = data.sort((a, b) => b.id - a.id);
                setPassions(sortedPassions);
            })
            .catch(error => {
                 console.error(error);
            });

         // Écoutez l'événement de nouvelle passion ajoutée
         eventEmitter.on(PASSION_ADDED, handlePassionAdded);

         // Nettoyez les écouteurs d'événements lorsque le composant est démonté
        return () => {
             eventEmitter.off(PASSION_ADDED, handlePassionAdded);
         };

    }, []);

    // Fonction de gestion de l'événement de nouvelle passion ajoutée
    const handlePassionAdded = (passion) => {
         // Mettez à jour la liste des passions avec la nouvelle passion
         setPassions((prevPassions) => [passion, ...prevPassions]);
    };

    const handleDelete = (id) => {
        setShowModal(true);
        setPassionToDeleteId(id);
    };
    
    const confirmDelete = () => {
        deletePassion(passionToDeleteId)
          .then(data => {
            toast.success('Passion supprimée avec succès!');
            console.log('Passion supprimée avec succès!', data);
            setPassions(prevPassions => prevPassions.filter(passion => passion.id !== passionToDeleteId));
            setShowModal(false);
            setPassionToDeleteId(null);
          })
          .catch(error => {
            toast.error('Erreur lors de la suppression de la passion:', error);
            console.error('Erreur lors de la suppression de la passion:', error);
            
            setShowModal(false);
            setPassionToDeleteId(null);
          });
    };
    
    const closeModal = () => {
        // Fermez la boîte de dialogue modale sans rien faire si l'utilisateur annule
        setShowModal(false);
        setPassionToDeleteId(null);
    };


    return (
        <>
            <Typography variant='h3' color='primary' >Passions</Typography>
            {passions.length === 0 ? (
                <NoPassionMessage>Aucune passion existante.</NoPassionMessage>
            ) : (
                <StyleAccordion>
                {passions.map(passion => (
                    <Color key={passion.id} src={passion.passionImage} format="hex">
                        {({ data, loading, error }) => (
                            <MyAccordion
                                key={passion.id} 
                                expanded={expanded === passion.id}
                                onChange={handleChange(passion.id)}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`${passion.id}-content`}
                                    id={`${passion.id}-header`}
                                    
                                >
                                    <Box sx={{
                                        width: '6rem',
                                        height: '6rem',
                                        borderRadius: 1,
                                        overflow:'hidden'
                                    }}>
                                        <img src={passion.passionImage} alt={passion.passionName}   
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover',
                                      }}/>
                                    </Box> &nbsp;
                                    <Typography
                                        variant='h6'
                                        color="text.secondary"
                                        sx={{
                                          marginTop: 'auto',
                                          marginBottom: 'auto',
                                        }}
                                    >{passion.passionName}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{passion.passionDescription}</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        columnGap: 1,
                                        marginBottom:'0.5rem',
                                        marginTop:'1rem'
                                    }}>
                                    {/* <MyButton>communauté</MyButton>
                                    <MyButton>Evènements</MyButton> */}
                                    <MyButton onClick={() => handleDelete(passion.id)}>Supprimer</MyButton>
                                    <MyButton>Modifier</MyButton>
                                    </Box>
                                </AccordionDetails>
                            </MyAccordion>
                        )}
                    </Color>
                ))}
            </StyleAccordion>
            )}
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="Confirmer la suppression"
                style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    height: '200px', // Réduire la hauteur en définissant une valeur plus petite ici
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                },
                }}
            >
                <h2>Confirmer la suppression</h2>
                <p>Voulez-vous vraiment supprimer cette passion ?</p>
                <div style={{ display: 'flex', justifyContent: 'space-around' , marginTop:'25px'}}>
                <DeleteButton onClick={confirmDelete}>Oui</DeleteButton>
                <MyButton onClick={closeModal}>Non</MyButton>
                </div>
            </Modal>
        </>
    );
}

export default Passions
