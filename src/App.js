import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Page from './pages/page'
import './App.css'
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
