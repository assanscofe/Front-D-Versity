import React from 'react'
import './App.css'
import lightTheme from './theme/lightTheme'
import darkTheme from './theme/darkTheme'

import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
import { Provider } from 'react-redux';
import { store } from './redux/Store'
>>>>>>> 3f590f00c296cb386c0571fddfb73c244c34338a
import CssBaseline from '@mui/material/CssBaseline'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext';

import SignIn from './pages/signin'
import SignUp from './pages/signup'
import NavBar from './components/navbar/navBar';
import LeftBar from './components/navbar/leftBar'
import Home from './pages/home';
import Passions from './pages/passions'
import Profil from './pages/profil';
import Settings from './pages/settings';
import Friends from './pages/friends';
import Photos from './pages/photos';
import Messages from './pages/messages';
import Events from './pages/events';
import EventContent from './components/events/eventContent';
import Articles from './pages/articles';
import ListArticles from './components/articles/listArticles';
import Guides from './pages/guides';


function App() {

  const currentUser = useSelector((state) => state.auth.isAuthenticated);
  // const currentUser = true
  console.log('hehe ' + currentUser)

  const { darkMode } = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <Box sx={{
        display: 'flex',
        overflow: 'auto',
        height: '100vh',
      }}>
        <LeftBar />
        <Box flex={6} flexGrow={1} sx={{
          overflow: 'hidden',
          borderRadius: 6,
          background: darkMode ? '#252931' : '#daf0ff',
          margin: '0.5rem',
          padding: '1rem',
        }} >
          <NavBar />
          <Outlet></Outlet>
        </Box>
      </Box>
    )
  }


  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/signin' />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profil',
          element: <Profil />
        },
        {
          path: '/photos',
          element: <Photos />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/passions',
          element: <Passions />
        },
        {
          path: '/settings',
          element: <Settings />
        },
        {
          path: '/friends/:id',
          element: <Friends />
        },
        {
          path: '/events',
          element: <Events />
        },
        {
          path: '/events/:id',
          element: <EventContent />
        },
        {
          path: '/articles',
          element: <Articles />,
        },
        {
          path: '/articles/:id',
          element: <ListArticles />
        },
        {
          path: '/guides',
          element: <Guides />
        },
      ]
    },
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ])


  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
