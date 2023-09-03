import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Stack,
  Typography,
  Button,
  TextField,
  Box,
  Divider,
  Link,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

//--------import Redux-------
import { login } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

//------import IMG--------------
import Logo from "../assets/dversity.3.png";
import GoogleIcon from "../assets/icon google.png";
import LogoIspm from "../assets/ispm.png";

const StyledContent = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f0f7fc",
  flexDirection: "column",
  gap: 2,
}));

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.isLoading);
  const success = useSelector((state) => state.auth.signupSuccess);
  const error = useSelector((state) => state.auth.error);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChangeCheckbox = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    dispatch(login(user.email, user.password, navigate));
  };

  return (
    <StyledContent>
      {success ? (
        <Alert
          severity="success"
          sx={{
            width: {
              xs: "100%",
              sm: 350,
              md: 350,
              lg: 380,
              xl: 380,
            },
          }}
        >
          Inscription réussie{" "}
        </Alert>
      ) : (
        ""
      )}
      {error !== null ? (
        <Alert
          severity="error"
          sx={{
            width: {
              xs: "100%",
              sm: 350,
              md: 350,
              lg: 380,
              xl: 380,
            },
          }}
        >
          Email ou Mot de passe invalide{" "}
        </Alert>
      ) : (
        ""
      )}
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          width: 150,
          height: 150,
        }}
      >
        <img src={LogoIspm} alt="Logo ispm" width="100%" height="100%" />
      </Box>
      <Paper
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            md: 350,
            lg: 380,
            xl: 380,
          },
          height: {
            xs: "100vh",
            md: "auto",
          },
          boxShadow: "0px 5px 5px #96d7d155",
          padding: "1.5rem",
          backgroundColor: "#ffffff",
        }}
      >
        <Stack direction={"column"} spacing={3} sx={{ width: "100%" }}>
          <Box
            sx={{
              width: {
                xs: 150,
                sm: 150,
                xl: 160,
              },
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="Logo" width={"100%"} />
          </Box>
          <Stack direction={"column"} spacing={3}>
            <Typography
              variant="h6"
              color="primary"
              sx={{
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "0.09rem",
              }}
            >
              Bienvenue
            </Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                backgroundColor: "#f0f7fc",
              }}
              startIcon={<img src={GoogleIcon} alt="Logo" width={"20px"} />}
              size={"small"}
            >
              Se connecter avec Google
            </Button>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                textAlign: "center",
              }}
            >
              OU
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack direction={"column"}>
                <TextField
                  value={user.email}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                  variant="outlined"
                  label="Adresse email"
                  size="small"
                />
                <TextField
                  value={user.password}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                  variant="outlined"
                  label="Mot de passe"
                  type="password"
                  size="small"
                  sx={{ mt: 2 }}
                />
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.75rem",
                  }}
                >
                  <FormControlLabel
                    label="Se souvenir de moi"
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={handleChangeCheckbox}
                      />
                    }
                  />
                  <Link href="">Mot de passe oublié?</Link>
                </Stack>
                <Stack direction={"column"} spacing={2}>
                  {loading ? (
                    <LoadingButton
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{
                        width: "100%",
                        textTransform: "none",
                      }}
                      loading
                    >
                      Se connecter
                    </LoadingButton>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{
                        width: "100%",
                        textTransform: "none",
                      }}
                    >
                      Se connecter
                    </Button>
                  )}
                  <Divider />
                  <Link
                    href="/signup"
                    sx={{
                      textAlign: "center",
                      fontSize: "0.8rem",
                      color: "#404040",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Vous n'avez pas de compte?
                  </Link>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Paper>
    </StyledContent>
  );
};

export default SignIn;
