import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.scss';

const Register = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Verifica si ya existe un usuario con las mismas credenciales
      const existingUserResponse = await axios.get(`http://localhost:3000/users?user=${user}&password=${password}`);

      if (existingUserResponse.data.length > 0) {
        setRegistrationError('Ya existe un usuario con las mismas credenciales.');
      } else {
        await axios.post('http://localhost:3000/users', {
          name: name,
          user: user,
          password: password,
          username: username,
          profileImage: profileImage
        });

        alert('Nuevo usuario registrado exitosamente.');

        // Limpia los campos después de registrar el usuario
        setName('');
        setUser('');
        setPassword('');
        setUserName('');
        setProfileImage('');
        setRegistrationError('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-form">
      <h1>Registrar Nuevo Usuario</h1>
      {registrationError && <p className="error-message">{registrationError}</p>}
      <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="username">Nuevo Usuario:</label>
        <input
          type="text"
          id="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <label htmlFor="password">Nueva Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
          <label htmlFor="password">Nueva Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor="profileImage">Imagen de Perfil:</label>
        <input
          type="fite"
          id="profileImage"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
          required
        />
        <button type="submit">Registrar Usuario</button>
      </form>
      <p>¿Ya tienes una cuenta? Inicia sesión <Link to="/">aquí</Link>.</p>
    </div>
  );
};

export default Register;
