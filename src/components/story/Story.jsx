import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import './style.scss'

const Story = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(5);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleUsers(5);
      } else {
        setVisibleUsers(users.length);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [users.length]);

  const story = (username) => {
    Swal.fire({
      title: "Haz clic en un icono",
      text: `Has hecho clic en los estados de ${username}`,
      icon: "info",
    });
  };

  return (
    <div className='story'>
      <div className='img'>
        {users.slice(0, visibleUsers).map(user => ( 
          <div className='mafer' key={user.id} onClick={() => story(user.username)}>
            <img src={user.profileImage} alt="" />
            <span>{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
