import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    // Card,
    // CardMedia,
    // CardContent,
    // Divider,
    // Button,
    Typography,
    // CardActions,
    // IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,

} from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import { getAllPassions } from '../services/api'
import eventEmitter, { PASSION_ADDED } from '../components/addPassion/event';


const MyAccordion = styled(Accordion)({
    width: '18rem',
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

    marginTop: '1rem',
    padding: '1rem 1rem 2rem 1rem'
}))


const Passions = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const [passions, setPassions] = useState([]);

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

    }, [passions]);

    // Fonction de gestion de l'événement de nouvelle passion ajoutée
    const handlePassionAdded = (passion) => {
        // Mettez à jour la liste des passions avec la nouvelle passion
        setPassions((prevPassions) => [passion, ...prevPassions]);
    };
    return (
        <>
            <Typography variant='h3' color='primary' >Passions</Typography>
            <StyleAccordion>
                <Masonry columns={4} spacing={1}>
                    {passions.map(passion => (
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
                                    overflow: 'hidden'
                                }}>
                                    <img src={passion.passionImage} alt={passion.passionName} width="100%" height="100%" />
                                </Box> &nbsp;
                                <Typography
                                    variant='h6'
                                    color={'text.secondary'}
                                    sx={{
                                        margin: '2rem auto'
                                    }}
                                >{passion.passionName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{passion.passionDescription}</Typography>
                                <Typography>Communautés</Typography>
                                <Typography>Evènements</Typography>
                            </AccordionDetails>
                        </MyAccordion>
                    ))}
                </Masonry>
            </StyleAccordion>
        </>
    );
}

export default Passions

