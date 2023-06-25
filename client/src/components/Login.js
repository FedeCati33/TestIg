import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/login', { username, password});

      console.log('respuestaaaaaaaaa',response)
      if (response.data && response.data.success) {
        onLogin(username, password);
        navigate('/main');
      } else {
        setError(response.data.message || 'Usuario o contraseña incorrectos');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      setError('Error al iniciar sesión');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de usuario:
          </label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          <br />
          <label>
            Contraseña:
          </label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Login;
