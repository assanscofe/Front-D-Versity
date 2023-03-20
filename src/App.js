import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import './App.css'
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme'
import NavHome from './pages/navHome';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Profile from './pages/profile';
import Settings from './pages/settings';
import Friends from './pages/friends';
import Photos from './pages/photos';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/navHome' element={<NavHome />} >
              <Route index element={<Home />} />
              <Route path='settings' element={<Settings />} />
              <Route path='friends' element={<Friends />} />
              <Route path='photos' element={<Photos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
