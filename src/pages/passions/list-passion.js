import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { getAllPassions } from '../../services/api'
import eventEmitter, { PASSION_ADDED } from './event';

const MyAccordion = styled(Accordion)({
     margin: '30px'
})

const StyleAccordion = styled('div')(({ theme }) => ({
  height: '600px', 
  overflow: 'auto',
}))

export default function Passions() {
    const [expanded, setExpanded] = React.useState(false);

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
            
    }, []);

    // Fonction de gestion de l'événement de nouvelle passion ajoutée
    const handlePassionAdded = (passion) => {
        // Mettez à jour la liste des passions avec la nouvelle passion
        setPassions((prevPassions) => [passion, ...prevPassions]);
    };

  return (
    <StyleAccordion>
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
            <Typography sx={{ color: 'text.secondary' }}>
                <img src={passion.passionImage} alt={passion.passionName} width="100" height="100" />
            </Typography> &nbsp;
            <Typography>{passion.passionName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{passion.passionDescription}</Typography>
                <Typography>Communautés</Typography>
                <Typography>Evènements</Typography>
            </AccordionDetails>
        </MyAccordion>
        ))}
    </StyleAccordion>
  );
}