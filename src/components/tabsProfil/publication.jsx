import React, { useState, useEffect } from 'react'
import { Box, Paper, Grid, Button, Typography, Avatar, IconButton } from '@mui/material'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import avatar from '../../assets/Icons/avatar22.png'
// import img1 from '../../assets/1146218.png'
import { ReactComponent as IconPhotos } from '../../assets/SVG/picture (1).svg'
import { ReactComponent as IconVideos } from '../../assets/SVG/play (1).svg'
import { ReactComponent as IconPlanning } from '../../assets/SVG/bookmark (1).svg'
import { ReactComponent as IconHeart } from '../../assets/SVG/heart (1).svg'
import { ReactComponent as IconComment } from '../../assets/SVG/comment.svg'
import { ReactComponent as IconShare } from '../../assets/SVG/share.svg'
import { ReactComponent as IconDots } from '../../assets/SVG/menu-dots.svg'
import MyModal from './modalPublication';
import { getPostByUserId } from '../../services/api'
import { getAllPost } from '../../services/api'
import moment from 'moment';
import 'moment/locale/fr'; // Importez la localisation française si nécessaire
import eventEmitter, { POST_ADDED } from '../addPassion/event';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const MyButton = styled(Button)({
    border: '1px solid #ddd',
    borderRadius: '1.5rem',
    padding: '0.375rem 1.5rem',
    color: '#333'
})
const MyPaper = styled(Paper)({
    borderRadius: 15,
    width: '85%',
    height: 'auto',
    padding: '1rem',
})

const MyBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 1,
    color: '#444',
    fill: '#444',
})

const Publication = () => {

    const user_data = useSelector((state) => state.auth.user.user)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const userId = 11; // a dynamiser
      
        getPostByUserId(userId)
          .then(data => {
            const sorted = data.sort((a, b) => b.id - a.id);
            // Conversion de la chaîne 'createdAt' en objet Date
            sorted.forEach(post => {
                post.createdAt = moment(post.createdAt).format('DD/MM/YYYY');
            });
            setPosts(sorted);
          //  toast.success('Publications récupérées avec succès !');
          })
           .catch(error => {
             console.error('Erreur lors de la récupération des publications:', error);
             toast.error('Une erreur est survenue lors de la récupération des publications.');
           });

        eventEmitter.on(POST_ADDED, handlePostAdded);

        return () => {
            eventEmitter.off(POST_ADDED, handlePostAdded);
        };    

    }, []);

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //      getAllPost()
    //           .then(data => {
    //              // Tri des passions dans l'ordre décroissant par leur identifiant
    //             const sorted = data.sort((a, b) => b.id - a.id);
    //             // Conversion de la chaîne 'createdAt' en objet Date
    //             sorted.forEach(post => {
    //                 post.createdAt = moment(post.createdAt).format('DD/MM/YYYY');
    //             });
    //             setPosts(sorted);
    //          })
    //          .catch(error => {
    //               console.error(error);
    //          });
    // }, []);
    //     // Fonction de gestion de l'événement de nouvelle passion ajoutée
    const handlePostAdded = (post) => {
            // Mettez à jour la liste des passions avec la nouvelle passion
        setPosts((prevPost) => [post, ...prevPost]);
    };

    
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
            marginBottom: '1rem',
            maxHeight: 'calc(100vh - 100px)',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                width: '6px',
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#999',
            },
        }}>
            <ToastContainer />             
            <Paper sx={{
                width: '85%',
                // height:'7rem',
                borderRadius: 4,
                padding: '1rem'
            }}>
                <Grid container >
                    <Grid item xs={1} sx={{
                    }}>
                        <Box sx={{
                            width: '3rem',
                            height: '3rem',
                            background: user_data.background,
                            borderRadius: 50
                        }}>
                            <img src={user_data.avatar} alt="avatar" width={"100%"} />
                        </Box>
                    </Grid>
                    <Grid item xs={11} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 1rem'
                    }}>
                        {isModalOpen && <MyModal setIsModalOpen={setIsModalOpen} />}
                        <Box sx={{
                            background: '#efefef',
                            borderRadius: 6,
                            padding: '0.5rem 1rem',
                            width: '100%',
                            color: '#999',
                            cursor: 'pointer',
                        }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Quoi de neuf ?
                        </Box>
                    </Grid>
                    <Grid item xs={11} sx={{
                        marginLeft: 'auto',
                        padding: '0.5rem 1rem 0 1rem',
                        display: 'flex',
                        flexDirection: 'row',
                        columnGap: 1,

                    }}>
                        <MyButton startIcon={<IconPhotos style={{ width: 10, height: 10, fill: '#2096f3' }} />} >Photos</MyButton>
                        <MyButton startIcon={<IconVideos style={{ width: 10, height: 10, fill: '#ffda5f' }} />} >Videos</MyButton>
                        <MyButton startIcon={<IconPlanning style={{ width: 10, height: 10, fill: '#d7415e' }} />} >Planning</MyButton>
                    </Grid>
                </Grid>
            </Paper>
            {posts.map(post => (
                <div key={post.id}>
                    <MyPaper >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: 1,
                                marginBottom: '0.5rem'
                            }}>
                                <Avatar
                                    src={avatar}
                                    sx={{ background: '#2a5078' }}
                                />
                                <Box sx={{}}>
                                    <Typography sx={{fontWeight:'bold',fontSize:'0.9rem'}}>RABESOA Nicky</Typography>
                                    <Typography color='GrayText' sx={{ fontSize: '0.6rem' }}>
                                        {post.createdAt}
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton>
                                <IconDots style={{ width: 15, height: 15, fill: '#444' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '1rem',
                        }}>
                            <p>{post.postDescription}</p>
                            <img src={post.postImage} alt={post.postImage} width="auto" height="auto" 
                                style={{
                                    marginTop:'1rem',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    
                            }} />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: 2,
                        }}>
                            <MyBox >
                                <IconButton>
                                    <IconHeart style={{ width: 15, height: 15, fill: '#d7415e' }} />
                                </IconButton>
                                <Typography>25</Typography>
                            </MyBox>
                            <MyBox>
                                <IconButton>
                                    <IconComment style={{ width: 15, height: 15 }} />
                                </IconButton>
                                <Typography>2</Typography>
                            </MyBox>
                            <MyBox>
                                <IconButton>
                                    <IconShare style={{ width: 15, height: 15 }} />
                                </IconButton>
                            </MyBox>
                        </Box>
                    </MyPaper>       
                </div>
            ))}
        </Box>
    )
}

export default Publication