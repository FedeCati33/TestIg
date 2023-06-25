import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Login from './components/Login';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [twitterPosts, setTwitterPosts] = useState([]);
  const [tiktokPosts, setTiktokPosts] = useState([]);
  const [error, setError] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('/login', { username, password });

      if (username === 'admin' && password === 'fede') {
        setIsLoggedIn(true);
        setUserRole('admin');
        setError('');
        toast.success('Inicio de sesión exitoso');
      } else {
        setError(response.data.message || 'Usuario o contraseña incorrectos');
      }
    } catch (error) {
      setError('Error al iniciar sesión');
    }
  };


  const handleCloseSnackbar = () => {
    setError('');
  };

  useEffect(() => {
    // Función para obtener las publicaciones guardadas de Instagram
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get('/instagram/saved');
        setInstagramPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Función para obtener las publicaciones con "me gusta" de Twitter
    const fetchTwitterPosts = async () => {
      try {
        const response = await axios.get('/twitter/liked');
        setTwitterPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Función para obtener las publicaciones guardadas de TikTok
    const fetchTiktokPosts = async () => {
      try {
        const response = await axios.get('/tiktok/saved');
        setTiktokPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstagramPosts();
    fetchTwitterPosts();
    fetchTiktokPosts();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/main" /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/main"
            element ={<Body userRole={userRole} instagramPosts={instagramPosts} twitterPosts={twitterPosts} tiktokPosts={tiktokPosts  } />}
          />
        </Routes>
        <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
          <Alert severity="error">{error}</Alert>
        </Snackbar>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
