import './App.css'
import lightTheme from './theme/lightTheme'
import darkTheme from './theme/darkTheme'

import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import CssBaseline from '@mui/material/CssBaseline'
import { useContext } from 'react'

import SignIn from './pages/signin'
import SignUp from './pages/signup'
import NavBar from './components/navbar/navBar';
import LeftBar from './components/navbar/leftBar'
import RightBar from './components/navbar/rightBar'
import Home from './pages/home';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Friends from './pages/friends';
import Photos from './pages/photos';
import ContentHome from './pages/contentHome';
import { DarkModeContext } from './context/darkModeContext';


function App() {

  const currentUser = true;

  const { darkMode } = useContext(DarkModeContext)

  console.log(darkMode)

  const Layout = () => {
    return (
      <Box flexDirection={'row'} sx={{
        overflow: 'auto',
        height: '100vh'
      }}>
        <NavBar />
        <Box display={'flex'} >
          <LeftBar />
          <Box flex={6} flexGrow={1} sx={{ overflow: 'hidden' }}>
            <Outlet></Outlet>
          </Box>
          <RightBar />
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
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/photos/:id',
          element: <Profile />
        },
        {
          path: '/passions/:id',
          element: <Profile />
        },
        {
          path: '/settings/',
          element: <Profile />
        },
        {
          path: '/friends/:id',
          element: <Profile />
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
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* <BrowserRouter>
          <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<NavHome />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/home' element={<Home />} >
                <Route index element={<ContentHome />} />
                <Route path='settings' element={<Settings />} />
                <Route path='friends' element={<Friends />} />
                <Route path='photos' element={<Photos />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter> */}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
