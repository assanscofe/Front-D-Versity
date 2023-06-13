import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Card,
    CardMedia,
    CardContent,
    Divider,
    Button,
    Typography,
    CardActions,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box
} from '@mui/material'
import Color from 'color-thief-react'
import { getAllPassions } from '../services/api'
import eventEmitter, { PASSION_ADDED } from '../components/addPassion/event';

//-----------import images--------
// import img1 from '../assets/1132869.jpg'
// import img2 from '../assets/1135879.png'
// import img3 from '../assets/1143088.jpg'
// import img4 from '../assets/1146218.png'
// import img5 from '../assets/1280277.jpg'


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
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
    padding:'1rem 1rem 2rem 1rem'
}))

// const passions = [
//     {
//         id: 1,
//         passionImage: img1,
//         passionName: 'Musique',
//         passionDescription: 'bla bla blabla blabla bla bla blabla blabla bla bla blabla blabla'
//     },
//     {
//         id: 2,
//         passionImage: img2,
//         passionName: 'Musique',
//         passionDescription: 'bla bla blabla blabla bla bla blabla blabla bla bla blabla blabla'
//     },
//     {
//         id: 3,
//         passionImage: img3,
//         passionName: 'Musique',
//         passionDescription: 'bla bla blabla blabla bla bla blabla blabla bla bla blabla blablabla bla blabla blabla bla bla blabla blabla bla bla blabla blabla'
//     },
//     {
//         id: 4,
//         passionImage: img4,
//         passionName: 'Musique',
//         passionDescription: 'bla bla blabla blabla bla bla blabla blabla bla bla blabla blabla'
//     },
//     {
//         id: 5,
//         passionImage: img5,
//         passionName: 'Musique',
//         passionDescription: 'bla bla blabla blabla bla bla blabla blabla bla bla blabla blabla'
//     },
//     {
//         id: 6,
//         passionImage: img1,
//         passionName: 'Musique',
//         passionDescription: 'bla bla blabla blabla bla bla blabla blabla bla bla blabla blabla'
//     },
//     {
//         id: 7,
//         passionImage: img2,
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
        <>
            <Typography variant='h3' color='primary' >Passions</Typography>
            <StyleAccordion>
                {passions.map(passion => (
                    <Color src={passion.passionImage} format="hex">
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
                                        <img src={passion.passionImage} alt={passion.passionName} width="100%" height="100%" />
                                    </Box> &nbsp;
                                    <Typography
                                        variant='h6'
                                        color={'text.secondary'}
                                        sx={{
                                            margin:'2rem auto'
                                        }}
                                    >{passion.passionName}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{passion.passionDescription}</Typography>
                                    <Typography>Communautés</Typography>
                                    <Typography>Evènements</Typography>
                                </AccordionDetails>
                            </MyAccordion>
                        )}
                    </Color>
                ))}
            </StyleAccordion>
        </>
    );
}

export default Passions
{/* <Card key={passion.id} sx={{
    width: '12rem',
    height: '15rem',
    background: data+'77',
    borderRadius: 6,
    transition:'all .01s ease',
    '&:hover': {
        boxShadow: '0 6px 0 '+data+' , 0 10px 10px '+data+'55 ,0 15px 15px '+data+'33',
        transform: 'scale(1.03,1.03)',
        transition: 'all 0.1s ease',
    },
    position:'relative'
}} >
    <CardMedia 
        component='img'
        height='50%'
        image={passion.passionImage}
        alt={passion.passionName}
    />
    <CardContent sx={{height:'35%'}}>
        <Typography variant={'h5'} color={'white'} textAlign={'center'}>{passion.passionName}</Typography>
        <Typography sx={{fontSize:'0.7rem'}}>{passion.passionDescription }</Typography>
    </CardContent>
    <Divider sx={{margin:'0 1rem'}}></Divider>
    <CardActions sx={{
        padding: '0',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height:'15%'
    }}>
        <Button sx={{
            width: '100%',
            margin: 'auto',
            color: data,
            background: data,
            '&:hover': {
                background: data+'88',
                color:'#fff'
            }
        }}>Rejoindre</Button>
    </CardActions>
</Card>    */}