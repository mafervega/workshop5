import  { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './style.scss'

const Login = () => {
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/users?user=${user}&password=${password}`);

      if (response.data.length > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Verificación Exitosa',
          text: 'El usuario ha sido verificado correctamente.',
          showConfirmButton: false,
          timer: 2000
        });
        navigate('/Navbar');
          } else {
        Swal.fire({
          icon: 'error',
          title: 'Verificación Fallida',
          text: 'El usuario no pudo ser verificado.',
          showConfirmButton: false,
          timer: 2000
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-form">
      <h1>Verificación de Usuario</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={user}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Verificar Usuario</button>
      </form>
    <p>¿nuevo usuario?<Link to="/nuevo-usuario">aqui</Link></p>
    </div>
  );
};

export default Login;
