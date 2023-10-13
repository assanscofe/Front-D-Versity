import React from "react";
import "./App.css";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import NavBar from "./components/navbar/navBar";
import LeftBar from "./components/navbar/leftBar";
import Home from "./pages/home";
import Passions from "./pages/passions";
import Games from "./pages/games";
import Profil from "./pages/profil";
import Settings from "./pages/settings";
import Friends from "./pages/friends";
import Photos from "./pages/photos";
import Messages from "./pages/messages";
import Events from "./pages/events";
import EventContent from "./components/events/eventContent";
import Articles from "./pages/articles";
import Test from "./pages/test";
import Actualites from "./pages/actualites";
import moment from "moment";
import MessageUser from "./components/message/messageUser";

function App() {
  moment.locale("fr");
  const currentUser = useSelector((state) => state.auth.isAuthenticated);
  // const currentUser = true
  // console.log("hehe " + currentUser);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <Box
        sx={{
          display: "flex",
          overflow: "auto",
          height: "100vh",
          // bgcolor: "#daf0ff",
        }}
      >
        <LeftBar />
        <Box
          flex={6}
          flexGrow={1}
          sx={{
            // width: { xs: "calc(100vw - 3rem)" },
            overflow: "hidden",
            background: darkMode ? "#252931" : "#daf0ff",
            margin: "0.5rem 0.5rem 0.5rem 0",
            borderRadius: 6,
          }}
        >
          <NavBar />
          <Box
            sx={{
              width: "100%",
              height: "calc(100% - 8vh)",
              padding: { xs: "0.5rem", md: "1rem" },
            }}
          >
            <Outlet></Outlet>
          </Box>
        </Box>
      </Box>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profil/:id",
          element: <Profil />,
        },
        {
          path: "/actualites",
          element: <Actualites />,
        },
        {
          path: "/photos",
          element: <Photos />,
        },
        {
          path: "/messages",
          element: <Messages />,
          children: [
            {
              path: "/messages/:id",
              element: <MessageUser />,
            },
          ],
        },
        {
          path: "/passions",
          element: <Passions />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/friends/:id",
          element: <Friends />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/events/:id",
          element: <EventContent />,
        },
        {
          path: "/articles",
          element: <Articles />,
        },
        {
          path: "/games",
          element: <Games />,
        },
        // {
        //   path: "/articles/:id",
        //   element: <ListArticles />,
        // },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
