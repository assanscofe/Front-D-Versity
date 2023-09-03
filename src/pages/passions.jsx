import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Typography,
  Accordion,
  Box,
  Grid,
  Stack,
  Avatar,
  IconButton,
  Menu,
  Button,
} from "@mui/material";
// import Masonry from '@mui/lab/Masonry'
import { getAllPassions, deletePassion } from "../services/api";
import eventEmitter, { PASSION_ADDED } from "../components/addPassion/event";
// import img1 from "../assets/432486.jpg";
import img2 from "../assets/683409.jpg";
import img3 from "../assets/798904.png";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransitionsModal from "../components/addPassion/addPassion";

// const MyAccordion = styled(Accordion)({
//   width: "18rem",
// });

const StyleAccordion = styled("div")(({ theme }) => ({
  height: "auto",
  maxHeight: "100%",
  overflowY: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "::-webkit-scrollbar": {
    display: "none",
  },

  // marginTop: '1rem',
  padding: "1rem 1rem 2rem 1rem",
}));

const DeleteButton = styled(Button)({
  backgroundColor: "red",
  color: "#fff",
  borderRadius: "1.5rem",
  padding: "0.375rem 1.5rem",
});

const MyButton = styled(Button)({
  border: "1px solid #444",
  borderRadius: "1.5rem",
  padding: "0.375rem 1.5rem",
  color: "#444",
});

const Passions = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const [expanded, setExpanded] = useState(false);

  const [passionToDeleteId, setPassionToDeleteId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [passionToUpdate, setPassionToUpdate] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [passions, setPassions] = useState([]);

  useEffect(() => {
    Modal.setAppElement("#root"); // Utilisez le sélecteur CSS de l'élément racine de votre application
  }, []);

  useEffect(() => {
    getAllPassions()
      .then((data) => {
        // Tri des passions dans l'ordre décroissant par leur identifiant
        const sortedPassions = data.sort((a, b) => b.id - a.id);
        setPassions(sortedPassions);
      })
      .catch((error) => {
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

  const handleOpenMenu = (index) => (event) => {
    // Mettre à jour l'état du menu pour la passion spécifique
    const newOpenMenus = [...openMenus];
    newOpenMenus[index] = event.currentTarget;
    setOpenMenus(newOpenMenus);
  };

  const handleCloseMenu = (index) => () => {
    // Fermer le menu pour la passion spécifique
    const newOpenMenus = [...openMenus];
    newOpenMenus[index] = null;
    setOpenMenus(newOpenMenus);
  };

  const renderMenu = (passionId, index, passion) => (
    <Menu
      anchorEl={openMenus[index]}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenus[index])}
      onClose={handleCloseMenu(index)}
      sx={{ mt: 2 }}
    >
      <MenuItem
        onClick={() => handleEdit(passion)}
        sx={{ fontWeight: 600, my: 1, mx: 2 }}
      >
        Modifier
      </MenuItem>
      <MenuItem
        onClick={() => handleDelete(passionId)}
        sx={{ fontWeight: 600, my: 1, mx: 2 }}
      >
        Supprimer
      </MenuItem>
      <MenuItem sx={{ fontWeight: 600, my: 1, mx: 2 }}>Quitter</MenuItem>
    </Menu>
  );

  const handleDelete = (id) => {
    console.log("l'id de passion", id);
    setShowModal(true);
    setPassionToDeleteId(id);
  };

  const confirmDelete = () => {
    deletePassion(passionToDeleteId)
      .then((data) => {
        toast.success("Passion supprimée avec succès!");
        console.log("Passion supprimée avec succès!", data);
        setPassions((prevPassions) =>
          prevPassions.filter((passion) => passion.id !== passionToDeleteId)
        );
        setShowModal(false);
        setPassionToDeleteId(null);
      })
      .catch((error) => {
        toast.error("Erreur lors de la suppression de la passion:", error);
        console.error("Erreur lors de la suppression de la passion:", error);

        setShowModal(false);
        setPassionToDeleteId(null);
      });
  };

  const closeModal = () => {
    // Fermez la boîte de dialogue modale sans rien faire si l'utilisateur annule
    setShowModal(false);
    setPassionToDeleteId(null);
  };

  const handleEdit = (passion) => {
    setPassionToUpdate(passion);
    setIsModalOpen(true);
  };

  const updatePassionInList = (updatedPassion) => {
    setPassions((prevPassions) =>
      prevPassions.map((passion) =>
        passion.id === updatedPassion.id ? updatedPassion : passion
      )
    );
  };

  return (
    <>
      <Typography variant="h6" color={"primary.main"}>
        Passions
      </Typography>
      <StyleAccordion>
        <Grid container sx={{}}>
          {passions.map((passion, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              sx={{
                width: "1fr",
                minWidth: "300px",
                height: "auto",
                padding: 1,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  bgcolor: "background.paper",
                  padding: "1rem",
                  borderRadius: 5,
                }}
              >
                <Grid
                  container
                  gap={1}
                  sx={{
                    maxWidth: "100%",
                    mb: "1rem",
                  }}
                >
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    style={{
                      width: 15,
                      height: 15,
                      fill: "#444",
                      marginLeft: "auto",
                    }}
                    aria-haspopup="true"
                    onClick={handleOpenMenu(index)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  {renderMenu(passion.id, index, passion)}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      height: "6rem",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={passion.passionImage}
                      alt={passion.passionName}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5.8}
                    sx={{
                      height: "4rem",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img2}
                      alt={passion.passionName}
                      width="100%"
                      height="100%"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5.8}
                    sx={{
                      height: "4rem",
                      borderRadius: 3,
                      marginLeft: "auto",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img3}
                      alt={passion.passionName}
                      width="100%"
                      height="100%"
                    />
                  </Grid>
                </Grid>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <Avatar
                      src={passion.passionImage}
                      alt="image"
                      sx={{ width: 30, height: 30 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {passion.passionName}
                    </Typography>
                  </Stack>
                  <Stack direction="column" alignItems={"center"}>
                    <Typography variant="body2">180</Typography>
                    <Typography variant="body2">membres</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </StyleAccordion>
      {isModalOpen && (
        <TransitionsModal
          setIsModalOpen={setIsModalOpen}
          passionToUpdate={passionToUpdate}
          updatePassionInList={updatePassionInList}
        />
      )}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Confirmer la suppression"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350px",
            height: "200px",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#fff",
          },
        }}
      >
        <h2>Confirmer la suppression</h2>
        <p>Voulez-vous vraiment supprimer cette passion ?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "25px",
          }}
        >
          <MyButton onClick={closeModal}>Non</MyButton>
          <DeleteButton onClick={confirmDelete}>Oui</DeleteButton>
        </div>
      </Modal>
    </>
  );
};

export default Passions;
